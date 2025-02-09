const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");


function  addTask() {
    if (taskInput.value === "") {
      alert("Please enter something!");
    } 
    else{
        let li = document.createElement('li');
        li.innerHTML = taskInput.value;
        taskList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "&#10005";
        li.appendChild(span)
      
    }
    taskInput.value = "";
}

taskList.addEventListener("click", function(e){
    if(e.target.tagName === 'LI'){
      e.target.classList.toggle('checked')
    } else if (e.target.tagName === 'SPAN'){
      e.target.parentElement.remove()
    }
},false)
