import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import { ListUl, Paint } from '@styled-icons/boxicons-regular';
import { JournalBookmark, ArrowLeftShort } from '@styled-icons/bootstrap';
import {
  DocumentOnePage,
  ArrowAutofitWidth,
  ArrowAutofitHeight,
} from '@styled-icons/fluentui-system-regular';

const Modal = ({ toggleSinglePage, toggleIndex, isSinglePage }) => {
  return (
    <Container>
      <LeaveBtn>
        <ArrowLeftShortIcon />
      </LeaveBtn>
      <Wrapper>
        <Left>
          <IndexWrapper onClick={toggleIndex}>
            <IndexIcon />
            목차
          </IndexWrapper>
          <MemoWrapper>
            <MemoIcon />
            독서노트
          </MemoWrapper>
          <OptionWrapper>
            <ViewOption />
            보기설정
          </OptionWrapper>
        </Left>
        <Right>
          <ScorllDirection>
            <Horizon />
            <Vertical />
          </ScorllDirection>
          <Pageview>
            <SingleWrapper onClick={toggleSinglePage}>
              <SingleView isSinglePage={isSinglePage} />
              <Single />
            </SingleWrapper>
            <DoubleWrapper onClick={toggleSinglePage}>
              <DoubleView isDoublepage={!isSinglePage} />
              <Double />
            </DoubleWrapper>
          </Pageview>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Modal;

const IndexIcon = styled(ListUl)`
  margin: 5px;
  width: 1.5rem;
  color: ${theme.deepGrey};
`;

const MemoIcon = styled(JournalBookmark)`
  margin: 5px;
  width: 1.5rem;
  color: ${theme.deepGrey};
`;

const ViewOption = styled(Paint)`
  margin: 5px;
  width: 1.5rem;
  color: ${theme.deepGrey};
`;

const Vertical = styled(ArrowAutofitHeight)`
  width: 1.2rem;
  color: ${theme.deepGrey};
`;

const Horizon = styled(ArrowAutofitWidth)`
  width: 1.2rem;
  color: ${theme.deepGrey};
`;

const Single = styled(DocumentOnePage)`
  position: absolute;
  top: 7px;
  left: 5px;
  width: 1rem;
  color: ${theme.deepGrey};
  cursor: pointer;
`;

const Double = styled(DocumentOnePage)`
  position: absolute;
  top: 7px;
  left: 5px;
  width: 1rem;
  color: ${theme.deepGrey};
  cursor: pointer;
`;

const ArrowLeftShortIcon = styled(ArrowLeftShort)`
  width: 3rem;
  color: ${theme.deepGrey};
`;

const Container = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 5rem;
  background-color: white;
  border-bottom: 1px solid ${theme.grey};
  box-shadow: 1px 1px 13px ${theme.deepGrey};
  z-index: 999;
  opacity: ${props => props.opacity};
`;

const LeaveBtn = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  width: 5rem;
  height: 100%;
  border-right: 1px solid ${theme.lightGrey};
  cursor: pointer;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 17rem;
`;

const Right = styled.div`
  display: flex;
  justify-content: space-around;
  width: 15rem;
`;

const IndexWrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${theme.deepGrey};
  cursor: pointer;
`;

const MemoWrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${theme.deepGrey};
  cursor: pointer;
`;

const OptionWrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${theme.deepGrey};
  cursor: pointer;
`;

const ScorllDirection = styled.div`
  display: flex;
  justify-content: space-around;
  width: 6rem;
  padding: 3px;
  border: 1.2px solid ${theme.lightGrey};
  border-radius: 100px;
`;

const Pageview = styled.div`
  display: flex;
  justify-content: space-around;
  width: 6rem;
  padding: 5px;
  border: 1.2px solid ${theme.lightGrey};
  border-radius: 100px;
`;

const SingleWrapper = styled.div`
  position: relative;
  width: 2rem;
`;

const DoubleWrapper = styled.div`
  position: relative;
  width: 1.7rem;
`;

const ViewBtn = styled.button`
  position: absolute;
  width: 1.7rem;
  height: 1.7rem;
  background-color: ${theme.yellow};
  border-radius: 100px;
`;

const SingleView = styled(ViewBtn)`
  opacity: ${props => (props.isSinglePage ? '1' : '0')};
`;

const DoubleView = styled(ViewBtn)`
  opacity: ${props => (props.isDoublepage ? '1' : '0')};
`;
