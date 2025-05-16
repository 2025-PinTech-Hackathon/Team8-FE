import styled from "styled-components";

export const NavbarContainer = styled.nav`
  position: fixed;
  bottom: 0;

  /* 래퍼 너비와 동일하게 */
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 480px;

  height: 3.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;

  background-color: #ffffff;
  opacity: 0.95;
  border-top: 1px solid #eaeaea;
  z-index: 100;
`;

export const NavbarItem = styled.div`
  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-size: 0.7rem;
    gap: 0.2rem;
    text-decoration: none;
    color: ${(props) => (props.$isActive ? "#8B6243" : "black")};
  }
`;
