import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 24px;
`;
export const LogoImage = styled.img`
  width: 300px;
  height: auto;
  margin-bottom: 16px;
`;

export const LoginButton = styled.button`
  background-color: #8b6243;
  color: white;
  border: none;
  border-radius: 15px;
  padding: 0.8rem 3rem;
  font-weight: bold;
  font-size: 0.95rem;
  cursor: pointer;
`;
