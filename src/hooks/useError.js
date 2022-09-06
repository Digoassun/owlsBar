import {
    useState
} from "react";
import {
    toast
} from "react-toastify";

const errorNotify = (key,defaultValue) =>{
    toast.error(key, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    defaultValue=""
}
export const useError = (key,defaultValue) =>{
    const [value, setValue] = useState(()=>{
        return errorNotify(key, defaultValue)
    })
    return [value, setValue]
}