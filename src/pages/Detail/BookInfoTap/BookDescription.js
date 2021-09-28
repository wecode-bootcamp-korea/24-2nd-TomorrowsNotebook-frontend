import React from 'react';
import styled from 'styled-components';
import { ArrowIosDownward, ArrowIosUpward } from '@styled-icons/evaicons-solid';

const BookDescription = ({ menu, index, isLast, text, isOpen, handleInfo }) => {
  return (
    <Container isLast={isLast}>
      <Button onClick={() => handleInfo(index)}>
        <Title>{menu}</Title>
        {isOpen ? <ArrowUp /> : <ArrowDown />}
      </Button>
      {isOpen &&
        (text.includes('\n') ? (
          text.split('\n').map((p, idx) => <Content key={idx}>{p}</Content>)
        ) : (
          <Content>{text}</Content>
        ))}
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

const ArrowDown = styled(ArrowIosDownward)`
  width: 1.5rem;
`;

const ArrowUp = styled(ArrowIosUpward)`
  width: 1.5rem;
`;

const Content = styled.p`
  padding: 0 1.5rem 1.5rem 1.5rem;
  color: ${({ theme }) => theme.deepGrey};
  font-size: 0.9rem;
  line-height: 1.5em;
`;

export default BookDescription;
