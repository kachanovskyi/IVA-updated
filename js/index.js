$(document).ready(function () {

    var logosHeights = function () {
        if($(window).width() < 377) {
            console.log(1344);
            var height = $($('.logo-container')[0]).css('height');
            $('.logo-container').css('height', height);
        }
    };

    /* Every time the window is scrolled ... */
    $(window)
        .scroll(function () {

            /* Check the location of each desired element */
            $('.animate-in').each(function (i) {

                var bottom_of_object = $(this).offset().top + $(this).outerHeight() / 2;
                var bottom_of_window = $(window).scrollTop() + $(window).height();

                /* If the object is completely visible in the window, fade it it */
                if (bottom_of_window > bottom_of_object) {

                    if( !$(this).hasClass('iva-description-img') ) {

                        $(this).animate({
                            'opacity': '1',
                            'padding-top': '0'
                        }, 800)

                    } else {

                        $(this).animate({
                            'opacity': '1',
                            'padding-top': '50px'
                        }, 800)

                    }


                }

            });

        })
        .resize(logosHeights);
    logosHeights();
});


function hoverVideo(e) {
    $('video', this).get(0).play();
}

function hideVideo(e) {
    $('video', this).get(0).pause();
}

if (/Android|IEMobile/i.test(navigator.userAgent)) {
    var videoSlide = $(".slide-3");
    var figure2 = videoSlide.hover(hoverVideo, hideVideo);
    var figure21 = videoSlide.click(hoverVideo);
} else if (/webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/i.test(navigator.userAgent)) {
    var video = $(".video");
    var figure = video.hover(hoverVideo, hideVideo);
    var figure1 = video.click(hoverVideo);
    $("video").prop('muted', true);
}

if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

    var paraxifyInit = function () {
        myParaxify = paraxify('.paraxify');
    };

    var loadScript = function (url, callback) {
        var script = document.createElement("script");
        script.type = "text/javascript";

        if (script.readyState) { //IE
            script.onreadystatechange = function () {
                if (script.readyState == "loaded" || script.readyState == "complete") {
                    script.onreadystatechange = null;
                    callback();
                }
            };
        } else { //Others
            script.onload = function () {
                callback();
            };
        }

        script.src = url;
        document.getElementsByTagName("head")[0].appendChild(script);
    };

    loadScript("./js/paraxify.min.js", paraxifyInit);
}

//dynamic header script
var options = {
    offset: '#showHeader',
    offsetSide: 'top',
    classes: {
        clone: 'header--clone',
        stick: 'header--stick',
        unstick: 'header--unstick'
    },
    onStick: function () {
        $('#fbIcon').attr('src', './img/fb-icon-dark.svg');
        $('#twIcon').attr('src', './img/tw-icon-dark.svg');
    }
};
var header = new Headhesive('.header', options);
