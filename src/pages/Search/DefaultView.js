import React from 'react';
import Categories from './Categories';
import Suggestions from './Suggestions';
import styled from 'styled-components';

const DefaultView = () => {
  return (
    <>
      <Title>밀리의 추천도서</Title>
      <Suggestions />
      <Categories />
    </>
  );
};

export default DefaultView;

const Title = styled.header`
  margin-top: 40px;
  margin-bottom: 10px;
  padding: 10px 0;
  font-weight: 500;
  font-size: 1.2rem;
  font-family: 'Noto Sans KR', sans-serif;
`;
