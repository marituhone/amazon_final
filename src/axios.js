import axios  from "axios"
const instance = axios.create ({
    baseURL: 'http://127.0.0.1:5001/clone-e9237/us-central1/api'     //api function which is cloud function

})

export default instance;


