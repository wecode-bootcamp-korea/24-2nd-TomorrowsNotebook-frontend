import React from 'react';
import styled from 'styled-components';
import Comment from './Comment';
import InputForm from './InputForm';

const Comments = ({
  comments,
  value,
  user,
  isValid,
  handleLike,
  updateComment,
  handleValue,
  handleDeleteButton,
}) => (
  <Container>
    <HeadTitle>
      한 줄 리뷰
      <Count>{comments ? comments.length : 0}</Count>
    </HeadTitle>
    {comments &&
      comments.map(comment => (
        <Comment
          key={comment.id}
          comment={comment}
          handleLike={handleLike}
          handleDeleteButton={handleDeleteButton}
        />
      ))}
    <InputForm
      updateComment={updateComment}
      handleValue={handleValue}
      value={value}
      isValid={isValid}
      user={user}
    />
  </Container>
);

const Container = styled.div`
  margin-bottom: 100px;
  padding: 1.5rem;
`;

const HeadTitle = styled.h2`
  margin-bottom: 1rem;
  font-size: 1.1rem;
  font-weight: bold;
`;

const Count = styled.span`
  margin-left: 0.5rem;
  color: ${({ theme }) => theme.yellow};
`;

export default Comments;
