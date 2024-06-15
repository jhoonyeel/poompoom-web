import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function SetQuickGift() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(null);
  const AccessToken = localStorage.getItem('accessToken');

  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/hashtag/virtual', {
          headers: {
            access: `${AccessToken}`,
            'Content-Type': 'application/json',
          },
        });
        setData(response.data);
      } catch (error) {
        setErrors(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [AccessToken]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (errors) {
    return <div>Error: {errors.message}</div>;
  }
  const uniqueData = data.filter((item, index, self) => index === self.findIndex((t) => t.name === item.name));
  return (
    <Container>
      <Title>연인 프로필</Title>
      <DataContainer>
        {uniqueData &&
          uniqueData.map((item) => (
            <DataItem key={item.id}>
              <DataNum>{item.id}</DataNum>
              <DataValue>{item.name}</DataValue>
            </DataItem>
          ))}
      </DataContainer>
      <Button
        onClick={() => {
          navigate('/lovers-profile');
        }}
      >
        {' '}
        수정하기
      </Button>
    </Container>
  );
}

const Container = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
  border: 1px solid green;
  width: fit-content;
  height: fit-content;
  margin: auto;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #333;
`;

const DataContainer = styled.div`
  margin: 20px 0;
`;

const DataItem = styled.div`
  margin: 10px 0;
  font-size: 18px;
`;

const DataNum = styled.div`
  color: #323232;
  transform: translateX(-22px);
  margin-bottom: 10px;
`;

const DataValue = styled.button`
  border: none;
  font-weight: bold;
  padding: 10px;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #b2b2b2;
    border-radius: 80%;
    transform: scale(120%);
  }
`;

const Button = styled.button`
  padding: 10px 20px;
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
