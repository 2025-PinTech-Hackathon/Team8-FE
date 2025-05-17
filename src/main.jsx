import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "react-oidc-context";

const cognitoAuthConfig = {
  authority:
    "https://cognito-idp.ap-northeast-2.amazonaws.com/ap-northeast-2_vWzAH2NsJ",
  client_id: "3ftpu51hhh5s1lpf4bn24oqjhb",
  redirect_uri: "https://d2iyjdgwp264p6.cloudfront.net/register", // 로그인 후 돌아올 주소 (로컬/프로덕션 환경에 따라 다르게 설정 필요)
  response_type: "code",
  scope: "email openid phone",
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider {...cognitoAuthConfig}>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
