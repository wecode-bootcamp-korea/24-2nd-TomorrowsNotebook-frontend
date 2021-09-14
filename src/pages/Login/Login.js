import React from 'react';
import {
  BACKGROUND_IMAGE_URL,
  SOCIAL_LOGIN_KAKAO_IMAGE_URL,
  SOCIAL_LOGIN_NAVER_IMAGE_URL,
  SOCIAL_LOGIN_FACEBOOK_IMAGE_URL,
  SOCIAL_LOGIN_APPLE_IMAGE_URL,
} from './ImageUrlComponent/ImageUrlComponent';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Login = props => {
  //소셜 로그인 연결 시 필요
  const history = useHistory();
  const { Kakao } = window;
  console.log(process.env);
  const goToKakaoLogin = () => {
    Kakao.Auth.login({
      success: function (success) {
        fetch(
          `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env}&redirect_uri=http://localhost:3000/`,
          {
            method: 'POST',
            body: JSON.stringify({
              access_token: success.access_token,
            }),
          }
        )
          .then(res => res.json())
          .then(res => {
            localStorage.setItem('kakao-token', res.access_token);
            if (res.access_token) {
              alert('내일채움공책에 오신걸 환엽합니다!');
              history.push('/');
            }
          });
      },
    });
  };
  return (
    <LoginPage>
      <LogoBox>
        <Logo alt="logo" src="/images/logo.png" />
        <LogoText>notebooks</LogoText>
      </LogoBox>
      <LoginContentBox>
        <LoginInput placeholder={'휴대폰 번호'} type={'text'} />
        <LoginInput placeholder={'비밀번호'} type={'password'} />
        <LoginBtn>휴대폰 번호 로그인</LoginBtn>
        <LoginOr>또는</LoginOr>
        <SocialLoginBox>
          <SocialLoginBtn
            alt="cacaotalk-logo"
            src={SOCIAL_LOGIN_KAKAO_IMAGE_URL}
            //소셜 로그인 연결시 필요
            onClick={goToKakaoLogin}
          />
          <SocialLoginBtn alt="naver-logo" src={SOCIAL_LOGIN_NAVER_IMAGE_URL} />
          <SocialLoginBtn
            alt="facebook"
            src={SOCIAL_LOGIN_FACEBOOK_IMAGE_URL}
          />
          <SocialLoginBtn alt="apple-logo" src={SOCIAL_LOGIN_APPLE_IMAGE_URL} />
        </SocialLoginBox>
        <LoginLinkBox>
          <LoginLink>회원가입</LoginLink>
          <LoginLink>비밀번호 찾기</LoginLink>
          <LoginLink>기업회원 로그인</LoginLink>
        </LoginLinkBox>
      </LoginContentBox>
    </LoginPage>
  );
};

const LoginPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${BACKGROUND_IMAGE_URL});
`;

const LogoBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 150px;
`;

const Logo = styled.img`
  width: 30px;
  height: 30px;
`;

const LogoText = styled.span`
  color: ${props => props.theme.yellow};
  font-size: 30px;
`;

const LoginContentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 230px;
  margin-bottom: 150px;
`;

const LoginInput = styled.input`
  height: 40px;
  margin-top: 10px;
  padding-left: 10px;
  color: white;
  border-bottom: 1px solid gray;
`;

const LoginBtn = styled.button`
  height: 50px;
  margin-top: 30px;
  color: white;
  background: linear-gradient(to right, rgb(180, 130, 200), rgb(238, 212, 128));
  border-radius: 25px;
`;

const LoginOr = styled.div`
  margin-top: 20px;
  color: gray;
  font-size: 10px;
  text-align: center;
`;

const SocialLoginBox = styled.div`
  display: flex;
  justify-content: space-around;
  height: 40px;
  margin-top: 20px;
`;

const SocialLoginBtn = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;

const LoginLinkBox = styled.span`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const LoginLink = styled.a`
  color: white;
  font-size: 13px;
`;

export default Login;
