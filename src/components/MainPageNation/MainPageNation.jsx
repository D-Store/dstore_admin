import React from "react";
import "./MainPageNation.css";
import {
  mainPageNumState,
  mainTotalPageNumState,
} from "../../stores/mainState";
import { useRecoilState } from "recoil";

const MainPageNation = () => {
  const [pageNum, setPageNum] = useRecoilState(mainPageNumState);
  const [totalPage, setTotalPage] = useRecoilState(mainTotalPageNumState);

  const goLeft = (pageNum) => {
    console.log(pageNum);
    if (pageNum === 0) {
      return pageNum;
    } else {
      setPageNum(pageNum - 1);
    }
  };

  const goRight = (pageNum, totalPage) => {
    console.log(pageNum);
    if (pageNum === totalPage - 1) {
      return pageNum;
    } else {
      setPageNum(pageNum + 1);
    }
  };

  return (
    <div className="pageNation">
      <div
        className="leftBtn"
        onClick={() => {
          goLeft(pageNum);
        }}
      >
        앞
      </div>
      <div className="pageNum">{pageNum + 1}</div>
      <div
        className="rightBtn"
        onClick={() => {
          goRight(pageNum, totalPage);
        }}
      >
        뒤
      </div>
    </div>
  );
};

export default MainPageNation;
