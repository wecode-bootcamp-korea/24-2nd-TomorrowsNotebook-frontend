import React from 'react';
import styled from 'styled-components';
import SubHeader from '../SubHeader/SubHeader';

const TodaysSentence = props => (
  <Container>
    <SubHeader title={'오늘의 첫 문장'} />
    <Background />
    <Wrapper>
      <Content>
        <Title>가슴 뛰는 일.</Title>
        <Card>
          <Text>
            같은 공간 안에서
            <br /> 춤이 주는 에너지를
            <br /> 함께 누릴 때의 기쁨,
            <br /> 그것만으로도 충분하다.
          </Text>
        </Card>
        <Quotation>리아킴, &lt;나의 까만 단발머리&gt;</Quotation>
      </Content>
    </Wrapper>
  </Container>
);

const Container = styled.div`
  position: relative;
  width: 70rem;
  margin: 0 auto;
`;

const Background = styled.div`
  width: 100%;
  height: 400px;
  margin-bottom: 5rem;
  background-image: url('https://images.unsplash.com/photo-1593034509785-5b17ba49f683?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80');
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.7;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 40px;
  width: 100%;
  height: 400px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 15em;
  height: 15em;
  margin-bottom: 1rem;
  padding: 1.5em;
  background-color: #fff;
  border-radius: 16px;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const Text = styled.p`
  font-size: 1.3rem;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    content: '\f10d';
    color: #999;
    font-family: 'Font Awesome 5 Free';
    font-weight: 700;
    transform: translate(100%, 100%);
  }

  &::after {
    position: absolute;
    bottom: 0;
    right: 0;
    content: '\f10e';
    color: #999;
    font-family: 'Font Awesome 5 Free';
    font-weight: 700;
    transform: translate(-100%, -100%);
  }
`;

const Quotation = styled.p``;

export default TodaysSentence;
