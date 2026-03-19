function startGame(){

let name=document.getElementById("playerName").value.trim();

if(name===""){
alert("Enter your name first!");
return;
}

document.getElementById("startScreen").classList.add("hidden");
document.getElementById("descScreen").classList.remove("hidden");

}

function showTopics(){

document.getElementById("descScreen").classList.add("hidden");
document.getElementById("topicScreen").classList.remove("hidden");

}
