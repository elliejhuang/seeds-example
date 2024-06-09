import {
    addDoc,
    collection,
    getDocs,
    getFirestore,
  } from 'firebase/firestore/lite';
import { initializeApp } from "firebase/app";
//import { TestContext } from 'node:test';

const firebaseConfig = {
  apiKey: "AIzaSyAXVy_M9RTx71mshMVlNZzACvGSBs-iHLE",
  authDomain: "seeds-example.firebaseapp.com",
  projectId: "seeds-example",
  storageBucket: "seeds-example.appspot.com",
  messagingSenderId: "57362529737",
  appId: "1:57362529737:web:a20b8424aa63faada77c18"
};

const app = initializeApp(firebaseConfig);


const db = getFirestore(app);
const myPostsRef = collection(db, 'posts');

async function run() {
  try {
    const docRef = await addDoc(myPostsRef, {
      title: 'Test',
      content: 'This is a test blog post',

    });
    console.log('New doc added', docRef.id);

    const postsSnapshot = await getDocs(myPostsRef);
    for (const item of postsSnapshot.docs) {
      console.log(item.id, item.data());
    }
  } catch (error) {
    console.error('Error adding document: ', error);
  }
}

run();
