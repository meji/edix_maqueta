$(document).ready(function() { 
	/********************************************/
	//Icono apertura
	$("#nav-icon").on({
		click:function(){
			$('header#site-header').toggleClass('opened');
			$('header#site-header').toggleClass('closed');
			if($('.home #site-header:not(.white) #logo img').attr('src')=='images/logo_edix.svg'){
				$('.home #site-header:not(.white) #logo img').attr('src', 'images/logo_edix_b.svg');
			}else{
				$('.home #site-header:not(.white) #logo img').attr('src', 'images/logo_edix.svg');
			}
			if($('.white #logo img').attr('src')=='images/logo_edix.svg'){
				$('.white #logo img').attr('src', 'images/logo_edix_b.svg');
			}else{
				$('.white #logo img').attr('src', 'images/logo_edix.svg');
			}
		}
	});


	/********************************************/
	// Hide header on scroll down, elemento fixed y medidas del hero en carrera / header fixed carrera
	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var viewportWidth = $(window).width();
	var navbarHeight = $('header#site-header.closed').outerHeight();
	if (typeof $('#career-nav').offset() !== 'undefined'){
		var navbarCareerHeight = $('#career-nav').offset().top - $('#career-nav').outerHeight() - 50;
	}
	var restHeight = $(window).height() - navbarHeight;
	var thisIsfixedHeight = $('.this-is-fixed').outerHeight() - 50;
	var thisIsfixedWidth;
	//Mido que se haya hecho scroll
	$(window).scroll(function(event){
	    didScroll = true;
	});
	//activo la función si se hace scroll
	setInterval(function() {
	    if (didScroll) {
	        hasScrolled();
	        didScroll = false;
	    }
	}, 250);
	//Función para controlar cabeceras
	function hasScrolled() {
	    var st = $(this).scrollTop();
	    if (st > navbarHeight) {
	    	$('header#site-header.closed').addClass('small');
	    	$('.small img.unir').attr('src', 'images/logo_unir.svg');
	    	$('.small.transparent #logo img').attr('src', 'images/logo_edix.svg');
	    	$('header#site-header.closed').addClass('white')
	    	$('#help_btn.white').removeClass('white');
	    }else{
	    	$('#help_btn').addClass('white');
	    	$('header#site-header.closed').removeClass('small').removeClass('nav-up');
	    	$('.home header#site-header.closed').removeClass('small').removeClass('white');
	    	$('header#site-header.transparent').removeClass('small').removeClass('white');
	    	$('.home img.unir').attr('src', 'images/logo_unir_b.svg');
	    	$('.transparent img.unir').attr('src', 'images/logo_unir_b.svg');
	    	$('.transparent #logo img').attr('src', 'images/logo_edix_b.svg');
	    }
	    $('header#site-header.origin-white.opened').removeClass('white');
	    $('header#site-header.origin-white.closed').addClass('white');
	    $('header#site-header.origin-white.closed #logo img').attr('src', 'images/logo_edix.svg');

	    
	    // Make scroll more than delta
	    if(Math.abs(lastScrollTop - st) <= delta)
	        return;
	    
	    // If scrolled down and past the navbar, add class .nav-up.
	    if (st > lastScrollTop && st > navbarHeight) {
	        // Scroll Down
	        $('header#site-header.closed:not(.nav-down-fixed)').removeClass('nav-up').addClass('nav-down').removeClass('white');
	    } else {
	        // Scroll Up
	        if(st + $(window).height() < $(document).height()){
	            $('header#site-header.closed').removeClass('nav-down').addClass('nav-up')
	            ;
	        }
	    }
	    //Para elementos fixed:
	    if (st >thisIsfixedHeight){
	    	thisIsfixedWidth = $('.this-is-fixed').outerWidth();
	    	$('.this-is-fixed').addClass('is-fixed').css('width', thisIsfixedWidth+'px' );
	    }else{
	    	$('.this-is-fixed').removeClass('is-fixed').css('width', 'auto');

	    }

	    //Cabecera de la carrera
	    if (typeof $('#career-nav').offset() !== 'undefined'){
		    if (st > navbarCareerHeight) {
		    	$('#career-nav').addClass('fixed');
		    }else{
		    	$('#career-nav').removeClass('fixed')
		    }
		    // If scrolled down and past the navbar, add class .nav-up.
		    if (st > lastScrollTop && st > navbarCareerHeight) {
		        // Scroll Down
		        $('#career-nav').removeClass('nav-up');
		    } else {
		        // Scroll Up
		        if(st + $(window).height() < $(document).height()){
					$('#career-nav').addClass('nav-up');
				}
			}
		}
	       
	  	
	    lastScrollTop = st;
	}
	/********************************************/
	//Asignamos el alto al hero de carrera
	$('#hero-career').css('height',  restHeight+'px');
	
	/********************************************/
	//Controlamos el cambio de ancho de ventana
	$(window).resize(function () {
		restHeight = $(window).height() - navbarHeight;
		viewportWidth = $(window).width();
		// swipper_initializer(viewportWidth);
		// swipper_initializer_alone(viewportWidth);
		$('#hero-career').css('height',  restHeight+'px');
		if (viewportWidth >= 1024) {
	        $('header#site-header').removeClass('opened');
	        $('header#site-header').addClass('closed');
	        $('.home:not(.closed) #logo img').attr('src', 'images/logo_edix.svg');
	        $('.white:not(.closed) #logo img').attr('src', 'images/logo_edix.svg');
		}
	});

	/********************************************/
	//Control de formulario, zona residente
	$('form #resident_no').on({
		focusin:function(){
			$('.no-resident').fadeIn();
			$('.resident').hide();
		}
	})
	$('form #resident_yes').on({
		focusin:function(){
			$('.no-resident').hide();
			$('.resident').fadeIn();
		}
	})

	/********************************************/
	//Control de click menu carrera mobile
	$('#career-nav').on({
		click:function(){
			$(this).toggleClass('opened')
		}
	});
	
	/********************************************/
	//smooth_scroll
	// $('.smooth-scroll').click(function(event) {
	// // On-page links
	//   // Figure out element to scroll to
	//   var target = $(this).attr('data-href');
	//   // Does a scroll target exist?
	//   if (target.length) {
	//     // Only prevent default if animation is actually gonna happen
	//     event.preventDefault();
	//     $('html, body').animate({
	//       scrollTop: $(target).offset().top
	//     }, 1000, function() {
	//       // Callback after animation
	//       // Must change focus!
	//       var $target = $(target);
	//       $target.focus();
	//       if ($target.is(":focus")) { // Checking if the target was focused
	//         return false;
	//       } else {
	//         $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
	//         $target.focus(); // Set focus again
	//       };
	//     });
	//   }
	// });

	//Cargar video en los iframes
 	$('#video_modal').on('show.bs.modal', function (event) {
		var button = $(event.relatedTarget); // Button that triggered the modal
		var recipient = button.data('id'); // Extract info from data-* attributes
		var modal = $(this);
		modal.find('.iframe').attr('src', 'https://www.youtube.com/embed/'+recipient+'?rel=0&amp;showinfo=0');
	});
	//stop videos on close button
		$('#video_modal .close').click(function(){
		$('#video_modal iframe').attr('src', '');
	}); 

	/********************************************/
	swipper_initializer(viewportWidth);
	swipper_initializer_alone(viewportWidth);
	swipper_initializer_alone_testimonial();
	cargarProfes();
	hoverCareers();

	/********************************************/
	//WOW
	$('section div:not(".data-container"):not(#career-nav)').addClass('wow fadeInUp')
    var wow = new WOW({
    	mobile: false
    })
    wow.init();
});

