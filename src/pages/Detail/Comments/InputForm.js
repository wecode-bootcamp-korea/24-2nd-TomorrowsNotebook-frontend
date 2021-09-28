import React from 'react';
import styled from 'styled-components';

const InputForm = ({ value, isValid, updateComment, handleValue }) => {
  const ADD_COMMENT = { type: 'add', value: value };

  return (
    <Container>
      <UserProfile
        src="http://www.theliving.co.kr/news/photo/201904/20808_3706_3433.jpg"
        alt="사용자 프로필 이미지"
      />
      <Form onSubmit={e => updateComment(e, ADD_COMMENT)}>
        <InputBox>
          <Label htmlFor="comment">한 줄 리뷰</Label>
          <Input
            id="comment"
            placeholder="다양한 생각을 남겨주세요"
            onChange={handleValue}
            value={value}
          />
        </InputBox>
        <Button isValid={isValid} disabled={!isValid}>
          등록
        </Button>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const UserProfile = styled.img`
  width: 2rem;
  height: 2rem;
  margin-right: 0.5rem;
  border-radius: 50%;
`;

const Form = styled.form`
  display: flex;
  width: 100%;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-right: 0.5rem;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.lightGrey};
  border-radius: 4px;

  &:focus-within {
    border: 1px solid ${({ theme }) => theme.black};
  }
`;

const Label = styled.label`
  color: ${({ theme }) => theme.middleGrey};
  font-size: 0.7rem;
`;

const Input = styled.input`
  font-size: 1rem;

  &::placeholder {
    color: ${({ theme }) => theme.lightGrey};
  }
`;

const Button = styled.button`
  width: 10%;
  background-color: ${({ isValid, theme }) =>
    isValid ? theme.black : theme.deepGrey};
  border-radius: 4px;
  color: #fff;
  font-size: 1rem;
  letter-spacing: 0.1em;
  text-align: center;
`;

export default InputForm;
