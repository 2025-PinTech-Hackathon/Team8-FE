import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  background-color: #fef3e6;
  height: 100vh;
`;

export const Logo = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: #8b6243;
  margin-bottom: 2rem;
`;

export const AvatarWrapper = styled.div`
  background-color: #fff;
  border-radius: 50%;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const AvatarIcon = styled.div`
  font-size: 2rem;
`;

export const Card = styled.div`
  background-color: white;
  border-radius: 16px;
  padding: 1.5rem;
  width: 100%;
  max-width: 300px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
`;

export const UserName = styled.div`
  font-size: 1rem;
  font-weight: 700;
  color: #222;
`;

export const Divider = styled.hr`
  margin: 0.5rem 0 1rem;
  border: none;
  border-top: 1px solid #ccc;
`;

export const Detail = styled.div`
  font-size: 0.875rem;
  color: #666;
  margin-bottom: 1rem;
`;

export const TagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const Tag = styled.div`
  background-color: #8b6243;
  color: white;
  font-size: 0.75rem;
  padding: 4px 10px;
  border-radius: 10px;
`;

export const LogoutButton = styled.button`
  background-color: #8b6243;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 10px 40px;
  font-size: 0.875rem;
  cursor: pointer;
`;
