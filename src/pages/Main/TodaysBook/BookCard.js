import React from 'react';
import styled from 'styled-components';

const BookCard = props => {
  return (
    <Card>
      <BookImg
        src="http://image.kyobobook.co.kr/images/book/xlarge/136/x9788969523136.jpg"
        alt="책 이미지"
      />
      <BookName>열두 시에 라면을 끓인다는 건</BookName>
    </Card>
  );
};

const Card = styled.div`
  width: 50%;
  height: 300px;
  margin-right: 1rem;
  padding: 35px;
  border: 1px solid #efefef;
  border-radius: 16px;
`;

const BookImg = styled.img`
  width: 150px;
  height: auto;
  margin-right: 12px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const BookName = styled.span`
  font-size: 0.9rem;
  font-weight: bold;
`;
export default BookCard;
