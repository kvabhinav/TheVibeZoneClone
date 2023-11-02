import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export default function useAuthContext(){
    const context = useContext(AuthContext)

    if (!context) {
        throw Error('please use useAuthContext hook  inside AuthContextProvider context')
    }

    return context
}