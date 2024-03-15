
// how to accept user input

//window prompt
//html textbox

 let username1  = window.prompt("what's your username");
 console.log(username1)

//en click a une chose est changer autre chose
 let username;
 document.getElementById("mySubmit").onclick = function () {
     username = document.getElementById("myTexte").value;
    document.getElementById("myH1").textContent =`hello ${username}`
}