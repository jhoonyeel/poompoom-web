import { useEffect, useState } from 'react';
import { getSuccess } from '../../../../apis/Success';

export default function LoginSuccess() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSuccess().then((result) => {
      setData(result);
      setLoading(false);
    });
  }, []);

  if (loading) return <div>Loading...</div>;
  return (
    <div>
      <div>로그인 성공</div>
      <div>{data}</div>
    </div>
  );
}
