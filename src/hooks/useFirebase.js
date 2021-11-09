import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/firebase/firebase.init";
import { getAuth, getIdToken, updateProfile, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";


initializeFirebase();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const auth = getAuth();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const googleProvider = new GoogleAuthProvider();
    const [admin, setAdmin] = useState(false);
    const [token,setToken] = useState('');

    const registerUser = (email, password, name, history) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                history.replace('/');
                setError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                saveUser(email, name, 'POST');
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });
                // ...
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
                // ..
            })
            .finally(() => setLoading(false));
    }

    const googleSignIn = (location, history) => {
        setLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT');
                setError('');
                const destination = location?.state?.from || '/';
                history.replace(destination);
            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            })
            .finally(() => setLoading(false));
    }

    const userLogin = (email, password, location, history) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setError('');
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
                // ..
            })
            .finally(() => setLoading(false));
    }

    const logOut = () => {
        setLoading(true);
        signOut(auth).then(() => {
            setError('');
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
            const errorMessage = error.message;
            setError(errorMessage);
        })
            .finally(() => setLoading(false));

    }

    useEffect(() => {
        const unsibscribed = onAuthStateChanged(auth, (user) => {
            if (user?.email) {
                setUser(user);
                getIdToken(user)
                .then(idToken => {
                    setToken(idToken)
                })
            } else {
                setUser({});
            }
            setLoading(false);
        });
        return () => unsibscribed;
    }, [])

    useEffect(() => {
        fetch(`https://protected-bastion-40301.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin)
            })
    }, [user.email])

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://protected-bastion-40301.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }


    return {
        user,
        admin,
        registerUser,
        logOut,
        userLogin,
        loading,
        error,
        googleSignIn,
        token
    }
}

export default useFirebase;