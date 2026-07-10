// ---------------- REGISTER ----------------

let registerForm = document.getElementById("registerForm");

if(registerForm){

registerForm.addEventListener("submit",function(e){

e.preventDefault();

let username=document.getElementById("regUsername").value;

let password=document.getElementById("regPassword").value;

localStorage.setItem("username",username);

localStorage.setItem("password",password);

document.getElementById("registerMsg").style.color="green";

document.getElementById("registerMsg").innerHTML="Registration Successful";

setTimeout(function(){

window.location.href="login.html";

},1500);

});

}


// ---------------- LOGIN ----------------

let loginForm=document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener("submit",function(e){

e.preventDefault();

let username=document.getElementById("username").value;

let password=document.getElementById("password").value;

let savedUser=localStorage.getItem("username");

let savedPass=localStorage.getItem("password");

if(username===savedUser && password===savedPass){

localStorage.setItem("loggedUser",username);

window.location.href="welcome.html";

}
else{

document.getElementById("message").style.color="red";

document.getElementById("message").innerHTML="Invalid Username or Password";

}

});

}