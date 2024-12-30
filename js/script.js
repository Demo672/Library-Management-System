let Tasks = []
let TaskList = document.getElementById("eventList")

function add(){
    let title = document.getElementById('event-title').value 
    let time = document.getElementById('event-time').value  
    let date = document.getElementById('event-date').value 
    let location = document.getElementById('event-location').value

    let Task = {
        Title : title,
        Time: time,
        Date: date,
        Location: location
    };

    Tasks.push(Task);
    // console.log(Task)
    // console.log(Tasks)
    

     handlelist();
     (function() {
        document.getElementById('event-title').value = ""
        document.getElementById('event-time').value = ""  
        document.getElementById('event-date').value = "" 
        document.getElementById('event-location').value = ""
    })()

}

function handlelist(){
    TaskList.innerHTML = ""
    
    for(  item in Tasks){
        let li = document.createElement("li")
        li.id =item
        
        li.innerHTML= `<div id="${Tasks[item].Title}"> 
                            <p>Title: ${Tasks[item].Title}</p>
                            <p>Date: <span>${Tasks[item].Date}</span></p><p>Time: <span>${Tasks[item].Time}</span></p>
                            <p>Location: ${Tasks[item].Location}</p><button onclick ="deletebutton('${item}')">Delete</button><button onclick="update('${item}')"> Edit</button>`
        TaskList.appendChild(li);
    }
}

function deletebutton(t){
    console.log(t)
    
    Tasks.splice(t, 1)
   console.log(Tasks)
    handlelist();
    
}

function update(t){
   
   let task = Tasks[t]
 
   
   document.getElementById("event-title").value = task.Title
   document.getElementById("event-time").value = task.Time
   document.getElementById("event-date").value = task.Date
   document.getElementById("event-location").value = task.Location

   

    document.getElementById('submit').onclick = function() {
        Tasks[t] = {
            Title: document.getElementById('event-title').value,
            Time: document.getElementById('event-time').value,
            Date: document.getElementById('event-date').value,
            Location: document.getElementById('event-location').value
        };
        handlelist();
        document.getElementById('submit').onclick = add;
    };
    
}

