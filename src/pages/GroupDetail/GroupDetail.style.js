import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  padding: 16px;
  width: 95%;
`;

export const HeaderContainer = styled.div`
  display: flex;
  gap: 1.2rem;
`;

export const Title = styled.p`
  margin: 16px 0 8px;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const StatusBadge = styled.span`
  background: #8b6243;
  display: inline-flex;
  color: white;
  border-radius: 999px;
  font-size: 0.75rem;
  height: 1.5rem;
  padding: 0.3rem 0.7rem;
  margin-top: 1.15rem;
`;

export const Content = styled.p`
  white-space: pre-wrap;
  color: #515151;
  margin: 1rem 0;
  line-height: 1.6;
  word-break: keep-all;
`;

export const Meta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  font-size: 0.8rem;
  margin-bottom: 1.5rem;
`;

export const GoalRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InviteButton = styled.button`
  border: none;
  color: white;
  background-color: #8b6243;
  border-radius: 999px;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
`;

// ✅ 삭제됨
// export const GoalAmount = styled.span` ... `

export const ProgressWrapper = styled.div`
  margin: 0.75rem 0;
`;

export const ProgressBar = styled.div`
  height: 1rem;
  background: #eee;
  border-radius: 999rem;
  overflow: hidden;
`;

export const ProgressFill =
  styled.div <
  { progress: number } >
  `
  height: 100%;
  width: ${({ progress }) => progress}%;
  background: #8b6243;
`;

export const ProgressText = styled.div`
  font-size: 0.75rem;
  margin-top: 0.5rem;
`;

export const FriendsSection = styled.div`
  margin-top: 3rem;
`;

export const FriendList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  gap: 1rem;
  flex-direction: column;
`;

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const FriendProgress = styled.div`
  flex: 1;
  margin: 0 0.5rem;
  height: 1rem;
  background: #eee;
  border-radius: 999px;
  overflow: hidden;
`;

export const FriendFill =
  styled.div <
  { progress: number } >
  `
  height: 100%;
  width: ${({ progress }) => progress}%;
  background: #8b6243;
`;
