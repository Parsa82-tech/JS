document.getElementById("loginForm").addEventListener("submit", (event)=>{
    event.preventDefault();
    let errors = [];
    const username = document.getElementById("username").value;
    if (username.length < 3) {
        errors.push("Username must have at least 3 characters!!!");
    }
    const password = document.getElementById("password").value;
    if (password.length < 6) {
        errors.push("Password must have at least 6 characters!!!");
    }
    if (errors.length !== 0) {
        const errorBox = document.getElementById("errorAlerts");
        errors.forEach(error => {
            const errorMessage = document.createElement('label');
            errorMessage.textContent = error;
            errorBox.appendChild(errorMessage);
            errorBox.appendChild(document.createElement("br"));
        });
    }
    else {
        alert("Successfully Logged in!!");
    }
});