import { BookText, Trophy, User } from "lucide-react";
import { useLocation } from "react-router-dom";
import { NavbarContainer, NavbarItem } from "./Navbar.style";

const Navbar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const allowedPaths = ["/home", "/challenge", "/profile"];
  if (!allowedPaths.includes(pathname)) {
    return null;
  }

  const navItems = [
    {
      name: "feed",
      icon: <BookText />,
      path: "/home",
      text: "피드",
    },
    {
      name: "challenge",
      icon: <Trophy />,
      path: "/challenge",
      text: "내 챌린지",
    },
    {
      name: "profile",
      icon: <User />,
      path: "/profile",
      text: "내 프로필",
    },
  ];

  return (
    <NavbarContainer>
      {navItems.map((item) => {
        const isActive = pathname === item.path;
        return (
          <NavbarItem key={item.name} $isActive={isActive}>
            <a className={isActive ? "active" : ""} href={item.path}>
              {item.icon}
              {item.text}
            </a>
          </NavbarItem>
        );
      })}
    </NavbarContainer>
  );
};

export default Navbar;
