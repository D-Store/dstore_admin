import {
    atom,

} from "recoil";

const pageNumState = atom({
    key:"pageNum",
    default:0,
})

const totalPageState = atom({
    key:"totalPage",
    default:0,
})

const showState = atom({
    key:"show",
    default:true,
})

const SearchState = atom({
    key:"mainSearchState",
    default:"",
})

const userState = atom({
    key:"userState",
    default:[],
})

const selectState = atom({
    key:"selectState",
    default:"이름",
})

export {pageNumState,totalPageState,showState,SearchState,userState,selectState};