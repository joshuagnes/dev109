function validateForm() {
    let valid = true;
    let errorMessages = "";


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
    if (!/^\d{3}-\d{3}-\d{4}$/.test(phone)) {
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

    // Validate Zip Code
    let zipcode = document.getElementById("zipcode").value;
    if (zipcode === "" || zipcode.length < 5 || isNaN(zipcode)) {
        document.getElementById("errorZipcode").innerHTML = "Zip code is required and should be numerical (5 digits).";
        valid = false;
    }


    return valid;
}


function formatPhoneNumber(phone) {
    phone = phone.replace(/\D/g, "");
    if (phone.length === 10) {
        return phone.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
    }
    return phone;
}


document.getElementById("phone").addEventListener("input", function () {
    this.value = formatPhoneNumber(this.value);
});


document.getElementById("zipcode").addEventListener("input", function () {
    if (this.value.length > 5) {
        this.value = this.value.slice(0, 5);
    }
});

document.getElementById("phone").addEventListener("input", function () {
    if (this.value.length > 15) {
        this.value = this.value.slice(0, 15);
    }
});

document.getElementById("password").addEventListener("input", function () {
    if (this.value.length > 7) {
        this.value = this.value.slice(0, 7);
    }
});

document.getElementById("username").addEventListener("input", function () {
    if (this.value.length > 12) {
        this.value = this.value.slice(0, 12);
    }
});
