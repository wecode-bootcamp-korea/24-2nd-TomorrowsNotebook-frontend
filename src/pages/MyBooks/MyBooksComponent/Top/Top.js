import React from 'react';
import styled from 'styled-components';

const Top = ({ user_nickname, user_image }) => {
  return (
    <TopFrame>
      <UserBox>
        <UserProfileImg alt="profile" src={user_image || ''} />
        <UserProfileTextBox>
          <UserProfileIdBox>
            <UserProfileId>{user_nickname || 'user'}</UserProfileId>의 서재
          </UserProfileIdBox>
          <UserFollowBox>팔로우+</UserFollowBox>
        </UserProfileTextBox>
      </UserBox>
    </TopFrame>
  );
};

const TopFrame = styled.div`
  position: fixed;
  top: 60px;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 300px;
  padding-top: 50px;
  background: no-repeat center
    url('https://images.unsplash.com/photo-1527176930608-09cb256ab504?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80');
  background-size: cover;
  z-index: -1;
`;

const UserBox = styled.div`
  display: flex;
  width: 70rem;
`;

const UserProfileImg = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
`;

const UserProfileTextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const UserProfileIdBox = styled.div`
  display: flex;
  font-size: 20px;
`;

const UserProfileId = styled.span`
  font-weight: 900;
`;

const UserFollowBox = styled.span`
  font-size: 20px;
`;

export default Top;
