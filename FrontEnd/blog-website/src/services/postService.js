import axios from 'axios';

const host = 'http://localhost:9999/api';

const postService = {

    getPost: function (id) {
        return axios.get(`${host}/posts${id ? `/${id}` : ''}`);
    },
    create: function (title, description, content) {
        return axios.post(`${host}/posts`,{
                title,
                description,
                content
        },{
            withCredentials: true
        }).then(user => {
            console.log(user);
        });
    },
    edit: function () {
        return axios.put();
    },
    delete: function (id) {
        return axios.delete(`${host}/posts/${id}`,{
            withCredentials:true
        }).then(res => console.log(res));
    }
}

export default postService;