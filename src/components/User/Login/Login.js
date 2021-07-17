import React from 'react';
import { Button } from 'react-bootstrap';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useContext } from 'react';
import { UserContext } from '../../../App';

const Login = () => {
    const [user, setUser] = useContext(UserContext);

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    };

    const provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleLogin = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                const userInfo = { email: user.email, name: user.displayName, photo: user.photoURL };
                setUser(userInfo);
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
        userToken();
    };

    const userToken = () => {
        firebase.auth().currentUser?.getIdToken(/* forceRefresh */ true).then(function (idToken) {
            sessionStorage.setItem('token', idToken)
            console.log(idToken)
        }).catch(function (error) {
            console.log(error)
        });
    };

    return (
        <div>
            <Button onClick={handleGoogleLogin}>Login</Button>
        </div>
    );
};

export default Login;