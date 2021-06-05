import React from 'react'
import { useState } from 'react'
import UserInfoApi from '../../assets/Api/UserInfo/UserInfoApi'

const useInfoHook = () => {
    
    const getUsers = async (pageNum) => {
        const response = await UserInfoApi.getUserList(pageNum);

        return response;
    }

    const getAdmins = async (pageNum) => {
        const response = await UserInfoApi.getAdminList(pageNum);

        return response;
    }
    
    const [pageNum,setPageNum] = useState(0);
    const [totalPage,setTotalPage] = useState(0);
    const [show,setShow] = useState(true);
    const [user,setUser] = useState([]);

    const goLeft = (pageNum) => {
        if(pageNum===0){
            return pageNum
        }else{
            setPageNum(pageNum - 1)
        }
    }

    const goRight = (pageNum,totalPage) => {
        if(pageNum===totalPage-1){
            return pageNum
        }else{
            setPageNum(pageNum + 1)
        }
    }

    const showUser = () => {
        setShow(true)
        setPageNum(0)
    }

    const showAdmin = () => {
        setShow(false)
        setPageNum(0)
    }

    const deleteUser = async (id) => {
        
       const response = await UserInfoApi.deleteUser(id)
       

    }

    const changeRole = async (id) =>{
        const response = await UserInfoApi.changeRole(id)
    }

    return { 
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
        deleteUser,
        changeRole
    }
}

export default useInfoHook;