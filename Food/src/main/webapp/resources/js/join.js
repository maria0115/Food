
	var joinid = $("#joinid").val();
	var id = $("#id").val();
	var end = $("#end").text();
	
	
	//참여하기를 누른사용자중에 로그인한유저의 아이디가 있다면 
	if(joinid.match(id)){ 
		var $div = $('<span id="join">참가중</span>');
		
		$("#joincnt").append($div);
		
		//span태그안에 마감되었습니다 라는 문구가 있다면 
		if(end.match("마감되었습니다.")){
			//참가중 문구 지우기
			$("#join").remove();
		}
	} 
	
	
	window.history.forward();
	 function noBack(){window.history.forward();}
	
