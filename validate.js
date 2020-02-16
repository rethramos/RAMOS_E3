function validate() {
    var password = document.getElementById("password");
    var conpassword = document.getElementById("conpassword");
    var email = document.getElementById("email");
    var bg;

    var inputs = document.getElementsByTagName("input");
    for (let i = 0; i < 2; i++) {
        bg = (inputs[i].value == "") ? "red" : "white";
        inputs[i].style.backgroundColor = bg;
    }

    bg = (password.value == "" || conpassword.value == "" || password.value != conpassword.value) ? "red" : "white";
    password.style.backgroundColor = bg;
    conpassword.style.backgroundColor = bg;

    // valid email address regular expression, according to w3resource
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    bg = (email.value == "" || !emailRegex.test(email.value)) ? "red" : "white";
    email.style.backgroundColor = bg;


    var err = 0;
    for (let i = 0; i < inputs.length - 1; i++) {
        if (inputs[i].style.backgroundColor == "red") {
            err++;
        }
    }

    if (err == 0)
        alert("Hello " + document.getElementById("fname").value + " " + document.getElementById("lname").value + "!");
}
