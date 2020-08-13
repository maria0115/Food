$("#btn_reserv").on('click',function(){
		var r_master = $('#r_master').val();
		var r_time = $('#r_visit_date').val()+"일"+$('#r_date_hour').val()+":"+$('#r_date_minute').val();// 방문날짜
		alert(r_time);
		$.ajax({
			type:'get',
			url : "/Food/manager/saveQaAlarm.do?Alarm_Id="+r_master+"&rAlarm_rtime="+r_time,
			contentType: "application/json; charset=utf-8",
			dataType : 'text',
			success : function(data){
				alert(data);
				if(socket){
					let socketMsg = "reserv,"+r_time+","+data+","+r_master;
					console.log("msgmsg : " + socketMsg);
					socket.send(socketMsg);
					alert("성공");
					
					
				
				}
				
			},
			error:function(err){
				console.log(err);
			}
			
			
		});
	});