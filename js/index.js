
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

document.querySelectorAll('.buynow-button').forEach(button => {
    button.addEventListener('click', function() {
        
        window.location.href = 'congratulation.html';
    });
});