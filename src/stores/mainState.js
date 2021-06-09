import {atom} from "recoil";

const mainPageNumState = atom({
    key:"mainPageNum",
    default:0,
})

const mainTotalPageNumState = atom({
    key:"mainTotalPage",
    default:0,
})

const mainSearchState = atom({
    key:"mainSearchState",
    default:"",
})

export { mainPageNumState,mainTotalPageNumState }