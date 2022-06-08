import axios from "axios"

// Make a request for a user with a given ID
const apiGet = (method, url, param)=>{

    return axios.get('/user?ID=12345')
        .then(function (response) {
            // handle success
            console.log(response);
            return response
        })
        .catch(function (error) {
            return error
            // handle error
            console.log(error);
        })

}