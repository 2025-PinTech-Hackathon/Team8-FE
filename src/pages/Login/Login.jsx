import * as S from "../Login/Login.style";
import Logo from "../../assets/Images/FinTori.svg";
import { useAuth } from "react-oidc-context";
import Loading from "../../assets/CommonComponents/Loading/Loading";

const Login = () => {
  const auth = useAuth();

  if (auth.isLoading) {
    return <Loading />;
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
