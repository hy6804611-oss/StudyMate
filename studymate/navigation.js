(function () {

    "use strict";

    /*
     * =====================================================
     * STUDYMATE CENTRAL NAVIGATION
     * =====================================================
     *
     * IMPORTANT:
     * - Does NOT control Premium decisions.
     * - Does NOT redirect CBT directly.
     * - Does NOT redirect Premium features.
     * - Uses normal history for ordinary internal pages.
     * - Dashboard is treated as the main app boundary.
     *
     * GitHub Pages:
     * /StudyMate/
     * =====================================================
     */


    const DASHBOARD = "dashboard.html";


    /* =====================================================
       GET CURRENT FILE
    ===================================================== */

    function getFileName() {

        return (
            window.location.pathname
                .split("/")
                .pop()
                .toLowerCase()
        );

    }


    /* =====================================================
       CHECK INTERNAL URL
    ===================================================== */

    function isInternalPage(url) {

        if (!url) {
            return false;
        }

        return (
            !url.startsWith("http://") &&
            !url.startsWith("https://") &&
            !url.startsWith("mailto:") &&
            !url.startsWith("tel:") &&
            !url.startsWith("#") &&
            !url.startsWith("javascript:")
        );

    }


    /* =====================================================
       PREMIUM ELEMENT CHECK
    ===================================================== */

    function isPremiumElement(element) {

        if (!element) {
            return false;
        }

        return Boolean(
            element.closest("[data-premium-feature]")
        );

    }


    /* =====================================================
       SPECIAL NAVIGATION CHECK
    ===================================================== */

    function isSpecialNavigation(element) {

        if (!element) {
            return false;
        }

        const nav =
            element.getAttribute("data-nav");

        /*
         * CBT is deliberately excluded.
         *
         * Its own Premium controller must receive
         * the click.
         */

        if (nav === "cbt") {
            return true;
        }

        /*
         * Premium elements are also excluded.
         */

        if (isPremiumElement(element)) {
            return true;
        }

        return false;

    }


    /* =====================================================
       NORMAL INTERNAL NAVIGATION
    ===================================================== */

    function navigateNormally(url) {

        if (!isInternalPage(url)) {
            return;
        }

        /*
         * IMPORTANT:
         *
         * Use normal navigation instead of replace().
         *
         * This creates predictable browser history:
         *
         * Dashboard
         *    ↓
         * Learn
         *    ↓
         * Mathematics
         *
         * Back:
         *
         * Mathematics → Learn → Dashboard
         */

        window.location.href = url;

    }


    /* =====================================================
       NORMAL LINK HANDLER
    ===================================================== */

    document.addEventListener(
        "click",
        function (event) {

            const link =
                event.target.closest("a");

            if (!link) {
                return;
            }

            /*
             * Let Premium and special navigation
             * handlers work normally.
             */

            if (
                isSpecialNavigation(link)
            ) {
                return;
            }

            const href =
                link.getAttribute("href");

            if (
                !href ||
                !isInternalPage(href) ||
                link.target === "_blank" ||
                link.hasAttribute("download")
            ) {
                return;
            }

            /*
             * Do NOT use stopImmediatePropagation().
             *
             * Page-specific JavaScript must remain able
             * to work.
             */

            event.preventDefault();

            navigateNormally(href);

        },
        false
    );


    /* =====================================================
       ONCLICK NAVIGATION
    ===================================================== */

    document.addEventListener(
        "click",
        function (event) {

            const element =
                event.target.closest("[onclick]");

            if (!element) {
                return;
            }

            /*
             * Never interfere with Premium elements.
             */

            if (
                isSpecialNavigation(element)
            ) {
                return;
            }

            const code =
                element.getAttribute("onclick");

            if (!code) {
                return;
            }

            const match =
                code.match(
                    /(?:window\.)?location\.(?:href|replace)\s*(?:=\s*|\(\s*)['"]([^'"]+)['"]/i
                );

            if (!match) {
                return;
            }

            const url =
                match[1];

            if (!isInternalPage(url)) {
                return;
            }

            /*
             * Stop the old inline location.replace()
             * from executing.
             *
             * Then use normal history navigation.
             */

            event.preventDefault();

            navigateNormally(url);

        },
        true
    );


    /* =====================================================
       DASHBOARD BOUNDARY
    ===================================================== */

    function setupDashboardBoundary() {

        const currentPage =
            getFileName();

        if (
            currentPage !== DASHBOARD
        ) {
            return;
        }

        /*
         * Mark the current Dashboard entry as the
         * StudyMate application root.
         *
         * We do NOT redirect.
         * We do NOT create a navigation loop.
         */

        history.replaceState(
            {
                studyMateDashboardRoot: true
            },
            "",
            window.location.href
        );

    }


    /* =====================================================
       BACK EVENT
    ===================================================== */

    window.addEventListener(
        "popstate",
        function () {

            /*
             * Do not redirect old pages to Dashboard.
             *
             * Normal browser history should handle
             * internal navigation.
             *
             * The native Android Dashboard Back action
             * will be handled by Capacitor later.
             */

            return;

        }
    );


    /* =====================================================
       INITIALIZE
    ===================================================== */

    if (
        document.readyState === "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            setupDashboardBoundary
        );

    } else {

        setupDashboardBoundary();

    }
/* =====================================================
   DASHBOARD EXIT GUARD
   Prevents Back button from leaving the app boundary
===================================================== */

if (getFileName() === DASHBOARD) {

    // Push a guard entry so Back is "caught" here first
    history.pushState({ studyMateExitGuard: true }, "", window.location.href);

    window.addEventListener("popstate", function () {

        const confirmExit = confirm("Exit StudyMate?");

        if (confirmExit) {

            // If wrapped in Capacitor, close the app natively
            if (window.Capacitor && window.Capacitor.isNativePlatform()) {
                import("@capacitor/app").then(({ App }) => App.exitApp());
            }

        } else {

            // Stay on dashboard — re-arm the guard
            history.pushState({ studyMateExitGuard: true }, "", window.location.href);

        }

    });

}

    console.log(
        "StudyMate Navigation System loaded."
    );

})();
