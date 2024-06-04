// import { useEffect, useState } from 'react';
// import { getSuccess } from '../../../../apis/Success';

export default function LoginSuccess() {
  // const [data, setData] = useState();
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   getSuccess().then((result) => {
  //     setData(result);
  //     setLoading(false);
  //   });
  // }, []);

  // if (loading) return <div>Loading...</div>;

  const access = localStorage.getItem('AccessToken');
  return (
    <div>
      <div> 로그인에 성공하였습니다. </div>
      <div>현재 로그인 사용자의 accessToken: {access}</div>
    </div>
  );
}
