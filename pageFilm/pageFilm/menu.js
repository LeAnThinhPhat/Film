$(document).ready(function () {

    $.getJSON("https://api.fimplus.io/cm/hd1/v1/menu?platform=web", (data) => {
        var menu = $(".menu");
        $.each(data.items, (key, val) => {
            menu.append(`<li><a href="https://api.fimplus.io/cm${val.url}">${val.title}</a></li>`)
        })

    })

    $(".icon").click(function () {
        $(".menu").fadeToggle(500);
        $(".top-menu").toggleClass("top-animate");
        $(".mid-menu").toggleClass("mid-animate");
        $(".bottom-menu").toggleClass("bottom-animate");
    });
});


