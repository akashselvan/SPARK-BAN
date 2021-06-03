import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyBR5GdFGodDr2SFXNmEVXfowPnYDtsdnzM",
  authDomain: "intern-proj-1baee.firebaseapp.com",
  projectId: "intern-proj-1baee",
  storageBucket: "intern-proj-1baee.appspot.com",
  messagingSenderId: "1082692996441",
  appId: "1:1082692996441:web:2624b006c9b398e32dd048",
  measurementId: "G-JFQ0YW8CP8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export const addUser = ([name, accountNo, balance]) => {
  return db
    .collection("users")
    .add({ name: name, accountNo: accountNo, balance: balance });
};

export const addTransaction = (amount, to, from) => {
  return db
    .collection("transactions")
    .add({ amount: amount, to: to, from: from, createdAt: firebase.firestore.FieldValue.serverTimestamp() });
};

export const transact = (id1, balance1, id2, balance2, amount) => {
  return [db.collection("users").doc(id1).update({
    balance: Number(balance1) - Number(amount)
  }),
  db.collection("users").doc(id2).update({
    balance: Number(balance2) + Number(amount)
  })]

}

export { db };