//SLIDERS funciones vistas responsive
function swipper_initializer_alone_testimonial(){
	//Sliders de 1 testimonials
	var swiper_alone_testimonial = new Swiper('.swiper-container.swiper-alone-testimonial', {
		slidesPerView: 1,
		effect: 'fade',
		fadeEffect: {
		    crossFade: true
		},
		loop: true,
		speed: 1000,
		autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},
      	spaceBetween: 20,
		pagination: {
      			el: '.swiper-pagination-alone-testimonial',
			 	clickable: true
    		}
   		}
   		
	);
}
function swipper_initializer_alone(viewportWidth){
	//Sliders de 1
	
	if (viewportWidth<=468) {
		var swiper_alone = new Swiper('.swiper-container.swiper-alone', {
			slidesPerView: 1.1,
			loop: true,
			speed: 1000,
			autoplay: {
					delay: 5000,
					disableOnInteraction: false,
				},
	      	spaceBetween: 20,
			pagination: {
	      			el: '.swiper-pagination-alone',
				 	clickable: true
	    		}
	   		}
	   		
		);
		// $('.swiper-container.swiper-alone').css('margin', '0 -10% 0 0');
	}else{
		var swiper_alone = new Swiper('.swiper-container.swiper-alone', {
			slidesPerView: 1.1,
			loop: true,
			speed: 1000,
			autoplay: {
					delay: 5000,
					disableOnInteraction: false,
				},
	      	spaceBetween: 20,
			pagination: {
	      			el: '.swiper-pagination-alone',
				 	clickable: true
	    		}
	   		}
	   		
		);
		$('.swiper-container.swiper-alone').css('margin', '0 -5% 0 0');
	}
}
function swipper_initializer(viewportWidth){
	//Slider de 4 - 3 - 2 - 1
	var swiper = new Swiper('.swiper-container.swiper4321', {
		slidesPerView: 4.1,
		speed: 1000,
		loop: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
      	spaceBetween: 20,
		pagination: {
  			el: '.swiper-pagination',
		 	clickable: true
    	},
    	breakpoints: {
		    1400: {
		        slidesPerView: 3.1
		   	},
		   	1024:{
		   		slidesPerView: 2.1
		   	},
		   	468:{
		   		slidesPerView: 1.1
		   	},
		}
   	});
	//Anulamos el autoplay en el hover
	$('.swiper-container.swiper4321').hover(function(){swiper.autoplay.stop();}, function(){swiper.autoplay.start();});
}
function cargarProfes(){
		//Cargar video en los iframes- 
 	$('#modal-profe').on('show.bs.modal', function (event) {
		var button = $(event.relatedTarget); // Button that triggered the modal
		var image_src = $(button).find('img').attr('src');
		var image_mobile = $(button).data('src_mobile');
		var job = button.data('job'); // Extract info from data-* attributes
		var name = button.data('name');
		var content = button.data('content');
		var linkedin = button.data('linkedin')
		var modal = $(this);
		modal.find('.image').attr('src', image_src);
		modal.find('.image').attr('alt', name);
		modal.find('.image').attr('title', name);
		modal.find('.linkedin').attr('href', linkedin);
		modal.find('.image-container source').attr('srcset', image_mobile)
		modal.find('.job').html(job);
		modal.find('.name').html(name);
		modal.find('.text').html(content);
	});
}
function hoverCareers(){
		//Cargar video en los iframes- 
 	$('.career-card.icon-left').on('mouseenter', function (event) {
		var card = $(this); // Button that triggered the modal
		var image_src = $(card).find('img').attr('src');
		var image_src_without_extension = image_src.split('.svg').shift();
		card.find('img').attr('src', image_src_without_extension+'-on.svg');
		card.addClass('hover');
	});
 	//Expandimos el click al div
	$(".career-card.icon-left").click(function() {
	  window.location = $(this).find("a").attr("href"); 
	  return false;
	});
	//Quitamos el hover
	 $('.career-card.icon-left').on('mouseleave', function (event) {
		var card = $(this); // Button that triggered the modal
		var image_src = $(card).find('img').attr('src');
		var image_src_without_extension = image_src.split('-on').shift();
		card.find('img').attr('src', image_src_without_extension+'.svg');
		card.removeClass('hover');
	});
}

