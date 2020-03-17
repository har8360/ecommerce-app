import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDuRxAK3bAOmB2x78k3BJbCAS64hRwx0vw",
    authDomain: "ecommerce-db-af4ef.firebaseapp.com",
    databaseURL: "https://ecommerce-db-af4ef.firebaseio.com",
    projectId: "ecommerce-db-af4ef",
    storageBucket: "ecommerce-db-af4ef.appspot.com",
    messagingSenderId: "986985158616",
    appId: "1:986985158616:web:4daa6f3db6c76b3a5c84ad",
    measurementId: "G-KE7H6V0DW6"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`user/${userAuth.uid}`);
    const snapShot = await userRef.get();

    console.log(snapShot);

    if (!snapShot.exists) {
      const {displayName, email} = userAuth;
      const createdAt = new Date();
      
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('Error creating user', error.message);
      }
    }
    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');  
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;