import React from 'react';
import styled from 'styled-components';
import TotalBooksNav from './TotalBooksNav';
import ShelvesNav from './ShelvesNav';

const MybooksNav = ({
  user_shelves,
  user_totalbooks,
  scrollActive,
  selectNav,
  setSelectNav,
  setShelfName,
  addShelf,
  selectAlign,
  setSelectAlign,
  activeApply,
  clickshelves,
}) => {
  const toggleTap = () => setSelectNav(prev => !prev);

  return (
    <NavFrame scrollActive={scrollActive}>
      <NavBox>
        <MainNav onClick={toggleTap} selectNav={selectNav} value="Total">
          전체도서
        </MainNav>
        <MainNav
          onClick={() => {
            toggleTap();
            clickshelves();
          }}
          selectNav={selectNav}
          value="Shelf"
        >
          책장
        </MainNav>
      </NavBox>
      <FilterFrame scrollActive={scrollActive}>
        {selectNav === 'Total' ? (
          <TotalBooksNav
            user_totalbooks={user_totalbooks}
            selectAlign={selectAlign}
            setSelectAlign={setSelectAlign}
            activeApply={activeApply}
          />
        ) : (
          <ShelvesNav
            user_shelves={user_shelves}
            setShelfName={setShelfName}
            addShelf={addShelf}
            clickshelves={clickshelves}
          />
        )}
      </FilterFrame>
    </NavFrame>
  );
};

const NavFrame = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: white;
  z-index: 9999;
  box-shadow: ${({ scrollActive }) =>
    scrollActive && '0px 20px 20px -20px gray;'};
`;

const NavBox = styled.ul`
  display: flex;
  width: 70rem;
`;

const MainNav = styled.li`
  margin-right: 40px;
  padding: 10px 0px;
  cursor: pointer;
  ${({ value, selectNav }) =>
    value === selectNav && 'border-bottom: 3px solid black; font-weight: 700;'}
`;

const FilterFrame = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border-top: ${({ scrollActive }) =>
    scrollActive && '1px solid rgb(218, 218, 218);'};
`;

export default MybooksNav;
