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
lightModeButton.addEventListener('click', lightMode);
darkModeButton.addEventListener('click', darkMode);

function addTask(){
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
    newTask.querySelector("span").textContent = inputValue;
    var deleteButton = newTask.querySelector("#delete-task-btn");
    deleteButton.addEventListener('click', function() {
        deleteTask(newTask);
    });

    input.value="";
    
    taskContainer.appendChild(newTask);
}
var addButton = document.getElementById('add-task-btn');
addButton.addEventListener('click',addTask);
function deleteTask(task) {
    var taskContainer = document.getElementById("tasks-container");
    taskContainer.removeChild(task);
}

