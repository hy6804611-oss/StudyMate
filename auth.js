import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBGHydWA5tJ8dCX_uC2y0fxzhwnI0aGYzA",
  authDomain: "studymate-32dce.firebaseapp.com",
  projectId: "studymate-32dce",
  storageBucket: "studymate-32dce.firebasestorage.app",
  messagingSenderId: "1069652867136",
  appId: "1:1069652867136:web:dd55fc62229ea55d9ec7a5",
  measurementId: "G-GNMK1W0QR9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


// =====================================================
// SPLASH SCREEN
// =====================================================

if (window.location.pathname.includes("splash.html")) {

    onAuthStateChanged(auth, (user) => {

        setTimeout(() => {

            if (user) {

                window.location.replace("dashboard.html");

            } else {

                window.location.replace("login.html");

            }

        }, 1800);

    });

}


// =============================
// LOGIN PAGE
// =============================

if (window.location.pathname.includes("login.html")) {

    const justLoggedOut =
        sessionStorage.getItem(
            "studyMateJustLoggedOut"
        );

    if (justLoggedOut === "true") {

        sessionStorage.removeItem(
            "studyMateJustLoggedOut"
        );

        history.replaceState(
            null,
            "",
            "login.html"
        );

        window.addEventListener(
            "popstate",
            () => {

                window.location.replace(
                    "index.html"
                );

            }
        );

    } else {

        onAuthStateChanged(
            auth,
            (user) => {

                if (user) {

                    window.location.replace(
                        "dashboard.html"
                    );

                }

            }
        );

    }

}


// =====================================================
// LOGIN
// =====================================================

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");

if (loginBtn) {

    loginBtn.addEventListener("click", async () => {

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (!email || !password) {

            alert("Please enter your email and password.");
            return;

        }

        try {

            await signInWithEmailAndPassword(
                auth,
                email,
                password
            );

            alert("Login Successful!");

            window.location.replace("dashboard.html");

        } catch (error) {

            alert(error.message);

        }

    });

}


// =====================================================
// CREATE ACCOUNT
// =====================================================

const createAccountBtn =
    document.getElementById("createAccountBtn");

if (createAccountBtn) {

    createAccountBtn.addEventListener(
        "click",
        async () => {

            const email =
                emailInput.value.trim();

            const password =
                passwordInput.value.trim();

            if (!email || !password) {

                alert(
                    "Please enter your email and password."
                );

                return;

            }

            try {

                await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password
                );

                alert(
                    "Account Created Successfully!"
                );

                window.location.replace(
                    "dashboard.html"
                );

            } catch (error) {

                alert(error.message);

            }

        }
    );

}