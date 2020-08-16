// 메뉴 수량 클릭시 리스트에 append
$("#menu_append").click(function(){

	if($('#r_menu_count').val()==0){
	alert('수량을 입력해주세요')
	}else{
			
	var addlabel = "<label style='margin-left:10px'>메뉴 :</label><input class='input1' style='border:none;width:170px;margin: 10px 0px 10px 10px;' name='r_menu' readonly><br><label style='margin-left:10px'>수량 :</label><input class='input2' style='border:none;width:40px;margin-left:10px' name='r_menu_count' readonly><hr style='margin:0px 0px'>"
		$("#div1").append(addlabel)
	
			var sel_menu = $("#r_menu option:selected").val()
			var sel_menucount = $("#r_menu_count").val()
			$(".input1:last").val(sel_menu)
			$(".input2:last").val(sel_menucount)
			
			$('#r_menu_count').attr('value',0)
	}	
})
			
	
// 삭제버튼 누르면 목록 삭제
$(".button1").click(function(){
	$("#div1").children().remove()
	
	})

// 빈 항목 제어 및 전송
$("#btn_reserv").click(function(e){
	
	var formData = $('#frm10').serialize();
	var r_menu = $("input[name='r_menu']");
	var r_menu_count = $("input[name='r_menu_count']");
	if($('#r_visit_date').val()=="" || $('#ppl_count').val()==0 || $('#r_date_hour option:selected').text()=='선택' || $('#r_date_minute option:selected').text()=='선택'|| r_menu.length == 0){
		alert('입력되지 않은 항목이 있습니다');
		e.preventDefault();
	}else{
		
		$.ajax({
	        type:'post',
	        async:false,
	        data:formData,
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
		
	}

});


// 인원수 버튼 클릭 수량 카운트
$('#ppl_plus').click(function(){
	var temp = parseInt($('#ppl_count').val())+1
	$('#ppl_count').attr('value',temp)
	
})
// 마이너스 버튼 눌렀을때 
$('#ppl_minus').click(function(){
	// 0일 경우 내려가지 않도록
	if($('#ppl_count').val()==0){
	}else{
	var temp = parseInt($('#ppl_count').val())-1
	$('#ppl_count').attr('value',temp)
	}
	
})



// 메뉴수 버튼 클릭 수량 카운트
$('#menucount_plus').click(function(){
	var temp = parseInt($('#r_menu_count').val())+1
	$('#r_menu_count').attr('value',temp)
	
})
// 마이너스 버튼 눌렀을때 
$('#menucount_minus').click(function(){
	// 0일 경우 내려가지 않도록
	if($('#r_menu_count').val()==0){
	}else{
	var temp = parseInt($('#r_menu_count').val())-1
	$('#r_menu_count').attr('value',temp)
	}
	
})



