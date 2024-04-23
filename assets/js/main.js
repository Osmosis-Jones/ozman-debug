(function($){
	"use strict";
	jQuery(document).on('ready', function () {

        // Header Sticky
		$(window).on('scroll',function() {
            if ($(this).scrollTop() > 120){  
                $('.navbar-area').addClass("is-sticky");
                $('.navbarnav2').addClass("is-sticky");
            }
            else{
                $('.navbar-area').removeClass("is-sticky");
                $('.navbarnav2').removeClass("is-sticky");
            }
        });

        // Button Hover JS
        $(function() {
            $('.default-btn')
            .on('mouseenter', function(e) {
                var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
                $(this).find('span').css({top:relY, left:relX})
            })
            .on('mouseout', function(e) {
                var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
                $(this).find('span').css({top:relY, left:relX})
            });
        });
        $(function() {
            $('.optional-btn')
            .on('mouseenter', function(e) {
                var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
                $(this).find('span').css({top:relY, left:relX})
            })
            .on('mouseout', function(e) {
                var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
                $(this).find('span').css({top:relY, left:relX})
            });
        });

        // Banner Content Slides
		$('.banner-content-slides').owlCarousel({
			loop: true,
			nav: true,
			dots: false,
			autoplayHoverPause: true,
            autoplay: true,
            autoHeight: true,
            items: 1,
            navText: [
                "<i class='bx bx-left-arrow-alt'></i>",
                "<i class='bx bx-right-arrow-alt'></i>"
            ]
        });

        // Banner Image Slides
		$('.banner-image-slider').owlCarousel({
			loop: true,
			nav: false,
			dots: true,
			autoplayHoverPause: true,
            autoplay: true,
            autoplayTimeout: 2500,
            autoHeight: true,
            items: 1,
            animateOut: 'fadeOut',
        });

        // Tooltip JS
        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        });

        // Tabs
        (function ($) {
            if ($('.tab ul.tabs').find('> li.current').length == 0){
                $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
            }
            $('.tab ul.tabs li a').on('click', function (g) {
                var tab = $(this).closest('.tab'), 
                index = $(this).closest('li').index();
                tab.find('ul.tabs > li').removeClass('current');
                $(this).closest('li').addClass('current');
                tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
                tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
                g.preventDefault();
            });
        })(jQuery);

        // Feedback Slides
		$('.feedback-slides').owlCarousel({
			loop: true,
			nav: false,
            dots: true,
            autoHeight: true,
			autoplayHoverPause: true,
            autoplay: true,
            margin: 30,
            navText: [
                "<i class='bx bx-chevron-left'></i>",
                "<i class='bx bx-chevron-right'></i>"
            ],
			responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 1,
                },
                1024: {
                    items: 2,
                },
                1200: {
                    items: 2,
				}
            }
        });

        $('.feedback-slides2').owlCarousel({
			loop: true,
			nav: false,
            dots: true,
            autoHeight: true,
			autoplayHoverPause: true,
            autoplay: true,
            margin: 30,
            navText: [
                "<i class='bx bx-chevron-left'></i>",
                "<i class='bx bx-chevron-right'></i>"
            ],
			responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 1,
                },
                1024: {
                    items: 1,
                },
                1200: {
                    items: 1,
				}
            }
        });

        // Odometer JS
        $('.odometer').appear(function(e) {
			var odo = $(".odometer");
			odo.each(function() {
				var countNumber = $(this).attr("data-count");
				$(this).html(countNumber);
			});
        });

        // Popup Image
        $('.popup-btn').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true,
            }
        });
		
		// Popup Video
		$('.popup-youtube').magnificPopup({
			disableOn: 320,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
        });

        // Partner Slides
		$('.partner-slides').owlCarousel({
			loop: true,
			nav: false,
			dots: false,
			autoplayHoverPause: true,
            autoplay: true,
            autoplayTimeout: 2500,
            margin: 50,
            navText: [
                "<i class='bx bx-chevron-left'></i>",
                "<i class='bx bx-chevron-right'></i>"
            ],
			responsive: {
                0: {
                    items: 3,
                },
                576: {
                    items: 4,
                },
                768: {
                    items: 6,
                },
                1200: {
                    items: 6,
				}
            }
        });
        // scrennshots Slides
		$('.scrennshots-slides').owlCarousel({
			loop: true,
			nav: false,
			dots: true,
			autoplayHoverPause: true,
            autoplay: true,
            margin: 50,
            navText: [
                "<i class='bx bx-chevron-left'></i>",
                "<i class='bx bx-chevron-right'></i>"
            ],
			responsive: {
                0: {
                    items: 2,
                },
                576: {
                    items: 2,
                },
                768: {
                    items: 3,
                },
                1200: {
                    items: 5,
				}
            }
        });

        // Testimonials Slides
		$('.testimonials-slides').owlCarousel({
			loop: true,
			nav: false,
			dots: true,
			autoplayHoverPause: true,
            autoplay: true,
            margin: 30,
            navText: [
                "<i class='bx bx-chevron-left'></i>",
                "<i class='bx bx-chevron-right'></i>"
            ],
			responsive: {
                0: {
                    items: 1,
                },
                576: {
                    items: 2,
                },
                768: {
                    items: 2,
                },
                1200: {
                    items: 2,
				}
            }
        });

        // FAQ Accordion
        $(function() {
            $('.accordion').find('.accordion-title').on('click', function(){
                // Adds Active Class
                $(this).toggleClass('active');
                // Expand or Collapse This Panel
                $(this).next().slideToggle('fast');
                // Hide The Other Panels
                $('.accordion-content').not($(this).next()).slideUp('fast');
                // Removes Active Class From Other Titles
                $('.accordion-title').not($(this)).removeClass('active');		
            });
        });

        // Subscribe form
		$(".newsletter-form").validator().on("submit", function (event) {
			if (event.isDefaultPrevented()) {
			// handle the invalid form...
				formErrorSub();
				submitMSGSub(false, "Please enter your email correctly.");
			} else {
				// everything looks good!
                event.preventDefault();
                submitSubsciption(event)
			}
		});
		function callbackFunction (resp) {
			if (resp.result === "success") {
				formSuccessSub();
			}
			else {
				formErrorSub();
			}
		}
		function formSuccessSub(){
			$(".newsletter-form")[0].reset();
			submitMSGSub(true, "Thank you for subscribing!");
			setTimeout(function() {
				$("#validator-newsletter").addClass('hide');
			}, 4000)
		}
		function formErrorSub(){
			$(".newsletter-form").addClass("animated shake");
			setTimeout(function() {
				$(".newsletter-form").removeClass("animated shake");
			}, 1000)
		}
		function submitMSGSub(valid, msg){
			if(valid){
				var msgClasses = "validation-success";
			} else {
				var msgClasses = "validation-danger";
			}
			$("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
		}
		// AJAX MailChimp
		function submitSubsciption(e) {

            e.preventDefault(); // avoid to execute the actual submit of the form.
            var form = $(".newsletter-form")
            var url = '/emails/api.cfc?method=Subscription';
            
            $.ajax({
                   type: "POST",
                   url: url,
			       data: form.serialize(),
                   success: function(data)
                   {
                    //    alert(data.SUCCESS); // show response from the php script.
                       formSuccessSub();
                   },
                   error: function (error) {
                    formErrorSub();
                    // alert('error; ' + eval(error.error));
                    }
                 });
           
        };

        // Go to Top
        $(function(){
            // Scroll Event
            $(window).on('scroll', function(){
                var scrolled = $(window).scrollTop();
                if (scrolled > 600) $('.go-top').addClass('active');
                if (scrolled < 600) $('.go-top').removeClass('active');
            });  
            // Click Event
            $('.go-top').on('click', function() {
                $("html, body").animate({ scrollTop: "0" },  500);
            });
        });

        // Blog Slides
		$('.blog-slides').owlCarousel({
			loop: true,
			nav: true,
			dots: false,
			autoplayHoverPause: true,
            autoplay: true,
            margin: 30,
            navText: [
                "<i class='bx bx-chevron-left'></i>",
                "<i class='bx bx-chevron-right'></i>"
            ],
			responsive: {
                0: {
                    items: 1,
                },
                576: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                1200: {
                    items: 3,
				}
            }
        });

        // Case Studies Slides
        $('.case-studies-slides').owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            autoplayHoverPause: true,
            autoplay: true,
            margin: 30,
            navText: [
                "<i class='bx bx-chevron-left'></i>",
                "<i class='bx bx-chevron-right'></i>"
            ],
            responsive: {
                0: {
                    items: 1,
                },
                576: {
                    items: 2,
                },
                768: {
                    items: 2,
                },
                992: {
                    items: 3,
                },
                1200: {
                    items: 4,
                }
            }
        });

        // Testimonials Slides
        $('.testimonials-slides-two').owlCarousel({
            loop: true,
            nav: false,
            dots: true,
            autoplayHoverPause: true,
            autoplay: true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            items: 1,
            navText: [
                "<i class='bx bx-chevron-left'></i>",
                "<i class='bx bx-chevron-right'></i>"
            ]
        });
        
	});
	
	// WOW JS
	$(window).on ('load', function (){
        if ($(".wow").length) { 
            var wow = new WOW({
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset:       20,          // distance to the element when triggering the animation (default is 0)
            mobile:       true, // trigger animations on mobile devices (default is true)
            live:         true,       // act on asynchronously loaded content (default is true)
          });
          wow.init();
        }
    });
    
    // Preloader
	$(window).on('load', function() {
		$('.preloader-area').fadeOut();
    });    

}(jQuery));

