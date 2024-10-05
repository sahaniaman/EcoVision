// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "///////// getting alert thatswhy i have removed the api key",
    authDomain: "ecovision-44f3e.firebaseapp.com",
    projectId: "ecovision-44f3e",
    storageBucket: "ecovision-44f3e.appspot.com",
    messagingSenderId: "684185884079",
    appId: "1:684185884079:web:a7d36d926e657885e6cb5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const successMessage = document.getElementById("success-message");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = form[0].value; // Name
        const surname = form[1].value; // Surname
        const email = form[2].value; // Email
        const password = form[3].value; // Password

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log("User signed up:", user);
                
                // Show success message
                successMessage.style.display = "block";

                // Redirect after a short delay
                setTimeout(() => {
                    window.location.href = "login.html"; // Change "login.html" to your actual login page URL
                }, 2000); // Redirect after 2 seconds
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error("Error signing up:", errorCode, errorMessage);
                // Show error message to the user
            });
    });
});
