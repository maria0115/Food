
	var joinid = $("#joinid").val();
	var id = $("#id").val();
	var end = $("#end").text();
	alert(joinid)
	
	if(joinid.match(id)){ 
		$("#joinBtn").css("display", "none");
		var $div = $("<span id='join' style='color:black; font-weight: bolder;'>참가중</span>");
		$("#joincnt").append($div);
		
		if(end.match("마감되었습니다.")){
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
	                	alert("성공"+resultData);
	                	
	                	if(resultData != 0){
	                		
	                		$("#joinBtn").css("display", "none");
	                		var $div = $("<span id='join' style='color:black; font-weight: bolder;'>참가중</span>");
	                		$("#joincnt").append($div);
	                		
	                		if(end.match("마감되었습니다.")){
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
	
