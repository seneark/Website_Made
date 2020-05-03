function loginSubmit() {
    var pwd = document.forms[0].title.value
    var realpwd = "Pranked!!"
    if(pwd == realpwd)
        return true;
    else {
        alert("You Are Not the user")
        return false;
    }
}