(function( $ ){
    $.fn.OneSubmitForm = function() {
        load();
        var form = $(this),
            button = form.find("button[type='submit']");       
            submitting = false,
            checkForm = function (ev) {            
                if (submitting) {
                    ev.preventDefault();
                } else {
                    submitting = true;                          
                    button.prop("disabled",true);   
                    showLoad()
                }
                form.bind('ajax:complete', function() {
                        button.prop("disabled",false);     
                        hideLoad();
                });
            };
                    
            $(form).on("submit",function(ev){
                checkForm(ev);                                                
            });
    };

    $.fn.OneSubmitButton = function() {
        var button = $(this);                             
            $(document).ajaxStart(function( event, xhr, settings ) {
                button.prop("disabled",true);     
                showLoad();    
            });
            $(document).ajaxComplete(function( event, xhr, settings ) {
                button.prop("disabled",false);
                hideLoad();     
            });      
    };

    var load = function(){        
        $("body").append("<div id=\"spinner\" class=\"pai\"> <div class=\"spinner\"></div> <div class=\"backgroud\"> </div></div>")
        $("#spinner").hide();
        }, showLoad =function(){
            $("html, body").addClass("htmlbody");
            $("#spinner").show();
        },
        hideLoad = function(){
            $("html, body").removeClass("htmlbody");
            $("#spinner").hide();
        };
})( jQuery );