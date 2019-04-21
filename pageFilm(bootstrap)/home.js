$(document).ready(() => {
    $.getJSON('https://api.fimplus.io/cm/hd1/v1/home?&version=1.3&imageSize=3x', (data) => {
        var play = $('.autoplay');
        var menu = $('.menufilm');
        $.each(data.banners, (key, val) => {
            play.append('<div class="img"><img src="' + val.backdrop + '"></div>');
        })
        
        $.each(data.ribbons, (key, val) => {
            menu.append('<h1 class="kindOfF">' + val.categoryType + '</h1>');
            menu.append('<div class="ribbons">');
            $.each(val.items, (key, value) => {
                $('.ribbons').append('<div class="posterPlace"> <img src="' + value.poster + '"class="posterHome"></div>')
            })
            menu.append('</div>');
        })
        $('.autoplay').slick({
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
        });

            $('.ribbons').slick({
                infinite: true,
                slidesToShow: 5,
                slidesToScroll: 1,
            });
    })
})