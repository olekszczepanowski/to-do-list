function lightMode(){
    var element = document.body;
    if(element.classList.contains("light-mode")){
        return;
    }
    element.classList.remove("dark-mode");
    element.classList.toggle("light-mode");
}

function darkMode(){
    var element = document.body;
    element.classList.remove("light-mode");
    element.classList.toggle("dark-mode");
}

var lightModeButton = document.getElementById('light-mode-btn');
var darkModeButton = document.getElementById('dark-mode-btn');
lightModeButton.addEventListener("click", lightMode);
darkModeButton.addEventListener("click", darkMode);

function taskActions(){
    var input = document.getElementById("task-name");
    var inputValue = input.value;
    // handling the error of too long words
    var words = inputValue.split(" ");
    for(let i = 0 ; i < words.length; i++){
        if(words[i].length > 20){
            input.value="Too many characters in one word!";
            return;
        }
    }
    var taskContainer = document.getElementById("tasks-container");
    var taskTemplate = document.querySelector(".single-task");
    var newTask = taskTemplate.cloneNode(true);
    newTask.style.display = "flex";
    newTask.querySelector("input").value = inputValue;
    var deleteButton = newTask.querySelector("#delete-task-btn");
    var editButton = newTask.querySelector("#edit-task-btn");
    deleteButton.addEventListener("click", function() {
        deleteTask(newTask);
    });
    editButton.addEventListener("click", function() {
        if(editButton.innerText.toLowerCase() == "edit"){
            newTask.querySelector("input").removeAttribute("readonly");
            newTask.querySelector("input").focus();
            editButton.innerText = "Save";
        }
        else{
            newTask.querySelector("input").setAttribute("readonly",true);
            editButton.innerText = "Edit";
        }
    });
   

    input.value="";
    
    taskContainer.appendChild(newTask);
}
var addButton = document.getElementById("add-task-btn");
addButton.addEventListener("click",taskActions);
function deleteTask(task) {
    var taskContainer = document.getElementById("tasks-container");
    taskContainer.removeChild(task);
}
function editTask(task) {
    var inputElem = document.getElementById("added-task-name");
    inputElem.removeAttribute("readonly");
}


