import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import JoinTagUI from './JoinTag.presenter';

export default function JoinTag() {
  const initialButtons = [
    { id: 1, value: '' },
    { id: 2, value: '' },
    { id: 3, value: '' },
    { id: 4, value: '' },
  ];

  const [buttons, setButtons] = useState(initialButtons);
  const [selectedAgeLabel, setSelectedAgeLabel] = useState('10대 후반');

  const navigate = useNavigate();

  const setSelectedButton = (id, value) => {
    setButtons(buttons.map((button) => (button.id === id ? { ...button, value } : button)));
  };

  const onClickToBack = () => {
    const valuesArray = buttons.map((button) => button.value);
    console.log(valuesArray);

    localStorage.setItem('signUpTag', valuesArray);
    console.log('선택사항:', valuesArray);
    console.log(localStorage.getItem('signUpTag'));
    navigate(-1);
  };

  return (
    <JoinTagUI
      buttons={buttons}
      selectedAgeLabel={selectedAgeLabel}
      setSelectedAgeLabel={setSelectedAgeLabel}
      setSelectedButton={setSelectedButton}
      onClickToBack={onClickToBack}
    />
  );
}
