import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

const firebaseConfig = {
  apiKey: "AIzaSyB-eCeKSlVy-wU_VMCHW-Wvv3i_MfetXMg",
  authDomain: "hopi-clone-81270.firebaseapp.com",
  projectId: "hopi-clone-81270",
  storageBucket: "hopi-clone-81270.appspot.com",
  messagingSenderId: "867432538006",
  appId: "1:867432538006:web:33793170665bf6525f87b7"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export { firebase }