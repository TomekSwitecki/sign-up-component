function validation() {

    var email = $("#email-input");
    var password = $("#password-input");
    var fname = $("#fname-input");
    var lname = $("#lname-input");
    var red='hsl(0, 100%, 74%)';
    var dark_blue='hsl(249, 10%, 26%)';
    if (email.val() === "" || !validateEmail(email.val())) {
        Show_error("#email",red);
    }
    else {
        Hide_error("#email",dark_blue);
    }


    if (password.val() === "") {
        Show_error("#password",red);
    }
    else {
        Hide_error("#password",dark_blue);
    }


    if (fname.val() === "") {
        Show_error("#fname",red);
    }
    else {
        Hide_error("#fname",dark_blue);
    }

    if (lname.val() === "") {
        Show_error("#lname",red);
    }
    else {
        Hide_error("#lname",dark_blue);
    }

}


function Show_error(input,color)
{

        $(input+"-error-icon").css("visibility", "visible");
        $(input+"-error-text").css("visibility", "visible");
        $(input+"-input").css('border-color', color);
}

function Hide_error(input,color)
{

        $(input+"-error-icon").css("visibility", "hidden");
        $(input+"-error-text").css("visibility", "hidden");
        $(input+"-input").css('border-color', color);
}




$(".btn-green").click(function () {
    validation();
});

 function validateEmail($email) {
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return emailReg.test( $email );
}
