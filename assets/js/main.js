(function($) {
    "use strict";

    $(document).ready(function() {
        /**-----------------------------
         *  Navbar fix
         * ---------------------------*/
        $(document).on(
            "click",
            ".navbar-area .navbar-nav li.menu-item-has-children>a",
            function(e) {
                e.preventDefault();
            }
        );

        $(document).on("mouseover", ".single-intro-inner:not(.stepper)", function() {
            $(this).addClass("single-intro-inner-active");
            $(".single-intro-inner").removeClass("single-intro-inner-active");
            $(this).addClass("single-intro-inner-active");
        });

        /*-------------------------------------
                menu
            -------------------------------------*/
        $(".navbar-area .menu").on("click", function() {
            $(this).toggleClass("open");
            $(".navbar-area .navbar-collapse").toggleClass("sopen");
        });

        // mobile menu
        if ($(window).width() < 992) {
            $(".in-mobile").clone().appendTo(".sidebar-inner");
            $(".in-mobile ul li.menu-item-has-children").append(
                '<i class="fas fa-chevron-right"></i>'
            );
            $('<i class="fas fa-chevron-right"></i>').insertAfter("");

            $(".menu-item-has-children a").on("click", function(e) {
                // e.preventDefault();

                $(this).siblings(".sub-menu").animate({
                        height: "toggle",
                    },
                    300
                );
            });
        }

        var menutoggle = $(".menu-toggle");
        var mainmenu = $(".navbar-nav");

        menutoggle.on("click", function() {
            if (menutoggle.hasClass("is-active")) {
                mainmenu.removeClass("menu-open");
            } else {
                mainmenu.addClass("menu-open");
            }
        });

        /*--------------------------------------------------
                select onput
            ---------------------------------------------------*/
        if ($(".single-select").length) {
            $(".single-select").niceSelect();
        }

        /* --------------------------------------------------
                isotop filter 
            ---------------------------------------------------- */
        var $Container = $(".isotop-filter-area");
        if ($Container.length > 0) {

            var festivarMasonry = $Container.isotope({
                itemSelector: ".project-filter-item", // use a separate class for itemSelector, other than .col-
                masonry: {
                    gutter: 0,
                },
            });

            $('.isotop-filter-menu > a').click(function() {
                var filterValue = $(this).attr("data-filter");
                festivarMasonry.isotope({
                    filter: filterValue,
                });
            });

            $('.isotop-filter-menu > a').click(function() {
                $(this).siblings().removeClass("current");
                $(this).addClass("current");
            });
        }

        /*--------------------------------------------
                Search Popup
            ---------------------------------------------*/
        var bodyOvrelay = $("#body-overlay");
        var searchPopup = $("#td-search-popup");
        var sidebarMenu = $("#sidebar-menu");

        $(document).on("click", "#body-overlay", function(e) {
            e.preventDefault();
            bodyOvrelay.removeClass("active");
            searchPopup.removeClass("active");
            sidebarMenu.removeClass("active");
        });
        $(document).on("click", ".search-bar-btn", function(e) {
            e.preventDefault();
            searchPopup.addClass("active");
            bodyOvrelay.addClass("active");
        });

        // sidebar menu
        $(document).on("click", ".sidebar-menu-close", function(e) {
            e.preventDefault();
            bodyOvrelay.removeClass("active");
            sidebarMenu.removeClass("active");
        });
        $(document).on("click", "#navigation-button", function(e) {
            e.preventDefault();
            sidebarMenu.addClass("active");
            bodyOvrelay.addClass("active");
        });

        /* -----------------------------------------------------
                Variables
            ----------------------------------------------------- */
        var leftArrow = '<i class="fa fa-angle-left"></i>';
        var rightArrow = '<i class="fa fa-angle-right"></i>';

        /*------------------------------------------------
                banner-slider
            ------------------------------------------------*/
        $(".banner-slider").owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            dots: false,
            smartSpeed: 1500,
            items: 1,
            navText: [leftArrow, rightArrow],
        });

        /*------------------------------------------------
                intro-slider
            ------------------------------------------------*/
        $(".intro-slider").owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            dots: false,
            smartSpeed: 1500,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 2,
                },
                992: {
                    items: 4,
                },
            },
        });

        /*------------------------------------------------
                testimonial-slider
            ------------------------------------------------*/
        $(".testimonial-slider").owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            dots: true,
            smartSpeed: 1500,
            items: 1,
            loop: true,
            autoplay: true,
        });

        /*------------------------------------------------
                testimonial-slider-2
            ------------------------------------------------*/
        $(".testimonial-slider-2").owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            dots: true,
            smartSpeed: 1500,
            items: 1,
            loop: true,
            autoplay: true,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 1,
                },
                992: {
                    items: 2,
                },
            },
        });

        /*------------------------------------------------
                client-slider
            ------------------------------------------------*/
        $(".client-slider").owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            dots: false,
            smartSpeed: 1500,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 3,
                },
                992: {
                    items: 5,
                },
            },
        });

        /*------------------------------------------------
                Magnific JS
            ------------------------------------------------*/
        $(".video-play-btn").magnificPopup({
            type: "iframe",
            removalDelay: 260,
            mainClass: "mfp-zoom-in",
        });
        $.extend(true, $.magnificPopup.defaults, {
            iframe: {
                patterns: {
                    youtube: {
                        index: "youtube.com/",
                        id: "v=",
                        src: "https://www.youtube.com/embed/Wimkqo8gDZ0",
                    },
                },
            },
        });

        /* -----------------------------------------
                fact counter
            ----------------------------------------- */
        $(".counter").counterUp({
            delay: 15,
            time: 2000,
        });

        /*----------------------------------------
               back to top
            ----------------------------------------*/
        $(document).on("click", ".back-to-top", function() {
            $("html,body").animate({
                    scrollTop: 0,
                },
                2000
            );
        });
    });

    $(window).on("scroll", function() {
        /*---------------------------------------
                back-to-top
            -----------------------------------------*/
        var ScrollTop = $(".back-to-top");
        if ($(window).scrollTop() > 1000) {
            ScrollTop.fadeIn(1000);
        } else {
            ScrollTop.fadeOut(1000);
        }

        /*---------------------------------------
                sticky-active
            -----------------------------------------*/
        var scroll = $(window).scrollTop();
        if (scroll < 445) {
            $(".navbar").removeClass("sticky-active");
        } else {
            $(".navbar").addClass("sticky-active");
        }
    });

    $(window).on("load", function() {
        /*-----------------
                preloader
            ------------------*/
        var preLoder = $("#preloader");
        preLoder.fadeOut(0);

        /*-----------------
                back to top
            ------------------*/
        var backtoTop = $(".back-to-top");
        backtoTop.fadeOut();

        /*---------------------
                Cancel Preloader
            ----------------------*/
        $(document).on("click", ".cancel-preloader a", function(e) {
            e.preventDefault();
            $("#preloader").fadeOut(1800)
        });
    });


    $('.copy').click(function(e) {
        e.preventDefault();
        let text_to_copy = $('.copy input').val();
        navigator.clipboard.writeText(text_to_copy).then(() => {
            $('.copy button').text('copied!');
        })
    });


    try {
        let stepsForm = $("#steps-form");
        stepsForm.validate({
            errorPlacement: function errorPlacement(error, element) { null },
            rules: {
                'interests[]': {
                    required: true
                },
                'help_for[]': {
                    required: true
                },
                'monthly_salary[]': {
                    required: true
                },
                'number_physicians[]': {
                    required: true
                }
            },
            debug: true
        })
        stepsForm.steps({
            headerTag: "h3",
            bodyTag: "section",
            transitionEffect: "slideLeft",
            autoFocus: true,
            labels: {
                next: "Start My Free Assessment",
                finish: "Send My Free Assessment",
            },
            onStepChanging: function(event, currentIndex, newIndex) {

                stepsForm.validate().settings.ignore = ":disabled,.service-area:not('.current') input";

                let isValid = stepsForm.valid()
                if (isValid) {
                    if (newIndex > 0) {
                        $('#steps-form .actions ul li>a[href="#next"]').text("next");
                    } else {
                        $('#steps-form .actions ul li>a[href="#next"]').text("Start My Free Assessment");
                    }
                }
                return isValid;
            },
            onFinishing: function(event, currentIndex) {
                stepsForm.validate().settings.ignore = ":disabled";
                return stepsForm.valid();
            },
        });

        $('#steps-form .actions ul li>a[href="#next"]').click(function(e) {})
    } catch (e) {

    }
})(jQuery);