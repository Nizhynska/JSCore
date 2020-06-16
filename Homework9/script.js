//task1
$("a[href^='https://']").attr("target", "_blank");

//task2
$("h2.head").css("background-color", "green");
$("h2.head .inner").css("font-size", "35px");

//task3
($("h3 + div:first")).prependTo($("h3:first"));
($("h3 + div:last")).prependTo($("h3:last"));

//task4
$('input[type=checkbox]').change(function(){
    if($('input[type=checkbox]:checked').length >= 3){
        $('input[type=checkbox]:not(:checked)').attr('disabled', true);
    } else{
        $('input[type=checkbox]:disabled').attr('disabled', false);
    }
});