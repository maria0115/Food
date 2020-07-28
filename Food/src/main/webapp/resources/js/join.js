
	
//	$("#joinBtn").click(function(){
//		$("#joinfrm").submit();
//	});
//	
//	
	var joinid = $("#joinid").val();
	var id = $("#id").val();
	
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
	$("#joinBtn").on("click",function(){
		
	        $.ajax({
	        		type:'post',
	        		async:true,
	                url : 'mealjoin.do',
	                contentType :'application/x-www-form-urlencoded;charset=UTF-8',
	                data :
	            		"f_userId=" + $("#joinid").val()+$("#id").val()+
	            		"&b_no="+ $("#b_no").val(),
	                success : function(resultData){
	                	alert("성공!")
	                	if(resultData.match("참가중")){
	                		var $div = $("<span id='join' style='color:black; font-weight: bolder;'>참가중</span>");
		                	$("#joincnt").append($div)
		                	
	                	}
	                },
	        		error:function(){
	        			alert("error")
	        		}
	        });
		});
	
