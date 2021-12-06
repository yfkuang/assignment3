import React from "react";
import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

export const useGetImage = (id) => {
    const [imgsrc, setImgsrc] = React.useState([]);

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

    React.useEffect( async () => {
        const storage = getStorage();
            getDownloadURL(ref(storage, 'fighters/' + id + '.png'))
            .then((url) => {
                // `url` is the download URL for 'images/stars.jpg'
                setImgsrc(url)
            })
            .catch((error) => {
                console.log("Error", error)
            });
    },[])

    return [imgsrc]
}