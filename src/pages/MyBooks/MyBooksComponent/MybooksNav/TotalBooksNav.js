import React, { useState } from 'react';
import styled from 'styled-components';
import { DownArrow } from '@styled-icons/boxicons-solid/DownArrow';
import { Search } from '@styled-icons/bootstrap/Search';
import { ThreeDotsVertical } from '@styled-icons/bootstrap/ThreeDotsVertical';

const alignMessages = {
  recentlyAdd: '최근 담은 순',
  recentlyRead: '최근 본 순',
  bookName: '책 제목 순',
  bookAuthor: '저자명 순',
  bookPublishName: '출판사 순',
  bookPublishDate: '최근 발행 순',
};

const AllBooksNav = ({
  user_totalbooks,
  selectAlign,
  setSelectAlign,
  activeApply,
}) => {
  const [activeAlignModal, setActiveAlignModal] = useState(false);

  return (
    <AllBooksFilterBox>
      <AllBooksFilter>
        전체 {user_totalbooks.length}권 <DownArrowIcon />
      </AllBooksFilter>
      <AllBooksTools>
        <AllBooksTool onClick={() => setActiveAlignModal(true)}>
          {alignMessages[selectAlign]}
        </AllBooksTool>
        {activeAlignModal && (
          <AlignModalFrame>
            <AlignModal>
              <AlignHeader>정렬</AlignHeader>
              <AlignBtnBox>
                {Object.keys(alignMessages).map((alignMeaasge, idx) => (
                  <AlignBtn
                    key={idx}
                    value={alignMeaasge}
                    onClick={() => {
                      setSelectAlign(alignMeaasge);
                    }}
                    selectAlign={selectAlign}
                  >
                    {alignMessages[alignMeaasge]}
                  </AlignBtn>
                ))}
              </AlignBtnBox>
              <AilgnApplyBox>
                <AlignApply
                  value="close"
                  onClick={() => {
                    setActiveAlignModal(false);
                  }}
                >
                  닫기
                </AlignApply>
                <AlignApply
                  value="apply"
                  onClick={() => {
                    activeApply();
                    setActiveAlignModal(false);
                  }}
                >
                  적용하기
                </AlignApply>
              </AilgnApplyBox>
            </AlignModal>
          </AlignModalFrame>
        )}
        <AllBooksTool>
          <SearchIcon />
        </AllBooksTool>
        <AllBooksTool>
          <ThreeDotsVerticalIcon />
        </AllBooksTool>
      </AllBooksTools>
    </AllBooksFilterBox>
  );
};

const AllBooksFilterBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70rem;
  min-width: 40rem;
  padding: 15px 0px;
`;

const AllBooksFilter = styled.div`
  color: rgb(100, 100, 100);
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
`;

const AllBooksTools = styled.div`
  display: flex;
`;

const AllBooksTool = styled.span`
  margin-left: 10px;
  font-size: 13px;
  cursor: pointer;
`;

const AlignModalFrame = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9900;
`;

const AlignModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20rem;
  z-index: 9901;
  background-color: white;
  border-radius: 5px;
  overflow: hidden;
`;

const AlignHeader = styled.div`
  margin-top: 30px;
  font-weight: bold;
`;

const AlignBtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 17rem;
  margin: 20px 15px;
`;

const AlignBtn = styled.button`
  width: 8.2rem;
  height: 3rem;
  margin: 4px 0px;

  ${props =>
    props.selectAlign === props.value
      ? `border: 3px solid ${props.theme.yellow}; color: black;`
      : 'border: 1px solid rgb(193, 193, 193); color: rgb(140, 140, 140);'}
  border-radius: 5px;
  cursor: pointer;
`;

const AilgnApplyBox = styled.div`
  display: flex;
  width: 100%;
  height: 3rem;
  margin-top: 5px;
  border-radius: 5px;
`;

const AlignApply = styled.button`
  height: 100%;
  cursor: pointer;
  ${props =>
    props.value === 'close'
      ? `background-color:rgb(223, 223, 223); flex-grow:2;`
      : `font-weight: bold; background-color:${props.theme.yellow}; flex-grow:3;`};
`;

const DownArrowIcon = styled(DownArrow)`
  width: 10px;
`;

const SearchIcon = styled(Search)`
  width: 15px;
`;

const ThreeDotsVerticalIcon = styled(ThreeDotsVertical)`
  width: 15px;
`;

export default AllBooksNav;
