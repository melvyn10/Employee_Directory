import axios from "axios";

const BASEURL = "https://my.api.mockaroo.com/employee_directory.json";
const APIKEY = "?key=20ead2c0";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  getData: function() {
    return axios.get(BASEURL + APIKEY);
  }
};
