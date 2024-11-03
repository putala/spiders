$(document).ready(function () {
    $("nav a").click(function (event) {
        event.preventDefault();
        let target = $(this).attr("href");
        $.scrollTo(target, 800);
    });
});
