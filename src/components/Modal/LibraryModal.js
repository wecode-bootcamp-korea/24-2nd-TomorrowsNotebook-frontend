import React from 'react';
import { Unlock } from '@styled-icons/feather/Unlock';
import styled from 'styled-components';

const LibraryModal = ({
  handleCancel,
  handleLibraryName,
  addLibrary,
  libraryName,
}) => (
  <Container>
    <Content>
      <Title>책장 만들기</Title>
      <Form>
        <Input onChange={handleLibraryName} value={libraryName} />
        <LockIcon />
      </Form>
      <Text>{libraryName.length}/40</Text>
    </Content>
    <Button action="cancle" onClick={handleCancel}>
      취소
    </Button>
    <Button onClick={addLibrary}>완료</Button>
  </Container>
);

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 20rem;
  background-color: #fff;
  border-radius: 6px;
  text-align: center;
  transform: translate(-50%, -50%);
`;

const Content = styled.div`
  padding: 1.5rem 1rem;
`;

const Title = styled.h2`
  margin-bottom: 1.5rem;
  font-weight: bold;
  font-size: 1.2rem;
`;

const Form = styled.form`
  position: relative;
  margin-bottom: 0.3rem;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.lightGrey};
  border-radius: 12px;
`;

const Input = styled.input`
  width: 100%;
`;

const LockIcon = styled(Unlock)`
  position: absolute;
  top: 0;
  right: 0;
  width: 1.5rem;
  height: 1.5rem;
  transform: translate(-50%, 50%);
`;

const Text = styled.p`
  margin-bottom: 1.5rem;
  padding-right: 0.5rem;
  color: ${({ theme }) => theme.middleGrey};
  font-size: 0.8rem;
  text-align: right;
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

export default LibraryModal;
