function formSubmit() {
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const namePattern = /^[A-Za-z ]+$/;
    const phonePattern = /^[0-9]{10}$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;

    if (name === "") {
        alert("Name can't be empty");
        return false;
    }

    if (!namePattern.test(name)) {
        alert("Name should contain only letters and spaces");
        return false;
    }

    if (phone === "") {
        alert("Phone can't be empty");
        return false;
    }

    if (!phonePattern.test(phone)) {
        alert("Phone number must contain exactly 10 digits");
        return false;
    }

    if (email === "") {
        alert("Email can't be empty");
        return false;
    }

    if (!emailPattern.test(email)) {
        alert("Enter a valid email address");
        return false;
    }

    if (password === "") {
        alert("Password can't be empty");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}