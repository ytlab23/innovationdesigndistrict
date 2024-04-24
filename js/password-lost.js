var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function($) {

	$( '#lostpasswordform' ).submit( function( event ) {

		var text = $( '#somfrp_user_info' ).val();

		if ( ! text ) {
			sompassFieldInvalid( $( '#lostpasswordform #somfrp_user_info' ) )
			event.preventDefault();
			return false;
		}

	});


	$( '#resetpasswordform' ).submit( function( event ) {

		var new_pass = $( '#som_new_user_pass' ).val();
		var new_pass2 = $( '#som_new_user_pass_again' ).val();

		if ( new_pass && new_pass2 ) {
			sompass_posting_reset();
		}

	});

	function sompassFieldInvalid( element ) {
		//
	}

	function sompass_posting_reset() {
		$( '#resetpasswordform #reset-pass-submit' ).attr( 'disabled', true );
	}

	function sompass_posting() {
		$( '#lostpasswordform #reset-pass-submit' ).attr( 'disabled', true );
	}

	$( '#lostpasswordform #somfrp_user_info' ).on('input', function() {
		//
	});

})( jQuery );

}
/*
     FILE ARCHIVED ON 06:49:28 Feb 08, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:45:17 Apr 18, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1.883
  exclusion.robots: 0.207
  exclusion.robots.policy: 0.191
  cdx.remote: 0.092
  esindex: 0.013
  LoadShardBlock: 58.627 (3)
  PetaboxLoader3.datanode: 72.266 (5)
  load_resource: 363.031 (2)
  PetaboxLoader3.resolve: 296.921 (2)
*/