/*
 * Replace all SVG images with inline SVG
 */
$('#footer .social img[src$=".svg"]').each(function(){
    var $img = $(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');
    var imgAlt = $img.attr('alt');
    var imgTitle = $img.attr('title');

    jQuery.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg');

        // Add replaced image's ID to the new SVG
        if(typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        //Width y height
        if(!$svg.attr('viewBox')){
	        $svg.attr('viewBox', ('0 0 '
	          + $svg.attr('width').match(/[0-9]+\.[0-9]*/) + ' '
	          + $svg.attr('height').match(/[0-9]+\.[0-9]*/)));
	    }

	    //Alt
	    // add replaced image's alt tag to the new SVG
		if(typeof imgAlt !== 'undefined') {
		    $svg = $svg.attr('alt', imgAlt);
		}

	    //Title
	    // add replaced image's alt tag to the new SVG
		if(typeof imgTitle !== 'undefined') {
		    $svg = $svg.attr('title', imgTitle);
		}

        // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
        if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
        }
        // Replace image with new SVG
        $img.replaceWith($svg);

    }, 'xml');
});
/********************************************/
/*Navegación de cabecera de Carrera*/
// Cache selectors
var lastId,
    topMenu = $("#career-nav ul"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("span.smooth-scroll"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("data-href"));
      if (item.length) { return item; }
    });
//Smooth scroll
menuItems.click(function(e){
  var href = $(this).attr("data-href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 1500);
  e.preventDefault();
});
// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[data-href='#"+id+"']").parent().addClass("active");
   }                   
});
/********************************************/
//False links
$('.shoot-link-blank').click(function(){
	let pageurl = this.dataset.href;
	window.open(
		pageurl,
		'_blank' // <- This is what makes it open in a new window.
	);
})
$('.shoot-link').click(function(){
	let pageurl = this.dataset.href;
  	location.href=pageurl;
})
