/* =========================================================
   STUDYMATE PREMIUM ACCESS SYSTEM
   CENTRAL PREMIUM GATE
========================================================= */


/* =========================================================
   PREMIUM CONFIGURATION
========================================================= */

const STUDYMATE_PREMIUM = {

    premiumPage:
        "premium.html",

    /*
       This endpoint will eventually return the user's
       REAL entitlement from your backend.

       Example response:

       {
           "premium": true
       }

       or

       {
           "premium": false
       }
    */

    entitlementEndpoint:
        "/api/premium/status"

};


/* =========================================================
   CURRENT PREMIUM STATUS
========================================================= */

let studyMatePremiumStatus = null;


/* =========================================================
   CHECK PREMIUM STATUS
========================================================= */

async function checkStudyMatePremium() {

    try {

        const response =
            await fetch(
                STUDYMATE_PREMIUM.entitlementEndpoint,
                {
                    method: "GET",
                    credentials: "include",
                    cache: "no-store"
                }
            );


        if (!response.ok) {

            throw new Error(
                "Premium status request failed."
            );

        }


        const data =
            await response.json();


        studyMatePremiumStatus =
            data.premium === true;


        return studyMatePremiumStatus;


    } catch (error) {

        console.error(
            "StudyMate Premium Check Error:",
            error
        );


        /*
           IMPORTANT:

           If premium status cannot be verified,
           do NOT grant premium access.
        */

        studyMatePremiumStatus =
            false;


        return false;

    }

}


/* =========================================================
   OPEN PREMIUM FEATURE
========================================================= */

async function openStudyMatePremiumFeature(
    destination
) {

    const isPremium =
        await checkStudyMatePremium();


    /*
       PREMIUM USER
    */

    if (isPremium) {

        if (destination) {

            window.location.href =
                destination;

        }

        return;

    }


    /*
       NON-PREMIUM USER
    */

    window.location.href =
        STUDYMATE_PREMIUM.premiumPage;

}


/* =========================================================
   CONNECT PREMIUM ELEMENTS
========================================================= */

function initializeStudyMatePremium() {

    const premiumElements =
        document.querySelectorAll(
            "[data-premium-feature]"
        );


    premiumElements.forEach(
        function (element) {

            element.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();


                    const destination =
                        element.dataset
                            .premiumDestination;


                    openStudyMatePremiumFeature(
                        destination
                    );

                }
            );

        }
    );

}


/* =========================================================
   INITIALIZE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        initializeStudyMatePremium();

    }
);