import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  background: white;
  border-radius: 1.5rem;
  padding: 4rem 2rem;

  width: 90%;
  max-width: 360px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column; /* 수직 정렬 */
`;

export const Title = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const Description = styled.div`
  font-size: 0.95rem;
  color: #555;
  margin-bottom: 1.5rem;
  line-height: 1.4;
`;

export const SubmitButton = styled.button`
  background-color: #8b6243;
  color: white;
  border: none;
  padding: 0.7rem 2rem;
  font-size: 1.2rem;
  border-radius: 1rem;
  cursor: pointer;
  margin-top: 2rem;
  width: 100%;
`;

export const CodeInputContainer = styled.div`
  width: 100%;
  background-color: #fbf3e7;
  border-radius: 1rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputLabel = styled.div`
  font-size: 0.85rem;
  color: #555;
  align-self: center;
`;

export const CodeInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  border: none;
  outline: none;
  border-radius: 0.7rem;
  text-align: center;
  background-color: #fbf3e7;
`;

export const SkipText = styled.span`
  font-size: 0.95rem;
  color: #555;
  margin-top: 1rem;
  cursor: pointer;

  border-bottom: 1px solid transparent;
  display: inline-block;

  &:hover {
    border-bottom: 1px solid #555;
  }
`;
