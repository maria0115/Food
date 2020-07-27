$(function(){
	
	$("#joinBtn").click(function(){
		$("#joinfrm").submit();
	});
	
	
	var joinid = $("#joinid").val();
	var id = $("#id").val();
	var end =$("#end").text();
	alert(end);
	
	if(joinid.match(id)){ 
		$("#joinBtn").css("display", "none");
		var $div = $("<span id='join' style='color:black; font-weight: bolder;'>참가중</span>");
		$("#joincnt").append($div);
		
		if(end.match("마감되었습니다.")){
			$("#join").remove();
		}
	} else {
		
	}



	
	
	
	
});