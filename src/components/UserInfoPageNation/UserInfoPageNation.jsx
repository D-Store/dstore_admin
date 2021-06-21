import React from "react";
import UserInfoHook from "../../Hooks/UserInfo/useInfoHook";
import "./UserInfoPageNation.css";
import { useRecoilState } from "recoil";
import {
  pageNumState,
  totalPageState,
  userState,
  showState,
  SearchState,
  selectState,
} from "../../stores/state";
import userInfoHook from "../../Hooks/UserInfo/useInfoHook";

const UserInfoPageNation = () => {
  const {
    getUsers,
    getAdmins,
    pagingSearchUserName,
    pagingSearchUserEmail,
    pagingSearchAdminName,
    pagingSearchAdminEmail,
  } = UserInfoHook();

  const [pageNum, setPageNum] = useRecoilState(pageNumState);
  const [totalPage, setTotalPage] = useRecoilState(totalPageState);
  const [user, setUser] = useRecoilState(userState);
  const [show, setShow] = useRecoilState(showState);
  const [searchValue, setSearchValue] = useRecoilState(SearchState);
  const [selectValue, setSelectValue] = useRecoilState(selectState);

  const goLeft = (pageNum) => {
    if (pageNum === 0) {
      return pageNum;
    } else {
      setPageNum(pageNum - 1);

      if (searchValue === "") {
        show
          ? getUsers(pageNum - 1).then((res) => {
              setUser(res.data.users);
            })
          : getAdmins(pageNum - 1).then((res) => {
              setUser(res.data.users);
            });
      } else {
        if (selectValue === "이름") {
          if (show === true) {
            pagingSearchUserName(pageNum - 1, searchValue).then((res) => {
              setUser(res.data.users);
            });
          } else {
            pagingSearchAdminName(pageNum - 1, searchValue).then((res) => {
              setUser(res.data.users);
            });
          }
        } else {
          if (show === true) {
            pagingSearchUserEmail(pageNum - 1, searchValue).then((res) => {
              setUser(res.data.users);
            });
          } else {
            pagingSearchAdminEmail(pageNum - 1, searchValue).then((res) => {
              setUser(res.data.users);
            });
          }
        }
      }
    }
  };

  const goRight = (pageNum, totalPage) => {
    if (pageNum === totalPage - 1) {
      return pageNum;
    } else {
      setPageNum(pageNum + 1);
      console.log(searchValue);
      if (searchValue === "") {
        show
          ? getUsers(pageNum + 1).then((res) => {
              setUser(res.data.users);
            })
          : getAdmins(pageNum + 1).then((res) => {
              setUser(res.data.users);
            });
      } else {
        if (selectValue === "이름") {
          if (show === true) {
            pagingSearchUserName(pageNum + 1, searchValue).then((res) => {
              setUser(res.data.users);
            });
          } else {
            pagingSearchAdminName(pageNum + 1, searchValue).then((res) => {
              setUser(res.data.users);
            });
          }
        } else {
          if (show === true) {
            pagingSearchUserEmail(pageNum + 1, searchValue).then((res) => {
              setUser(res.data.users);
            });
          } else {
            pagingSearchAdminEmail(pageNum + 1, searchValue).then((res) => {
              setUser(res.data.users);
            });
          }
        }
      }
    }
  };

  return (
    <div className="pageNation">
      <div
        className="userInfoLeftBtn"
        onClick={() => {
          goLeft(pageNum);
        }}
      >
        이전
      </div>
      <div className="pageNum">{pageNum + 1}</div>
      <div
        className="userInfoRightBtn"
        onClick={() => {
          goRight(pageNum, totalPage);
        }}
      >
        다음
      </div>
    </div>
  );
};

export default UserInfoPageNation;
