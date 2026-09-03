/* =========================================================
   STUDYMATE PROFILE
   FIREBASE LOGIN
   CUSTOM NAME
   PROFILE PICTURE
   COUNTRY
   MEMBER SINCE
   ACCOUNT-SPECIFIC PROFILE STORAGE

   IMPORTANT:
   Profile information is separated by Firebase UID.
   This prevents different accounts on the same device
   from sharing the same name or profile picture.
========================================================= */

import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";


import {
    getAuth,
    onAuthStateChanged,
    signOut,
    deleteUser,
    reauthenticateWithCredential,
    EmailAuthProvider
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

/* =========================================================
   1. FIREBASE
========================================================= */

const firebaseConfig = {

    apiKey:
        "AIzaSyBGHydWA5tJ8dCX_uC2y0fxzhwnI0aGYzA",

    authDomain:
        "studymate-32dce.firebaseapp.com",

    projectId:
        "studymate-32dce",

    storageBucket:
        "studymate-32dce.firebasestorage.app",

    messagingSenderId:
        "1069652867136",

    appId:
        "1:1069652867136:web:dd55fc62229ea55d9ec7a5",

    measurementId:
        "G-GNMK1W0QR9"

};


const app =
    initializeApp(
        firebaseConfig
    );


const auth =
    getAuth(app);


/* =========================================================
   2. ACCOUNT-SPECIFIC STORAGE
========================================================= */

function getProfileKey(
    type,
    uid
) {

    return `studyMate_${type}_${uid}`;

}


/* =========================================================
   3. GET ELEMENTS
========================================================= */

const studentName =
    document.getElementById(
        "studentName"
    );


const studentEmail =
    document.getElementById(
        "studentEmail"
    );


const profileAvatar =
    document.getElementById(
        "profileAvatar"
    );


const profilePictureInput =
    document.getElementById(
        "profilePictureInput"
    );


const changePictureBtn =
    document.getElementById(
        "changePictureBtn"
    );


const editNameBtn =
    document.getElementById(
        "editNameBtn"
    );


const nameEditArea =
    document.getElementById(
        "nameEditArea"
    );


const studentNameInput =
    document.getElementById(
        "studentNameInput"
    );


const saveNameBtn =
    document.getElementById(
        "saveNameBtn"
    );


const studentCountry =
    document.getElementById(
        "studentCountry"
    );


const editCountryBtn =
    document.getElementById(
        "editCountryBtn"
    );


const countryEditArea =
    document.getElementById(
        "countryEditArea"
    );


const countrySelect =
    document.getElementById(
        "countrySelect"
    );


const saveCountryBtn =
    document.getElementById(
        "saveCountryBtn"
    );


const memberSince =
    document.getElementById(
        "memberSince"
    );


const logoutBtn =
    document.getElementById(
        "logoutBtn"
    );


/* =========================================================
   4. CURRENT USER
========================================================= */

let currentUser = null;


/* =========================================================
   5. COUNTRY FLAGS
========================================================= */

const COUNTRY_FLAGS = {

    "Nigeria": "🇳🇬",
    "Ghana": "🇬🇭",
    "Kenya": "🇰🇪",
    "South Africa": "🇿🇦",
    "Uganda": "🇺🇬",
    "Tanzania": "🇹🇿",
    "Sierra Leone": "🇸🇱",
    "Liberia": "🇱🇷",
    "The Gambia": "🇬🇲",

    "United Kingdom": "🇬🇧",
    "United States": "🇺🇸",
    "Canada": "🇨🇦",
    "Australia": "🇦🇺",
    "New Zealand": "🇳🇿",
    "Ireland": "🇮🇪",

    "India": "🇮🇳",
    "Pakistan": "🇵🇰",
    "Bangladesh": "🇧🇩",
    "Singapore": "🇸🇬",
    "Malaysia": "🇲🇾",
    "Philippines": "🇵🇭",

    "Jamaica": "🇯🇲",
    "Trinidad and Tobago": "🇹🇹",
    "Barbados": "🇧🇧",
    "Bahamas": "🇧🇸",
    "Belize": "🇧🇿",
    "Guyana": "🇬🇾",

    "Fiji": "🇫🇯",
    "Zimbabwe": "🇿🇼",
    "Zambia": "🇿🇲",
    "Botswana": "🇧🇼",
    "Namibia": "🇳🇦",
    "Rwanda": "🇷🇼",

    "United Arab Emirates": "🇦🇪",

    "Other": "🌍"

};


/* =========================================================
   6. SHOW COUNTRY
========================================================= */

function showCountry(
    country
) {

    if (!studentCountry) {
        return;
    }


    if (!country) {

        studentCountry.textContent =
            "🌍 Select Country";

        return;

    }


    const flag =
        COUNTRY_FLAGS[country] ||
        "🌍";


    studentCountry.textContent =
        `${flag} ${country}`;

}


/* =========================================================
   7. MEMBER SINCE
========================================================= */

function getMemberSince(
    user
) {

    if (!user || !user.uid) {

        return null;

    }


    const memberSinceKey =
        getProfileKey(
            "memberSince",
            user.uid
        );


    let savedDate =
        localStorage.getItem(
            memberSinceKey
        );


    if (!savedDate) {

        if (
            user.metadata &&
            user.metadata.creationTime
        ) {

            savedDate =
                user.metadata.creationTime;

        }

        else {

            savedDate =
                new Date().toISOString();

        }


        localStorage.setItem(
            memberSinceKey,
            savedDate
        );

    }


    return savedDate;

}


/* =========================================================
   8. DISPLAY MEMBER SINCE
========================================================= */

function showMemberSince(
    user
) {

    if (!memberSince) {
        return;
    }


    const savedDate =
        getMemberSince(
            user
        );


    if (!savedDate) {

        memberSince.textContent =
            "StudyMate Member";

        return;

    }


    const date =
        new Date(
            savedDate
        );


    if (
        Number.isNaN(
            date.getTime()
        )
    ) {

        memberSince.textContent =
            "StudyMate Member";

        return;

    }


    memberSince.textContent =
        date.toLocaleDateString(
            undefined,
            {
                month: "long",
                year: "numeric"
            }
        );

}


/* =========================================================
   9. SHOW PROFILE PICTURE
========================================================= */

function showProfilePicture(
    image
) {

    if (!profileAvatar) {
        return;
    }


    profileAvatar.innerHTML =
        "";


    const img =
        document.createElement(
            "img"
        );


    img.src =
        image;


    img.alt =
        "Profile picture";


    img.style.width =
        "100%";


    img.style.height =
        "100%";


    img.style.objectFit =
        "cover";


    img.style.borderRadius =
        "50%";


    profileAvatar.appendChild(
        img
    );

}


/* =========================================================
   10. LOAD CURRENT ACCOUNT PROFILE
========================================================= */

function loadSavedProfile(
    user
) {

    if (!user || !user.uid) {
        return;
    }


    const nameKey =
        getProfileKey(
            "profileName",
            user.uid
        );


    const pictureKey =
        getProfileKey(
            "profilePicture",
            user.uid
        );


    const countryKey =
        getProfileKey(
            "profileCountry",
            user.uid
        );


    const savedName =
        localStorage.getItem(
            nameKey
        );


    const savedPicture =
        localStorage.getItem(
            pictureKey
        );


    const savedCountry =
        localStorage.getItem(
            countryKey
        );


    /* =====================================================
       NAME
    ===================================================== */

    if (
        savedName &&
        savedName.trim()
    ) {

        if (studentName) {

            studentName.textContent =
                savedName;

        }

    }


    /* =====================================================
       PROFILE PICTURE
    ===================================================== */

    if (savedPicture) {

        showProfilePicture(
            savedPicture
        );

    }


    /* =====================================================
       COUNTRY
    ===================================================== */

    showCountry(
        savedCountry
    );


    /* =====================================================
       MEMBER SINCE
    ===================================================== */

    showMemberSince(
        user
    );

}


/* =========================================================
   11. FIREBASE LOGIN
========================================================= */
onAuthStateChanged(
    auth,
    user => {

        if (!user) {

            window.location.replace(
                "login.html"
            );

            return;

        }


        currentUser =
            user;


        console.log(
            "StudyMate Profile user:",
            user.uid
        );


        /* EMAIL */

        if (studentEmail) {

            studentEmail.textContent =
                user.email ||
                "No email";

        }


        /* NAME */

        const nameKey =
            getProfileKey(
                "profileName",
                user.uid
            );


        const savedName =
            localStorage.getItem(
                nameKey
            );


        if (
            savedName &&
            savedName.trim()
        ) {

            if (studentName) {

                studentName.textContent =
                    savedName;

            }

        }

        else {

            const firebaseName =
                user.displayName ||
                "StudyMate Student";


            if (studentName) {

                studentName.textContent =
                    firebaseName;

            }

        }


        /* LOAD EVERYTHING FOR THIS ACCOUNT */

        loadSavedProfile(
            user
        );

    }
);


/* =========================================================
   12. CHANGE PROFILE PICTURE
========================================================= */

if (
    changePictureBtn &&
    profilePictureInput
) {

    changePictureBtn.addEventListener(
        "click",
        () => {

            profilePictureInput.click();

        }
    );

}


/* =========================================================
   13. SELECT PROFILE PICTURE
========================================================= */

if (
    profilePictureInput
) {

    profilePictureInput.addEventListener(
        "change",
        event => {

            if (
                !currentUser ||
                !currentUser.uid
            ) {

                return;

            }


            const file =
                event.target.files[0];


            if (!file) {
                return;
            }


            if (
                !file.type.startsWith(
                    "image/"
                )
            ) {

                alert(
                    "Please select an image."
                );

                return;

            }


            const reader =
                new FileReader();


            reader.onload =
                function () {

                    const image =
                        new Image();


                    image.onload =
                        function () {

                            const canvas =
                                document.createElement(
                                    "canvas"
                                );


                            const maxSize =
                                500;


                            let width =
                                image.width;


                            let height =
                                image.height;


                            if (
                                width >
                                height
                            ) {

                                if (
                                    width >
                                    maxSize
                                ) {

                                    height =
                                        Math.round(
                                            height *
                                            maxSize /
                                            width
                                        );

                                    width =
                                        maxSize;

                                }

                            }

                            else {

                                if (
                                    height >
                                    maxSize
                                ) {

                                    width =
                                        Math.round(
                                            width *
                                            maxSize /
                                            height
                                        );

                                    height =
                                        maxSize;

                                }

                            }


                            canvas.width =
                                width;


                            canvas.height =
                                height;


                            const context =
                                canvas.getContext(
                                    "2d"
                                );


                            context.drawImage(
                                image,
                                0,
                                0,
                                width,
                                height
                            );


                            const resizedImage =
                                canvas.toDataURL(
                                    "image/jpeg",
                                    0.85
                                );


                            const pictureKey =
                                getProfileKey(
                                    "profilePicture",
                                    currentUser.uid
                                );


                            localStorage.setItem(
                                pictureKey,
                                resizedImage
                            );


                            showProfilePicture(
                                resizedImage
                            );

                        };


                    image.src =
                        reader.result;

                };


            reader.readAsDataURL(
                file
            );

        }
    );

}


/* =========================================================
   14. EDIT NAME
========================================================= */

if (
    editNameBtn
) {

    editNameBtn.addEventListener(
        "click",
        () => {

            if (!nameEditArea) {
                return;
            }


            nameEditArea.style.display =
                "block";


            if (
                studentNameInput
            ) {

                let currentName = "";


                if (
                    currentUser &&
                    currentUser.uid
                ) {

                    const nameKey =
                        getProfileKey(
                            "profileName",
                            currentUser.uid
                        );


                    currentName =
                        localStorage.getItem(
                            nameKey
                        ) || "";

                }


                if (!currentName) {

                    currentName =
                        studentName?.textContent ||
                        "";

                }


                studentNameInput.value =
                    currentName;


                studentNameInput.focus();

            }

        }
    );

}


/* =========================================================
   15. SAVE NAME
========================================================= */

if (
    saveNameBtn
) {

    saveNameBtn.addEventListener(
        "click",
        () => {

            if (
                !studentNameInput ||
                !currentUser ||
                !currentUser.uid
            ) {

                return;

            }


            const newName =
                studentNameInput.value
                    .trim();


            if (!newName) {

                alert(
                    "Please enter your name."
                );

                return;

            }


            if (
                newName.length >
                40
            ) {

                alert(
                    "Your name is too long."
                );

                return;

            }


            const nameKey =
                getProfileKey(
                    "profileName",
                    currentUser.uid
                );


            localStorage.setItem(
                nameKey,
                newName
            );


            if (studentName) {

                studentName.textContent =
                    newName;

            }


            if (nameEditArea) {

                nameEditArea.style.display =
                    "none";

            }


            alert(
                "Your name has been saved!"
            );

        }
    );

}


/* =========================================================
   16. EDIT COUNTRY
========================================================= */

if (
    editCountryBtn
) {

    editCountryBtn.addEventListener(
        "click",
        () => {

            if (!countryEditArea) {
                return;
            }


            countryEditArea.style.display =
                "block";


            let savedCountry = "";


            if (
                currentUser &&
                currentUser.uid
            ) {

                const countryKey =
                    getProfileKey(
                        "profileCountry",
                        currentUser.uid
                    );


                savedCountry =
                    localStorage.getItem(
                        countryKey
                    ) || "";

            }


            if (countrySelect) {

                countrySelect.value =
                    savedCountry;


                countrySelect.focus();

            }

        }
    );

}


/* =========================================================
   17. SAVE COUNTRY
========================================================= */

if (
    saveCountryBtn
) {

    saveCountryBtn.addEventListener(
        "click",
        () => {

            if (
                !countrySelect ||
                !currentUser ||
                !currentUser.uid
            ) {

                return;

            }


            const country =
                countrySelect.value;


            if (!country) {

                alert(
                    "Please select your country."
                );

                return;

            }


            const countryKey =
                getProfileKey(
                    "profileCountry",
                    currentUser.uid
                );


            localStorage.setItem(
                countryKey,
                country
            );


            showCountry(
                country
            );


        if (countryEditArea) {

                countryEditArea.style.display =
                    "none";

            }

        }
    );

}

/* =========================================================
   18. ACCOUNT DELETION
========================================================= */

const deleteAccountBtn =
    document.getElementById(
        "deleteAccountBtn"
    );


if (deleteAccountBtn) {

    deleteAccountBtn.addEventListener(
        "click",
        async () => {

            if (
                !currentUser ||
                !currentUser.uid
            ) {

                alert(
                    "You must be signed in to delete your account."
                );

                return;

            }


            const confirmed =
                confirm(
                    "⚠️ Delete your StudyMate account?\n\n" +
                    "This will permanently delete your Firebase account " +
                    "and your StudyMate profile data stored on this device.\n\n" +
                    "This action cannot be undone."
                );


            if (!confirmed) {
                return;
            }


            /*
               Email + password accounts may require
               recent authentication before Firebase
               allows account deletion.
            */

            const email =
                currentUser.email;


            if (!email) {

                alert(
                    "StudyMate could not find the email address for this account."
                );

                return;

            }


            const password =
                prompt(
                    "For security, enter your StudyMate password to confirm account deletion:"
                );


            if (password === null) {
                return;
            }


            if (!password.trim()) {

                alert(
                    "Password is required to continue."
                );

                return;

            }


            const uid =
                currentUser.uid;


            try {

                /*
                   Re-authenticate the current user
                   with their email and password.
                */

                const credential =
                    EmailAuthProvider.credential(
                        email,
                        password
                    );


                await reauthenticateWithCredential(
                    currentUser,
                    credential
                );


                /*
                   Now Firebase should allow the
                   account to be deleted.
                */

                await deleteUser(
                    currentUser
                );


                /*
                   Remove ONLY this account's local
                   StudyMate profile information.
                */

                localStorage.removeItem(
                    getProfileKey(
                        "profileName",
                        uid
                    )
                );


                localStorage.removeItem(
                    getProfileKey(
                        "profilePicture",
                        uid
                    )
                );


                localStorage.removeItem(
                    getProfileKey(
                        "profileCountry",
                        uid
                    )
                );


                localStorage.removeItem(
                    getProfileKey(
                        "memberSince",
                        uid
                    )
                );


                alert(
                    "Your StudyMate account has been deleted successfully."
                );


                window.location.href =
                    "login.html";

            }


            catch (error) {

                console.error(
                    "StudyMate account deletion error:",
                    error
                );


                if (
                    error.code ===
                    "auth/wrong-password"
                ) {

                    alert(
                        "The password is incorrect. Your account was NOT deleted."
                    );

                    return;

                }


                if (
                    error.code ===
                    "auth/invalid-credential"
                ) {

                    alert(
                        "The password or account credentials are incorrect. Your account was NOT deleted."
                    );

                    return;

                }


                if (
                    error.code ===
                    "auth/user-mismatch"
                ) {

                    alert(
                        "The signed-in account does not match the account being deleted."
                    );

                    return;

                }


                if (
                    error.code ===
                    "auth/requires-recent-login"
                ) {

                    alert(
                        "For your security, Firebase requires you to sign in again before deleting this account."
                    );

                    return;

                }


                alert(
                    "StudyMate could not delete your account. Your account was NOT deleted."
                );

            }

        }
    );

}
/* =========================================================
   18. LOGOUT
========================================================= */

if (logoutBtn) {

    logoutBtn.addEventListener(
        "click",
        async () => {

            try {

                await signOut(auth);

                /*
                   Mark that logout has just happened.
                   The login page will use this to make
                   Back go to the StudyMate home page.
                */

                sessionStorage.setItem(
                    "studyMateJustLoggedOut",
                    "true"
                );

                window.location.replace(
                    "login.html"
                );

            }

            catch (error) {

                console.error(
                    "StudyMate logout error:",
                    error
                );

                alert(
                    "Unable to log out right now."
                );

            }

        }
    );

}

/* =========================================================
   19. PROFILE READY
========================================================= */

console.log(
    "StudyMate Profile loaded successfully."
);

console.log(
    "Account-specific profile storage enabled."
);