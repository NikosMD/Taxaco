$(document).ready(function(){
    $('#tax').on('change', function() {
        if ( this.value === '1')
        {
            $("#march50").show();
            $("#march50-euro").show();
            $("#march100").hide();
            $("#march100-euro").hide();
        }
        else if ( this.value === '2')
        {
            $("#march100").show();
            $("#march100-euro").show();
            $("#march50").hide();
            $("#march50-euro").hide();
        }
        else if ( this.value === '3')
        {
            $("#march50").show();
            $("#march50-euro").show();
            $("#march100").hide();
            $("#march100-euro").hide();
        }
        else {
            $("#march100").hide();
            $("#march100-euro").hide();
            $("#march50").hide();
            $("#march50-euro").hide();
        }
    });
});
