import axios from 'axios';
 

const BASE_URL = "https://api.themoviedb.org/3"
const API_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTI2ZDJlNmQxNTY4OGVmNjZmZjZjMjdiMDQxZDljZSIsInN1YiI6IjY0ZjQ1ZGQyM2Q0M2UwMDBhY2ZkYzJiMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fehMrhPs5vyQoQHsDp1sVmjWwEyA4NabNpjONVD3gfg";

const headers = {
    Authorization:"bearer " + API_TOKEN
}

export const GET = async (url,params) => {
    try{
    const data = await axios.get(
        BASE_URL + url , {
            headers,
            params
     })
    return data
    }
    catch(err){
        console.log(err)
    }
}