import axios from 'axios';

export const addPerson = (request) => {

    const options = {
        method : 'POST',
        url : `/api/person`,
        data : request,
    }

    return axios(options);
}