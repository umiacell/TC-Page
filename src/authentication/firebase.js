    // Import the functions you need from the SDKs you need
    import { initializeApp } from  'firebase/app';
    import { getAuth } from  "firebase/auth";

    

    const firebaseConfig = {
      apiKey: "AIzaSyDS7IHXKdKhDQW-4H_ndq2xaA37OhIK6lo",
      authDomain: "tc-page-umia.firebaseapp.com",
      projectId: "tc-page-umia",
      storageBucket: "tc-page-umia.appspot.com",
      messagingSenderId: "477755579311",
      appId: "1:477755579311:web:db798633ba8149b947ed5a",
      measurementId: "G-W0HW8YEHFD",
    };

    // Initialize Firebase
    export const app = initializeApp(firebaseConfig);
    export const auth = getAuth(app);
    