// 수정 버튼 클릭시 readonly상태에서 readonly삭제
$("#modify").click(function(){
	$("#contact-title").attr('readonly', false);
	$("#message").attr('readonly', false);
	$("#contact-title").css('border','2px solid')
	$("#message").css('border','2px solid')
})

// 삭제 버튼
$('#delete').click(function(){
	var result = confirm('삭제하시겠습니까?')
	if(result) { 
		var no = $('input[name=b_no]').val()
		location.href="deleteqna?b_no="+no;
	}
})

// 댓글 수정 버튼
$(document).on("click","#modify1",function(){
	$(this).parent().next().next().children().children().attr('readonly', false);
	$(this).parent().next().next().children().children().css('border','2px solid');
	$(this).attr('id','save1')
	$(this).attr('value','저장')
})

// 댓글 수정 누른후 저장 버튼
$(document).on("click","#save1",function(){
	var replyContent = $(this).parent().next().next().children().children().val();
	var replyno = $(this).parent().prev().prev().val();
//	location.href = "modifyReply.do?b_content="+replyContent+"&q_replyno="+replyno
	$.ajax({
		type: 'post',
		url: "modifyReply.do",
		data: "b_content="+replyContent+"&q_replyno="+replyno,
        success : function(resultData){
			$("#replyappend").load(location.href+" #replyappend")
        }
	})
})

// 댓글 등록 버튼
$("#replybtn").click(function(){
	if($('#replytext').val()==""){
		alert('내용을 입력해주세요')
	}else{
		$.ajax({
			type: 'post',
			url: "insertReply.do",
			data: "b_content="+$('#replytext').val()+"&f_cnt="+$('input[name=b_no]').val(),
	        success : function(resultData){
				$("#replyappend").load(location.href+" #replyappend")
				$('#replytext').val("")
	        }
		})
	}
})

// 댓글 삭제 버튼
$(document).on('click','#delete1',function(){
	var replyno = $(this).parent().prev().prev().val();
	
	$.ajax({
		type: 'post',
		url: "deleteReply.do",
		data: "q_replyno="+replyno,
	    success : function(resultData){
			$("#replyappend").load(location.href+" #replyappend")
	    }
	})
})

// insert 할때 값이 없으면 안넘어가게
$('#savebtn').click(function(e){
	if($('#contact-title').val()==""){
		e.preventDefault()
		alert('제목을 입력해주세요')
	}else if($('#message').val()==""){
		e.preventDefault()
		alert('내용을 입력해주세요')
	}else{
		alert('저장되었습니다')
	}
	
})










