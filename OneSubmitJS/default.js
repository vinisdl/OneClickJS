$(window).ready(function(){
    $("form").OneSubmitForm();
    $("button").OneSubmitButton();
});
function ajaxTest(){        
    $.ajax({        
        url: "http://200.192.142.243/versoes/",
        crossDomain: true,
        type: "GET",                
        success: function (result) {
            console.log(result)
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log(xhr);
        }
    });

    
}