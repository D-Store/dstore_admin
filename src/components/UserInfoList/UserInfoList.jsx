import React, { useCallback, useEffect } from "react";
import userInfoHook from "../../Hooks/UserInfo/useInfoHook";
import titleImg from "../../assets/Img/UserInfo/user.png";
import "./UserInfoList.css";
import { useRecoilState } from "recoil";
import {
  pageNumState,
  totalPageState,
  showState,
  userState,
} from "../../stores/state";

const UserInfoList = () => {
  const { changeRoleAdmin, deleteUser, getUsers, getAdmins, changeRoleUser } =
    userInfoHook();
  const [pageNum, setPageNum] = useRecoilState(pageNumState);
  const [totalPage, setTotalPage] = useRecoilState(totalPageState);
  const [show, setShow] = useRecoilState(showState);
  const [user, setUser] = useRecoilState(userState);

  useEffect(async () => {
    show
      ? getUsers(pageNum).then((res) => {
          setUser(res.data.users);
          setTotalPage(res.data.totalPages);
        })
      : getAdmins(pageNum).then((res) => {
          setUser(res.data.users);
          setTotalPage(res.data.totalPages);
        });
  }, [show]);

  return (
    <div className="userInfo-options">
      <table className="userInfo-options-table">
        <thead>
          <tr>
            <th className="userInfo-options-table-th profile">프로필</th>
            <th className="userInfo-options-table-th email">이메일</th>
            <th className="userInfo-options-table-th name">이름</th>
            <th className="userInfo-options-table-th role">역할</th>
            <th className="userInfo-options-table-th delete">삭제여부</th>
          </tr>
        </thead>
        <tbody>
          {show
            ? user.map((data) =>
                data.onDelete ? (
                  <tr className="onDelete" key={data.id}>
                    <td className="userInfo-options-table-td profile">
                      {data.profileImage ? (
                        <img
                          src={data.profileImage}
                          className="userInfo-options-table-td-userImg"
                        />
                      ) : (
                        <img
                          src={titleImg}
                          className="userInfo-options-table-td-userImg"
                        />
                      )}
                    </td>
                    <td className="userInfo-options-table-td email">
                      {data.email}
                    </td>
                    <td className="userInfo-options-table-td name">
                      {data.name}
                    </td>
                    <td className="userInfo-options-table-td role">
                      {data.role}
                    </td>
                    <td className="userInfo-options-table-td">
                      <div>삭제</div>
                    </td>
                  </tr>
                ) : (
                  <tr>
                    <td className="userInfo-options-table-td profile">
                      {data.profileImage ? (
                        <img
                          src={data.profileImage}
                          className="userInfo-options-table-td-userImg"
                        />
                      ) : (
                        <img
                          src={titleImg}
                          className="userInfo-options-table-td-userImg"
                        />
                      )}
                    </td>
                    <td className="userInfo-options-table-td email">
                      {data.email}
                    </td>
                    <td className="userInfo-options-table-td name">
                      {data.name}
                    </td>
                    <td
                      className="userInfo-options-table-td role"
                      onClick={() => {
                        changeRoleAdmin(data.id, pageNum);
                      }}
                    >
                      {data.role}
                    </td>
                    <td className="userInfo-options-table-td">
                      <div onClick={() => deleteUser(data.id)}>삭제</div>
                    </td>
                  </tr>
                )
              )
            : user.map((data) =>
                data.onDelete ? (
                  <tr className="onDelete" key={data.id}>
                    <td className="userInfo-options-table-td profile">
                      {data.profileImage ? (
                        <img
                          src={data.profileImage}
                          className="userInfo-options-table-td-userImg"
                        />
                      ) : (
                        <img
                          src={titleImg}
                          className="userInfo-options-table-td-userImg"
                        />
                      )}
                    </td>
                    <td className="userInfo-options-table-td email">
                      {data.email}
                    </td>
                    <td className="userInfo-options-table-td name">
                      {data.name}
                    </td>
                    <td className="userInfo-options-table-td role">
                      {data.role}
                    </td>
                    <td className="userInfo-options-table-td">
                      <div>삭제</div>
                    </td>
                  </tr>
                ) : (
                  <tr>
                    <td className="userInfo-options-table-td profile">
                      {data.profileImage ? (
                        <img
                          src={data.profileImage}
                          className="userInfo-options-table-td-userImg"
                        />
                      ) : (
                        <img
                          src={titleImg}
                          className="userInfo-options-table-td-userImg"
                        />
                      )}
                    </td>
                    <td className="userInfo-options-table-td email">
                      {data.email}
                    </td>
                    <td className="userInfo-options-table-td name">
                      {data.name}
                    </td>
                    <td
                      className="userInfo-options-table-td role"
                      onClick={() => {
                        changeRoleUser(data.id);
                      }}
                    >
                      {data.role}
                    </td>
                    <td className="userInfo-options-table-td">
                      <div
                        onClick={() => {
                          deleteUser(data.id);
                        }}
                      >
                        삭제
                      </div>
                    </td>
                  </tr>
                )
              )}
        </tbody>
      </table>
    </div>
  );
};

export default UserInfoList;
