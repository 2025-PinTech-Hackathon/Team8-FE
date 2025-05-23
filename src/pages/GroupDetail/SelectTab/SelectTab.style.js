import styled from "styled-components";

export const HeaderContainer = styled.div`
  margin-top: 10px;
  width: 80%;
  margin: 0 auto;
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
  left: ${({ activeIndex }) => (activeIndex === 0 ? "27%" : "73%")};
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
  font-weight: 600;
  color: ${({ active }) => (active ? "#A2845E" : "#000")};
  cursor: pointer;
`;
