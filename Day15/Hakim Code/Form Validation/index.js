function validation(e) {
  // alert("Form has been submitted");
  let user = document.getElementById("username").value,
    password = document.getElementById("password").value,
    cpassword = document.getElementById("cpassword").value,
    email = document.getElementById("email").value,
    mobile = document.getElementById("number").value;

  let usercheck = /^[A-Za-z.]{3,30}$/;
  let passwordcheck = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9@#$%^&*]{8,16}$/;
  let emailcheck = /^[A-Za-z_]{3,}@[A-Za-z]{3,}[.]{1}[A-za-z.]{2,6}$/;
  let numbercheck = /^[0-9]{11}$/;
  // check Username
  if (usercheck.test(username)) {
    document.getElementById("usererror").innerHTML = " ";
  } else {
    document.getElementById("usererror").innerHTML = "**Invalid username";
    return false;
  }
  //Check password
  if (passwordcheck.test(password)) {
    document.getElementById("passworderror").innerHTML = " ";
  } else {
    document.getElementById("passworderror").innerHTML = "**Invalid Password";
    return false;
  }
  //check email
  if (emailcheck.test(email)) {
    document.getElementById("emailerror").innerHTML = " ";
  } else {
    document.getElementById("emailerror").innerHTML = "**Invalid Email";
    return false;
  }
  if (numbercheck.test(mobile)) {
    document.getElementById("numbererror").innerHTML = " ";
  } else {
    document.getElementById("numbererror").innerHTML = "**Invalid Number";
    return false;
  }
  e.preventDefault();
}
