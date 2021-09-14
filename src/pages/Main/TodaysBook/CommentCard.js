import React from 'react';
import styled from 'styled-components';

const CommentCard = props => {
  return (
    <Card>
      <UserContainer>
        <Profile
          src="http://www.theliving.co.kr/news/photo/201904/20808_3706_3433.jpg"
          alt="유저 이미지"
        />
        <div>
          <Title>Michelle의 추천평</Title>
          <Introduction>여기저기 기웃거리는 호기심쟁이</Introduction>
        </div>
      </UserContainer>
      <Comment>
        문득 잊고 있던 것들이 떠올라 아무 이유 없이 헛헛해지는 그런 밤이 있죠.
        그때 우리를 채워주는 건 어쩌면 한 그릇의 라면일지도 모르겠어요.
      </Comment>
    </Card>
  );
};

const Card = styled.div`
  width: 80%;
  padding: 40px;
  border: 1px solid #efefef;
  border-radius: 16px;
`;

const Profile = styled.img`
  width: 3rem;
  height: 3rem;
  margin-right: 1rem;
  border-radius: 50%;
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const Introduction = styled.p`
  color: #999; // theme로 변경할 값 : middleGrey
`;

const Comment = styled.p`
  color: ${({ theme }) => theme.black};
  line-height: 1.5em;
`;

export default CommentCard;
