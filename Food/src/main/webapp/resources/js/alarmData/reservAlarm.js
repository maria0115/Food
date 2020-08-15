$("#btn_reserv").on('click',function(){
		var r_master = $('#r_master').val();
		var r_time = $('#r_visit_date').val()+"일"+$('#r_date_hour').val()+":"+$('#r_date_minute').val();// 방문날짜
		var msg="reserv,"+r_master+","+r_time+", ";
		
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