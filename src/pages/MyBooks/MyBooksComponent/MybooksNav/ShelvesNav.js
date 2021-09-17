import React, { useState } from 'react';
import styled from 'styled-components';
import { DownArrow } from '@styled-icons/boxicons-solid/DownArrow';
import { PlusLg } from '@styled-icons/bootstrap/PlusLg';
import { ThreeDotsVertical } from '@styled-icons/bootstrap/ThreeDotsVertical';
import { Library } from '@styled-icons/fluentui-system-regular/Library';

const ShelvesNav = ({ user_shelves, setShelfName, addShelf, clickshelves }) => {
  let year = new Date().getFullYear();
  let month = new Date().getMonth() + 1;
  let date = new Date().getDate();

  const [ActiveAddModal, setActiveAddModal] = useState(false);
  const [ActiveDeleteModal, setActiveDeleteModal] = useState(false);

  const [deleteDatas, setDeleteDatas] = useState([]);

  const handleDelete = e => {
    setDeleteDatas(prev => [
      ...prev,
      { shelf_id: e.target.value, checked: e.target.checked },
    ]);
  };

  const selectAll = () => {};

  const goDelete = () => {
    deleteDatas.map(
      ({ checked, shelf_id }) =>
        checked &&
        fetch(`${process.env.REACT_APP_SERVER_URL}/libraries/shelfdelete`, {
          method: 'POST',
          headers: {
            Authorization:
              'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.3qAnA8mLVQeeRZcdL0nMsAyLhbuPkSyDA-VhUbkNLvY',
          },
          body: JSON.stringify({ shelf_id }),
        }).then(res => res.json())
    );
    alert(`책장이 삭제 되었습니다`);
    setActiveDeleteModal(false);
    clickshelves();
  };

  return (
    <ShelvesFilterBox>
      <ShelvesFilter>
        내 책장 {user_shelves.length}개 <DownArrowIcon />
      </ShelvesFilter>
      <ShelvesTools>
        <ShelvesTool onClick={() => setActiveAddModal(true)}>
          <PlusLgIcon />
        </ShelvesTool>
        {ActiveAddModal && (
          <AddShelfModalFrame>
            <AddShelfModal>
              <AddShelfHeader>책장 만들기</AddShelfHeader>
              <AddShelfInputName
                onChange={e => setShelfName(e.target.value)}
                placeholder={`${year}-${month}-${date}`}
              />
              <AddShelfApplyBox>
                <AddShelfApply
                  value="cancel"
                  onClick={() => setActiveAddModal(false)}
                >
                  취소
                </AddShelfApply>
                <AddShelfApply
                  onClick={() => {
                    setActiveAddModal(false);
                    addShelf();
                  }}
                >
                  확인
                </AddShelfApply>
              </AddShelfApplyBox>
            </AddShelfModal>
          </AddShelfModalFrame>
        )}
        <ShelvesTool onClick={() => setActiveDeleteModal(true)}>
          <ThreeDotsVerticalIcon />
        </ShelvesTool>
        {ActiveDeleteModal && (
          <DeleteShelfModalFrame>
            <DeleteShelfModal>
              <DeleteShelfHeader>책장 편집</DeleteShelfHeader>
              <DeleteShelfSelectAllFrame>
                <label>
                  <input type="checkbox" onClick={selectAll} />
                  <DeleteShelfSelectAllContent>
                    전체 선택
                  </DeleteShelfSelectAllContent>
                </label>
                <DeleteShelfSelectDelete onClick={goDelete}>
                  삭제
                </DeleteShelfSelectDelete>
              </DeleteShelfSelectAllFrame>
              <DeleteShelfSelectFrame>
                {user_shelves.map(({ shelf_id, shelf_name, book_image }) => (
                  <DeleteShelfLabel key={shelf_id}>
                    <DeleteShelfFrame>
                      <input
                        type="checkbox"
                        value={shelf_id}
                        onClick={handleDelete}
                      />
                      <DeleteShelfContent>
                        <LibraryIcon />
                      </DeleteShelfContent>
                      <DeleteShelfContent>{shelf_name}</DeleteShelfContent>
                    </DeleteShelfFrame>
                    <DeleteShelfFrame>{book_image.length}권</DeleteShelfFrame>
                  </DeleteShelfLabel>
                ))}
              </DeleteShelfSelectFrame>
              <DeleteShelfApply
                onClick={() => {
                  setActiveDeleteModal(false);
                }}
              >
                확인
              </DeleteShelfApply>
            </DeleteShelfModal>
          </DeleteShelfModalFrame>
        )}
      </ShelvesTools>
    </ShelvesFilterBox>
  );
};

const ShelvesFilterBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70rem;
  min-width: 40rem;
  padding: 15px 0px;
`;

const ShelvesFilter = styled.div`
  color: rgb(100, 100, 100);
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
`;

const ShelvesTools = styled.div`
  display: flex;
`;

const ShelvesTool = styled.span`
  margin-left: 10px;
  cursor: pointer;
`;

const AddShelfModalFrame = styled.div`
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

const AddShelfModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 16rem;
  z-index: 9901;
  background-color: white;
  border-radius: 5px;
  overflow: hidden;
`;

const AddShelfHeader = styled.div`
  margin-top: 30px;
  font-weight: bold;
`;

const AddShelfInputName = styled.input`
  width: 13rem;
  height: 50px;
  margin-top: 30px;
  padding-left: 10px;
  border: 1px solid rgb(223, 223, 223);
  border-radius: 10px;
`;

const AddShelfApplyBox = styled.div`
  display: flex;
  width: 100%;
  height: 3rem;
  margin-top: 30px;
  border-radius: 5px;
`;

const AddShelfApply = styled.button`
  height: 100%;
  cursor: pointer;
  ${props =>
    props.value === 'cancel'
      ? `background-color:rgb(223, 223, 223); flex-grow:2;`
      : `font-weight: bold; background-color:${props.theme.yellow}; flex-grow:3;`};
`;

const DeleteShelfModalFrame = styled.div`
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

const DeleteShelfModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20rem;
  z-index: 9901;
  background-color: white;
  border-radius: 5px;
  overflow: hidden;
`;

const DeleteShelfHeader = styled.div`
  margin-top: 30px;
  font-weight: bold;
`;

const DeleteShelfSelectAllFrame = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px 20px 10px 20px;
  border-bottom: 1px solid rgb(223, 223, 223);
`;

const DeleteShelfSelectAllContent = styled.span`
  margin-left: 10px;
  font-size: 15px;
  color: ${props => props.theme.black};
`;

const DeleteShelfSelectDelete = styled.button`
  color: red;
`;

const DeleteShelfSelectFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
`;

const DeleteShelfLabel = styled.label`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px 20px;
`;

const DeleteShelfFrame = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  color: ${props => props.theme.black};
`;

const DeleteShelfContent = styled.span`
  margin-left: 8px;
  font-size: 15px;
  color: ${props => props.theme.black};
`;

const DeleteShelfApply = styled.button`
  width: 100%;
  height: 3rem;
  margin-top: 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  background-color: ${props => props.theme.yellow};
`;

const DownArrowIcon = styled(DownArrow)`
  width: 10px;
`;

const PlusLgIcon = styled(PlusLg)`
  width: 15px;
`;

const ThreeDotsVerticalIcon = styled(ThreeDotsVertical)`
  width: 15px;
`;

const LibraryIcon = styled(Library)`
  width: 15px;
`;

export default ShelvesNav;
