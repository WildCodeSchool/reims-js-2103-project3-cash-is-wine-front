import axios from 'axios';
import { useWineList } from '../contexts/WineListContext';

function ApiCall(url) {
  const { setWineList } = useWineList();
  axios.get(url)
    .then((response) => (setWineList(response.data)));
}

export default ApiCall;
