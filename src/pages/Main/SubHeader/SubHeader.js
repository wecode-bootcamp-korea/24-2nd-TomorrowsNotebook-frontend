import React from 'react';
import styled from 'styled-components';

const SubHeader = ({ title }) => (
  <Header>
    <HeadTitle>{title}</HeadTitle>
    <Button>
      <i className="fas fa-chevron-right" />
    </Button>
  </Header>
);

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HeadTitle = styled.h1`
  margin-bottom: 0.8rem;
  font-size: 1.3rem;
  font-weight: bold;
`;

const Button = styled.button`
  font-size: 1.2rem;
`;

export default SubHeader;
