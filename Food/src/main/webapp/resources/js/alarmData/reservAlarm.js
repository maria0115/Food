$("#btn_reserv").on('click',function(){
		alert(aaa);
		var r_master = $('#btn_reserv').val();
	
		i$.ajax({
			type:'get',
			url : "/Food/manager/saveQaAlarm.do?Alarm_Id="+r_master,
			contentType: "application/json; charset=utf-8",
			dataType : 'text',
			success : function(data){
				alert(data);
				if(socket){
					let socketMsg = "reserv,"+""+","+data+","+r_master;
					console.log("msgmsg : " + socketMsg);
					socket.send(socketMsg);
				}
				
			},
			error:function(err){
				console.log(err);
			}
			
			
		});
	});