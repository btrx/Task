let today = new Date();
let dateWithoutTime = today.toISOString().split('T')[0];

document.getElementById("result-today").innerHTML = dateWithoutTime;

function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let time = `${hours}:${minutes}:${seconds}`;

    document.getElementById("result-time").textContent = time;
}

setInterval(updateClock, 1000);

function addNameHero() {
    var nameInput = document.getElementById("name");
    var name = nameInput.value;
    var capitalized = name.charAt(0).toUpperCase() + name.slice(1);

    if (name === "") {
        document.getElementById("title-name").innerHTML = "There";
    } else {
        document.getElementById("title-name").innerHTML = capitalized;
    }
}

addNameHero();



function showResult() {
    var nameInput = document.getElementById("name");
    var name = nameInput.value;
    var capitalized = name.charAt(0).toUpperCase() + name.slice(1);
    var dobInput = document.getElementById("dob")
    var dob = dobInput.value;
    var genderInput = document.querySelector('input[name="gender"]:checked');
    var gender = genderInput ? genderInput.value : "";

    var nameWarning = document.getElementById("warning-name");
    var dobWarning = document.getElementById("warning-dob");
    var genderWarning = document.getElementById("warning-gender");

    // Validate name
    if (name === "") {
        nameWarning.innerHTML = "Please fill out this field";
        nameInput.classList.add("invalid");
    } else {
        nameWarning.innerHTML = "";
        nameInput.classList.remove("invalid");
    }

    // Validate date of birth
    if (dob === "") {
        dobWarning.innerHTML = "Please fill out this field";
        dobInput.classList.add("invalid");
    } else {
        dobWarning.innerHTML = "";
        dobInput.classList.remove("invalid");
    }

    // Validate gender
    if (gender === "") {
        genderWarning.innerHTML = "Please select your gender";
    } else {
        genderWarning.innerHTML = "";
    }

    // Exit function if any validation fails
    if (name === "" || dob === "" || gender === "") {
        return;
    }

    document.getElementById("title-name").innerHTML = capitalized ? capitalized : "There";
    document.getElementById("result-name").innerHTML = capitalized;
    document.getElementById("result-dob").innerHTML = dob;
    if (gender) {
        document.getElementById("result-gender").innerHTML = gender;
    }
    var msg = document.getElementById("msg").value;
    document.getElementById("result-msg").innerHTML = msg;
}
