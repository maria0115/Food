$(function(){
	
	$("#joinBtn").click(function(){
		$("#joinfrm").submit();
	});
	
	
	var joinid = $("#joinid").val();
	var id = $("#id").val();
	
	if(joinid.match(id)){ 
		$("#joinBtn").css("display", "none");
		var $div = $("<span style='color:black; font-weight: bolder;'>참가중</span>");
		$("#joincnt").append($div);
	} else {
		
	}



	
	
	
	
});