import { SERVER } from "../../../config/config.json";
import axios from "axios";

class BannerApi {
  async getBannerList() {
    const response = await axios.get(`${SERVER}/admin/banner`);

    return response;
  }

  async addBanner(file) {
    const response = await axios.post(`${SERVER}/admin/banner`, file, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  }
}

export default new BannerApi();
