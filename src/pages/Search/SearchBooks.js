import React, { useState } from 'react';
import styled from 'styled-components';
import { Icons, iconBoxDefault } from './FontAwesome';
import '../../styles/theme';

const filters = [
  { type: '전체', placeholder: '검색어를 입력하세요' },
  { type: '저자', placeholder: '저자를 입력하세요' },
  { type: '제목', placeholder: '제목을 입력하세요' },
  { type: '출판사', placeholder: '출판사를 입력하세요' },
];

export default function SearchBooks() {
  const [{ type, placeholder }, setFilter] = useState({
    type: '전체',
    placeholder: '검색어를 입력하세요',
  });

  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleSearchValue = e => {
    setSearchValue(e.target.value);
  };

  const clearSearchValue = () => {
    setSearchValue('');
  };

  return (
    <>
      <FilterContainer>
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
      </FilterContainer>
      <SearchBar>
        <SearchIcon />
        <SearchInput
          placeholder={placeholder}
          onChange={handleSearchValue}
          value={searchValue}
        />
        <CloseButton onClick={clearSearchValue} />
      </SearchBar>
    </>
  );
}

const DownArrow = styled(Icons.AngleDown)`
  ${iconBoxDefault}
`;

const CloseButton = styled(Icons.TimesCircle)`
  ${iconBoxDefault}
  font-size: 0.8rem;
`;

const SearchIcon = styled(Icons.Search)`
  ${iconBoxDefault}
  font-size: 1.2rem;
`;

const FilterContainer = styled.div`
  position: relative;
`;

const FilterBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 5rem;
  height: 2rem;
  margin: 15px 0px;
  cursor: pointer;
  border: 2px solid ${({ theme }) => theme.grey};
  border-radius: 10px;
  color: ${({ theme }) => theme.deepGrey};
  font-weight: 600;
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

const SearchBar = styled.div`
  position: relative;
  padding: 15px 10px;
  border-bottom: 2px solid ${({ theme }) => theme.black};
  color: ${({ theme }) => theme.deepGrey};
`;

const SearchInput = styled.input`
  width: 93%;
  margin-left: 10px;
  color: ${({ theme }) => theme.black};
  font-size: 1.3rem;

  &::placeholder {
    color: ${({ theme }) => theme.lightGrey};
    font-weight: 600;
  }
`;
