/*

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBa4a4y9ebXZVim2htNlA-HJEAK_GOBpOU",
  authDomain: "babalift-417115.firebaseapp.com",
  databaseURL: "https://babalift-417115-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "babalift-417115",
  storageBucket: "babalift-417115.appspot.com",
  messagingSenderId: "10551868809",
  appId: "1:10551868809:web:4c04a9f33034b25667b558"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

*/



/*
// THIS ARE JUST SOME EXERCISES
function useCallback(callback) {  //i can pass a function as well as a parameter like a var or let string
callback("Hello");

}

useCallback(value => console.log(value)) // anonymous arrow function that takes a value and logs it to the console
//same as
useCallback(function (value) {console.log(value)})


function questa(funct)

{
  funct()
 }

 questa(()=> console.log("questa"))



//SAME AS:

function print(value)  {
  console.log(value) 
}
useCallback(print)





//SAME AS

let callback = print
callback("Helloooo")


var sum = 2 + 3; 

*/


/*
function showInput() {
    // document.getElementById("central").style.display = "none";
    document.getElementById("inputContainer").style.display = "block" ; // Show the input container
}
*/
/*

function showConfirmation() {
    var pickupPoint = document.getElementById("email").value; // Get the value of the input field
    document.getElementById("confirmation").style.display = "flex"; // Show the confirmation text
    document.getElementById("confirmation").innerText = "..." + pickupPoint; // Display the confirmation text
    
}

*/


function openModal() {
    document.getElementById("modal").style.display = "flex";
  }
  
  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }

  




