import React, { useState, useEffect } from 'react';
import DefaultView from './DefaultView';
import { KeywordView } from './KeywordView';
import { ResultView } from './ResultView';

import styled from 'styled-components';
import { Close } from '@styled-icons/ionicons-solid/Close';
import { Search } from '@styled-icons/bootstrap/Search';

const API = 'http://54.180.126.99:8000';

const SearchMain = ({
  placeholder,
  searchTarget,
  isOnFocus,
  focusInputIn,
  searchValue,
  handleInputKeyword,
  clearSearchValue,
  isResultClicked,
  searchResultOn,
}) => {
  const [filterResult, setFilterResult] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    fetch(
      `${API}/books/search?Search_Target=${searchTarget}&target=${searchValue}`
    )
      .then(res => res.json())
      .then(res => {
        setFilterResult(res.RESULT);
        setTotalCount(res.books_count);
      });
  }, [searchValue]);

  const isDefaultView = !isOnFocus && searchValue.length === 0;
  const isKeywordView = isOnFocus && !isResultClicked && !!searchValue.length;
  const isResultView = isOnFocus && isResultClicked;

  return (
    <>
      <Wrapper>
        <Icon onClick={searchResultOn} />
        <Input
          placeholder={placeholder}
          onChange={handleInputKeyword}
          onFocus={focusInputIn}
          value={searchValue}
        />
        {!!searchValue.length && <CloseButton onClick={clearSearchValue} />}
      </Wrapper>
      {isDefaultView && <DefaultView />}
      {isKeywordView && <KeywordView filterResult={filterResult} />}
      {isResultView && (
        <ResultView filterResult={filterResult} totalCount={totalCount} />
      )}
    </>
  );
};

export default SearchMain;

const CloseButton = styled(Close)`
  position: absolute;
  right: 5px;
  margin: 5px;
  width: 1.2rem;
  cursor: pointer;
`;

const Icon = styled(Search)`
  width: 1.2rem;
  margin: 5px;
  cursor: pointer;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: 15px 10px;
  border-bottom: 2px solid ${({ theme }) => theme.black};
  color: ${({ theme }) => theme.deepGrey};
`;

const Input = styled.input`
  position: relative;
  width: 93%;
  margin-left: 10px;
  color: ${({ theme }) => theme.black};
  font-size: 1.3rem;

  &::placeholder {
    color: ${({ theme }) => theme.lightGrey};
    font-weight: 600;
  }
`;
