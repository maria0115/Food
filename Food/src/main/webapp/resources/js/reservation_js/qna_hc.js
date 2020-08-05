// 수정 버튼 클릭시 readonly상태에서 readonly삭제
	$("#modify").click(function(){
	$("#contact-title").attr('readonly', false);
	$("#message").attr('readonly', false);
	alert('수정 가능')
	$("#contact-title").css('border','solid')
	$("#message").css('border','solid')
	})
	
	$("#savebtn").click(function(){
		alert("수정되었습니다")
	})