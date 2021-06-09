import React from 'react'
import "./Main.css"

const Main = () => {
    return(
        <div className="Mainform">
        <div className="MainComponent">
            <div className="Main-title">
                <div className="Main-title-titleBox">
                    <img 
                    className="Main-title-img"
                    src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F2438573358070C1535"
                    />
                    <div className="Main-title-mainTitle">
                        프로젝트 보기
                    </div>
                </div>
                <div className="Main-title-options">
                    <div className="search">
                    <input />
                    </div>
                </div>
            </div>
        </div>

    </div>
    )
}

export default Main;