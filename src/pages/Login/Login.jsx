import * as S from '../Login/Login.style';
import Logo from '../../assets/Images/FinTori.svg';
import { useAuth } from 'react-oidc-context';

const Login = () => {
  const auth = useAuth();

  const signOutRedirect = () => {
    const clientId = '3ftpu51hhh5s1lpf4bn24oqjhb';
    const logoutUri = 'https://d2iyjdgwp264p6.cloudfront.net'; // 로그아웃 후 돌아올 주소 (로컬/프로덕션 환경에 따라 다르게 설정 필요)
    const cognitoDomain =
      'https://ap-northeast-2vwzah2nsj.auth.ap-northeast-2.amazoncognito.com';
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(
      logoutUri
    )}`;
  };

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Encountering error... {auth.error.message}</div>;
  }

  if (auth.isAuthenticated) {
    return (
      <div>
        <pre> Hello: {auth.user?.profile.email} </pre>
        <pre> ID Token: {auth.user?.id_token} </pre>
        <pre> Access Token: {auth.user?.access_token} </pre>
        <pre> Refresh Token: {auth.user?.refresh_token} </pre>

        <button onClick={() => auth.removeUser()}>Sign out</button>
      </div>
    );
  }

  return (
    <S.Container>
      <S.LogoImage src={Logo} alt="logo" />
      <S.LoginButton onClick={() => auth.signinRedirect()}>
        회원가입
      </S.LoginButton>
    </S.Container>
  );
};

export default Login;
