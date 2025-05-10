import { useState } from 'react';

export const useInputFocus = () => {
  const [isFocused, setIsFocused] = useState({
    id: false,
    nickname: false,

    email: false,
    loverEmail: false,
    verNum: false,

    pass: false,
    checkPass: false,

    username: false,
    password: false,
  });

  const handleFocus = (field) => {
    setIsFocused({ ...isFocused, [field]: true });
  };

  const handleBlur = (event, field) => {
    if (!event.target.value) {
      // or (!ref.current.value), Dom: 비권장
      setIsFocused({ ...isFocused, [field]: false });
    }
  };

  return { isFocused, handleFocus, handleBlur };
};
