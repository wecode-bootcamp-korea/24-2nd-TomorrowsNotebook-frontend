import React from 'react';
import styled from 'styled-components';
import { Search } from '@styled-icons/bootstrap/Search';

export const KeywordView = ({ filterResult }) => {
  return (
    <Container>
      {filterResult.map(book => {
        return (
          <Wrapper key={book.book_id}>
            <SearchIcon />
            <BookMatch>{book.title}</BookMatch>
          </Wrapper>
        );
      })}
    </Container>
  );
};

const SearchIcon = styled(Search)`
  width: 1rem;
  margin: 5px;
  color: ${({ theme }) => theme.middleGrey};
`;

const Container = styled.div`
  padding: 20px 30px;
`;

const Wrapper = styled.ul`
  display: flex;
  align-items: center;
  padding: 2px;
`;

const BookMatch = styled.li`
  margin-left: 10px;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.middleGrey};
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.pupple};
  }
`;
