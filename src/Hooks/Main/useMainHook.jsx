import React from 'react'
import { useState } from 'react'
import MainApi from '../../assets/Api/Main/MainApi'

const useMainHook = () => {

    const getProject = async (pageNum) => {
        const response = await MainApi.getProjectList(pageNum);
        return response
    }

    const [project,setProject] = useState([])

    return {
        getProject,
        project,
        setProject
    }
}

export default useMainHook;