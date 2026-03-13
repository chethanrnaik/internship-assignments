function showInfo(type){

const messages = {

declaration:"Function Declaration is defined using the function keyword and can be called before it appears in the code.",

expression:"Function Expression is stored inside a variable and cannot be used before initialization.",

arrow:"Arrow Function is a shorter ES6 syntax and does not have its own 'this' value.",

callback:"Callback Function is passed as an argument to another function and executed later.",

anonymous:"Anonymous Function is a function without a name and often used as a temporary function."

};

document.getElementById("infoBox").innerText = messages[type];

}