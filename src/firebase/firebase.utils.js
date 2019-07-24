import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyARxHQin_D4mJYVea8n1k7R28ShUcZTs4E",
  authDomain: "crwn-db-986a0.firebaseapp.com",
  databaseURL: "https://crwn-db-986a0.firebaseio.com",
  projectId: "crwn-db-986a0",
  storageBucket: "",
  messagingSenderId: "836667386547",
  appId: "1:836667386547:web:10a70d9433132514",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user ", error);
    }
  }

  return userRef;
};

// Just for export shop.data.js automatically to firebase db, runs once
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd,
) => {
  const collectionRef = firestore.collection(collectionKey);
  // console.log(collectionRef);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};
///////////////////////////////
///////////////////////////////

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  // Always trigger the Google pop up whenever we use this Google auth
  prompt: "select_account",
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
