import axios from 'axios'


// Send a POST request
function Http(url = '', type = 'get', obj = {}) {
  return axios({
    method: type,
    url: url,
    data: obj
  });
}


export default {
  get(url) {
    return Http(url, 'get')
  },
}
