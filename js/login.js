

function login(){
    let id = document.getElementById("floatingInput").value;
    let pass = document.getElementById("floatingPassword").value;

    console.log(id);
    console.log(pass);
}

function requiredCheck(id, msg, currentElement){
    let name = document.getElementById("floatingInput").value;
    let msgcenter = document.getElementById(id);

    // depending on
    if (name == ""){
        msgcenter.innerHTML = msg;
    } 
    else {
        msgcenter.innerHTML = "";
    }

    // check if the password is greater than 8 characters
    if (currentElement.id == "floatingPassword"){
        if (currentElement.value.length < 8){
            msgcenter.innerHTML += "\n You must have a password greater than 8 characters.";
        }
    }
}