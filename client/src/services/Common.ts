import axios from "axios";

export const APIServices = {

  getUserData(url: string) {
    return axios.get(url);
  },
  getUserDetails(url: string, data:any) {
    return axios.get(url,data);
  },

};