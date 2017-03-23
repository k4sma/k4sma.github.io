//check off specific todos by clicking
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

//click on X to delete todo
$("ul").on("click", "span", function(e) {
    $(this).parent().fadeOut(350, function() {
        $(this).remove();
    });
    e.stopPropagation();
});

//creating new todo
$("input[type='text']").keypress(function(e) {
    if(e.which === 13) {
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash-o'></i></span> " + todoText + "</li>");
    }
});

$(".fa-plus").on("click", function() {
    $("input").slideToggle(100, "linear");
});
