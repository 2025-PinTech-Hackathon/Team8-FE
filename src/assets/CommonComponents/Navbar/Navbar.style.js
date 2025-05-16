import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 100%;
  max-width: 393px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #ffffff;
  opacity: 0.95;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 3.5rem;
  border-top: 1px solid #eaeaea;
`;

export const NavbarItem = styled.div`
  a {
    display: flex;
    color: ${(props) => (props.$isActive ? "#8B6243" : "black")};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 0.7rem;
    gap: 0.2rem;
    text-decoration: none;
  }
`;
