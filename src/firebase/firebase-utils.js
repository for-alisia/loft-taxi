import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyD42f6wg-0NiCnoy6Ktpf2tBXEYY8CJS6k',
    authDomain: 'loft-taxi-for-alisia-project.firebaseapp.com',
    databaseURL: 'https://loft-taxi-for-alisia-project.firebaseio.com',
    projectId: 'loft-taxi-for-alisia-project',
    storageBucket: 'loft-taxi-for-alisia-project.appspot.com',
    messagingSenderId: '701368173680',
    appId: '1:701368173680:web:a3ad2d6e0388403be7e0b5'
};

firebase.initializeApp(config);

const auth = firebase.auth();
const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

const signInWithGoogle = () => auth.signInWithPopup(provider);

const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log(error);
        }
    }

    return userRef;
};

export { auth, firestore, signInWithGoogle, createUserProfileDocument };

export default firebase;
