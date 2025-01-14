(function($) {
    'use strict';
    
    $('.partners-logo').owlCarousel({
        loop:true,
        margin:10,
        nav: false,
        responsive:{
            0:{
                items:2
            },
            480:{
                items:3
            },
            992:{
                items:4
            }
        }
    })

    $('.test-caro').owlCarousel({
        autoplay: true,
        loop:true,
        responsiveClass:true,
        items: 1
    })

    //======================
    // Mobile menu 
    //======================
    $('#mobile-menu-toggler').on('click', function(e) {
        e.preventDefault();
        $('.navbar-nav').slideToggle();
    })
    $('.has-menu-child').append('<i class="menu-dropdown ti-angle-down"></i>');
    
    if ($(window).width() <= 991) {
        $('.menu-dropdown').on('click', function() {
            $(this).prev().slideToggle();
            $(this).toggleClass('ti-angle-down ti-angle-up')
        })
    }

}) (jQuery);





jQuery( document ).ready( function ( $ ) {
	const $feedbackSlider = $( '.feedback-slider' );

	if ( $feedbackSlider.length ) {
		$feedbackSlider.owlCarousel( {
			items: 1,
			nav: true,
			dots: true,
			autoplay: true,
			loop: true,
			mouseDrag: true,
			touchDrag: true,
			navText: [
				'<i class="fa fa-long-arrow-left"></i>',
				'<i class="fa fa-long-arrow-right"></i>'
			],
			responsive: {
				// viewport >= 767px
				767: {
					nav: true,
					dots: false
				}
			}
		} );
	
		$feedbackSlider.on( 'translate.owl.carousel', function() {
			$( '.feedback-slider-item h3' )
				.removeClass( 'animated fadeIn' )
				.css( 'opacity', '0' );
	
			$( '.feedback-slider-item img, .feedback-slider-thumb img, .customer-rating' )
				.removeClass( 'animated zoomIn' )
				.css( 'opacity', '0' );
		} );
	
		$feedbackSlider.on( 'translated.owl.carousel', function() {
			$( '.feedback-slider-item h3' )
				.addClass( 'animated fadeIn' )
				.css( 'opacity', '1' );
	
			$( '.feedback-slider-item img, .feedback-slider-thumb img, .customer-rating' )
				.addClass( 'animated zoomIn' )
				.css( 'opacity', '1' );
		} );
	
		$feedbackSlider.on( 'changed.owl.carousel', function( property ) {
			const current = property.item.index;
	
			const prevThumb = $( property.target )
				.find( '.owl-item' )
				.eq( current )
				.prev()
				.find( 'img' )
				.attr( 'src' );
	
			const nextThumb = $( property.target )
				.find( '.owl-item' )
				.eq( current )
				.next()
				.find( 'img' )
				.attr( 'src' );
	
			const prevRating = $( property.target )
				.find( '.owl-item' )
				.eq(current)
				.prev()
				.find( 'span' )
				.attr( 'data-rating' );
	
			const nextRating = $( property.target )
				.find( '.owl-item' )
				.eq( current )
				.next()
				.find( 'span' )
				.attr( 'data-rating' );
	
			$( '.thumb-prev' ).find( 'img' ).attr( 'src', prevThumb );
			$( '.thumb-next' ).find( 'img' ).attr( 'src', nextThumb );
	
			$( '.thumb-prev' )
				.find( 'span' )
				.next()
				.html( prevRating + '<i class="fa fa-star"></i>' );
	
			$( '.thumb-next' )
				.find( 'span' )
				.next()
				.html( nextRating + '<i class="fa fa-star"></i>' );
		} );
	
		$( '.thumb-next' ).on( 'click', function( e ) {
			e.preventDefault();
	
			$feedbackSlider.trigger( 'next.owl.carousel', [ 300 ] );
		} );
	
		$( '.thumb-prev' ).on( 'click', function( e ) {
			e.preventDefault();
	
			$feedbackSlider.trigger( 'prev.owl.carousel', [ 300 ] );
		} );
	}
} ); // end ready func




// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}