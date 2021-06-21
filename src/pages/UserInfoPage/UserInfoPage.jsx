import React from "react";
import Header from "../../components/common/Header/Header";
import UserInfo from "../../components/UserInfo/UserInfo";
import UserInfoList from "../../components/UserInfoList/UserInfoList";
import UserInfoPageNation from "../../components/UserInfoPageNation/UserInfoPageNation";

const UserInfoPage = () => {
  return (
    <>
      <Header />
      <UserInfo />
      <UserInfoList />
      <UserInfoPageNation />
    </>
  );
};

export default UserInfoPage;
