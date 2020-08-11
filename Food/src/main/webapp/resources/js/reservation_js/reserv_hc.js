	$("#r_menu_count").change(function(){
		var addlabel = "<label>메뉴 :</label><input class='input1' style='border:none;width:170px' name='r_menu' readonly><label>수량 :</label><input class='input2' style='border:none;width:40px' name='r_menu_count' readonly><hr>"
		$("#div1").append(addlabel)

		var sel_menu = $("#r_menu option:selected").val()
		var sel_menucount = $("#r_menu_count option:selected").val()
		$(".input1:last").val(sel_menu)
		$(".input2:last").val(sel_menucount)
		$("#r_menu_count option:eq(0)").prop("selected", true);


	$(".button1").click(function(){
		$("#div1").children().remove()
		
		})
	})
	
	
	$("#btn_reserv").on('click',function(e){
		
		var r_menu = $("input[name='r_menu']");
		var r_menu_count = $("input[name='r_menu_count']");
	
		if($('#r_visit_date').val()=="" || $('#r_date_hour option:selected').text()=='선택' || $('#r_date_minute option:selected').text()=='선택'|| r_menu.length == 0){
			alert('날짜가 입력되지 않았습니다.');
			e.preventDefault();
		}else{
			$.ajax({
		        type:'post',
		        url : 'reservInsert.do',
		        dataType: 'json',
		        contentType :'application/x-www-form-urlencoded;charset=UTF-8',
		        success : function(resultData){
	   				if(resultData > 0){
						close();
		   			}
	        	}
			});
		}
	})