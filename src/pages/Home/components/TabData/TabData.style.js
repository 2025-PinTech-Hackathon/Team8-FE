import styled from 'styled-components';

export const TabWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 20px 0;
`;

export const TabButton = styled.button`
  padding: 2px 12px;
  border-radius: 10px;
  border: none;
  font-size: 0.8rem;
  font-style: normal;
  cursor: pointer;
  background-color: ${({ selected }) => (selected ? '#8B6243' : '#FaFaFa')};
  color: ${({ selected }) => (selected ? '#fff' : '#000')};
  font-weight: bold;
  transition: background-color 0.2s ease;
`;
