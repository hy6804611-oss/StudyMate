/* =========================================================
   STUDYMATE PREMIUM
   PREMIUM ACCESS / GOOGLE PLAY CONNECTION LAYER
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const upgradeBtn =
        document.getElementById(
            "upgradePremiumBtn"
        );

    const restoreBtn =
        document.getElementById(
            "restorePurchaseBtn"
        );

    const statusText =
        document.getElementById(
            "premiumStatusText"
        );


    /* =====================================================
       PREMIUM PRODUCT
    ===================================================== */

    /*
       THIS is where our Google Play product will
       eventually be connected.

       Example product ID later:

       studymate_premium

       Do NOT create a fake purchase here.
    */

    const PREMIUM_PRODUCT_ID =
        "studymate_premium";


    /* =====================================================
       CHECK PREMIUM STATUS
    ===================================================== */

    async function getPremiumStatus() {

        /*
           Google Play Billing will be connected here.

           Until the real Google Play connection exists,
           the account remains on the Free plan.

           We do NOT use localStorage as proof of payment.
        */

        return false;

    }


    /* =====================================================
       DISPLAY STATUS
    ===================================================== */

    async function updatePremiumStatus() {

        const isPremium =
            await getPremiumStatus();


        if (!statusText) {
            return;
        }


        if (isPremium) {

            statusText.textContent =
                "Your Premium access is active.";

            statusText.classList.add(
                "premium-active"
            );

            if (upgradeBtn) {

                upgradeBtn.textContent =
                    "👑 Premium Active";

                upgradeBtn.disabled =
                    true;

            }

            if (restoreBtn) {

                restoreBtn.style.display =
                    "none";

            }

        }

        else {

            statusText.textContent =
                "You are currently using the Free plan.";

            statusText.classList.remove(
                "premium-active"
            );

            if (upgradeBtn) {

                upgradeBtn.textContent =
                    "👑 Upgrade to Premium";

                upgradeBtn.disabled =
                    false;

            }

            if (restoreBtn) {

                restoreBtn.style.display =
                    "";

            }

        }

    }


    /* =====================================================
       START PURCHASE
    ===================================================== */

    async function startPremiumPurchase() {

        /*
           IMPORTANT:

           Do not mark the user as Premium here.

           The real Google Play Billing purchase will
           be started from this function later.
        */

        alert(
            "Google Play Premium purchase is not connected yet."
        );

        console.log(
            "Premium product waiting for Google Play Billing:",
            PREMIUM_PRODUCT_ID
        );

    }


    /* =====================================================
       RESTORE PURCHASE
    ===================================================== */

    async function restorePremiumPurchase() {

        /*
           Google Play Billing restoration/query logic
           will be connected here later.

           This allows returning Premium users to have
           their existing purchase recognized.
        */

        alert(
            "Google Play purchase restoration is not connected yet."
        );

    }


    /* =====================================================
       UPGRADE BUTTON
    ===================================================== */

    if (upgradeBtn) {

        upgradeBtn.addEventListener(
            "click",
            async () => {

                await startPremiumPurchase();

            }
        );

    }


    /* =====================================================
       RESTORE BUTTON
    ===================================================== */

    if (restoreBtn) {

        restoreBtn.addEventListener(
            "click",
            async () => {

                await restorePremiumPurchase();

                await updatePremiumStatus();

            }
        );

    }


    /* =====================================================
       INITIAL STATUS
    ===================================================== */

    updatePremiumStatus();


    /* =====================================================
       PUBLIC PREMIUM API
    ===================================================== */

    window.studyMatePremium = {

        getPremiumStatus,

        startPremiumPurchase,

        restorePremiumPurchase,

        productId:
            PREMIUM_PRODUCT_ID

    };


    console.log(
        "StudyMate Premium system loaded."
    );

});