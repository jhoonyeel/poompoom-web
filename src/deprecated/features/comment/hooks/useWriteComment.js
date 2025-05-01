import axios from 'axios';

export default function useWriteComment() {
  const submitComment = async (reviewId, body) => {
    const AccessToken = localStorage.getItem('accessToken');
    const response = await axios.post(
      `/review/${reviewId}/create`,
      { body },
      { headers: { access: `${AccessToken}` } },
    );
    return response.data;
  };

  return { submitComment };
}
