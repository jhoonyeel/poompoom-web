import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from '../../../apis/axios';
import ProfileUI from './Profile.presenter';

export default function Profile() {
  const initialButtons = [
    { id: 1, value: '' },
    { id: 2, value: '' },
    { id: 3, value: '' },
    { id: 4, value: '' },
  ];

  const [buttons, setButtons] = useState(initialButtons);
  const [selectedAgeLabel, setSelectedAgeLabel] = useState('10대 후반');

  const setSelectedButton = (id, value) => {
    setButtons(buttons.map((button) => (button.id === id ? { ...button, value } : button)));
  };

  const navigate = useNavigate();

  const onClickSubmit = async () => {
    const hashtagList = buttons.map((button) => button.value).filter((value) => value); // 빈 값 제외

    console.log(hashtagList);
    try {
      const result = await axios.post('profile/createVirtual', { hashtagList });
      console.log('Response:', result.data);
      navigate('/lovers-profile-set');
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <ProfileUI
      selectedAgeLabel={selectedAgeLabel}
      setSelectedAgeLabel={setSelectedAgeLabel}
      setSelectedButton={setSelectedButton}
      onClickSubmit={onClickSubmit}
      buttons={buttons}
    />
  );
}
