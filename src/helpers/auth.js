import { auth, createUserProfileDocument } from '../firebase/firebase-utils';

export const login = async (email, password) => {
    try {
        await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
        return error;
    }
};

export const logout = async () => {
    console.log('logout');
};

export const signUp = async (email, password, additionalData) => {
    try {
        const { user } = await auth.createUserWithEmailAndPassword(
            email,
            password
        );
        createUserProfileDocument(user, additionalData);
    } catch (error) {
        console.log(error);
    }
};
