import axios  from "axios"
const instance = axios.create ({
    baseURL: '...'     //api function which is cloud function

})

export default instance;