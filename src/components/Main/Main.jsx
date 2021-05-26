import React from 'react'


const Main = () => {
    return(
        <div className="UserInfo">
        <div className="userInfoMainBox">
            <div className="userInfo-title">
                <div className="userInfo-title-titleBox">
                    <img 
                    className="userInfo-title-img"
                    src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F2438573358070C1535"
                    />
                    <div className="userInfo-title-mainTitle">
                        정보 보기
                    </div>
                </div>
                <div className="userInfo-title-options">
                    <div className="user">
                        유저                        
                    </div>
                    <div className="admin">
                        어드민
                    </div>
                    <div className="search">
                    <input />
                    </div>
                </div>
            </div>
            <div className="userInfo-options">
                <table className="userInfo-options-table">
                    <thead>
                        <tr>
                            <th className="userInfo-options-table-th profile">
                                프로필
                            </th>
                            <th className="userInfo-options-table-th email">
                                이메일
                            </th>
                            <th className="userInfo-options-table-th name">
                                이름
                            </th>
                            <th className="userInfo-options-table-th role">
                                역할
                            </th>
                            <th className="userInfo-options-table-th delete">
                                삭제여부
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="userInfo-options-table-td profile">
                                <img 
                                src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F2438573358070C1535"
                                className="userInfo-options-table-td-userImg"/>
                            </td>
                            <td className="userInfo-options-table-td email">
                                test1234@test.com
                            </td>
                            <td className="userInfo-options-table-td name">
                                테스터
                            </td>
                            <td className="userInfo-options-table-td role">
                                user
                            </td>
                            <td className="userInfo-options-table-td">
                                <div>
                                    삭제
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="pageNation">
                <div className="leftBtn">
                    .
                </div>
                <div className="pageNum">
                    1
                </div>
                <div className="rightBtn">

                </div>
            </div>
        </div>

    </div>
    )
}

export default Main;