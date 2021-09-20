import React from 'react';
import styled from 'styled-components';

const DeleteModal = ({ handleCancle, updateComment, id }) => {
  const DELETE = {
    type: 'delete',
    id,
  };

  return (
    <Container>
      <Question>리뷰를 삭제하겠습니까?</Question>
      <Description>회원님이 등록한 리뷰가 삭제됩니다.</Description>
      <Button action={'cancle'} onClick={() => handleCancle('delete')}>
        취소
      </Button>
      <Button onClick={e => updateComment(e, DELETE)}>확인</Button>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  background-color: #fff;
  border-radius: 6px;
  text-align: center;
  transform: translate(-50%, -50%);
`;

const Question = styled.h1`
  padding: 2rem 4rem;
  font-size: 1.2rem;
  font-weight: bold;
`;

const Description = styled.p`
  padding: 2rem 4rem;
  color: ${({ theme }) => theme.middleGrey};
  font-size: 0.9rem;
`;

const Button = styled.button`
  width: 50%;
  padding: 1rem 0;
  background-color: ${({ action, theme }) =>
    action === 'cancle' ? theme.lightGrey : 'red'};
  color: ${({ action, theme }) => (action === 'cancle' ? theme.black : '#fff')};
  border-bottom-left-radius: ${({ action }) => action === 'cancle' && '6px'};
  border-bottom-right-radius: ${({ action }) => action !== 'cancle' && '6px'};
  cursor: pointer;
`;

export default DeleteModal;
