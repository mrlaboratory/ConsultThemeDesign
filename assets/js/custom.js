$(document).ready(function() {
    "use strict";
    /*=============================================
        Template Name   : Consult | HTML5 Template
        Template URL    : http://template.helloxpart.com/consult
        Author          : helloxpart
        Version         : 1.0
        Tags            : Consultancy, Consult
    ===============================================*/
    /*=========== TABLE OF CONTENTS ===========
        01. Hamburger Menu Icon
        02. Hamburger Menu Icon
        03. Scroll To Top
        04. Video Active Js 
        05. Home page 1 Masonery Active
        06. Our serviecasousel Active
        07. home blog section casousel Active
        08. home blog section casousel Active
        09. home blog section casousel Active
        10. Digital Client Active
        11. Home 01 Slider Active
        12. Home 01 Slider Active
        13. Gmaps active js
        14. MixItUp JS Active
        15. Wow JS Active
        16. Counter Up
        17. Textillate
        18. Preloader


    ======================================*/
    /*-------------------------*/
    /*  01. Hamburger Menu Icon
    /*-------------------------*/
    if ($(".navbar").length) {
        var options = {
            offset: 350,
            offsetSide: 'top',
            classes: {
                clone: 'banner--clone fixed',
                stick: 'banner--stick',
                unstick: 'banner--unstick'
            },
            onStick: function() {
                $($.SmartMenus.Bootstrap.init);
            },
            onUnstick: function() {
                $('.navbar .btn-group').removeClass('open');
            }
        };
        var banner = new Headhesive('.navbar', options);
    }

    /*-----------------------*/
    /*  02. Hamburger Menu Icon
    /*-----------------------*/
    $(".nav-bars").on("click", function() {
        $(".nav-bars").toggleClass("is-active");
    });

    /*--------------------------------
        03. Scroll To Top
    ---------------------------------*/
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });

    /*--------------------------------
        04. Video Active Js 
    ---------------------------------*/
    $('.video-icon').magnificPopup({
        type: 'iframe',
        removalDelay: 300,
        mainClass: 'mfp-fade'
    });

    /*--------------------------------
        05. Home page 1 Masonery Active
    ---------------------------------*/
    $(window).on('load', function() {
        if ($('.consultancy_masonery_container').length) {
            var $container = $('.consultancy_masonery_container').isotope({
                itemSelector: '.consultancy_masonery_item',
                masonry: {
                    columnWidth: '.consultancy_masonery_sizer'
                }
            });
            $('.consultancy_masonery_menu a').on('click', function() {
                if ($(this).hasClass('active')) return false;
                $(this).parent().find('.active').removeClass('active');
                $(this).addClass('active');
                $(this).closest('.consultancy_masonery_menu').find('.title').text($(this).find('.text').text());
                if ($(this).closest('.consultancy_masonery_menu').find('.title').is(':visible')) $(this).closest('.consultancy_masonery_menu').find('.toggle').slideUp();
                var filterValue = $(this).attr('data-filter');
                $container.isotope({
                    filter: filterValue
                });
            });
        }
    });

    /*----------------------------
        06. Our serviecasousel Active
    ------------------------------ */
    $(".our_service_carousel_active").owlCarousel({
        items: 4,
        autoplay: true,
        loop: true,
        margin: 30,
        dots: false,
        mouseDrag: false,
        nav: true,
        navText: ["<i class='flaticon-left-arrow'></i>", "<i class='flaticon-right-arrow'></i>"],
        transitionStyle: "fade",
        animateIn: 'fadeIn',
        animateOut: 'fadeOutLeft',
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });

    /*----------------------------
        07. home blog section casousel Active
    ------------------------------ */
    $(".complete_project_active").owlCarousel({
        items: 3,
        autoplay: true,
        loop: true,
        margin: 30,
        dots: false,
        mouseDrag: true,
        nav: true,
        navText: ["<i class='flaticon-left-arrow'></i>", "<i class='flaticon-right-arrow'></i>"],
        transitionStyle: "fade",
        animateIn: 'fadeIn',
        animateOut: 'fadeOutLeft',
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    /*----------------------------
        08. home blog section casousel Active
    ------------------------------ */
    $(".client_say_testimonial_active").owlCarousel({
        items: 3,
        autoplay: true,
        loop: true,
        margin: 30,
        dots: false,
        mouseDrag: true,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        transitionStyle: "fade",
        animateIn: 'fadeIn',
        animateOut: 'fadeOutLeft',
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    /*----------------------------
        09. home blog section casousel Active
    ------------------------------ */
    // $(".single_blog_h_active").owlCarousel({
    //     items: 2,
    //     autoplay: true,
    //     loop: true,
    //     dots: false,
    //     mouseDrag: true,
    //     nav: true,
    //     navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    //     transitionStyle: "fade",
    //     animateIn: 'fadeIn',
    //     animateOut: 'fadeOutLeft',
    //     smartSpeed: 1000
    // });

     // $(".single_blog_h_active").owlCarousel({
        // items: 2,
        // autoplay: true,
        // loop: true,
        // margin: 30,
        // dots: false,
        // mouseDrag: true,
        // nav: true,
        // navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        // transitionStyle: "fade",
        // animateIn: 'fadeIn',
        // animateOut: 'fadeOutLeft',
        // smartSpeed: 1000,
        // responsive: {
            // 0: {
                // items: 1
            // },
            // 600: {
                // items: 2
            // },
            // 1000: {
                // items: 2
            // }
        // }
    // });

    /*--------------------------------
        10. Digital Client Active
    ---------------------------------*/
    $('.single_a_me_list').owlCarousel({
        items: 4,
        loop: true,
        margin: 133,
        mouseDrag: true,
        dots: false,
        smartSpeed: 1000,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });

    /*--------------------------------
        11. Home 01 Slider Active
    ---------------------------------*/
    var home_default_slider = jQuery;
    var revapi_digital;
    if (home_default_slider("#home_default").revolution == undefined) {
        revslider_showDoubleJqueryError("#home_default");
    } else {
        revapi_digital = home_default_slider("#home_default").show().revolution({
            sliderType: "standard",
            jsFileLocation: "revolution/js/",
            sliderLayout: "fullscreen",
            dottedOverlay: "none",
            delay: 4000,
            navigation: {
                keyboardNavigation: "off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                mouseScrollReverse: "default",
                onHoverStop: "off",
                touch: {
                    touchenabled: "on",
                    swipe_threshold: 75,
                    swipe_min_touches: 50,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false
                },
                arrows: {
                    style: "uranus",
                    enable: true,
                    hide_onmobile: true,
                    hide_under: 778,
                    hide_onleave: true,
                    hide_delay: 200,
                    hide_delay_mobile: 1200,
                    tmp: '',
                    left: {
                        h_align: "left",
                        v_align: "center",
                        h_offset: 20,
                        v_offset: 0
                    },
                    right: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 20,
                        v_offset: 0
                    }
                }
            },
            responsiveLevels: [1240, 1024, 778, 480],
            visibilityLevels: [1240, 1024, 778, 480],
            gridwidth: [1600, 1024, 778, 480],
            gridheight: [900, 600, 500, 400],
            lazyType: "none",
            shadow: 0,
            spinner: "off",
            stopLoop: "off",
            stopAfterLoops: -1,
            stopAtSlide: -1,
            shuffle: "on",
            autoHeight: "on",
            fullScreenOffset: "100px",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                nextSlideOnWindowFocus: "off",
                disableFocusListener: false,
            }
        });
    }

    /*--------------------------------
        12. Home 01 Slider Active
    ---------------------------------*/
    var home_2_slider = jQuery;
    var revapi_digital;
    if (home_2_slider("#home_demo_two").revolution == undefined) {
        revslider_showDoubleJqueryError("#home_demo_two");
    } else {
        revapi_digital = home_2_slider("#home_demo_two").show().revolution({
            sliderType: "standard",
            jsFileLocation: "revolution/js/",
            sliderLayout: "fullscreen",
            dottedOverlay: "none",
            delay: 4000,
            navigation: {
                keyboardNavigation: "off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                mouseScrollReverse: "default",
                onHoverStop: "off",
                touch: {
                    touchenabled: "on",
                    swipe_threshold: 75,
                    swipe_min_touches: 50,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false
                },
                arrows: {
                    style: "uranus",
                    enable: true,
                    hide_onmobile: true,
                    hide_under: 778,
                    hide_onleave: true,
                    hide_delay: 200,
                    hide_delay_mobile: 1200,
                    tmp: '',
                    left: {
                        h_align: "left",
                        v_align: "center",
                        h_offset: 20,
                        v_offset: 0
                    },
                    right: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 20,
                        v_offset: 0
                    }
                }
            },
            responsiveLevels: [1240, 1024, 778, 480],
            visibilityLevels: [1240, 1024, 778, 480],
            gridwidth: [1600, 1024, 778, 480],
            gridheight: [900, 600, 500, 400],
            lazyType: "none",
            shadow: 0,
            spinner: "off",
            stopLoop: "off",
            stopAfterLoops: -1,
            stopAtSlide: -1,
            shuffle: "on",
            autoHeight: "on",
            fullScreenOffset: "100px",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                nextSlideOnWindowFocus: "off",
                disableFocusListener: false,
            }
        });
    }

    /*----------------------------
        13. Gmaps active js
    ------------------------------*/
    var map;
    $('#map').each(function() {
        var element = $(this).attr('id');
        map = new GMaps({
            el: '#' + element,
            center: new google.maps.LatLng(36.7426331, 34.3888199),
            zoom: 9,
            scrollwheel: false,
            styles: [{
                "featureType": "administrative.land_parcel",
                "elementType": "all",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "landscape.man_made",
                "elementType": "all",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "poi",
                "elementType": "labels",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "road",
                "elementType": "labels",
                "stylers": [{
                    "visibility": "simplified"
                }, {
                    "lightness": 20
                }]
            }, {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [{
                    "hue": "#f49935"
                }]
            }, {
                "featureType": "road.highway",
                "elementType": "labels",
                "stylers": [{
                    "visibility": "simplified"
                }]
            }, {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [{
                    "hue": "#fad959"
                }]
            }, {
                "featureType": "road.arterial",
                "elementType": "labels",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [{
                    "visibility": "simplified"
                }]
            }, {
                "featureType": "road.local",
                "elementType": "labels",
                "stylers": [{
                    "visibility": "simplified"
                }]
            }, {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "water",
                "elementType": "all",
                "stylers": [{
                    "hue": "#a1cdfc"
                }, {
                    "saturation": 30
                }, {
                    "lightness": 49
                }]
            }]
        });
    });

    /*----------------------------
        14. MixItUp JS Active
    ------------------------------ */
    $('.mix-active').mixItUp();

    /*----------------------------
        15. Wow JS Active
    ------------------------------ */
    new WOW().init();

    /*----------------------------
        16. Counter Up
    ------------------------------ */
    $('.counter').counterUp({
        delay: 10,
        time: 5000
    });

    /*--------------------------------
        17. Textillate
    ---------------------------------*/
    $('.banner_effect').textillate({ in : {
            effect: 'fadeInRight',
            delayScale: 2
        },
        out: {
            effect: 'flipOutY',
            sync: true
        },
        loop: true
    });
    
    /*----------------------------
        18. Preloader
    ------------------------------ */
    $(window).load(function() {
        $('.preloader').fadeOut(2000);
    });
});