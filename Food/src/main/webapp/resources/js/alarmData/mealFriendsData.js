


	

$('.mary').on('click',function(){
	var b_no=$(this).parent().parent().children().find('a').eq(0).text();
	var writer=$(this).parent().parent().children().eq(3).text();
	var joinuser=$(this).parent().parent().children().eq(4).find('input[type=hidden][name=joinId]').val();
	var f_cnt=$(this).parent().parent().children().eq(7).text();
	var msg="mfChat,"+writer+","+b_no+","+"1";
	
//	window.open('http://https://115.91.88.227:60000/Food/mealBoard/chatBox.do?title='+$(this).parent().parent().children().find('a').eq(1).text()+'&userId='+$('#sessionId').val()+'&f_userId='+$(this).parent().parent().children().eq(4).find('input[type=hidden][name=joinId]').val()+"&b_no="+b_no,'_blank','width=502,height=720,left=500,top=100,location=no,status=no');
	window.open('http://192.168.0.17:8080/Food/mealBoard/chatBox.do?title='+$(this).parent().parent().children().find('a').eq(1).text()+'&userId='+$('#sessionId').val()+'&f_userId='+$(this).parent().parent().children().eq(4).find('input[type=hidden][name=joinId]').val()+"&b_no="+b_no+"&f_cnt="+f_cnt,'_blank','width=502,height=720,left=500,top=100,location=no,status=no');
	
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
