


$('#replybtn').click(function(){
	$.ajax({
		type:'get',
		url : "/Food/manager/saveQaAlarm.do?Alarm_Id="+$('#contact-writer').val()+"&qaAlarm_bno="+$('input[name=b_no]').val(),
		contentType: "application/json; charset=utf-8",
		dataType : 'text',
		success : function(data){
			alert(data);
			if(socket){
				let socketMsg = "reply,"+$('input[name=b_no]').val()+","+data+","+$('#contact-writer').val();
				console.log("msgmsg : " + socketMsg);
				socket.send(socketMsg);
			}
			
		},
		error:function(err){
			console.log(err);
		}
		
		
	});
});


