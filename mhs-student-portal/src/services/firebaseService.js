import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "AIzaSyDxLIlmEHvhAkOhBXVQqPkrTlYJHsJ_i-k",
  authDomain: "mhs-driving-school.firebaseapp.com",
  projectId: "mhs-driving-school",
  storageBucket: "mhs-driving-school.firebasestorage.app",
  messagingSenderId: "349317560015",
  appId: process.env.REACT_APP_FIREBASE_APP_ID || "1:349317560015:web:c424f96863bf630e2869ba",
  measurementId: "G-KF4RJQSB7C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Authentication Functions
function registerUser(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

function loginUser(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

function logoutUser() {
  return signOut(auth);
}

function onUserStateChanged(callback) {
  onAuthStateChanged(auth, callback);
}

// Firestore Functions
async function saveUserProgress(uid, progress) {
  await setDoc(doc(db, 'progress', uid), progress);
}

async function getUserProgress(uid) {
  const docRef = doc(db, 'progress', uid);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? docSnap.data() : null;
}

async function saveUserProfile(uid, profile) {
  await setDoc(doc(db, 'users', uid), profile);
}

async function getUserProfile(uid) {
  const docRef = doc(db, 'users', uid);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? docSnap.data() : null;
}

// Export all functions
export {
  registerUser,
  loginUser,
  logoutUser,
  onUserStateChanged,
  saveUserProgress,
  getUserProgress,
  saveUserProfile,
  getUserProfile,
  auth,
  db
};
