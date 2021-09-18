import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';

export default function Suggestions() {
  return (
    <>
      <Title>밀리 추천 검색어</Title>
      <KeywordSearch>
        <IconBox iconSize="1rem">
          <i className="fas fa-search" />
        </IconBox>
        <span>밀리와 영어공부, 지금 시작해요!</span>
      </KeywordSearch>
      <KeywordSearch>
        <IconBox iconSize="1rem">
          <i className="fas fa-search" />
        </IconBox>
        <span>가을 감성 듬뿍, 로맨스 베스트</span>
      </KeywordSearch>
    </>
  );
}

const KeywordSearch = styled.div`
  margin-left: 10px;
  color: ${theme.middleGrey};
  font-family: 'Noto Sans KR', sans-serif;
`;

const IconBox = styled.span`
  cursor: pointer;
  margin: 5px;
  font-size: ${props => props.iconSize};
`;

const Title = styled.header`
  margin-top: 40px;
  margin-bottom: 10px;
  padding: 10px 0;
  font-weight: 500;
  font-size: 1.2rem;
  font-family: 'Noto Sans KR', sans-serif;
`;
