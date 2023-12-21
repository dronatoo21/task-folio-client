import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import Auth from "../Firebase/firebase.config";


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (eamil, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(Auth, eamil, password)
    }

    const loginUser = (eamil, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(Auth , eamil, password)
    }

    const googleLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(Auth, provider); 
    }

    const FaceBookLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(Auth, provider)
    }

    const logout = () => {
        setLoading(true);
        return signOut(Auth);
    }

    useEffect(()=>{
        const unsbsCribe = onAuthStateChanged(Auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unsbsCribe();
        }
    },[]);

    const authInfo = {loginUser, googleLogin, user, logout, createUser, loading, FaceBookLogin}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;