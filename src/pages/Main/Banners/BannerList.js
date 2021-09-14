import React from 'react';
import styled from 'styled-components';

const BannerList = ({ banner, currentSlide, slideLength, handleSlide }) => {
  const { image, title, subtitle, background, idx } = banner;

  return (
    <List background={background} isCurrentSlide={currentSlide === idx}>
      <Container>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
        <Img src={image} />
        <Button direction="left" onClick={() => handleSlide('left')}>
          <i className="fas fa-chevron-left" />
        </Button>
        <Button onClick={() => handleSlide('right')}>
          <i className="fas fa-chevron-right" />
        </Button>
        <IndexButton>
          {idx} / {slideLength}
          <i className="fas fa-chevron-right" />
        </IndexButton>
      </Container>
    </List>
  );
};

const List = styled.div`
  position: absolute;
  width: 100%;
  height: 400px;
  padding: 40px 0 0 0;
  background: ${props => props.background};
  opacity: ${props => (props.isCurrentSlide ? 1 : 0)};
`;

const Container = styled.div`
  position: relative;
  max-width: 900px;
  height: 100%;
  padding: 0 60px;
  margin: 0 auto;
`;

const Title = styled.h1`
  margin-bottom: 12px;
  font-size: 2rem;
  font-weight: bold;
`;

const SubTitle = styled.h2`
  color: ${props => props.theme.deepGrey};
  font-size: 1.1rem;
`;

const Img = styled.img`
  position: absolute;
  bottom: -20px;
  right: 80px;
  width: 150px;
  height: auto;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  ${props => (props.direction === 'left' ? 'left:0' : 'right:0')};
  font-size: 1.5rem;
  transform: translateY(-50%);
`;

const IndexButton = styled.div`
  position: absolute;
  bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 30px;
  border: 1px solid ${({ theme }) => theme.black};
  border-radius: 16px;
  & i {
    margin-left: 8px;
    font-size: 0.6rem;
  }
`;

export default BannerList;
