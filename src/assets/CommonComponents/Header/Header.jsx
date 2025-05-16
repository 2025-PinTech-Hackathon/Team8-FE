import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Logo from '../../Images/fintoriLogo.svg';
import Arrow from '../../Images/arrow.svg';
import * as S from '../Header/Header.style';

function Header({}) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  if (pathname === '/') return null;

  console.log('pathname:', pathname);
  const isDetailPage = pathname.startsWith('/home/') && pathname !== '/home';

  return (
    <S.HeaderContainer>
      <S.LogoArea>
        {isDetailPage ? (
          <S.Icon src={Arrow} alt="뒤로가기" onClick={() => navigate(-1)} />
        ) : (
          <S.LogoImage src={Logo} alt="로고" />
        )}
      </S.LogoArea>
    </S.HeaderContainer>
  );
}

export default Header;
