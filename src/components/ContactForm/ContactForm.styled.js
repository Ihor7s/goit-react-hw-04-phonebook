import styled from '@emotion/styled';

export const Form = styled.form`
  width: 300px;
  margin: 0 auto;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  border-radius: 10px;
  border: 3px solid #828c85;
  background-color: #ffffff;
`;

export const Input = styled.input`
  margin: 0 auto;
  border-radius: 10px;
  padding: 8px 18px;
  border: 2px solid #828c85;
  background-color: #ffffff;
  outline: transparent;
`;


export const Button = styled.button`
  position: relative;
  border-radius: 10px;
  padding: 10px 15px;
  border: 1px solid #828c85;
  background-color: #fffffff;
  font-size: 16px;
  font-weight: lighter;
  overflow: hidden;
  color: #1e1f1c;

  &:hover {
    background-color: #9ca336;
  }
`;
