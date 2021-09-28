import React from 'react';
import styled from 'styled-components';
import CheckItem from './component/CheckItem';
import { Icons } from '../../pages/Search/FontAwesome';

const ToMyBooksModal = ({
  handleCancel,
  handleMakeButton,
  handleLibrary,
  onPutBook,
  libraryList,
}) => {
  return (
    <Container>
      <Content>
        <Title>내서재에 담기</Title>
        <Description>책장을 선택하면 함께 담을 수 있어요</Description>
        <AddButton onClick={handleMakeButton}>
          <Plus />
          <Text>책장 만들기</Text>
        </AddButton>
        <CheckItem isLibrary={false} />
        {libraryList.map((library, idx) => (
          <CheckItem
            key={idx}
            library={library}
            isLibrary={true}
            handleLibrary={handleLibrary}
          />
        ))}
      </Content>
      <Button action="cancle" onClick={handleCancel}>
        취소
      </Button>
      <Button onClick={onPutBook}>담기</Button>
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

const Content = styled.div`
  width: 20rem;
  max-height: 40rem;
  padding: 1.5rem 1rem;
  overflow: auto;
`;

const Title = styled.h2`
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
  font-weight: bold;
`;

const Description = styled.p`
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.middleGrey};
  font-size: 0.9rem;
`;

const AddButton = styled.button`
  width: 100%;
  padding: 0.8rem 0.5rem;
  border-top: 1px solid ${({ theme }) => theme.lightGrey};
  border-bottom: 1px solid ${({ theme }) => theme.lightGrey};
  text-align: left;
  cursor: pointer;
`;

const Plus = styled(Icons.Plus)`
  margin-right: 0.5rem;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.middleGrey};
`;

const Text = styled.span`
  font-size: 1rem;
`;

const Button = styled.button`
  width: 50%;
  padding: 1.3rem 1.5rem;
  background-color: ${({ theme, action }) =>
    action === 'cancle' ? theme.lightGrey : theme.yellow};
  border-bottom-left-radius: ${({ action }) => action === 'cancle' && '6px'};
  border-bottom-right-radius: ${({ action }) => action !== 'cancle' && '6px'};
  font-size: 1rem;
  cursor: pointer;
`;

export default ToMyBooksModal;
