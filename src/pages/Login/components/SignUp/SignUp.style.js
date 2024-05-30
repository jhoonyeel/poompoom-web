import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const InputWrapper = styled.div`
  margin-bottom: 15px;
`;

export const InputLabel = styled.label`
  margin-bottom: 5px;
`;

export const InputField = styled.input`
  width: 300px;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;

  &:hover {
  }
`;
