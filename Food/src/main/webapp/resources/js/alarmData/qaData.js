

var msg = "reply,"+$('#contact-writer').val()+","+$('input[name=b_no]').val()+","+"정아인";
$('#replybtn').click(function(){
	$.ajax({
		type:'get',
		url : "/Food/manager/saveQaAlarm.do?msg="+msg,
		contentType: "application/json; charset=utf-8",
		dataType : 'text',
		success : function(data){
			alert("성공");
		},
		error:function(err){
			console.log(err);
		}
		
		
	});
});


