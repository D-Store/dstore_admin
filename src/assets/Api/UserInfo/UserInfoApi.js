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
        

    }
}

export default new UserInfoApi();