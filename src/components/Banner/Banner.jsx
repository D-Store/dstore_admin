import React, { useEffect, useState, useRef, useCallback } from "react";
import "./Banner.css";
import lol from "../../assets/Img/img.png";
import BannerApi from "../../assets/Api/Banner/BannerApi";
import { totalBannerState } from "../../stores/bannerState";
import { useRecoilState } from "recoil";

const Banner = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState([]);

  const [totalBanner, setTotalBanner] = useRecoilState(totalBannerState);

  const Form_Data = new FormData();

  const uplodingFile = async (e) => {
    files.map((file) => {
      Form_Data.append("file", file);
    });
    await BannerApi.addBanner(Form_Data)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const addFile = (e) => {
    setFiles([...files, e.target.files[0]]);
  };

  useEffect(async () => {
    const response = await BannerApi.getBannerList();
    console.log(response.data.bannerList);
    setTotalBanner(response.data.bannerList);
  }, [BannerApi.getBannerList]);
  return (
    <>
      <div className="Banners">
        <div className="Banner-main">
          <div className="BannerAdd">
            <input
              type="file"
              id="addFile"
              style={{ display: "none" }}
              onChange={addFile}
            />
            <label htmlFor="addFile" className="addlabel">
              <div>파일을 추가하시려면 클릭하세요</div>
            </label>
          </div>
          {totalBanner.map((banner) => (
            <div className="Banner" key={banner.id}>
              <img src={banner.fileLocation} alt="" />
            </div>
          ))}
        </div>
        <div className="Banner-nav">
          <div className="Banner-nav-addBanner">
            <div className="Banner-nav-addBanner-nav">업로드할 배너 목록</div>
            <div className="Banner-nav-addBanner-add">
              {files.map((file, key) => {
                return <div key={key}>{file.name}</div>;
              })}
            </div>
            <div className="Banner-nav-addBanner-btn" onClick={uplodingFile}>
              추가하기
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
