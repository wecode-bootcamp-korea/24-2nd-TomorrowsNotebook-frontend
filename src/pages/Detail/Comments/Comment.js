import React from 'react';
import styled from 'styled-components';
import { Icons } from '../../Search/FontAwesome';

const Comment = ({
  handleLike,
  handleDeleteButton,
  comment: {
    profile_image,
    nickname,
    written,
    likes,
    liked,
    is_my_comment,
    comment,
    comment_id,
  },
}) => (
  <Container>
    {profile_image ? (
      <Profile src={profile_image} alt="프로필 이미지" />
    ) : (
      <DefaultProfile />
    )}
    <TextBox>
      <UserInfo>
        <UserName>{nickname}</UserName>
        {is_my_comment && (
          <Delete onClick={() => handleDeleteButton(comment_id)} />
        )}
      </UserInfo>
      <CreatedDate>{written}</CreatedDate>
      <Reply>{comment}</Reply>
      <HeartWrapper>
        <SubText>이 리뷰가 마음에 드시나요?</SubText>
        <HeartButton onClick={() => handleLike(comment_id)} isLiked={liked}>
          {liked ? <FilledHeart /> : <Heart />}
          <Count>{likes}</Count>
        </HeartButton>
      </HeartWrapper>
    </TextBox>
  </Container>
);

const Container = styled.div`
  display: flex;
  margin-bottom: 1.2rem;
`;

const Profile = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
`;

const DefaultProfile = styled(Icons.UserProfile)`
  color: ${({ theme }) => theme.middleGrey};
  font-size: 2rem;
`;

const TextBox = styled.div`
  width: 100%;
  margin-left: 0.5rem;
`;

const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Delete = styled(Icons.Ellipsis)`
  font-size: 0.8rem;
  cursor: pointer;
`;

const UserName = styled.strong`
  font-size: 0.8rem;
`;

const CreatedDate = styled.p`
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.middleGrey};
  font-size: 0.6rem;
`;

const Reply = styled.p`
  margin-bottom: 0.5rem;
`;

const HeartWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SubText = styled.p`
  color: ${({ theme }) => theme.middleGrey};
  font-size: 0.8rem;
`;

const HeartButton = styled.button`
  padding: 0.2rem 0.5rem;
  border: 1px solid
    ${({ isLiked, theme }) => (isLiked ? theme.black : theme.lightGrey)};
  border-radius: 16px;
  color: ${({ isLiked, theme }) => (isLiked ? theme.black : theme.deepGrey)};
  font-size: 0.8rem;
  cursor: pointer;
`;

const Heart = styled(Icons.Heart)`
  margin-right: 0.5rem;
`;

const FilledHeart = styled(Icons.FilledHeart)`
  margin-right: 0.5rem;
`;

const Count = styled.span``;

export default Comment;
