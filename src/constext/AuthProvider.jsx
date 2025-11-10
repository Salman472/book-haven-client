import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

    const googleProvider = new GoogleAuthProvider();
    // create user with email and password 
    // error
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // login with email and password
    const logInUserWithEmailAndPass=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    // sign in with google
    const googleSignIn=()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    // update user
    const updateUser=(updateData)=>{
        return updateProfile(auth.currentUser,updateData)
    }

    // log out user
    const logOutUser=()=>{
        return signOut(auth)
    }

    // manage user
    useEffect(()=>{
        
        const unSubscirbe=onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unSubscirbe()
        }
    },[])


    const authInfo={
        createUser,
        googleSignIn,
        user,
        setUser,
        setLoading,
        loading,
        logOutUser,
        updateUser,
        logInUserWithEmailAndPass,
        
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;