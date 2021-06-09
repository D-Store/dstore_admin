import axios from "axios";
import { SERVER } from "../../../config/config.json";

class UserInfoApi { 
    async getUserList(pageNum){
        
        const size = 5;


        const response = await axios.get(`${SERVER}/admin/user/general?page=${pageNum}&size=${size}&sort=id,desc`)

        return response
    }

    async getAdminList(pageNum){
        const size = 5;

        const response = await axios.get(`${SERVER}/admin/user/adminUser?page=${pageNum}&size=${size}&sort=id,desc`)

        return response
    }

    async deleteUser(id){
        
        const response = await axios.delete(`${SERVER}/admin/user/${id}`)
        
        return response
    }

    async changeRoleAdmin(id){
        const response = await axios.put(`${SERVER}/admin/user/permission/${id}`)

        console.log(response)
    }

    async changeRoleUser(id){
        const response = await axios.delete(`${SERVER}/admin/user/permission/${id}`)

        
    }

    async searchForName(pageNum,name){

        const size=5;
        const response = await axios.get(`${SERVER}/admin/user/search`,{params:{
            page:pageNum,
            size:size,
            sort:"id,desc",
            keyword:name,
            r:"USER",
            m:"name"
        }})
        
        return response
    }

    async searchForEmail(pageNum,name){
        const size=5;
        const response = await axios.get(`${SERVER}/admin/user/search`,{params:{
            page:pageNum,
            size:size,
            sort:"id,desc",
            keyword:name,
            r:"USER",
            m:"email"
        }})
        return response
    }

    async searchAdminForName(pageNum,name){
        const size=5;
        const response = await axios.get(`${SERVER}/admin/user/search`,{params:{
            page:pageNum,
            size:size,
            sort:"id,desc",
            keyword:name,
            r:"ADMIN",
            m:"name"
        }})
        return response
    }
    async searchAdminForEmail(pageNum,name){
        const size=5;
        const response = await axios.get(`${SERVER}/admin/user/search`,{params:{
            page:pageNum,
            size:size,
            sort:"id,desc",
            keyword:name,
            r:"ADMIN",
            m:"email"
        }})
        return response
    }
}

export default new UserInfoApi();