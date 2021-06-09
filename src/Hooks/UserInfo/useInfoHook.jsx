import React, { useCallback } from 'react'
import { useState } from 'react'
import UserInfoApi from '../../assets/Api/UserInfo/UserInfoApi'
import {useSetRecoilState} from 'recoil'
import {userState} from '../../stores/state'


const useInfoHook = () => {
    const setUser =useSetRecoilState(userState)
    const getUsers = async (pageNum) => {
        const response = await UserInfoApi.getUserList(pageNum);
        console.log("asdf")
        return response;
    }

    const getAdmins = async (pageNum) => {
        const response = await UserInfoApi.getAdminList(pageNum);

        return response;
    }

    const deleteUser = async (id) => {
        await UserInfoApi.deleteUser(id);
    };

    const changeRoleAdmin = async (id,pageNum) =>{
        const response = await UserInfoApi.changeRoleAdmin(id)
        getUsers(pageNum)
    }

    const changeRoleUser = async (id) => {
        const response = await UserInfoApi.changeRoleUser(id)
    }

    const pagingSearchUserName = async (pageNum,searchValue) => {
        const response = await UserInfoApi.searchForName(pageNum,searchValue)
        
        return response
    }
    const pagingSearchUserEmail = async (pageNum,searchValue) => {
        const response = await UserInfoApi.searchForEmail(pageNum,searchValue)
        
        return response
    }

    const pagingSearchAdminName = async (pageNum,searchValue) => {
        const response = await UserInfoApi.searchAdminForName(pageNum,searchValue)
        
        return response
    }

    const pagingSearchAdminEmail = async (pageNum,searchValue) => {
        const response = await UserInfoApi.searchAdminForEmail(pageNum,searchValue)
        
        return response
    }

    return {         
        getUsers,
        getAdmins,
        deleteUser,
        changeRoleAdmin,
        changeRoleUser,
        pagingSearchUserName,
        pagingSearchUserEmail,
        pagingSearchAdminName,
        pagingSearchAdminEmail
    }
}

export default useInfoHook;