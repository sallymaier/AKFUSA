(function ($) {

    "use strict";

    /*
		Your custom JS
	*/


})(jQuery);

jQuery(window).load(function () {
jQuery('div#vc_col-sm-31').each(function(i) {
  jQuery(this).fadeOut(0).delay(1000*i).fadeIn(4000);
});							  
});