import React from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { PlusSquare } from '@styled-icons/bootstrap/PlusSquare';
import { Library } from '@styled-icons/ionicons-sharp/Library';
import { Search } from '@styled-icons/bootstrap/Search';
import { Settings } from '@styled-icons/feather/Settings';
import { PersonCircle } from '@styled-icons/bootstrap/PersonCircle';
import { Bell } from '@styled-icons/bootstrap/Bell';
import { Refresh } from '@styled-icons/evaicons-solid/Refresh';

const Nav = () => {
  const history = useHistory();
  return (
    <BarFrame>
      <SideBarFrame>
        <SideContentBox>
          <SideListBox>
            <SideList>
              <Link to="/main">
                <SideLogo alt="logo" src="/images/logo.png" />
              </Link>
            </SideList>
            <SideList>
              <PlusIcon />
            </SideList>
            <SideList>
              <Link to="/mybooks">
                <LibraryIcon />
              </Link>
            </SideList>
            <SideList>
              <Link to="/search">
                <SearchIcon />
              </Link>
            </SideList>
            <SideList>
              <SettingsIcon />
            </SideList>
          </SideListBox>
          <SideRefrash>
            <RefreshIcon />
          </SideRefrash>
        </SideContentBox>
      </SideBarFrame>
      <TopBarFrame>
        <TopContentBox>
          <Link to="/main">
            <TopLogoBox>
              <div>
                <TopLogo alt="logo" src="/images/logo.png" />
              </div>
              <div>NoteBooks</div>
            </TopLogoBox>
          </Link>
          <TopBtnBox>
            <TopBtn>
              <PersonCircleIcon />
            </TopBtn>
            <TopBtn>
              <Link to="/search">
                <SearchIcon />
              </Link>
            </TopBtn>
            <TopBtn>
              <BellIcon />
            </TopBtn>
            {!!localStorage.getItem('kakao-token') ? (
              <TopSignBtn
                onClick={() => {
                  localStorage.removeItem('kakao-token');
                  history.push('/');
                }}
              >
                로그아웃
              </TopSignBtn>
            ) : (
              <TopSignBtn
                onClick={() => {
                  history.push('/');
                }}
              >
                로그인
              </TopSignBtn>
            )}
          </TopBtnBox>
        </TopContentBox>
      </TopBarFrame>
    </BarFrame>
  );
};

const BarFrame = styled.nav`
  position: sticky;
  top: 0px;
  display: flex;
  z-index: 10000;
`;

const SideBarFrame = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 60px;
  height: 100%;
  border-right: 1px solid rgb(223, 223, 223);
  background-color: rgb(255, 255, 255);
  z-index: 10001;
`;

const SideContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const SideListBox = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const SideList = styled.li`
  margin-top: 20px;
  color: ${props => props.theme.black};
  font-size: 20px;
`;

const SideLogo = styled.img`
  width: 30px;
  height: 30px;
`;

const SideRefrash = styled.div`
  margin-bottom: 40px;
  font-size: 20px;
`;

const TopBarFrame = styled.nav`
  width: 100%;
  height: 60px;
  padding-left: 80px;
  border-bottom: 1px solid rgb(223, 223, 223);
  background-color: rgb(255, 255, 255);
`;

const TopContentBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 70rem;
  min-width: 40rem;
  height: 100%;
  margin: 0px auto;
  padding: 10px;
`;

const TopLogoBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  color: ${props => props.theme.black};
`;

const TopLogo = styled.img`
  width: 22px;
  height: 22px;
`;

const TopBtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & i {
    font-size: 18px;
  }
`;

const TopBtn = styled.span`
  margin-right: 20px;
`;

const TopSignBtn = styled.button`
  width: 80px;
  height: 30px;
  color: white;
  background: ${props => props.theme.black};
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
`;

const PlusIcon = styled(PlusSquare)`
  width: 20px;
`;

const LibraryIcon = styled(Library)`
  width: 20px;
`;

const SearchIcon = styled(Search)`
  width: 20px;
`;

const SettingsIcon = styled(Settings)`
  width: 20px;
`;

const PersonCircleIcon = styled(PersonCircle)`
  width: 20px;
`;

const BellIcon = styled(Bell)`
  width: 20px;
`;

const RefreshIcon = styled(Refresh)`
  width: 20px;
`;

export default Nav;
