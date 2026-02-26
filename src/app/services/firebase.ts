import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  updateProfile,
  signOut,
  onAuthStateChanged,
  type User
} from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyBCJbsSyKILvCKCk8aHb49zM1Rfz2X1YmU",
  authDomain: "edutech-21684.firebaseapp.com",
  projectId: "edutech-21684",
  storageBucket: "edutech-21684.firebasestorage.app",
  messagingSenderId: "27149690104",
  appId: "1:27149690104:web:d443172e7e9d04d150c70d",
  measurementId: "G-VQ9854599X"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
export const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({ prompt: 'select_account' });

// ── Auth helpers ─────────────────────────────────────────────────────────────

export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);

export const signInWithEmail = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);

export const createAccount = async (
  email: string,
  password: string,
  displayName: string
) => {
  const cred = await createUserWithEmailAndPassword(auth, email, password);
  if (displayName) {
    await updateProfile(cred.user, { displayName });
  }
  return cred;
};

export const resetPassword = (email: string) =>
  sendPasswordResetEmail(auth, email);

export const logout = () => signOut(auth);

export const onAuth = (cb: (user: User | null) => void) =>
  onAuthStateChanged(auth, cb);

export type { User };
