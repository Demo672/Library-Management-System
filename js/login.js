// var objUser =[
//     {
//         username:"admin",
//         password:"12345"
//     }
// ] 

function getInfo(){
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    if(user === "" || pass === ""){
        document.getElementById("errmsg").innerHTML = "<h2>Input is required. Should not be blanked.</h2>"
    }
  
    if(user !== "admin" || pass !== "12345"){
        document.getElementById("errmsg").innerHTML = "<h2>Username or Password is invalid.</h2>"
    }
    else{
        window.location.href = "book_form.html"
    }

    
    
    // for(i=0;i<objUser.length;i++){

    //     if(username == objUser[i].username && password == objUser[i].password){
    //         console.log(username + "is loged In!");
    //     }
    // }

}

// function verify(){
//     let user = document.getElementById("username").value;
//     let pass = document.getElementById("pass").value

    
//     if(user === "" || pass === ""){
//         // alert("Input is required. Should not be blank.")
//         document.getElementById("errmsg").innerHTML = "<h2>Input is required. Should not be blanked.</h2>"
//         // return false
//     }
  
//     if(user !== "admin"){
//         document.getElementById("errmsg").innerHTML = "<h2>Username is invalid.</h2>"

//         // alert("Username is invalid!!")
//         // return false
//     }

//     if(pass.length <= 8){
//         // alert("Your password should be minimum of length 8.")
//         document.getElementById("errmsg").innerHTML = "<h2>Your password should be minimum of length 8.</h2>"

//         // return false
//     }

//     if(pass !== "123456789"){
//         // alert("Password is incorrect")
//         document.getElementById("errmsg").innerHTML = "<h2>Password is inccorrect.</h2>"

//         // return false
//     }

// //   return true
    
// }