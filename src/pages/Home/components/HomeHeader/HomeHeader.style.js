import styled from 'styled-components';

export const HeaderContainer = styled.div`
  margin-top: 10px;
`;

export const WelcomeText = styled.div`
  strong {
    font-weight: bold;
  }
  font-size: 1.5rem;
  color: #000;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 300;
  line-height: 30px;
  letter-spacing: -0.23px;
`;

export const TabWrapper = styled.div`
  position: relative;
  display: flex;
  background-color: #eae3da;
  border-radius: 2rem;
  padding: 0.25rem;
  margin-top: 10px;
  overflow: hidden;
`;

export const TabBackground = styled.div`
  position: absolute;
  top: 50%;
  left: ${({ activeIndex }) => (activeIndex === 0 ? '27%' : '73%')};
  transform: translate(-50%, -50%);
  width: 50%;
  height: 80%;
  background-color: #fafafa;
  border-radius: 2rem;
  transition: left 0.3s ease;
  z-index: 0;
`;

export const TabButton = styled.button`
  flex: 1;
  padding: 0.5rem 0;
  border: none;
  background: none;
  z-index: 1;
  font-size: 0.875rem;
  font-weight: bold;
  color: ${({ active }) => (active ? '#A2845E' : '#000')};
  cursor: pointer;
`;

export const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InviteButton = styled.button`
  background-color: #8b6243;
  color: white;
  padding: 0.4rem 0.8rem;
  border: none;
  font-weight: bold;
  border-radius: 20px;
  font-size: 0.67rem;
  cursor: pointer;
  margin-top: 1.8rem;
`;
