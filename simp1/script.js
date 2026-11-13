
let form = document.getElementById("myForm");

form.onsubmit = function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let college = document.getElementById("college").value;
    let dept = document.getElementById("dept").value;
    let year = document.getElementById("year").value;
    let event = document.getElementById("event").value;
    let gender = document.querySelector('input[name="gender"]:checked');

    let error = document.getElementById("error");
    let result = document.getElementById("result");

    error.innerHTML = "";
    result.innerHTML = "";

    if (!name || !email || !phone || !gender ||
        !college || !dept || !year || !event) {
        error.innerHTML = "Please fill all fields!";
    }
    else if (!email.includes("@") || !email.includes(".")) {
        error.innerHTML = "Enter a valid email!";
    }
    else if (!/^[0-9]{10}$/.test(phone)) {
        error.innerHTML = "Enter a valid 10 digit phone number!";
    }
    else {
    //     result.innerHTML =
    //         "<h3>Registration Successful!</h3>" +
    //         "Name: " + name + "<br>" +
    //         "Email: " + email + "<br>" +
    //         "Phone: " + phone + "<br>" +
    //         "Gender: " + gender.value + "<br>" +
    //         "College: " + college + "<br>" +
    //         "Department: " + dept + "<br>" +
    //         "Year: " + year + "<br>" +
    //         "Event: " + event;
    // }
        alert("Registration Successful!");
    }
};

// form.onreset = function() {
//     document.getElementById("error").innerHTML = "";
//     document.getElementById("result").innerHTML = "";
// };
