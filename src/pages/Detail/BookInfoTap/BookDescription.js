import React from 'react';
import styled from 'styled-components';
import { Icons } from '../../Search/FontAwesome';

const BookDescription = ({ menu, index, isLast, text, isOpen, handleInfo }) => {
  return (
    <Container isLast={isLast}>
      <Button onClick={() => handleInfo(index)}>
        <Title>{menu}</Title>
        {isOpen ? <ArrowUp /> : <ArrowDown />}
      </Button>
      {isOpen && <Content>{text}</Content>}
    </Container>
  );
};

const Container = styled.div`
  border-bottom: ${({ isLast }) => !isLast && '1px solid #f7f7f7'};
`;

const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1.5rem;
  cursor: pointer;
`;

const Title = styled.h2`
  font-size: 1.1rem;
  font-weight: bold;
`;

const ArrowDown = styled(Icons.ArrowDown)`
  font-size: 1.1rem;
`;

const ArrowUp = styled(Icons.ArrowUp)`
  font-size: 1.1rem;
`;

const Content = styled.p`
  padding: 0 1.5rem 1.5rem 1.5rem;
  color: ${({ theme }) => theme.deepGrey};
  font-size: 0.9rem;
  line-height: 1.5em;
`;

export default BookDescription;
