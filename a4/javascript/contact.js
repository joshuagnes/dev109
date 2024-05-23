
// script.js
function validateForm() {
    let valid = true;
    let errorMessages = "";

    // Clear previous error messages
    document.querySelectorAll('.error').forEach(e => e.innerHTML = "");

    // Validate First Name
    let firstname = document.getElementById("firstname").value;
    if (firstname === "" || firstname.length > 20 || !/^[A-Za-z ]+$/.test(firstname)) {
        document.getElementById("errorFirstname").innerHTML = "First name is required and should only contain alphabets (max 20 characters).";
        valid = false;
    }

    // Validate Last Name
    let lastname = document.getElementById("lastname").value;
    if (lastname === "" || lastname.length > 50 || !/^[A-Za-z]+$/.test(lastname)) {
        document.getElementById("errorLastname").innerHTML = "Last name is required and should only contain alphabets (max 50 characters).";
        valid = false;
    }

    // Validate Email
    let email = document.getElementById("email").value;
    let atpos = email.indexOf("@");
    let dotpos = email.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
        document.getElementById("errorEmail").innerHTML = "Invalid email address.";
        valid = false;
    }

    // Validate Phone
    let phone = document.getElementById("phone").value;
    if (isNaN(phone) || phone.length > 15 || phone === "") {
        document.getElementById("errorPhone").innerHTML = "Phone number is required and should be numerical (max 15 digits).";
        valid = false;
    }

    // Validate Username
    let username = document.getElementById("username").value;
    if (username === "" || username.length > 12) {
        document.getElementById("errorUsername").innerHTML = "Username is required (max 12 characters).";
        valid = false;
    }

    // Validate Password
    let password = document.getElementById("password").value;
    if (password === "" || password.length > 7 || !/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_])/.test(password)) {
        document.getElementById("errorPassword").innerHTML = "Password is required (max 7 characters, must contain 1 uppercase, 1 lowercase, 1 number, and 1 special character).";
        valid = false;
    }

    // Validate Address
    let address = document.getElementById("address").value;
    if (address === "") {
        document.getElementById("errorAddress").innerHTML = "Address is required.";
        valid = false;
    }

    // Validate City
    let city = document.getElementById("city").value;
    if (city === "") {
        document.getElementById("errorCity").innerHTML = "City is required.";
        valid = false;
    }

    // Validate State
    let state = document.getElementById("state").value;
    if (state === "") {
        document.getElementById("errorState").innerHTML = "State is required.";
        valid = false;
    }

    // Validate Country
    let country = document.getElementById("country").value;
    if (country === "") {
        document.getElementById("errorCountry").innerHTML = "Country is required.";
        valid = false;
    }

    // Validate Zip Code if Country is USA
    if (country === "USA") {
        let zipcode = document.getElementById("zipcode").value;
        if (zipcode === "" || zipcode.length > 5 || isNaN(zipcode)) {
            document.getElementById("errorZipcode").innerHTML = "Zip code is required and should be numerical (max 5 digits).";
            valid = false;
        }
    }

    return valid;
}
