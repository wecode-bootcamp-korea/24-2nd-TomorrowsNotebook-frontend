import React from 'react';
import styled from 'styled-components';

const Footer = () => (
  <OuterContainer>
    <Container>
      <Head>내일 채움 공책</Head>
      <MenuList>
        {MENU.map((menu, idx) => (
          <MenuItem key={idx}>{menu}</MenuItem>
        ))}
      </MenuList>
      <CopyRight>Copyright ⓒ 2021 내일배움공책 All Rights Reserved</CopyRight>
    </Container>
  </OuterContainer>
);

const OuterContainer = styled.div`
  width: 100%;
  margin-left: 60px;
  padding-top: 2rem;
  border-top: 1px solid ${({ theme }) => theme.lightGrey};
`;

const Container = styled.div`
  max-width: 70rem;
  min-width: 40rem;
  margin: 0 auto;
`;

const Head = styled.h2`
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
  font-weight: bold;
`;

const MenuList = styled.ul`
  display: flex;
  margin-bottom: 1.5rem;
`;

const MenuItem = styled.li`
  margin-right: 1rem;
  color: ${({ theme }) => theme.middleGrey};
  font-size: 0.8rem;

  &::after {
    content: ' >';
  }
`;

const CopyRight = styled.p`
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.middleGrey};
  font-size: 0.7rem;
`;

export default Footer;

const MENU = [
  '고객센터',
  '환불신청',
  '이용약관',
  '개인정보처리방침',
  '뷰어다운로드',
  '종료 예정 도서',
  '콘텐츠 제휴문의',
];
