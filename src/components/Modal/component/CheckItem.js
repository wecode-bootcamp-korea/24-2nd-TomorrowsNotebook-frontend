import React from 'react';
import styled from 'styled-components';
import { Star } from '@styled-icons/bootstrap/Star';
import { Books } from '@styled-icons/icomoon/Books';

const CheckItem = ({ library, isLibrary, handleLibrary }) => (
  <Container onClick={() => handleLibrary(library.shelf_id)}>
    <RadioButton isChecked={library && library.isChecked}>
      <CheckedButton />
    </RadioButton>
    <Icons>{isLibrary ? <Archive /> : <StarIcon />}</Icons>
    <Text>{isLibrary ? library.shelf_name : 'My Favorite'}</Text>
  </Container>
);

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0.8rem 0.4rem;
  cursor: pointer;
`;

const RadioButton = styled.div`
  position: relative;
  width: 1.2rem;
  height: 1.2rem;
  margin-right: 0.5rem;
  border: 1px solid ${({ theme }) => theme.middleGrey};
  border-radius: 50%;
  background-color: ${({ isChecked }) => (isChecked ? 'black' : 'white')};
`;

const CheckedButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
  background-color: white;
  transform: translate(-50%, -50%);
`;

const Icons = styled.div`
  margin-right: 0.5rem;
`;

const Archive = styled(Books)`
  width: 1rem;
`;

const StarIcon = styled(Star)`
  width: 1rem;
  height: 1rem;
`;

const Text = styled.span`
  font-size: 1rem;
`;

export default CheckItem;
