// from labs
function showDescription(descript){
    $("#description").html("Description: " + descript);
}

// from labs
function hideDescription(){
    $("#description").html("");
}

//Regex Source: https://stackoverflow.com/questions/201323/how-can-i-validate-an-email-address-using-a-regular-expression
function validate(){
    var email = $("#email").val();
    email = email.toLowerCase;
    if (email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        alert("Email is not valid format.");
        return false;
    }
}