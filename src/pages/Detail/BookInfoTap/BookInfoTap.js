import React, { Fragment } from 'react';
import styled from 'styled-components';
import BookDescription from './BookDescription';
import BOOK_DATA from './BOOK_DATA';

const BookInfoTap = ({
  book,
  book: { publisher_intro, book_intro, pages },
  isOpen,
  handleInfo,
}) => {
  return (
    <Container>
      <Introduction>
        <Title>책 소개</Title>
        <Content>{book_intro}</Content>
      </Introduction>
      <DataList>
        {BOOK_DATA.map((list, idx) => (
          <Fragment key={idx}>
            <Data>
              <DataHead>{list.head}</DataHead>
              <DataBody>{book[list.body]}</DataBody>
            </Data>
            <Divider />
          </Fragment>
        ))}
      </DataList>
      {DESCRIPTION_MENU.map((menu, idx) => (
        <BookDescription
          menu={menu.title}
          key={idx}
          index={idx}
          isLast={DESCRIPTION_MENU.length - 1 === idx}
          text={book[menu.content]}
          isOpen={isOpen[idx]}
          handleInfo={handleInfo}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  border-bottom: 10px solid ${({ theme }) => theme.grey};
`;

const Introduction = styled.div`
  padding: 1.5rem;
`;

const Title = styled.h2`
  margin-bottom: 1.2rem;
  font-weight: bold;
  font-size: 1.1rem;
`;

const Content = styled.p`
  color: ${({ theme }) => theme.deepGrey};
  font-size: 0.9rem;
  line-height: 1.5em;
`;

const DataList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 1rem;
  background-color: ${({ theme }) => theme.ivory};
`;

const Data = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DataHead = styled.h3`
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.middleGrey};
  font-size: 0.8rem;
`;

const DataBody = styled.p`
  color: ${({ theme }) => theme.black};
  font-size: 0.9rem;
  font-weight: bold;
`;

const Divider = styled.div`
  width: 1px;
  height: 50px;
  background-color: ${({ theme }) => theme.lightGrey};

  &:last-child {
    display: none;
  }
`;

export default BookInfoTap;

const DESCRIPTION_MENU = [
  { title: '목차', content: 'index' },
  { title: '저자 소개', content: 'authors_intro' },
  { title: '출판사 소개', content: 'publisher_intro' },
];
