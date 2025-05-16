import styled from 'styled-components';

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 2px;
  max-height: 35rem;
  overflow-y: auto;
`;

export const Card = styled.div`
  background-color: #fafafa;
  border-radius: 15px;
  padding: 1.25rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 15px;
  cursor: pointer;
`;

export const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: #333;
`;

export const Participant = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  img {
    width: 20px;
    height: 20px;
    border-radius: 9999px;
    border: 1px solid #fff;
    position: relative;
    margin-left: -8px;

    &:first-child {
      margin-left: 0;
    }
  }

  span {
    font-size: 0.8rem;
    color: #444;
    margin-left: 6px;
    font-weight: 500;
  }
`;

export const ProgressWrapper = styled.div`
  font-size: 0.85rem;
`;

export const ProgressBar = styled.div`
  margin-top: 0.3rem;
  background-color: #e0e0e0;
  border-radius: 10px;
  height: 10px;
  width: 100%;
  overflow: hidden;
`;

export const ProgressFill = styled.div`
  background-color: #8b6243;
  width: ${({ width }) => width};
  height: 100%;
  border-radius: 10px;
  transition: width 1s ease-in-out;
`;

export const DateText = styled.div`
  font-size: 0.85rem;
  color: #000;

  span {
    font-weight: 300;
  }
`;
