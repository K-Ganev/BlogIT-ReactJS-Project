import axios from 'axios';

const host = 'http://localhost:9999/api';

const userService = {

    get: function (id) {
        return axios.get(`${host}/user${id ? `/${id}` : ''}`)
        .then(user => console.log(user))
        .catch(err => console.log(err));
    },

    register: function (username, password) {
        return axios.post(`${host}/user/register`, {
            username,
            password
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    },
    login: function (username, password) {
        return axios.post(`${host}/user/login`, {
            username,
            password
        }, {
            withCredentials: true
        }).then(user => {
            return user.data;
        });
    },
    logout: function () {
        return axios.post(`${host}/user/logout`, {}, {
            withCredentials: true
        }).then(res => console.log(res));
    },
    edit: function (id,job,email,address,phone) {
        return axios.put(`${host}/user/${id}`,{
                job,
                email,
                address,
                phone
        },
        {
            withCredentials:true
        })
        .then(updated => console.log(updated))
        .catch(err => console.log(err));
    }
};

export default userService;