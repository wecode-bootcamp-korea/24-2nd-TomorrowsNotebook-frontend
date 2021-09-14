import React from 'react';
import '../../styles/theme';
import styled from 'styled-components';
import SearchBooks from './SearchBooks';
import Categories from './Categories';
import Suggestions from './Suggestions';

const Search = () => {
  return (
    <MaxWidth>
      <SearchBooks />
      <div>
        <Suggestions />
        <Categories />
      </div>
    </MaxWidth>
  );
};

export default Search;

const MaxWidth = styled.div`
  max-width: 70rem;
  min-width: 40rem;
  margin: 10px auto;
  padding: 15px 10px;
`;
