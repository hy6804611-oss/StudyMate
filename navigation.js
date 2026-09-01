(function () {

    "use strict";

    const DASHBOARD = "dashboard.html";
    const GET_STARTED = "index.html";

    function isInternalPage(url) {

        if (!url) return false;

        return (
            !url.startsWith("http://") &&
            !url.startsWith("https://") &&
            !url.startsWith("mailto:") &&
            !url.startsWith("tel:") &&
            !url.startsWith("#")
        );
    }


    function getFileName(url) {

        try {

            return new URL(
                url,
                window.location.href
            ).pathname.split("/").pop();

        } catch (error) {

            return "";

        }

    }


    function goTo(url) {

        if (!url) return;

        if (!isInternalPage(url)) {
            return;
        }

        /*
         * Every normal StudyMate navigation uses
         * replace() so we don't create long chains
         * of pages in browser history.
         */

        window.location.replace(url);

    }


    /*
     * ==========================================
     * NORMAL LINKS
     * ==========================================
     */

    document.addEventListener(
        "click",
        function (event) {

            const link =
                event.target.closest("a");

            if (!link) return;

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

            event.preventDefault();
            event.stopImmediatePropagation();

            goTo(href);

        },
        true
    );


    /*
     * ==========================================
     * BUTTONS / DIVS WITH ONCLICK
     * ==========================================
     */

    document.addEventListener(
        "click",
        function (event) {

            const element =
                event.target.closest("[onclick]");

            if (!element) return;

            const code =
                element.getAttribute("onclick");

            if (!code) return;


            const match =
                code.match(
                    /(?:window\.)?location\.(?:href|replace)\s*(?:=\s*|\(\s*)['"]([^'"]+)['"]/i
                );


            if (!match) return;


            const url = match[1];

            if (!isInternalPage(url)) {
                return;
            }


            event.preventDefault();
            event.stopImmediatePropagation();

            goTo(url);

        },
        true
    );


    /*
     * ==========================================
     * PHONE / BROWSER BACK BUTTON
     * ==========================================
     *
     * If the user goes backward and lands on
     * Get Started, immediately replace that old
     * history entry with Dashboard.
     *
     * This prevents the user from returning to
     * the Get Started page when leaving the app.
     */

    window.addEventListener(
        "popstate",
        function () {

            const currentPage =
                getFileName(window.location.href);


            if (
                currentPage === GET_STARTED ||
                currentPage === ""
            ) {

                window.location.replace(
                    DASHBOARD
                );

            }

        }
    );


})();