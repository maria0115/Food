
   var websockt = new WebSocket('ws://localhost:8080/Food/mealBoard/chatBox.do?f_title=');
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
   $("#sendBtn").click(function(){
	   
	   var msg = $("#messagearea").val();
	   var userid = $.session.get("user_id");
	   var $usermsg = $("<li class='me'>"+
							"<div class='entete'>"+
								"<h2>"+userid+"</h2>"+
								"<span class='status blue'></span>"+
							"</div>"+
							"<div class='message'>"+
							msg+
							"</div>"+
					"</li>");
	   
   });
   