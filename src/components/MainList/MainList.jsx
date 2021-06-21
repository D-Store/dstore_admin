import React, { useEffect } from "react";
import "./MainList.css";
import useMainHook from "../../Hooks/Main/useMainHook";
import { useRecoilState } from "recoil";
import {
  mainPageNumState,
  mainTotalPageNumState,
} from "../../stores/mainState";
import MainApi from "../../assets/Api/Main/MainApi";
import TimeCounting from "time-counting";
import moment from "moment";
import "moment/locale/ko";

const MainList = () => {
  const { getProject, project, setProject } = useMainHook();
  const [pageNum, setPageNum] = useRecoilState(mainPageNumState);
  const [totalPage, setTotalPage] = useRecoilState(mainTotalPageNumState);
  useEffect(async () => {
    getProject(pageNum).then((res) => {
      setProject(res.data.projectList);
      setTotalPage(res.data.totalPages);
    });
  }, [pageNum]);

  const deleteProjects = (id) => {
    const response = MainApi.deleteProjectForServer(id);
    const result = project.filter((project) => project.id === id);
  };

  return (
    <div className="Main-options">
      <table className="Main-options-table">
        <thead>
          <tr>
            <th className="Main-options-table-th title">제목</th>
            <th className="Main-options-table-th leader">작성자(리더)</th>
            <th className="Main-options-table-th content">내용</th>
            <th className="Main-options-table-th createTime">생성 날짜</th>
            <th className="Main-options-table-th like">좋아요</th>
            <th className="Main-options-table-th tages">태그</th>
            <th className="Main-options-table-th MainDelete">삭제여부</th>
          </tr>
        </thead>
        <tbody>
          {project.map((project) => (
            <>
              {console.log(project)}

              <tr>
                <td className="Main-options-table-td title">{project.title}</td>
                <td className="Main-options-table-td leader">
                  {project.users[0].name}
                </td>
                <td className="Main-options-table-td content">
                  <img src={project.mainPhoto.fileLocation} />
                </td>
                <td className="Main-options-table-td createTime">
                  {moment(project.createAt).format("YYYY MMMM Do")}
                  <br />
                  {moment(project.createAt).format("h:mm.ss a")}
                </td>
                <td className="Main-options-table-td like">
                  {project.likeNum}
                </td>
                <td className="Main-options-table-td tages">
                  {project.tags[0]}
                </td>
                <td
                  className="Main-options-table-td MainDelete"
                  onClick={() => {
                    deleteProjects(project.id);
                  }}
                >
                  <div>삭제</div>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MainList;
