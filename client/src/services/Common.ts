import axios from "axios";

export const APIServices = {

  getUserData(url: string) {
    return axios.get(url);
  },

};