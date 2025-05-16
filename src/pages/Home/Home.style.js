import styled from 'styled-components';
export const Container = styled.div`
  margin: 1.625rem; /* 26px */
  margin-top: 0;
`;

export const ContentsArea = styled.div``;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 1.5rem;
`;

export const Greeting = styled.div`
  font-size: 1rem;
  color: #333;

  strong {
    font-weight: bold;
  }
`;

export const InviteButton = styled.button`
  background-color: #7b5e46;
  color: #fff;
  padding: 0.4rem 0.8rem;
  border-radius: 9999px;
  border: none;
  font-size: 0.9rem;
  cursor: pointer;
`;
