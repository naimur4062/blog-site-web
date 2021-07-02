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

    const handleFacebookLogin = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                const userInfo = { name: user.displayName, photo: user.photoURL };
                setUser(userInfo);
            }).catch((error) => {
                var errorMessage = error.message;
                console.log(errorMessage);
            });
    };

    return (
        <div>
            <Button onClick={handleFacebookLogin}>Login</Button>
        </div>
    );
};

export default Login;