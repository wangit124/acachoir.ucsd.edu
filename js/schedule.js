var className = ["#lbl1", "#lbl2", "#lbl3", "#lbl4", "#lbl5", "#lbl6", "#lbl7", "#lbl8", "#lbl9", "#lbl10", "#lbl11", "#lbl12"];
var updates = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "L"];

$(function () {
    //Loop through all Labels with class 'editable'.
    $(".editable").each(function () {

        for (var k = 0; k < className.length; k++) {
            if ($(this).is(className[k])) {
                var key = updates[k];
            }
        }
        //Reference the Label.
        var label = $(this);

        //Add a TextBox next to the Label.
        label.after("<input type = 'text' style = 'display:none' />");

        //Reference the TextBox.
        var textbox = $(this).next();

        //Set the name attribute of the TextBox.
        textbox[0].name = this.id.replace("lbl", "txt");

        //Assign the value of Label to TextBox.
        textbox.val(label.html());

        //When Label is clicked, hide Label and show TextBox.
        label.dblclick(function () {
            $(this).hide();
            $(this).next().show();
        });

        //When enter is pressed, hide TextBox and show Label
        textbox.keypress(function (e) {
            var keycode = (event.keyCode ? event.keyCode : event.which);
            if (keycode == '13') {
                localStorage.setItem(key, $(this).val());
                $(this).hide();
                $(this).prev().html($(this).val());
                $(this).prev().show();
            }
        });
    });
});

$(document).ready(function () {

    for (var i = 0; i < className.length; i++) {
        if (localStorage.getItem(updates[i]) != null) {
            $(className[i]).text(localStorage.getItem(updates[i]));
        }
    }
});

