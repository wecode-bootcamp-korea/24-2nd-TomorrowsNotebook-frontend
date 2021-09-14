import React from 'react';
import styled from 'styled-components';

export default function Categories() {
  return (
    <div>
      <Title>밀리 도서 카테고리</Title>
      <CategoryList>
        {[...Array(5)].map((_, idx) => (
          <Image key={idx} alt="category1" src="/images/book5.jpeg" />
        ))}
      </CategoryList>
    </div>
  );
}

const CategoryList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(20%, auto));
  gap: 10px;
`;

const Image = styled.img`
  width: 100%;
`;

const Title = styled.header`
  margin-top: 40px;
  margin-bottom: 10px;
  padding: 10px 0;
  font-weight: 500;
  font-size: 1.2rem;
  font-family: 'Noto Sans KR', sans-serif;
`;
