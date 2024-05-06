import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import axios from "axios";


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const SignIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail }
            setUser(currentUser)
            setLoading(false); 
            // if user is exist issue a token
            if (currentUser) {

                axios.post('https://car-doctor-server-beryl-seven.vercel.app/jwt', loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log('token response: ', res.data)
                    })
            }
            else {
                axios.post('https://car-doctor-server-beryl-seven.vercel.app/logout', loggedUser, {
                    withCredentials: true
                })
                .then(res =>{
                    console.log(res.data)
                })
            }
        });
        return () => {
            return unSubscribe();
        }
    }, [])

    const authInfo = {
        user, loading,
        createUser,
        SignIn,
        logOut,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;