document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    userValidate(username, password);
});
function userValidate(UserName, pass){
    const errors = [];
    if (UserName.length < 5) {
        errors.push("Username must be at least 5 characters long");
    }
    const valid_pass = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/;
    if (valid_pass.test(pass) === false) {
        errors.push("Password must contain at least one uppercase letter, one lowercase letter, and one number.");
    }
    if (errors.length !== 0) {
        alert(errors.join('<br>'));
    }
    else{
        alert("Succesful Entry!!!");
    }
}