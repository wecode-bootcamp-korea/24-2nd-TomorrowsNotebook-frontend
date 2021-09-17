import React from 'react';
import styled from 'styled-components';
import { ListUl } from '@styled-icons/boxicons-regular/ListUl';

export const ResultView = ({ filterResult, totalCount }) => {
  return (
    <Result>
      <Container>
        <FilterBar>
          <div>
            총 <BookCount>{totalCount}</BookCount>건의 검색결과
          </div>
          <ListIcon />
        </FilterBar>
        <FilterWrapper>
          <FilterTitle>서비스 도서 {totalCount}</FilterTitle>
          <FilterContainer>
            {filterResult.map(book => {
              return (
                <BookWrapper>
                  <Img alt={book.title} src={book.image} />
                  <BookInfo>
                    <BookTitle>{book.title}</BookTitle>
                    <Author>{book.author}</Author>
                  </BookInfo>
                </BookWrapper>
              );
            })}
          </FilterContainer>
        </FilterWrapper>
      </Container>
    </Result>
  );
};

const Result = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 10px;
  padding: 10px;
`;

const Container = styled.div`
  max-width: 70rem;
`;

const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;

const FilterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(auto, 20%));
  justify-items: center;
  gap: 6rem 1rem;
`;

const FilterBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 10px 0;
  padding: 15px 15px;
  border: 1px solid ${({ theme }) => theme.lightGrey};
  border-radius: 10px;
  box-shadow: 2px 2px 4px ${({ theme }) => theme.middleGrey};
  color: ${({ theme }) => theme.middleGrey};
  font-size: 0.9rem;
  font-weight: 400;
`;

const FilterTitle = styled.div`
  margin: 20px 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.black};
`;

const BookWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 15rem;
`;

const BookCount = styled.span`
  color: ${({ theme }) => theme.black};
  font-size: 0.9rem;
  font-weight: 400;
`;

const Img = styled.img`
  height: 100%;
  margin: 10px;
  box-shadow: 2px 2px 14px ${({ theme }) => theme.lightGrey};
  cursor: pointer;
`;

const ListIcon = styled(ListUl)`
  color: ${({ theme }) => theme.middleGrey};
  width: 1.4rem;
`;

const BookInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 10px;
  margin-bottom: 20px;
  cursor: pointer;
`;

const BookTitle = styled.div`
  margin-top: 10px;
  font-size: 1rem;
  font-weight: 600;
`;

const Author = styled.div`
  margin: 5px 0;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.middleGrey};
`;
