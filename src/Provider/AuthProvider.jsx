/* eslint-disable no-unused-vars */
import { Children, createContext, useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import app from "../Firebase/Firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({Children}) => {

    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true);

    const createUser = (email,password) =>{
        // setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }


    const authInfo ={
        user,
        createUser
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
            {Children}
            </AuthContext.Provider>
            
        </div>
    );
};

export default AuthProvider;