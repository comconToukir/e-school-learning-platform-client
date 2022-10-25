import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';

import app from '../firebase.config';

const googleProvider = new GoogleAuthProvider();

export const auth = getAuth(app);

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
.then(result => {})
.catch(error => console.error(error))

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => signOut(auth);

export const updateUserProfile = (profile) => {
  return updateProfile(auth.currentUser, profile);
};

export  const verifyEmail = () => {
  return sendEmailVerification(auth.currentUser)
}

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);