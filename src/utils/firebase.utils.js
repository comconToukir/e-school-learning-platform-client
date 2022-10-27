import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  GithubAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  updateEmail,
  updatePassword,
  sendPasswordResetEmail
} from 'firebase/auth';

import app from '../firebase.config';

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const auth = getAuth(app);

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
  

export const signInWithGithubPopup = () => signInWithPopup(auth, githubProvider);

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

export const updateUserEmail = (email) => {
  return updateEmail(auth.currentUser, email);
};

export const updateUserPassword = (password) => {
  return updatePassword(auth.currentUser, password);
}

export const verifyEmail = () => {
  return sendEmailVerification(auth.currentUser);
}

export const resetPassword = (email) => {
  return sendPasswordResetEmail(auth, email);
}

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);