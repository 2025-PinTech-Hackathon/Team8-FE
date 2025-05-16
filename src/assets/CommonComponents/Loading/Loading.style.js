import styled, { keyframes } from 'styled-components';

const shake = keyframes`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(30deg); }
  50% { transform: rotate(0deg); }
  75% { transform: rotate(-30deg); }
  100% { transform: rotate(0deg); }
`;

export const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const ShakingImage = styled.img`
  width: 80px;
  height: 80px;
  animation: ${shake} 1.2s infinite ease-in-out;
`;

export const LoadingText = styled.p`
  margin-top: 1rem;
  font-size: 1.2rem;
  color: #8b6243;
  font-weight: bold;
`;
