import React, { useEffect, useState } from "react";
import "./UserInfo.css";
import titleImg from "../../assets/Img/UserInfo/user.png";
import useInfoHook from "../../Hooks/UserInfo/useInfoHook";
import { useRecoilState } from "recoil";
import {
  pageNumState,
  showState,
  SearchState,
  userState,
  totalPageState,
  selectState,
} from "../../stores/state";
import UserInfoApi from "../../assets/Api/UserInfo/UserInfoApi";

const UserInfo = () => {
  const [pageNum, setPageNum] = useRecoilState(pageNumState);
  const [show, setShow] = useRecoilState(showState);
  const [searchValue, setSearchValue] = useRecoilState(SearchState);
  const [user, setUser] = useRecoilState(userState);
  const [totalPage, setTotalPage] = useRecoilState(totalPageState);
  const [selectValue, setSelectValue] = useRecoilState(selectState);

  const showUser = () => {
    setShow(true);
    setPageNum(0);
  };

  const showAdmin = () => {
    setShow(false);
    setPageNum(0);
  };

  const changeSelect = (e) => {
    setSelectValue(e.target.value);
  };

  const onChange = (e) => {
    setSearchValue(e.target.value);
  };

  const searchUser = async (e, searchValue) => {
    if (e.key === "Enter") {
      if (selectValue === "이름") {
        if (show === true) {
          const response = await UserInfoApi.searchForName(0, searchValue);
          setUser(response.data.users);
          setTotalPage(response.data.totalPages);
        } else {
          const response = await UserInfoApi.searchAdminForName(0, searchValue);
          setUser(response.data.users);
          setTotalPage(response.data.totalPages);
        }
      } else {
        if (show === true) {
          const response = await UserInfoApi.searchForEmail(0, searchValue);
          setUser(response.data.users);
          setTotalPage(response.data.totalPages);
        } else {
          const response = await UserInfoApi.searchAdminForEmail(
            0,
            searchValue
          );
          setUser(response.data.users);
          setTotalPage(response.data.totalPages);
        }
      }
    }
  };

  return (
    <div className="UserInfo">
      <div className="userInfoMainBox">
        <div className="userInfo-title">
          <div className="userInfo-title-titleBox">
            <img className="userInfo-title-img" src={titleImg} />
            <div className="userInfo-title-mainTitle">정보 보기</div>
          </div>
          <div className="userInfo-title-options">
            <div
              className={show ? "user show" : "user"}
              onClick={() => {
                showUser();
              }}
            >
              유저
            </div>
            <div
              className={show ? "admin" : "admin show"}
              onClick={() => {
                showAdmin();
              }}
            >
              어드민
            </div>
            <div className="search">
              <select className="search-options" onChange={changeSelect}>
                <option name="name">이름</option>
                <option name="email">이메일</option>
              </select>
              <input
                value={searchValue}
                onChange={onChange}
                onKeyPress={(e) => {
                  searchUser(e, searchValue);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
