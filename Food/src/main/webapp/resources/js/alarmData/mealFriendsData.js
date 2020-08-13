


	

$('.mary').on('click',function(){
	var b_no=$(this).parent().parent().children().find('a').eq(0).text();
	var writer=$(this).parent().parent().children().eq(3).text();
	var joinuser=$(this).parent().parent().children().eq(4).find('input[type=hidden][name=joinId]').val();
	alert(joinuser);
	console.log('?title='+$(this).parent().parent().children().find('a').eq(1).text()+'&userId='+$('#sessionId').val()+'&f_userId='+joinuser+"&b_no="+b_no);
	window.open('http://192.168.0.17:8080/Food/mealBoard/chatBox.do?title='+$(this).parent().parent().children().find('a').eq(1).text()+'&userId='+$('#sessionId').val()+'&f_userId='+joinuser+"&b_no="+b_no,'_blank','width=502,height=720,left=500,top=100,location=no,status=no');
	
	
	$.ajax({
		type:'get',
		url : "/Food/manager/saveQaAlarm.do?Alarm_Id="+writer+"&mfAlarm_bno="+b_no,
		contentType: "application/json; charset=utf-8",
		dataType : 'text',
		success : function(data){
			if(socket){
				let socketMsg = "mfChat,"+b_no+","+data+","+writer;
				console.log("msgmsg : " + socketMsg);
				socket.send(socketMsg);
			}
			
		},
		error:function(err){
			console.log(err);	
		}
		
		
	});
});
