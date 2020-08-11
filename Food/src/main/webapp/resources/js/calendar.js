$(function(){
	
	var userid = $("#userid").val();
	var grade = $("#grade").val();
	
	alert(userid+""+grade);
	
	$(document).ready(function(){
		
		if(grade==2){
			getreser()
		}
		
	});
	
	function getreser(){
		
		
		
		
		
		$.ajax({
			type : 'post',
			async:true,
			url : 'calendar.do',
			contentType : 'application/x-www-form-urlencoded;charset=UTF-8',
			dataType : 'json',
			data : {"r_master" : $("#userid").val()},
			success : function(resultData){
				var event = new Array();
				var size = resultData.list.length;
				for(var i=0 ; i<size ; i++){
					var data  = new Object();
					if(resultData.list[i].r_people_count != 0 ){
						data.title = resultData.list[i].m_id+" 외"+resultData.list[i].r_people_count+"명";
					}else{
						data.title = resultData.list[i].m_id;
					}
					
					data.start = resultData.list[i].r_visit_date+"T"+resultData.list[i].r_date_hour;
					event[i]=data;
				}
				setreser(event);
				
			},
			error:function(request,status,error){
				alert("에러")
			}
			
		});
	}
	
	function setreser(event){
		var size = event.length
		var event = event
		var jsonDate = JSON.stringify(event);
		var list = new Array();
		
		event.forEach(function(v,i){
			var data = new Object();
			data.title=event[i].title
			data.start=event[i].start
			list[i] = data;
		});	
			$('#calendar').fullCalendar({
				header: {
					left: 'prev,next today',
					center: 'title',
					right: 'month,basicWeek,basicDay'
				},
				lang : "ko",
				editable: true,
				eventLimit: true,
				events : list,
			});
		
		
	}
	


});