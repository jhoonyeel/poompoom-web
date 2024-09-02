import { useState } from 'react';
import SignUpUI from './SignUpTag.presenter';

export default function SignupPage() {
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

  return (
    <SignUpUI
      buttons={buttons}
      selectedAgeLabel={selectedAgeLabel}
      setSelectedAgeLabel={setSelectedAgeLabel}
      setSelectedButton={setSelectedButton}
    />
  );
}
