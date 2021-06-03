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
            <div className="Main-options">
                <table className="Main-options-table">
                    <thead>
                        <tr>
                            <th className="Main-options-table-th title">
                                제목
                            </th>
                            <th className="Main-options-table-th leader">
                                작성자(리더)
                            </th>
                            <th className="Main-options-table-th content">
                                내용
                            </th>
                            <th className="Main-options-table-th createTime">
                                생성 날짜
                            </th>
                            <th className="Main-options-table-th like">
                                좋아요
                            </th>
                            <th className="Main-options-table-th tages">
                                태그
                            </th>
                            <th className="Main-options-table-th MainDelete">
                                삭제여부
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="Main-options-table-td title">
                                디스토어
                            </td>
                            <td className="Main-options-table-td leader">
                                조민수
                            </td>
                            <td className="Main-options-table-td content">
                                가나다라마바사아자차카타파하
                            </td>
                            <td className="Main-options-table-td createTime">
                                2021-05-09 02:14:00
                            </td>
                            <td className="Main-options-table-td like">
                                18개
                            </td>
                            <td className="Main-options-table-td tages">
                                #디스토어#개발#나르샤#대소고
                            </td>
                            <td className="Main-options-table-td MainDelete">
                                <div>
                                    삭제
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="pageNation">
                <div className="leftBtn">
                    앞
                </div>
                <div className="pageNum">
                    1
                </div>
                <div className="rightBtn">
                    뒤
                </div>
            </div>
        </div>

    </div>
    )
}

export default Main;