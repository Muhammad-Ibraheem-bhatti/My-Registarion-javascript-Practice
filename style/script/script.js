
const handlesubmit = () => {
    event.preventDefault();

    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    
    firstName = firstName.trim();
    lastName = lastName.trim();
    email = email.trim();
    password = password.trim();
    confirmPassword = confirmPassword.trim();
    const formObject = { firstName, lastName, email, password, confirmPassword }

    let getData = JSON.parse(localStorage.getItem("users")) || [];


    getData.push(formObject);
    console.log(getData);

    localStorage.setItem("users", JSON.stringify(getData))
}



// login form section

login = () => {
    event.preventDefault();

    let email = document.getElementById('Email').value;
    let password = document.getElementById('Password').value;


    const users = JSON.parse(localStorage.getItem("users")) || [];
    const authenticatedUser = users.find(user => user.email === email && user.password === password);

    if (authenticatedUser) {
        // user is authentication, proceed to next step
        console.log("User authenticated!");
        // alert("User authenticated!")

        swal("Thank You!", "Your Successfully Account Is Created!", "success")


        // window.location.href="home.html"
        return
        // redirect to next page or show next step
    } else {
        // invalid email or password, show error message
        console.log("Invalid email or password");
        sweetAlert("Oops...", "Invalid email or password!", "error");
        return
        // show error message to user
    }
}

// chk password start
document.getElementById("checkpassword").addEventListener("click", show)
function show() {
    let x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    }
    else {
        x.type = "password";
    }
}
// check password end code

// Confirm password chek
document.getElementById("Confirmpasswrd").addEventListener("click",showConfirm)
function showConfirm()
{
	let x = document.getElementById("confirmPassword");
	if (x.type ==="password")
	 {
	 	x.type = "text";
	 }
	 else
	 {
	 	x.type = "password";
	 }
}