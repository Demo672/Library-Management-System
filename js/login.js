var objUser =[
    {
        username:"admin"
        password:"12345"
    }
] 

function getInfo(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    for(i=0;i<objUser.length;i++){

        if(username == objUser[i].username && password == objUser[i].password){
            console.log(username + "is loged In!");
        }
    }
    console.log("incorret Username or Password.");

    console.log("your user name is"+username + "And Password is:" +password);
}
