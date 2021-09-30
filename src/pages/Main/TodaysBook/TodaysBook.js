import React from 'react';
import styled from 'styled-components';
import SubHeader from '../SubHeader/SubHeader';
import BookCard from './BookCard';
import Comment from './CommentCard';

const TodaysBook = ({ book }) => (
  <Container>
    <SubHeader title={'오늘의 책'} />
    <Content>
      <BookCard book={book} />
      <Comment book={book} />
    </Content>
  </Container>
);

const Container = styled.div`
  max-width: 70rem;
  min-width: 40rem;
  margin: 0 auto 2rem;
`;

const Content = styled.div`
  display: flex;
`;

export default TodaysBook;
