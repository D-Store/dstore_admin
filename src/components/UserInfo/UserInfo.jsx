import React from 'react'

const UserInfo = () => {
    return(
        <div className="UserInfo">
            <div className="userInfoMainBox">
                <div className="userInfo-title">
                    정보 보기
                    <div className="user">
                        유저                        
                    </div>
                    <div className="admin">
                        어드민
                    </div>
                </div>
                <div className="userInfo-options">
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    test1234@test.com
                                </th>
                                <th>
                                    프사
                                </th>
                                <th>
                                    허세찮
                                </th>
                                <th>
                                    역할
                                </th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default UserInfo;