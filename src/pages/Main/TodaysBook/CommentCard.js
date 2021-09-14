import React from 'react';
import styled from 'styled-components';
import { Icons } from '../../Search/FontAwesome';

const CommentCard = ({ book: { nickname, user_image, comment } }) => {
  return (
    <Card>
      <UserContainer>
        {user_image !== 'NONE' ? (
          <Profile src={user_image} alt="프로필 이미지" />
        ) : (
          <DefaultProfile />
        )}
        <div>
          <Title>{nickname === 'NONE' ? 'FE진' : nickname}의 추천평</Title>
          <Introduction>여기저기 기웃거리는 호기심쟁이</Introduction>
        </div>
      </UserContainer>
      <Comment>
        {comment === 'NONE' ? '아직 댓글이 없습니다.' : comment}
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

const DefaultProfile = styled(Icons.UserProfile)`
  margin-right: 1rem;
  color: ${({ theme }) => theme.middleGrey};
  font-size: 3rem;
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
