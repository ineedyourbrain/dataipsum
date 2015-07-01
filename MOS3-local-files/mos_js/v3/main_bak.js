var lastWidth = $(window).width();

$(document).ready(function() {
	
	// initialize the megamenu
	/*
	Copyright © 2013 Adobe Systems Incorporated.
	
	Licensed under the Apache License, Version 2.0 (the “License”);
	you may not use this file except in compliance with the License.
	You may obtain a copy of the License at
	
	http://www.apache.org/licenses/LICENSE-2.0
	
	Unless required by applicable law or agreed to in writing, software
	distributed under the License is distributed on an “AS IS” BASIS,
	WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	See the License for the specific language governing permissions and
	limitations under the License.
	*/
	
	(function(){$('.navmenu').accessibleMegaMenu();})();
	(function(){$('.megamenu').accessibleMegaMenu();})();
	
    // initialize carousel
	(function(){$('.carousel').bxSlider({
		slideWidth: 150,
		minSlides: 1,
		maxSlides: 5,
		moveSlides: 1,
		slideMargin: 33,
		pager: false,
		controls: true,
		prevText: 'Prev',
		nextText: 'Next'
	});
	})();
	// initialize hp-slider
	$('.hp-slider').bxSlider({
		auto: true,
		speed: 1200,
		mode: 'fade'
	});
	
	// initialize cta-slider
	$('.cta-slider').bxSlider({
		auto: true,
		speed: 1200,
		mode: 'fade'
	});
	
	
//////////////    // MAIN MENU 
    
	    //run test on initial page load
	    var browserWidth = checkSize();
		closeNavResize(browserWidth);
		
	    // run test on resize of the window
	    $(window).on('resize', {width:checkSize}, closeNavResize);
	
		$( ".navbar-toggle" ).click(function() {
			$( ".main-nav" ).slideToggle( "slow", function() {
			// Animation complete.
			});
		});
	
	// HP CAROUSEL HOVER 
	
		$(".carousel-hovers .icon-img").focus(function() {
	        $(this).trigger("click");
	    });
	    $(".carousel-hovers .icon-img").mouseover(function() {
	        $(this).trigger("click");
	    });
	    $(".carousel-hovers .icon-img").focusout(function() {
	        $(this).trigger("mouseleave");
	    });
		$(".carousel-hovers .icon-img").click(function(e){
			e.preventDefault();
			
/*
	        var $thisSlide = $(this).parent().find('.slide');
	        var $thisSlideHover = $(this).parent().find('.slide-more');
	
			$('.slide-more').hide();
			
	        if (($thisSlide).css('display') != 'none') { 
	            ($thisSlide).hide();
	            ($thisSlideHover).show();	
	        } else {
	            ($thisSlide).show();
	            ($thisSlideHover).hide();	
	        }
	        
*/
			var that = this;
			function getSlideParent(){
				var slideParent = $(that).parent().find('.slide');
				return slideParent;
			}
			function getSlideHover(){
				var thisSlideHover = $(that).parent().find('.slide-more');
				return thisSlideHover;
			}

			$('.slide-more').hide();
			
			if ((getSlideParent()).css('display') != 'none') { 
	            (getSlideParent()).hide();
	            (getSlideHover()).show();	
	        } else {
	            (getSlideParent()).show();
	            (getSlideHover()).hide();	
	        }


		})
		$(".slide-more").mouseleave(function(){
			var $thisSlide = $(this).parent().find('.slide');
			var $thisSlideHover = $(this).parent().find('.slide-more');
			
			($thisSlide).attr("style", "");
			($thisSlideHover).attr("style", "");	
		})
	
	// SHOW MORE LINK TOGGLE
	
		$( ".showMore").click(function(e) {
		
			e.preventDefault();
			
			$(this).siblings(".moreContent").slideToggle(300, function() {
	
				if ($(this).is(":visible")) {
					$(this).prev().text("Show Less").append("&nbsp;<i class=\"fa fa-sort-asc\"></i>");
				} else {
					$(this).prev().text("Show Full List").append("&nbsp;<i class=\"fa fa-sort-desc\"></i>");
				}
			});
		});
});


//Function to the css rule
function closeNavResize(width){
	
	// check if your passing the width as a property on an event object
	if (typeof(width === 'object') && typeof(width.width === 'number')) {
		width.width = width
	}
	
	if( width < 776 ) {
		$( ".main-nav" ).hide();
	} else {
		$( ".main-nav" ).show();
	}
}

function checkSize() {
	var myWidth = 0;
	if( typeof( window.innerWidth ) == 'number' ) {
		//Non-IE
		myWidth = window.innerWidth;
	} else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
		//IE 6+ in 'standards compliant mode'
		myWidth = document.documentElement.clientWidth;
	} 
	
	return myWidth;
	/*
if ($(".accessible-megamenu-top-nav-item").css("float") == "none" ){
        return false;
    } else {
    	$( ".main-nav" ).show();
	    return true;
    }
*/
}