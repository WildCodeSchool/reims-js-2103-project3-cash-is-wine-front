import axios from 'axios';

function ApiCall(url) {
  axios.get(url)
    .then((response) => (console.log(response.data)));
}

export default ApiCall;
