import fb from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD9r-oPr2mTdxHM6VcXQCEdH-4pNMOGyQw",
  authDomain: "test-gotovo.firebaseapp.com",
  databaseURL: "https://test-gotovo.firebaseio.com",
  projectId: "test-gotovo",
  storageBucket: "test-gotovo.appspot.com",
  messagingSenderId: "954947296257",
  appId: "1:954947296257:web:96da13123cf94fb4f6b400",
  measurementId: "G-ZYDJJNKH8L"
};

fb.initializeApp(firebaseConfig);

fb.auth().useDeviceLanguage();

export default fb;