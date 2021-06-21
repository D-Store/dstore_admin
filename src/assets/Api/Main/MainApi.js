import { SERVER } from "../../../config/config.json";
import axios from "axios";

class MainApi {
  async getProjectList(pageNum) {
    const size = 5;

    const response = await axios.get(
      `${SERVER}/admin/pj?page=${pageNum}&size=${size}&sort=id,desc`
    );

    return response;
  }

  async deleteProjectForServer(id) {
    const response = await axios.delete(`${SERVER}/admin/pj/${id}`);

    console.log(response);
  }
}

export default new MainApi();
