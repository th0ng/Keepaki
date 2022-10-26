import axios from "axios";
const baseUrl = '/api/notes';

const getAll = () => {
    const request = axios.get(baseUrl);
    return request.then(response => response.data);
}
// async function getAll (baseUrl) {
//     let response = await fetch(url);
//     let data = await response.json();
//     return data;
//   }

const create = newObject => {
    const request = axios.post(baseUrl, newObject);
    return request.then(response => response.data);
}

const remove = id => {
    const elementUrl = `/api/notes/${id}`;
    console.log(elementUrl);
    return axios.delete(elementUrl)
        .catch(error => {console.error('There was an error!', error);
    });
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {getAll, create, remove}