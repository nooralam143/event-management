import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/Firebase.config";
export const AuthContex = createContext(null);

const auth =getAuth(app);
// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null);
    const createUser =(email, password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn = (email, password)=>{
        signInWithEmailAndPassword(auth, email, password);
    }
    const logOut =()=>{
        return signOut(auth)
    }
    useEffect(()=>{
      const unSubscribe =  onAuthStateChanged(auth, currentUser=>{
            console.log('uer in the auth state change',currentUser);
            setUser(currentUser);
        });
        return ()=>{
            unSubscribe();
        }
    },[])
    const Authinfo ={
        user,
        createUser,
        signIn,
        logOut,
    }
    return (
        <AuthContex.Provider value={Authinfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;