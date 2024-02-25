function validateForm() {
    var valid = true;
    valid = validateFirstName() && valid;
    valid = validateLastName() && valid;
    valid = validateEmail() && valid;
    valid = validatePhone() && valid;
    valid = validateUsername() && valid;
    valid = validatePassword() && valid;
    valid = validateAddress() && valid;
    valid = validateCity() && valid;
    valid = validateState() && valid;
    valid = validateCountry() && valid;
    valid = validateZipCode() && valid;
    valid = validateComments() && valid;

    if (!valid) {
        document.getElementById("submitError").innerHTML = "<p>Error submitting form. Please check the fields above.</p>";
        event.preventDefault();
    }

    return valid;
}

function validateFirstName() {
    var valid = true;
    var firstName = document.getElementById("FirstName").value.trim();
    var errorMessages = "";

    if (firstName === "") {
        errorMessages += "<p>The first name is required.</p>";
        valid = false;
    } else if (firstName.length > 20) {
        errorMessages += "<p>The first name cannot be greater than 20 characters.</p>";
        valid = false;
    } else if (!/^[a-zA-Z]*$/.test(firstName)) {
        errorMessages += "<p>The first name should contain only alphabetical characters.</p>";
        valid = false;
    }

    document.getElementById("fnameError").innerHTML = errorMessages;
    return valid;
}

function validateLastName() {
    var valid = true;
    var lastName = document.getElementById("LastName").value.trim();
    var errorMessages = "";

    if (lastName === "") {
        errorMessages += "<p>The last name is required.</p>";
        valid = false;
    } else if (lastName.length > 50) {
        errorMessages += "<p>The last name cannot be greater than 50 characters.</p>";
        valid = false;
    } else if (!/^[a-zA-Z]*$/.test(lastName)) {
        errorMessages += "<p>The last name should contain only alphabetical characters.</p>";
        valid = false;
    }

    document.getElementById("lnameError").innerHTML = errorMessages;
    return valid;
}

function validateEmail() {
    var valid = true;
    var email = document.getElementById("Email").value.trim();
    var errorMessages = "";

    if (email === "") {
        errorMessages += "<p>The email is required.</p>";
        valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        errorMessages += "<p>Invalid email format.</p>";
        valid = false;
    }

    document.getElementById("emailError").innerHTML = errorMessages;
    return valid;
}

function validatePhone() {
    var valid = true;
    var phone = document.getElementById("Phone").value.trim();
    var errorMessages = "";

    if (phone === "") {
        errorMessages += "<p>The phone number is required.</p>";
        valid = false;
    } else if (!/^\d{10,15}$/.test(phone)) {
        errorMessages += "<p>Invalid phone number format (should be 10-15 digits).</p>";
        valid = false;
    }

    document.getElementById("phoneError").innerHTML = errorMessages;
    return valid;
}

function validateUsername() {
    var valid = true;
    var username = document.getElementById("Username").value.trim();
    var errorMessages = "";

    if (username === "") {
        errorMessages += "<p>The username is required.</p>";
        valid = false;
    } else if (username.length > 12) {
        errorMessages += "<p>The username cannot be greater than 12 characters.</p>";
        valid = false;
    }

    document.getElementById("usernameError").innerHTML = errorMessages;
    return valid;
}

function validatePassword() {
    var valid = true;
    var password = document.getElementById("Password").value;
    var errorMessages = "";

    if (password === "") {
        errorMessages += "<p>The password is required.</p>";
        valid = false;
    } else if (password.length > 7) {
        errorMessages += "<p>The password cannot be greater than 7 characters.</p>";
        valid = false;
    }

    document.getElementById("passwordError").innerHTML = errorMessages;
    return valid;
}

function validateAddress() {
    var valid = true;
    var address = document.getElementById("Address").value.trim();
    var errorMessages = "";

    if (address === "") {
        errorMessages += "<p>The address is required.</p>";
        valid = false;
    }

    document.getElementById("addressError").innerHTML = errorMessages;
    return valid;
}

function validateCity() {
    var valid = true;
    var city = document.getElementById("City").value.trim();
    var errorMessages = "";

    if (city === "") {
        errorMessages += "<p>The city is required.</p>";
        valid = false;
    }

    document.getElementById("cityError").innerHTML = errorMessages;
    return valid;
}

function validateState() {
    var valid = true;
    var state = document.getElementById("State").value.trim();
    var errorMessages = "";

    if (state === "") {
        errorMessages += "<p>The state is required.</p>";
        valid = false;
    }

    document.getElementById("stateError").innerHTML = errorMessages;
    return valid;
}

function validateCountry() {
    var valid = true;
    var country = document.getElementById("Country").value.trim();
    var errorMessages = "";

    if (country === "") {
        errorMessages += "<p>The country is required.</p>";
        valid = false;
    }

    document.getElementById("countryError").innerHTML = errorMessages;
    return valid;
}

function validateZipCode() {
    var valid = true;
    var zipCode = document.getElementById("ZipCode").value.trim();
    var errorMessages = "";

    if (zipCode === "") {
        errorMessages += "<p>The zip code is required.</p>";
        valid = false;
    } else if (!/^\d{5}$/.test(zipCode)) {
        errorMessages += "<p>Invalid zip code format (should be 5 digits).</p>";
        valid = false;
    }

    document.getElementById("zipCodeError").innerHTML = errorMessages;
    return valid;
}

function validateComments() {
    // Comments are optional, so always return true
    return true;
}
