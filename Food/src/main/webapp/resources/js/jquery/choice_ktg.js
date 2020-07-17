$(function(){
	

//	$("#checkAll").prop("checked", true,function(){
//		
//		alert("ok");
//		
//		
//	});

//	$("#checkAll").prop("checked", false,function(){
//		alert($("#checkAll").prop("checked"));
//		if($("#checkAll").prop("checked")==true){
//			$.ajax({
//				type : 'post',
//				async : true,
//				success : alert("success"),
//				error : alert("error")
//			});	
//		}
//		
//	});
	$("#checkAll").change(function(){
		if($("#checkAll").is(":checked")==true){
//			alert("dfs");
			$.ajax({
				
				type : 'post',
				async : true,
				//url : 'idCheck.do',//idCheck.do 요청
				success : alert("success"),
				error : alert("error")
				
			});
		}
			
	});
	
		//아이디 중복체크
//		$('#userId').keyup(function(){
//			
//	        //비동기 통신 = ajax
//			if($("#userId").val().length>=4){
//			$.ajax({
//				type : 'post',
//				async : true,
//				url : 'idCheck.do',//idCheck.do 요청
//				contentType : 'application/x-www-form-urlencoded;charset=UTF-8',
//				data : "userId="+$("#userId").val(), //요청과 함께 넘길 userId 데이터
//				success : function(resultData){//요청이 성공했을때 받아오는 값을 인자로 함수 실행
//					$('#idCheckResult').html(resultData);
//				}
//			
//			});
//			}
//	       
//		});
//	
	
});
