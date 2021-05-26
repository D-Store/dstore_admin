import axios from "axios";
import { SERVER } from "../../../config/config.json";

class UserInfoApi { 
    async getUserList(){
        
        const response = await axios.get(`${SERVER}/admin/user/general`)

        return response
    }
}

export default new UserInfoApi();