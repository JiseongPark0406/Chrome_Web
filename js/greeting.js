const loginForm=document.querySelector("#loginForm")
const loginInput=document.querySelector("#loginInput");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"; 
const logOutForm=document.querySelector("#logOutForm");
const button = document.querySelector("#But");


function paintGreeting(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
};
function onLogInSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, username);
    paintGreeting(username);

};

function choose(){
    console.log("click");
}
button.onclick = choose;
loginForm.addEventListener("submit", onLogInSubmit);


const saveUsername = localStorage.getItem(USERNAME_KEY);

if(saveUsername === null){
}
else{
    const username = localStorage.getItem("username")
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${saveUsername}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);

}

function logOut(){
    localStorage.removeItem("username");
}

logOutForm.addEventListener("click", logOut);

