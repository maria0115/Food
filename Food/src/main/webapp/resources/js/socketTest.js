//채팅방 안에서 쓸 script


$.fn.getUrlParameter = function(sParam) {
	
		var sPageURL = decodeURIComponent(window.location.search.substring(1)),
	
		sURLVariables = sPageURL.split('&'),
	
		sParameterName,
	
		i;
	
		for (i = 0; i < sURLVariables.length; i++) {
	
			sParameterName = sURLVariables[i].split('=');
	
			if (sParameterName[0] === sParam) {
	
				return sParameterName[1] === undefined ? true : sParameterName[1];
	
			}
	
		}
	
	};
	
	var portnum = $.fn.getUrlParameter('f_port');
	var userId = $.fn.getUrlParameter('userId');
	var title = $.fn.getUrlParameter('title');


	