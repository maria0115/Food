// 메뉴 수량 클릭시 리스트에 append
$("#r_menu_count").change(function(){

	
//	for(var i=0;i<$(".input1").length+1;i++){
//		if($('.input1').val() != $("#r_menu option:selected").val()){
			
		var addlabel = "<label>메뉴 :</label><input class='input1' style='border:none;width:170px' name='r_menu' readonly><label>수량 :</label><input class='input2' style='border:none;width:40px' name='r_menu_count' readonly><hr>"
		$("#div1").append(addlabel)
	
			var sel_menu = $("#r_menu option:selected").val()
			var sel_menucount = $("#r_menu_count option:selected").val()
			$(".input1:last").val(sel_menu)
			$(".input2:last").val(sel_menucount)
			
//		}else{
//			alert('else')
//		}
//	}
	
	
//	$('#div1').each(function () {
//		alert('10')
//		alert($('#div1').eq(0).val())
//		var item1 = $(this).children('input1').val();
//		if($('#div1>.input1').val() != $("#r_menu option:selected").val()){
//			// 작업 수행
//			var addlabel = "<label>메뉴 :</label><input class='input1' style='border:none;width:170px' name='r_menu' readonly><label>수량 :</label><input class='input2' style='border:none;width:40px' name='r_menu_count' readonly><hr>"
//				$("#div1").append(addlabel)
//			
//					var sel_menu = $("#r_menu option:selected").val()
//					var sel_menucount = $("#r_menu_count option:selected").val()
//					$(".input1:last").val(sel_menu)
//					$(".input2:last").val(sel_menucount)
//			
//		}
//		else{
//			alert('else 빠짐')
//			//작업 수행
//		}
//	})
	
	$("#r_menu_count option:eq(0)").prop("selected", true);
// 삭제버튼 누르면 목록 삭제
$(".button1").click(function(){
	$("#div1").children().remove()
	
	})
})

// 빈 항목 제어 및 전송
$("#btn_reserv").click(function(e){
	
	var r_menu = $("input[name='r_menu']");
	var r_menu_count = $("input[name='r_menu_count']");
	alert("reserv_hc");
	if($('#r_visit_date').val()=="" || $('#r_date_hour option:selected').text()=='선택' || $('#r_date_minute option:selected').text()=='선택'|| r_menu.length == 0){
		alert('입력되지 않은 항목이 있습니다');
		e.preventDefault();
	}else{
		$.ajax({
	        type:'post',
	        async:false,
	        url : 'reservInsert.do',
	        dataType: 'json',
	        contentType :'application/x-www-form-urlencoded;charset=UTF-8',
	        success : function(resultData){
   				if(resultData > 0){
   					alert('예약되었습니다');
   					$('#socketBtn').click();
   					close();
	   			}
        	}
		});
		$('#frm10').submit();
	}
	
});