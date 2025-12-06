// Select elements from DOM
const usernameInput = document.getElementById("username");
const infoSelect = document.getElementById("info");
const resultBox = document.getElementById("result");
const fetchBtn = document.querySelector(".btn");

// Fetch button click handler
fetchBtn.addEventListener("click", () => {
    const username = usernameInput.value.trim();
    const infoKey = infoSelect.value;

    if (username === "") {
        resultBox.textContent = "⚠️ Please enter a GitHub username.";
        return;
    }

    // GitHub API endpoint
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
            // Get specific field selected by user
            const value = data[infoKey];

            // Handling null values
            if (value === null) {
                resultBox.textContent = `${infoKey} : null`;
                return;
            }

            // Displaying Avatar (special case)
            if (infoKey === "avatar_url") {
                resultBox.innerHTML = `
                    <strong>${infoKey}:</strong><br>
                    <img src="${value}" width="120" style="border-radius:10px;margin-top:10px;" />
                `;
                return;
            }

            // Display any other info normally
            resultBox.textContent = `${infoKey}: ${value}`;
        })
        .catch(err => {
            resultBox.textContent = err.message;
        });
});
