import React from "react";
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { collection, getDocs, doc, getDoc } from "firebase/firestore";

export const useGetData = (id) => {
    const [documents, setDocuments] = React.useState([]);

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: process.env.REACT_APP_FIREBASE_API,
        authDomain: process.env.REACT_APP_FIREBASE_URL,
        databaseURL: process.env.REACT_APP_FIREBASE_DB,
        projectId: process.env.REACT_APP_FIREBASE_ID,
        storageBucket: process.env.REACT_APP_FIREBASE_STORAGE,
        messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING,
        appId: process.env.REACT_APP_FIREBASE_APP_ID
    };
    
    // Initialize Firebase
    const firebase = initializeApp(firebaseConfig);
    const db = getFirestore(firebase);

    React.useEffect( async () => {
        if(id){
            const docRef = doc(db, "fighters", id)
            const docSnap = await getDoc(docRef)
            setDocuments(docSnap.data())
        } else {
            let docs = [];
            const querySnapshot = await getDocs(collection(db, "fighters"));
                querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                //console.log(doc.id, " => ", doc.data());
                docs[doc.id] = doc.data()
            });
            setDocuments(docs)
        }
    },[])

    return [documents]
}