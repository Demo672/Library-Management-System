var objUser =[
    {
        username:"admin",
        password:"12345"
    }
] 

const images = ["images/book1.jpg" , "images/book2.jpg" ,"images/book3.jpg", "images/book4.jpg" ,"images/book5.jpg" ,"images/book6.jpg" ,"images/book7.jpg" ,"images/book8.jpg" ];



function congrats(){      
         
    window.location.href = "congratulations.html"
}

function getInfo(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    for(i=0;i<objUser.length;i++){

        if(username == objUser[i].username && password == objUser[i].password){
            console.log(username + "is loged In!");
            window.location.href= "admin_area.html"     
        }
    }
    console.log("incorret Username or Password.");

    console.log("your user name is"+username + "And Password is:" +password);
}






document.getElementById("login").addEventListener("click", function(){
    document.querySelector(".popup").style.display ="flex";
})

document.getElementById("close").addEventListener("click",function(){
    document.querySelector(".popup").style.display ="none";
})

const selectBtn = document.querySelector(".select-btn"),
items =document.querySelectorAll(".item");

selectBtn.addEventListener("click", ()=>{
    selectBtn.classList.toggle("login");
});

items.forEach(item =>{
    item.addEventListener("click",()=>{
        item.classList.toggle("checked");

        let checked = document.querySelectorAll(".checked"),
        btnText = document.querySelector(".btn-text");
        //  console.log( checked.length);

        if(checked && checked.length > 0){
            console.log("valid");
            btnText.innerText = '${checked.length} Selected'  ;
            
        }else{
            console.log("invalid");
             btnText.innerText = "Select book";
        }
    });
})