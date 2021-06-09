import React from 'react'
import Header from '../../components/common/Header/Header';
import Main from '../../components/Main/Main';
import MainList from '../../components/MainList/MainList';
import MainPageNation from '../../components/MainPageNation/MainPageNation';


const MainPage = () => {
    return(
        <>
            <Header/>
            <Main/>
            <MainList/>
            <MainPageNation/>
        </>
    )
}

export default MainPage;