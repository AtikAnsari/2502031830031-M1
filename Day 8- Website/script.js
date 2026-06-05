function showMessage(){
    alert("Welcome to MERN Stack Website");
}

function validateForm(){
    let name=document.getElementById("name").value;

    if(name==""){
        alert("Enter Name");
        return false;
    }

    alert("Registration Successful");
    return true;
}