const favoritesContainer = document.getElementById("favoritesContainer");

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

if(favorites.length === 0){

    favoritesContainer.innerHTML = `

    <h2 style="text-align:center;color:#b9c9ff;margin-top:80px;">
    ⭐ No Favorites Yet
    </h2>

    <p style="text-align:center;">
    Start adding your favorite flashcards.
    </p>

    `;

}else{

    favoritesContainer.innerHTML = "";

    favorites.forEach((card,index)=>{

        favoritesContainer.innerHTML += `

        <div class="flashcard" style="height:auto;margin-bottom:20px;cursor:default;">

            <div style="
                background:#28459a;
                border-radius:25px;
                padding:25px;
                box-shadow:0 10px 25px rgba(0,0,0,.35);
            ">

                <h3 style="color:#FFD54F;margin-bottom:10px;">
📘 ${card.subject}
</h3>

<h4 style="color:#9fd3ff;margin-bottom:15px;">
Question
</h4>

                <p style="font-size:20px;font-weight:600;">
                ${card.question}
                </p>

                <hr style="margin:20px 0;border:1px solid rgba(255,255,255,.15);">

                <h3 style="color:#9fd3ff;margin-bottom:15px;">
                Answer
                </h3>

                <p style="font-size:20px;">
                ${card.answer}
                </p>

            </div>

        </div>

        `;

    });

}