import React, { useState } from 'react';
import styled from 'styled-components';
import { AngleDown } from '@styled-icons/fa-solid/AngleDown';

const filters = [
  { type: '전체', placeholder: '검색어를 입력하세요', api: 'all' },
  { type: '저자', placeholder: '저자를 입력하세요', api: 'author' },
  { type: '제목', placeholder: '제목을 입력하세요', api: 'title' },
  { type: '카테고리', placeholder: '카테고리를 입력하세요', api: 'category' },
];

const SearchFilter = ({ type, setFilter, isOnFocus, clearSearchMain }) => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  return (
    <Container>
      <FilterBtn onClick={() => setIsFilterVisible(!isFilterVisible)}>
        {type}
        <DownArrow />
        {isFilterVisible && (
          <FilterWrapper>
            {filters.map(items => (
              <Filter key={items.type} onClick={() => setFilter(items)}>
                {items.type}
              </Filter>
            ))}
          </FilterWrapper>
        )}
      </FilterBtn>
      {isOnFocus && (
        <InputCloseBtn onClick={clearSearchMain}>닫기</InputCloseBtn>
      )}
    </Container>
  );
};

export default SearchFilter;

const DownArrow = styled(AngleDown)`
  margin: 5px;
  width: 0.6rem;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin: 15px 0;
`;

const FilterBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 5.4rem;
  height: 2rem;
  border: 2px solid ${({ theme }) => theme.grey};
  border-radius: 10px;
  color: ${({ theme }) => theme.deepGrey};
  font-weight: 600;
  cursor: pointer;
`;

const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  z-index: 999;
  width: 5rem;
  padding: 5px;
  border: 1px solid ${({ theme }) => theme.grey};
  box-shadow: 1px -1px 10px ${({ theme }) => theme.grey};
  border-radius: 10px;
  background-color: white;
`;

const Filter = styled.li`
  cursor: pointer;
  font-size: 0.8rem;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
  color: ${({ theme }) => theme.deepGrey};
`;

const InputCloseBtn = styled.button`
  color: ${({ theme }) => theme.pupple};
  font-weight: 600;
  cursor: pointer;
`;
