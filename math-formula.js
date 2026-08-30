// ===============================
// STUDYMATE MATHEMATICS FORMULA SEARCH
// ===============================

const searchInput = document.getElementById("formulaSearch");

if (searchInput) {

    searchInput.addEventListener("input", function () {

        const filter = this.value.toLowerCase().trim();

        const topics = document.querySelectorAll(".formula-topic");

        topics.forEach(topic => {

            const topicMatch = topic.innerText.toLowerCase().includes(filter);

            let hasVisibleCard = false;

            let element = topic.nextElementSibling;

            while (element && !element.classList.contains("formula-topic")) {

                if (element.classList.contains("formula-card")) {

                    const cardMatch = element.innerText.toLowerCase().includes(filter);

                    if (filter === "" || topicMatch || cardMatch) {
                        element.style.display = "";
                        hasVisibleCard = true;
                    } else {
                        element.style.display = "none";
                    }
                }

                element = element.nextElementSibling;
            }

            if (filter === "" || topicMatch || hasVisibleCard) {
                topic.style.display = "";
            } else {
                topic.style.display = "none";
            }

        });

    });

}