 (function( $ ){
   $.fn.OneSubmitForm = function() {
    var form = $(this),
        button = form.find("button[type='submit']");       
        submitting = false,
        checkForm = function (ev) {            
            if (submitting) {
                ev.preventDefault();
            } else {
                submitting = true;                          
                button.prop("disabled",true);         
            }
            form.bind('ajax:complete', function() {
                 button.prop("disabled",false);     
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
        });
        $(document).ajaxComplete(function( event, xhr, settings ) {
            button.prop("disabled",false);     
        });      
  };
})( jQuery );