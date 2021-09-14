import React from 'react';
import styled from 'styled-components';
import SubHeader from '../../pages/Main/SubHeader/SubHeader';

const BookLayout = ({ title, children }) => (
  <Container isTitle={!!title}>
    {title && <SubHeader title={title} />}
    {children}
  </Container>
);

const Container = styled.div`
  max-width: 70rem;
  min-width: 40rem;
  min-height: 340px;
  margin: 0 auto;
  margin-bottom: ${({ isTitle }) => isTitle && '5rem'};
  overflow: hidden;
`;

export default BookLayout;
