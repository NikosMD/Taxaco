
    $("#money-1").click(function () {
        if ($(this).is(':checked')) {
            $("#result2").show();
            $("#result2-euro").show()
        }

        else {
            $("#result2").hide();
            $("#result2-euro").hide()
        }


    });

