// LayoutWrapper.tsx
import styled from "styled-components";

export const LayoutWrapper = styled.div`
  width: 100%;
  max-width: 480px;
  min-height: 100vh; /* 화면 높이만큼 배경 유지 */
  position: relative; /* navbar와 겹침 방지 위해 */
  padding-bottom: 3.5rem; /* navbar 높이만큼 바텀 패딩 */
  background-color: #fbf3e7;
`;
