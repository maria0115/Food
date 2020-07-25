
	//port번호 받아오기
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

	
	$("#param").text("portnum Value : " + portnum);
	//alert(portnum);
	

	var webSocket = new WebSocket('ws://192.168.0.17:8080/Food/mealBoard/chatBox.do');
    var inputMessage = document.getElementById('messagearea');
    webSocket.onerror = function(event) {
        onError(event)
    };
    webSocket.onopen = function(event) {
        onOpen(event)
    };
    webSocket.onmessage = function(event) {
        onMessage(event)
    };
    
    $("#sendBtn").click(function() {
		sendMessage();
		$('#messagearea').val('')
	});
	
    
    function onMessage(event) {
        var message = event.data.split("|");
        var sender = message[0];
        var content = message[1];
        

	   if (content == "") {

	   } else {
		 var $usermsg = $("<li class='you'>"+
					"<div class='entete'>"+
						"<h2>"+sender+"</h2>"+
						"<span class='status green'></span>"+
					"</div>"+
					"<div class='message'>"+
					content+
					"</div>"+
			"</li>");
		 $("#chat").append($usermsg);

	}
    }
    
    
    function onOpen(event) {
    	var $enter = $("<p class='you' style='font-size: 18px'>"+userId+"님이 채팅에 참여하였습니다.</p>");
        $("#chat").append($enter);
    }
    function onError(event) {
        alert(event.data);
    }
    function sendMessage() {
        if (inputMessage.value == "") {
        	alert("메세지를 입력해주세요");
        } else {
            var $usermsg = $("<li class='me'>"+
					"<div class='entete'>"+
						"<h2>"+userId+"</h2>"+
						"<span class='status blue'></span>"+
					"</div>"+
					"<div class='message'>"+
					inputMessage.value+
					"</div>"+
			"</li>");
		 $("#chat").append($usermsg);
        }
        webSocket.send($("#chat_id").val() + "|" + inputMessage.value);
        inputMessage.value = "";
    }
    //     엔터키를 통해 send함
    $("#messagearea").keyup(function(e){ 
        var code = e.which; 
        if(code==13)e.preventDefault();
        if(code==13){
        	sendMessage();
        } 
    });
        
    //     채팅이 많아져 스크롤바가 넘어가더라도 자동적으로 스크롤바가 내려가게함
    window.setInterval(function() {
        var elem = document.getElementById('chat');
        elem.scrollTop = elem.scrollHeight;
    }, 0);
