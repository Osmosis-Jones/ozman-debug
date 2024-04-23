/*==============================================================*/
// Klev Contact Form  JS
/*==============================================================*/
(function ($) {
    "use strict"; // Start of use strict
    $("#contactForm").validator().on("submit", function (event) {
        if (event.isDefaultPrevented()) {
            // handle the invalid form...
            formError();
            submitMSG(false, "Did you fill in the form properly?");
        } else {
            // everything looks good!
            event.preventDefault();
            submitForm($(this));
        }
    });

 
    function submitForm(thisForm){
        $.ajax({
            type: "POST",
            url: "/emails/api.cfc?method=Contact",
            data: thisForm.serialize(),
            success : function(text){
                if (text.SUCCESS == true){
                    formSuccess();
                } else {
                    formError();
                    submitMSG(false,text.MESSAGE);
                }
            }
        });
    }

    function formSuccess(){
        $("#contactForm")[0].reset();
        submitMSG(true, "We will contact with you as soon as possible, You will be moved to Home page after 5 seconds")
        setTimeout(callBack_func, 5000);

    }

    function callBack_func() {
        document.location.href = "/";
     }
    function formError(){
        $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass();
        });
    }

    function submitMSG(valid, msg){
        if(valid){
            var msgClasses = "h4 text-left tada animated text-success";
        } else {
            var msgClasses = "h4 text-left text-danger";
        }
        $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
    }
}(jQuery)); // End of use strict