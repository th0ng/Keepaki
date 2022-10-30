import axios from "axios";
const baseUrl = '/api/notes';

let token = null;

const setToken = (newToken) => {
    token = `bearer ${newToken}`;
};

const getAll = () => {
    const request = axios.get(baseUrl);
    return request.then(response => response.data);
}

const create = async newObject => {
    const config = {
        headers: {Authorization: token},
    }
    const request = axios.post(baseUrl, newObject, config);
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
export default {getAll, create, remove, setToken}