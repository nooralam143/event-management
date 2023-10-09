import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/Firebase.config";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);

const auth =getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null);
    const [loading, setLoading]=useState(true);
    const createUser =(email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn = (email, password)=>{
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password);
    }
    const logOut =()=>{
        setLoading(true);
        return signOut(auth)
    }
    useEffect(()=>{
      const unSubscribe =  onAuthStateChanged(auth, currentUser=>{
            console.log('uer in the auth state change',currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return ()=>{
            unSubscribe();
        }
    },[])
    const Authinfo ={
        user,
        loading,
        createUser,
        signIn,
        logOut,
    }
    return (
        <AuthContext.Provider value={Authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes={
    children: PropTypes.node
  }