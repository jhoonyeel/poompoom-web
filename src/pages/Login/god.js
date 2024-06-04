import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
  overflow: auto; /* Enable scrolling */
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 70%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  margin-bottom: 15px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: vertical;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const TokenContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const TokenTitle = styled.h2`
  margin: 0 0 10px 0;
`;

const TokenValue = styled.p`
  word-break: break-all;
`;

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [access, setAccess] = useState('');
  const [cookies, setCookie] = useCookies(['refresh']);

  const [review, setReview] = useState({
    body: '',
    price: 0,
    whereBuy: '',
    starPoint: 0,
    category: '',
    reviewType: '',
  });
  const [photos, setPhotos] = useState([]);

  const [signup, setSignup] = useState({
    username: '',
    password: '',
    nickname: '',
    profileTagIds: [],
  });
  const [profileImage, setProfileImage] = useState(null);

  const handleLogin = async (url) => {
    const data = new URLSearchParams();
    data.append('username', username);
    data.append('password', password);

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: data.toString(),
      });

      if (response.ok) {
        const accessValue = response.headers.get('access');
        localStorage.setItem('accessTest', accessValue);
        setAccess(accessValue);

        const setCookieHeader = response.headers.get('Set-Cookie');
        if (setCookieHeader) {
          const refreshValue = setCookieHeader.match(/refresh=([^;]*)/)[1];
          setCookie('refresh', refreshValue, { path: '/' });
        }

        console.log('Access:', accessValue);
        console.log('Refresh:', cookies.refresh);
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    await handleLogin('/login');
  };

  const handleRefreshToken = async (e) => {
    e.preventDefault();
    await handleLogin('/reissue');
  };

  const handleSubmitReview = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    const bodyJson = JSON.stringify({
      body: review.body,
      price: review.price,
      whereBuy: review.whereBuy,
      starPoint: review.starPoint,
      category: review.category,
      reviewType: review.reviewType,
    });
    formData.append('body', new Blob([bodyJson], { type: 'application/json' }));
    photos.forEach((photo) => {
      formData.append('photos', photo);
    });
    const access1 = localStorage.getItem('accessTest');
    try {
      const response = await fetch('/review/create', {
        method: 'POST',
        headers: {
          access: `${access1}`,
        },
        body: formData,
      });

      if (response.ok) {
        console.log('Review created successfully');
      } else {
        console.error('Failed to create review');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSubmitSignup = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    const reqJson = JSON.stringify({
      username: signup.username,
      password: signup.password,
      nickname: signup.nickname,
      profileTagIds: signup.profileTagIds.map(Number), // Ensure profileTagIds are integers
    });
    formData.append('req', new Blob([reqJson], { type: 'application/json' }));
    if (profileImage) {
      formData.append('profileImage', profileImage);
    }

    try {
      const response = await fetch('/member/join', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Signup successful');
      } else {
        console.error('Signup failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleReviewChange = (e) => {
    const { name, value } = e.target;
    setReview({
      ...review,
      [name]: value,
    });
  };

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    if (name === 'profileTagIds') {
      setSignup({
        ...signup,
        [name]: value.split(',').map((id) => parseInt(id.trim(), 10)), // Convert comma-separated string to array of integers
      });
    } else {
      setSignup({
        ...signup,
        [name]: value,
      });
    }
  };

  const handlePhotoChange = (e) => {
    setPhotos([...e.target.files]);
  };

  const handleProfileImageChange = (e) => {
    setProfileImage(e.target.files[0]);
  };

  return (
    <Container>
      <FormContainer>
        <Form onSubmit={handleSubmitLogin}>
          <div>
            <Label>Username:</Label>
            <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div>
            <Label>Password:</Label>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <Button type="submit">Login</Button>
          <Button onClick={handleRefreshToken}>Refresh</Button>
        </Form>

        <Form onSubmit={handleSubmitSignup}>
          <div>
            <Label>Username:</Label>
            <Input type="text" name="username" value={signup.username} onChange={handleSignupChange} />
          </div>
          <div>
            <Label>Password:</Label>
            <Input type="password" name="password" value={signup.password} onChange={handleSignupChange} />
          </div>
          <div>
            <Label>Nickname:</Label>
            <Input type="text" name="nickname" value={signup.nickname} onChange={handleSignupChange} />
          </div>
          <div>
            <Label>Profile Tag IDs (comma separated):</Label>
            <Input
              type="text"
              name="profileTagIds"
              value={signup.profileTagIds.join(', ')}
              onChange={handleSignupChange}
            />
          </div>
          <div>
            <Label>Profile Image:</Label>
            <Input type="file" onChange={handleProfileImageChange} />
          </div>
          <Button type="submit">Sign Up</Button>
        </Form>
      </FormContainer>

      {access && (
        <Form onSubmit={handleSubmitReview}>
          <div>
            <Label>Review Body:</Label>
            <TextArea name="body" value={review.body} onChange={handleReviewChange} />
          </div>
          <div>
            <Label>Price:</Label>
            <Input type="number" name="price" value={review.price} onChange={handleReviewChange} />
          </div>
          <div>
            <Label>Where to Buy:</Label>
            <Input type="text" name="whereBuy" value={review.whereBuy} onChange={handleReviewChange} />
          </div>
          <div>
            <Label>Star Point:</Label>
            <Input type="number" name="starPoint" value={review.starPoint} onChange={handleReviewChange} />
          </div>

          <div>
            <Label>Review Type:</Label>
            <select name="reviewType" value={review.reviewType} onChange={handleReviewChange}>
              <option value="">Select Review Type</option>
              <option value="GIVEN">GIVEN</option>
              <option value="RECEIVED">RECEIVED</option>
            </select>
          </div>

          <div>
            <Label>Category:</Label>
            <select name="category" value={review.category} onChange={handleReviewChange}>
              <option value="">Select Category</option>
              <option value="100일">100일</option>
              <option value="생일">생일</option>
              <option value="사과의 선물">사과의 선물</option>
              <option value="크리스마스">크리스마스</option>
              <option value="가벼운 선물">가벼운 선물</option>
              <option value="n주년">n주년</option>
              <option value="OO데이">OO데이</option>
            </select>
          </div>

          <div>
            <Label>Photos:</Label>
            <Input type="file" multiple onChange={handlePhotoChange} />
          </div>
          <Button type="submit">Submit Review</Button>
        </Form>
      )}

      {access && (
        <TokenContainer>
          <TokenTitle>Access Token</TokenTitle>
          <TokenValue>{access}</TokenValue>
        </TokenContainer>
      )}
      {cookies.refresh && (
        <TokenContainer>
          <TokenTitle>Refresh Token</TokenTitle>
          <TokenValue>{cookies.refresh}</TokenValue>
        </TokenContainer>
      )}
    </Container>
  );
}

export default App;
