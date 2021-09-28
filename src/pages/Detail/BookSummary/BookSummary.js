import React from 'react';
import styled from 'styled-components';
import { Icons } from '../../Search/FontAwesome';

const BookSummary = ({ book: { image_url, title, authors }, comments }) => (
  <Container>
    <BookImg src={image_url} alt="책 이미지" />
    <BookInfo>
      <div>
        <Name>{title}</Name>
        <Author>{authors}</Author>
      </div>
      <Links>
        <LinkButton>
          <UserProfile />
          <Text>이 책이 담긴 서재</Text>
          <Count>10개</Count>
        </LinkButton>
        <Divider />
        <LinkButton>
          <CommentIcon />
          <Text>한 줄 리뷰</Text>
          <Count>{comments ? comments.length : 0}</Count>
        </LinkButton>
        <Divider />
        <LinkButton>
          <Post />
          <Text>포스트</Text>
          <Count>0개</Count>
        </LinkButton>
      </Links>
    </BookInfo>
  </Container>
);

const Container = styled.div`
  display: flex;
  padding: 1.5rem;
  border-bottom: 10px solid ${({ theme }) => theme.grey};
`;

const BookImg = styled.img`
  width: 220px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;

const BookInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding-left: 1.5rem;
`;

const Name = styled.h1`
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
  font-weight: bold;
`;

const Author = styled.p`
  color: ${({ theme }) => theme.middleGrey};
  font-size: 0.8rem;
`;

const Links = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 1.1rem;
  background-color: ${({ theme }) => theme.ivory};
  border-radius: 16px;
`;

const LinkButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
`;

const Divider = styled.div`
  width: 1px;
  height: 50px;
  background-color: ${({ theme }) => theme.lightGrey};
`;

const UserProfile = styled(Icons.UserProfile)`
  color: ${({ theme }) => theme.middleGrey};
  margin-bottom: 0.5em;
  border: 1px solid white;
  border-radius: 50%;
`;

const CommentIcon = styled(Icons.CommentIcon)`
  color: ${({ theme }) => theme.middleGrey};
  margin: 2px 0 0.5rem 0;
`;

const Post = styled(Icons.Post)`
  color: ${({ theme }) => theme.middleGrey};
  margin: 2px 0 0.5rem 0;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.middleGrey};
  font-size: 0.6rem;
  margin-bottom: 0.5rem;
`;

const Count = styled.p`
  font-size: 0.9rem;
  font-weight: bold;
`;
export default BookSummary;
