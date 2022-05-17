/**
 * Name: : Http hook 
 * Description : Its a request client using axios
 */

import { useCallback, useEffect, useState , useRef} from "react";
import axios from "axios";


const useHttpClient = () => {
    const [isLoading, setIsLoading]= useState(false);
    const [error, setError]  = useState();
    const [show, setShow] = useState();

const activeHttpRequests = useRef([]);

const sendRequest = useCallback( async (url, method="Get",data= null) => {
    setIsLoading(true);
    const httpAbortCtrl = new AbortController();
    activeHttpRequests.current.push(httpAbortCtrl);

    try{
        const response = await axios({
            method,
            url,
            data,
            signal: httpAbortCtrl.signal
        });
        setIsLoading(false);
        return response.data;
    } catch(err) {
        setError(err);
        setShow(true);
        throw err;
    } finally {
        setIsLoading(false)
    }

}, [])

useEffect(()=>{
    const active = activeHttpRequests.current;
    return () => {
     active.forEach((abortCtrl)=>abortCtrl.abort());
    }
},[])

return {isLoading , show, error, sendRequest};
};
export default  useHttpClient;