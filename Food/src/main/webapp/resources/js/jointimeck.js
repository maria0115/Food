
	
	//약속날짜 비교해서 게시글 비활성화
	var today = new Date();
	var size = $("input[name='f_date']").length;
	//약속날짜 
	var joindate = new Array();
	//게시판 a태그
	var join = new Array();
	//게시판 채팅방버튼 
	var btn = new Array();
	
	//오늘날짜 필요한 형식으로 format
	function getFormatDate(date){
	    var year = date.getFullYear();              //yyyy
	    var month = (1 + date.getMonth());          //M
	    month = month >= 10 ? month : '0' + month;  //month 두자리로 저장
	    var day = date.getDate();                   //d
	    day = day >= 10 ? day : '0' + day;          //day 두자리로 저장
	    var hours = date.getHours();
	    return  year + month +day+hours;       //'-' 추가하여 yyyy-mm-dd 형태 생성 가능
	}
	
	//문자열 바꿔주기 위한 함수 
	String.prototype.replaceAll = function(org, dest) {
	    return this.split(org).join(dest);
	}
	
	//게시글 만큼 for문 돌려서 각 배열에 값 저장해주기 
	for(i=0; i<size ; i++){
		
		joindate[i] = $("input[name='f_date']").eq(i).attr("value");
		join[i] = $("input[name='f_date']").eq(i).parent().prevAll().find("a");
		btn[i] = $("input[name='f_date']").eq(i).parent().siblings(5).find("button");
		
	}
	
	//저장된 값들로 약속날짜가 지나있다면 a태그 채팅방 버튼 비활성화 
	for(i=0;i<size;i++){
		
		var date = new Date();
		date = getFormatDate(date);
		joindate[i] = joindate[i].replaceAll('-','');
		date = Number(date);
		joindate[i] = Number(joindate[i]);
		
		
	    if(date>joindate[i]){
	    	join[i].css({ 'pointer-events': 'none' });
	    	btn[i].css({ 'display': 'none' });
	    	
	    }
		
	}
	
	
	
	
	
	
