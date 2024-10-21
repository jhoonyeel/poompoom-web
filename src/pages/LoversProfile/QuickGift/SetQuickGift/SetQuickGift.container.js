import React, { useEffect, useState } from 'react';
import axios from '../../../../apis/axios';
import SetQuickGiftUI from './setQuickGift.presenter';

export default function SetQuickGift() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(null);
  const AccessToken = localStorage.getItem('accessToken');

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

  return <SetQuickGiftUI uniqueData={uniqueData} />;
}
