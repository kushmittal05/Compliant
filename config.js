import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
 apiKey: "AIzaSyBpmbZKEgxjsX84WUvJQHQd6d7yaT5DUS8",
 authDomain: "complaint-2736c.firebaseapp.com",
 projectId: "complaint-2736c",
 storageBucket: "complaint-2736c.appspot.com",
 messagingSenderId: "591771762271",
 appId: "1:591771762271:web:b5556ad4b04bf9528ca5ea"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

