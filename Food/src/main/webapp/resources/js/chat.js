
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
	
	$("#param").text("portnum Value : " + portnum);
	//alert(portnum);
	$("#sendBtn").click(function() {
		sendMessage();
		$('#messagearea').val('')
	});

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
	
    
    function onMessage(event) {
        var message = event.data.split("|");
        var sender = message[0];
        var content = message[1];
        
        if (content == "") {
            
        }else {
        	if (content.match("!")) {
			$("#chat").html($("#chat").html()+ "<p class='chat_content'><b class='impress'>"
							+ sender + " : " + content + "</b></p>");
		} else {
			$("#chat").html(
					$("#chat").html() + "<p class='chat_content'>"
							+ sender + " : " + content + "</p>");
		}

	}
    }
    function onOpen(event) {
    	var $enter = $("<p class='chat_content'>채팅에 참여하였습니다.</p>");
        $("#caht").append($enter);
    }
    function onError(event) {
        alert(event.data);
    }
    function sendMessage() {
        if (inputMessage.value == "") {
        } else {
            $("#caht").html($("#caht").html()
                + "<p class='chat_content'>나 : " + inputMessage.value + "</p>");
        }
        webSocket.send($("#chat_id").val() + "|" + inputMessage.value);
        inputMessage.value = "";
    }
    //     엔터키를 통해 send함
    function enterkey() {
        if (window.event.keyCode == 13) {
            send();
        }
    }
        
    //     채팅이 많아져 스크롤바가 넘어가더라도 자동적으로 스크롤바가 내려가게함
    window.setInterval(function() {
        var elem = document.getElementById('chat');
        elem.scrollTop = elem.scrollHeight;
    }, 0);
