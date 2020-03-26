import axios from "axios";
const serviceAPI = "url";
const BackendInstance = axios.create({
  baseURL: serviceAPI.apiEndPoint,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  timeout: 60000
});

const BackendService = function(options) {
  return BackendInstance(options);
};

export default BackendService;
