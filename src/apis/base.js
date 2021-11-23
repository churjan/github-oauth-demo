import axios from 'axios';
import qs from 'qs';
import './interceptor';

export function post(url = '', data = {}, config = {}) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, qs.stringify(data), config)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
export function postJSON(url = '', data = {}, config = {}) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, qs.parse(data), config)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
export function get(url = '', config = {}) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, config)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
export function file(url = '', data = {}, config = {}) {
  const form = new FormData();
  Object.keys(data).forEach((key) => {
    form.append(key, data[key]);
  });
  return new Promise((resolve, reject) => {
    axios
      .post(url, form, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        ...config,
      })
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
