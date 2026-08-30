(function () {

    "use strict";

    function navigate(url) {

        if (!url) return;

        if (
            url.startsWith("http://") ||
            url.startsWith("https://") ||
            url.startsWith("mailto:") ||
            url.startsWith("tel:") ||
            url.startsWith("#")
        ) {
            return;
        }

        window.location.replace(url);
    }


    document.addEventListener(
        "click",
        function (event) {

            /* =========================================
               NORMAL LINKS
            ========================================= */

            const link =
                event.target.closest("a");

            if (link) {

                const href =
                    link.getAttribute("href");

                if (
                    href &&
                    !href.startsWith("#") &&
                    link.target !== "_blank" &&
                    !link.hasAttribute("download")
                ) {

                    event.preventDefault();
                    event.stopImmediatePropagation();

                    navigate(href);

                    return;
                }
            }


            /* =========================================
               BUTTONS / DIVS WITH ONCLICK
            ========================================= */

            const element =
                event.target.closest("[onclick]");

            if (!element) {
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


            event.preventDefault();
            event.stopImmediatePropagation();


            navigate(match[1]);

        },
        true
    );

})();