import React from "react";
import { useState } from "react";
import MainApi from "../../assets/Api/Main/MainApi";

const useMainHook = () => {
  const getProject = async (pageNum) => {
    const response = await MainApi.getProjectList(pageNum);
    return response;
  };

  const [project, setProject] = useState([]);

  const deleteProject = async (id) => {
    const response = await MainApi.deleteProjectForServer(id);
    return response;
  };

  return {
    getProject,
    project,
    setProject,
    deleteProject,
  };
};

export default useMainHook;
