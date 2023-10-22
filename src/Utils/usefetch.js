import {GET} from './api'
import {useState,useEffect} from 'react';

const UseFetch = (url) => {
    const [loading,setloading] =  useState(null);
    const [data,setdata] = useState(null);
    const [error,seterror] = useState(null);
    
    useEffect(()=>{
        setloading('Loading....');
        setdata(null);
        seterror(null);

        GET(url).then(res => setdata(res)).catch(err => seterror(err))

    },[url])

    return {loading,data,error}
}

export default UseFetch