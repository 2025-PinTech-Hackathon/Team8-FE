import styled from 'styled-components';

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: 35rem;
  overflow-y: auto;
`;

export const Card = styled.div`
  background-color: #fafafa;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.05);
`;

export const Title = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: #000000;
  margin-bottom: 0.5rem;
`;

export const Description = styled.div`
  font-size: 0.875rem;
  margin-right: 1rem;
  color: #666;
  line-height: 1.4;
`;

export const ButtonWrapper = styled.div`
  text-align: right;
`;

export const DetailButton = styled.span`
  padding: 2px 12px;
  border-radius: 10px;
  border: none;
  font-size: 0.75rem;
  font-style: normal;
  background-color: #8b6243;
  color: #fff;
  font-weight: bold;
  transition: background-color 0.2s ease;
`;
