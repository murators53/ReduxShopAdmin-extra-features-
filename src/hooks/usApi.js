import axios from "axios"

 function useApi () {
    axios.defaults.baseURL='http://localhost:3004'

    return axios
 }
 export default useApi