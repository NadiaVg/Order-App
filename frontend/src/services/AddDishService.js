import axios from "axios";
import qs from 'qs';
import http from "./http-common";

const getAll = () => {
  return http.get("/dishes");
};

const get = id => {
  return http.get(`/dishes/${id}`);
};

const create = data => {
  // let dataToSend = new FormData();
  // dataToSend.append("name", data.name);

  var data = qs.stringify({
    'name': data.name
  });
  var config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://orderapp.onrender.com/api/dishes',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: data
  };

  return axios(config);

  // const dataToSend = JSON.stringify({ "name": data.name });
  // return http.post("/dishes", dataToSend);
};

const update = (id, data) => {var data = qs.stringify({
  'name': data.name
});
var config = {
  method: 'put',
  maxBodyLength: Infinity,
  url: `https://orderapp.onrender.com/dishes/${id}`,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  data: data
};

return axios(config);

};

const remove = id => {
  return http.delete(`/dishes/${id}`);
};


const AddDishService = {
  getAll,
  get,
  create,
  update,
  remove
};

export default AddDishService;