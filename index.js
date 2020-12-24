// const url = 'http://localhost:5000/login';
const url = 'http://localhost:5000/login';

function signup() {
    var user = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value

    };
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";

    const Http = new XMLHttpRequest();
   
    Http.open("POST", url);
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(JSON.stringify(user));

    Http.onreadystatechange = (e) => {
        document.getElementById("result").innerHTML = Http.responseText;

    }
    return false;
}


function login() {
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value


    const Http = new XMLHttpRequest();
    
    Http.open("POST", url);

    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(JSON.stringify({
        email: email,
        password: password
    }));

    document.getElementById("email").value = "";
    document.getElementById("password").value = "";


    Http.onreadystatechange = (e) => {
        document.getElementById("result").innerHTML = Http.responseText

    }
    return false;
}