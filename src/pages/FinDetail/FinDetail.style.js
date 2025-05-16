import styled from "styled-components";

export const Container = styled.div`
  max-width: 30rem;
  margin: 0 auto;
  padding: 1rem; /* 16px */
  color: black;
  height: 100vh;
`;

export const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: 700;
  flex: 1;
  margin-top: -2rem;
  text-align: center;
`;

export const PublisherRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
`;

export const PublisherName = styled.span`
  font-size: 0.875rem; /* 14px */
`;

export const Meta = styled.div`
  font-size: 0.75rem; /* 12px */
  color: #b2b2b2;
  margin-bottom: 1rem; /* 16px */
`;

export const Content = styled.div`
  white-space: pre-wrap;
  background-color: #ffffff;
  border-radius: 15px;
  padding: 0 1rem;
  font-size: 0.875rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  max-height: calc(100vh - 18rem); /* 제목/메타/버튼 영역 높이를 뺀 값 */
  overflow-y: auto;
`;

export const FooterButton = styled.a`
  display: block;
  text-align: center;
  width: 80%;
  padding: 0.875rem 0;
  background-color: #8b6243;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 999px;
  text-decoration: none;
  margin: 0 auto;
  cursor: pointer;
`;
