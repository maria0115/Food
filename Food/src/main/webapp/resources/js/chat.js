
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

	//해당아는 url로 접속을하면 websocket으로 통로를 따로 열어준다.
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
    
    //전송하기 버튼을 눌렀을때
    $("#sendBtn").click(function() {
    	//메세지를 전송해줄 함수 호출
		sendMessage();
		//메세지 전송했기때문에 메세지 입력창 초기화 
		$('#messagearea').val('')
	});
	
    
    //메세지를 보내기위한 함수
    function onMessage(event) {
    	//websocket세션으로 받은 메세지 |를 기준으로 자르기 
        var message = event.data.split("|");
        var sender = message[0];
        var content = message[1];
        

        //세션에 넘겨받은 아이디가 현재 접속한 아이디와 다르고 메세지가 없다면 
	   if (!sender.match(userId) && content == "") {
		   //상대방이 채팅방에 입장했다고 메세지 띄워주기
		   var $enter = $("<p class='you' style='font-size: 16px;color: red;'>"+sender+"님이 채팅에 참여하였습니다.</p>");
		   //채팅창에 메세지 붙여주기 
	        $("#chat").append($enter);
	   } else {
		   //넘겨받은 메세지에 내용이 있다면 메세지창에 넘겨받은 메세지, 아이디값 넣어서 
		 var $usermsg = $("<li class='you'>"+
					"<div class='entete'>"+
						"<h2>"+sender+"</h2>"+
						"<span class='status green'></span>"+
					"</div>"+
					"<div class='message'>"+
					content+
					"</div>"+
			"</li>");
		 
		 //채팅방에 붙여주기 
		 $("#chat").append($usermsg);

	}
   }
    
    //채팅방을 열었을때
    function onOpen(event) {
    	//채팅방에 입장메시지 띄워주기 
    	var $enter = $("<p class='you' style='font-size: 18px'>채팅에 입장하셨습니다.</p>");
        $("#chat").append($enter);
        //웹소켓에 아이디와 메세지를 구분할 "|" 로 문장 만들어서 전송해주기 
        webSocket.send($("#chat_id").val()+"|");
    }
    //에러가 났을때 
    function onError(event) {
    	//알림창 띄워주기 
        alert(event.data);
    }
    //메세지 보내기 
    function sendMessage() {
    	//메세지전송할때 메세지창에 아무것도 없을때
        if (inputMessage.value == "") {
        	//메세지를 입력해달라는 알림창 띄우기
        	alert("메세지를 입력해주세요");
        } else {
        	//내가 전송하는 메세지 아이디값과 메세지 전송창에 입력된 값 받아서 
            var $usermsg = $("<li class='me'>"+
					"<div class='entete'>"+
						"<h2>"+userId+"</h2>"+
						"<span class='status blue'></span>"+
					"</div>"+
					"<div class='message'>"+
					inputMessage.value+
					"</div>"+
			"</li>");
            //채팅방에 붙여주기 
		 $("#chat").append($usermsg);
        }
        //웹소켓 세션에도 아이디와 메세지값 세션으로 전송해주고 
        webSocket.send($("#chat_id").val() + "|" + inputMessage.value);
        //메세지 입력창 초기화 
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
