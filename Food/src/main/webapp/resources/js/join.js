
	var joinid = $("#joinid").val();
	var id = $("#id").val();
	var end = $("#end").text();
	
	
	//참여하기를 누른사용자중에 로그인한유저의 아이디가 있다면 
	if(joinid.match(id)){ 
		$("#joinBtn").css("display", "none");
		var $div = $('<input class="btn btn-dark" type="button" id="cancel" value="취소하기"/>');
		
		$("#joincnt").append($div);
		
		//span태그안에 마감되었습니다 라는 문구가 있다면 
		if(end.match("마감되었습니다.")){
			//참가중 문구 지우기
			$("#join").remove();
		}
	} else {
		
	}
	
	//참가하기 버튼을 눌렀을때 
	$("#joinBtn").click(function(){
		
	        $.ajax({
	        		type:'post',
	        		async:true,
	                url : 'mealjoin.do',
	                contentType :'application/x-www-form-urlencoded;charset=UTF-8',
	                data :
	            		"f_userId=" + $("#joinid").val()+","+$("#id").val()+
	            		"&b_no="+ $("#b_no").val(),
	            	dataType:"text",
	                success : function(resultData){
	                	//넘겨받은 결과값이 0이 아니라면 
	                	if(resultData != 0){
	                		//참가하기 버튼 숨기고
	                		$("#joinBtn").css("display", "none");
	                		//참가중 문구띄워주기 
	                		var $div = $('<input class="btn btn-dark" type="button" id="cancel" value="취소하기">');
	                		$("#joincnt").append($div);
	                		
	                		//span태그 안에 마감되었습니다 라는 문자가 있다면 
	                		if(end.match("마감되었습니다.")){
	                			//참가중 문구 지워주기
	                			$("#join").remove();
	                		}
	                		
	                	}else{
	                		
	                	}
	                	
	                	
	                },
	        		error:function(xhr, ajaxOptions, thrownError){
	        			alert("에러"+xhr.status);
	        			alert("에러"+thrownError);
	        			console.log(e);
	        		}
	        });
		});
	
	
		
		
		

		
	
	window.history.forward();
	 function noBack(){window.history.forward();}
	
