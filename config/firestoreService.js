import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { getDocs } from "firebase/firestore";

async function addQuote(quote) {
  try {
    const docRef = await addDoc(collection(db, "quotes"), quote);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

async function getQuotes() {
  const querySnapshot = await getDocs(collection(db, "quotes"));
  const quotes = [];
  querySnapshot.forEach((doc) => {
    quotes.push(doc.data());
  });
  return quotes;
}

async function updateQuote(quoteId, updatedData) {
  const quoteRef = doc(db, "quotes", quoteId);
  await updateDoc(quoteRef, updatedData);
}

async function deleteQuote(quoteId) {
  const quoteRef = doc(db, "quotes", quoteId);
  await deleteDoc(quoteRef);
}

export { addQuote, getQuotes, updateQuote, deleteQuote };
