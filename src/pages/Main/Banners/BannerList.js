import React from 'react';
import styled, { keyframes, css } from 'styled-components';

const BannerList = ({ banner, currentSlide, slideLength, handleSlide }) => {
  const { image, title, subtitle, background, idx } = banner;

  return (
    <List isCurrentSlide={currentSlide === idx}>
      <Background
        background={background}
        isCurrentSlide={currentSlide === idx}
      />
      <Container isCurrentSlide={currentSlide === idx}>
        <Title isCurrentSlide={currentSlide === idx}>{title}</Title>
        <SubTitle isCurrentSlide={currentSlide === idx}>{subtitle}</SubTitle>
        <Img src={image} isCurrentSlide={currentSlide === idx} />
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
  height: 420px;
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 400px;
  padding: 40px 0 0 0;
  background: ${props => props.background};
  z-index: ${props => (props.isCurrentSlide ? 1 : 0)};
  overflow: hidden;

  ${({ isCurrentSlide }) =>
    isCurrentSlide &&
    css`
      animation: ${moveBackground} 500ms ease-in-out;
    `};
`;

const Container = styled.div`
  position: relative;
  max-width: 900px;
  height: 100%;
  padding: 60px 60px;
  margin: 0 auto;
  z-index: 2;
  opacity: ${props => (props.isCurrentSlide ? 1 : 0)};
`;

const Title = styled.h1`
  margin-bottom: 12px;
  font-size: 2rem;
  font-weight: bold;
  ${({ isCurrentSlide }) =>
    isCurrentSlide &&
    css`
      animation: ${moveContent} 500ms ease-out;
    `};
`;

const SubTitle = styled.h2`
  color: ${props => props.theme.deepGrey};
  font-size: 1.1rem;
  ${({ isCurrentSlide }) =>
    isCurrentSlide &&
    css`
      animation: ${moveContent} 600ms ease-out;
    `};
`;

const Img = styled.img`
  position: absolute;
  bottom: -20px;
  right: 80px;
  width: 150px;
  height: auto;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  ${({ isCurrentSlide }) =>
    isCurrentSlide &&
    css`
      animation: ${moveContent} 700ms ease-in-out;
    `};
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
  bottom: 40px;
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

const moveBackground = keyframes`
0%{
  transform : translateX(100%);
}

100%{
  transform : translateX(0);
}
`;

const moveContent = keyframes`
0%{
  transform : translateX(10%);
  visibility : hidden;
}

30%{
  visibility :  visible;
}

60%{
  visibility :  hidden;

}

100%{
  transform : translateX(0);
  visibility : visible;
}
`;

export default BannerList;
