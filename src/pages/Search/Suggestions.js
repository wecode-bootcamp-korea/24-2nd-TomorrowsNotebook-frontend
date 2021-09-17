import React from 'react';
import styled from 'styled-components';
import { Icons, iconBoxDefault } from '../../components/FontAwesome';

const suggestion = [
  {
    keyword: '밀리와 영어공부, 지금 시작해요!',
  },
  { keyword: '가을 감성 듬뿍, 로맨스 베스트' },
];

const Suggestions = () => {
  return (
    <>
      {suggestion.map((keywords, idx) => (
        <KeywordSearch key={idx}>
          <SearchIcon />
          <span>{keywords.keyword}</span>
        </KeywordSearch>
      ))}
    </>
  );
};

export default Suggestions;

const KeywordSearch = styled.div`
  cursor: pointer;
  margin-left: 10px;
  color: ${({ theme }) => theme.middleGrey};
  font-family: 'Noto Sans KR', sans-serif;
`;

const SearchIcon = styled(Icons.Search)`
  ${iconBoxDefault}
  font-size: 1rem;
`;
