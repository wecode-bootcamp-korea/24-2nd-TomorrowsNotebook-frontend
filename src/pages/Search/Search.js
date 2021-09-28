import React, { useState } from 'react';
import styled from 'styled-components';
import SearchMain from './SearchMain';
import SearchFilter from './SearchFilter';
import Nav from '../../components/Nav/Nav';

const Search = () => {
  const [isOnFocus, setIsOnFocus] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [isResultClicked, setIsResultClicked] = useState(false);

  const [{ type, placeholder, api }, setFilter] = useState({
    type: '전체',
    placeholder: '검색어를 입력하세요',
    api: 'all',
  });

  const focusInputIn = () => {
    setIsOnFocus(true);
  };

  const handleInputKeyword = e => {
    setSearchValue(e.target.value);
  };

  const clearSearchValue = () => {
    setSearchValue('');
  };

  const searchResultOn = () => {
    setIsResultClicked(true);
  };

  const clearSearchMain = () => {
    setIsOnFocus(false);
    setIsResultClicked(false);
    clearSearchValue();
  };

  return (
    <>
      <Nav />
      <Container>
        <MaxWidth>
          <SearchFilter
            type={type}
            setFilter={setFilter}
            isOnFocus={isOnFocus}
            clearSearchMain={clearSearchMain}
          />
          <SearchMain
            placeholder={placeholder}
            searchTarget={api}
            isOnFocus={isOnFocus}
            focusInputIn={focusInputIn}
            handleInputKeyword={handleInputKeyword}
            clearSearchValue={clearSearchValue}
            searchValue={searchValue}
            isResultClicked={isResultClicked}
            searchResultOn={searchResultOn}
          />
        </MaxWidth>
      </Container>
    </>
  );
};

export default Search;

const Container = styled.div`
  width: 100%;
  margin-left: 60px;
`;

const MaxWidth = styled.div`
  max-width: 70rem;
  min-width: 40rem;
  margin: 10px auto;
  padding: 15px 10px;
`;
