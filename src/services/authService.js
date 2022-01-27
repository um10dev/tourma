import axios from "axios";

const login = payload => {
  let config = {
    method: "POST",
    url: "",
    data: payload,
    withCredentials: true,
    crossDomain: true,
    headers: {"Content-Type" : "application/json"}
  }

  return axios(config).then().catch();
}

const logOut = () => {
  let config = {
    method: "POST",
    url: "",
    withCredentials: true,
    crossDomain: true,
    headers: {"Content-Type" : "application/json"}
  }

  return axios(config).then().catch();
}

const register = payload => {
  let config = {
    method: "POST",
    url: "",
    data: payload,
    withCredentials: true,
    withDomain: true,
    headers: {"Content-Type" : "application/json"}
  }

  return axios(config).then().catch();
}

export {login, logOut, register};