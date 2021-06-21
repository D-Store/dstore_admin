import React from "react";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="Template">
      <div className="MainBox">
        <div className="SignUp-title">회원가입</div>
        <div className="SignUp-main-box">
          <div className="SignUp-main-box-id">
            <input type="text" placeholder="아이디" className="idBox" />
            <div className="idBtn">메일인증</div>
          </div>
          <div className="SignUp-main-box-options">
            <input type="text" placeholder="이름" className="nameBox" />
            <input
              type="password"
              placeholder="비밀번호"
              className="passwordBox"
            />
            <input
              type="password"
              placeholder="비밀번호 확인"
              className="passwordCheckBox"
            />
          </div>
          <div className="SignUpBtn">회원가입</div>
        </div>
        <div className="goLogin">
          <a href="/SignIn">로그인으로 가기</a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
