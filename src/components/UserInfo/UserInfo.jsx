import React,{useEffect,useState} from 'react'
import "./UserInfo.css"
import titleImg from "../../assets/Img/UserInfo/user.png"
import useInfoHook from "../../Hooks/UserInfo/useInfoHook"

const UserInfo = () => {
    
    const { 
        getUsers,
        getAdmins,
        pageNum,
        setPageNum,
        goLeft,
        goRight,
        user,
        setUser,
        show,
        setShow,
        showUser,
        showAdmin,
        totalPage,
        setTotalPage,
        deleteUser
     } = useInfoHook();

    useEffect( async ()=>{
        show ? (
            getUsers(pageNum).then((res)=>{
                
                setUser(res.data.users);
                setTotalPage(res.data.totalPages);
            })
        ):(
            getAdmins(pageNum).then((res)=>{
                setUser(res.data.users);
                setTotalPage(res.data.totalPages);
                
            })
        )
    
    },[pageNum,show])
    
    return(
        <div className="UserInfo">
            <div className="userInfoMainBox">
                <div className="userInfo-title">
                    <div className="userInfo-title-titleBox">
                        <img 
                        className="userInfo-title-img"
                        src={titleImg}
                        />
                        <div className="userInfo-title-mainTitle">
                            정보 보기
                        </div>
                    </div>
                    <div className="userInfo-title-options">
                        <div className={show?"user show":"user"} onClick={()=>{showUser()}}>
                            유저                        
                        </div>
                        <div className={show?"admin":"admin show"} onClick={()=>{showAdmin()}}>
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
                            {
                                user.map((data)=>(
                                    
                                    <>
                                    {console.log(data)}
                                    {data.onDelete?(
                                        <tr className="onDelete">
                                        <td className="userInfo-options-table-td profile">
                                            {data.profileImage ? (<img
                                                src={data.profileImage}
                                                className="userInfo-options-table-td-userImg"
                                            />):(
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
                                            <div onClick={()=>{deleteUser(data.id)}}>
                                                삭제
                                            </div>
                                        </td>
                                    </tr>
                                    ):(
                                        <tr>
                                        <td className="userInfo-options-table-td profile">
                                            {data.profileImage ? (<img
                                                src={data.profileImage}
                                                className="userInfo-options-table-td-userImg"
                                            />):(
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
                                            <div onClick={()=>{deleteUser(data.id)}}>
                                                삭제
                                            </div>
                                        </td>
                                    </tr>
                                    )}
                                    
                                    </>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
                <div className="pageNation">
                    <div className="userInfoLeftBtn" onClick={()=>{goLeft(pageNum)}} >
                        이전
                    </div>
                    <div className="pageNum">
                        {pageNum+1}
                    </div>
                    <div className="userInfoRightBtn" onClick={()=>{goRight(pageNum,totalPage)}}>
                        다음
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UserInfo;