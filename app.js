const loginInput = document.querySelector("#login-form input");
const longinButton = document.querySelector("#login-form button")

function onLoginBtnClick(){
    console.log(loginInput.value)
    console.log('clicked')
}



longinButton.addEventListener("click", onLoginBtnClick)