import React from 'react';
import "./SignIn.css";

const SignIn = () => {
    return(
        <div className="Template">
            <div className="MainBox">
                <div className="MainBox-title">
                    로그인
                </div>
                <div className="SignIn-MainBox">
                    <div className="MainBox-options">
                        <input type="text" placeholder="아이디" className="idInput"/>
                        <input type="password" placeholder="비밀번호" className="passwordInput" />
                    </div>
                    <div className="MainBox-loginBtn">
                        로그인
                    </div>
                </div>
                <div className="goRegister">
                    <a href="/SignUp">회원가입으로 가기</a>
                </div>
            </div>
        </div>
    )
}

export default SignIn;