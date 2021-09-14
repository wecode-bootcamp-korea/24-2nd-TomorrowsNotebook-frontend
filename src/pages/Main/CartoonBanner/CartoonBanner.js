import React from 'react';
import styled from 'styled-components';

const CartoonBanner = props => (
  <Background>
    <Content>
      <Img src="/images/dog.png" alt="캐릭터 이미지" />
      <Title>열심히 하루를 보낸 당신</Title>
      <Text>
        오늘 하루는 어떠셨나요? <br /> 내일이 더 행복하기를 응원합니다.
      </Text>
    </Content>
    <Diagonal />
  </Background>
);

const Background = styled.div`
  position: relative;
  width: 70rem;
  height: 20rem;
  margin: 0 auto 5rem;
  overflow: hidden;
`;

const Diagonal = styled.div`
  position: absolute;
  bottom: 55px;
  left: -100px;
  width: 300%;
  height: 10rem;
  background-color: #f6f4ef;
  transform: rotate(178deg);
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

const Img = styled.img`
  width: 250px;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.black};
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 1.5em;
`;

const Text = styled.p`
  color: #999;
  line-height: 1.5em;
`;

export default CartoonBanner;