$(function(){
    var includes = $('[data-include]');
    jQuery.each(includes, function(){
      var file = $(this).data('include') + '.html';
      $(this).load(file);
    });
  });

$(window).on('load', function() {
    id_text = $($('[data-menuid]')[0]).data('menuid');
    if(id_text){
        ids = id_text.split(" ");
        for (id of ids) {
            $('#'+id).addClass("active");
        }
    }
});

$(window).on('load', function() {
    var file = '/popups/cookie-policy-popup.html';
    console.log($('#cookie-popup').html());
    $('#cookie-popup').load(file);
    // jQuery.each(includes, function(){
     
    //   $(this).load(file);
    // });
});

$(document).ready(function() {
    function checkCokie(){
        if(getAcceptCookie())
            return false;
        var unAcceptCookeiList = ["_hjAbsoluteSessionInProgress", "_hjFirstSeen", "_hjid", "_hjIncludedInPageviewSample", "_hjRecordingLastActivity", "_hjTLDTest", "hjViewportId", "oribi_session", "oribi_user_guid"];
        unAcceptCookeiList.forEach(element => {
            var acceptCookie=getCookie(element);
            if (acceptCookie != "") {
                setCookie(element, " ", -10);
            }
        });
    }
    setTimeout(checkCokie, 2000);
});


$(window).on('load', function() {
    interval = setInterval(fn, 100);
});

function fn() {
    jQuery('.mean-menu').meanmenu({
            meanScreenWidth: "991"
        });
    if ($(".mean-menu")[0]) {
        clearInterval(interval)
    }
}