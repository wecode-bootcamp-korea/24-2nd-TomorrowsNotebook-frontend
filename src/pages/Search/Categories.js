import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const API = 'http://54.180.126.99:8000';

const Categories = () => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    fetch(`${API}/books/search/Main`)
      .then(res => res.json())
      .then(res => setCategoryList(res.RESULT));
  }, []);

  return (
    <>
      <Title>밀리 도서 카테고리</Title>
      <CategoryList>
        {categoryList.map((book, idx) => (
          <CategoryWrapper key={idx}>
            <Image alt="category1" src={book.image} />
            <ImgWrapper>
              <Name>{book.category}</Name>
            </ImgWrapper>
          </CategoryWrapper>
        ))}
      </CategoryList>
    </>
  );
};

export default Categories;

const Title = styled.h3`
  margin-top: 40px;
  margin-bottom: 10px;
  padding: 10px 0;
  font-weight: 500;
  font-size: 1.2rem;
  font-family: 'Noto Sans KR', sans-serif;
`;

const CategoryList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(10%, auto));
  gap: 1rem;
  min-width: 70rem;
`;

const CategoryWrapper = styled.div`
  position: relative;
  width: 15rem;
  height: 20rem;
  overflow: hidden;
  text-align: start;
  color: white;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const ImgWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    transparent 60%,
    ${({ theme }) => theme.deepGrey}
  );
`;

const Name = styled.p`
  margin: 15px;
  font-size: 1.2rem;
  font-weight: 600;
`;
