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
