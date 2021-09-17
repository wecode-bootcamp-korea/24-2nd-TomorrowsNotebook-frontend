import React from 'react';
import styled from 'styled-components';
import Shelves from './Shelves';

const MainShelf = ({ user_shelves }) => {
  return (
    <ShelfFrame>
      {user_shelves.map((user_shelf, idx) => {
        return <Shelves key={idx} userShelf={user_shelf} />;
      })}
    </ShelfFrame>
  );
};

const ShelfFrame = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 70rem;
`;

export default MainShelf;
