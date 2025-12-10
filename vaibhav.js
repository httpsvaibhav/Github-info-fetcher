
const usernameInput = document.getElementById("username");
const infoSelect = document.getElementById("info");
const resultBox = document.getElementById("result");
const fetchBtn = document.querySelector(".btn");


fetchBtn.addEventListener("click", () => {
    const username = usernameInput.value.trim();
    const infoKey = infoSelect.value;

    if (username === "") {
        resultBox.textContent = "⚠️ Please enter a GitHub username.";
        return;
    }


    const url = `https://api.github.com/users/${username}`;

    resultBox.textContent = "Fetching data... ⏳";

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("User not found ❌");
            }
            return response.json();
        })
        .then(data => {
            
            const value = data[infoKey];

            if (value === null) {
                resultBox.textContent = `${infoKey} : null`;
                return;
            }

            
            if (infoKey === "avatar_url") {
                resultBox.innerHTML = `
                    <strong>${infoKey}:</strong><br>
                    <img src="${value}" width="120" style="border-radius:10px;margin-top:10px;" />
                `;
                return;
            }

           
            resultBox.textContent = `${infoKey}: ${value}`;
        })
        .catch(err => {
            resultBox.textContent = err.message;
        });
});
