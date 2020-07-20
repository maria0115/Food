$(function(){
	
	//모든선택 체크박스 클릭시
	$("#check_all").click(function(){
		//체크박스 체크 상태를 저장
		var check = $(this).is(":checked");
		
		if(check){//체크박스가 체크되어있을 경우
			$('.input_check').prop('checked',true);
		}else{//체크박스가 체크되어있지 않을 경우
			$('.input_check').prop('checked',false);
		}
	});
	
	//체크박스 선택시
	$(".input_check").click(function(){
		//$('input:checkbox[class="input_check"] : 체크박스의 총 갯수
		//$('input:checkbox[class="input_check"]:checked') : 체크된 체크박스의 갯수
		
		//모든 체크박스가 체크 되어 있을경우 모든선택 체크박스를 체크로 바꿔준다
		if($('input:checkbox[class="input_check"]').length == $('input:checkbox[class="input_check"]:checked').length){
			$("#check_all").prop('checked',true);
		}else
			$("#check_all").prop('checked',false);
		
	});
	
	
	//삭제버튼 클릭되었을때
	$('.chk_del').click(function(){
		var confirm_val = confirm("정말 삭제하시겠습니까?");
		
		if(confirm_val){
			var checkArr = new Array(); //userId값을 저장할 List 선언
			
			$('input[class="input_check"]:checked').each(function(){ //check된 체크박스 만큼 각각 반복
				checkArr.push($(this).attr("name")); //checkArr 리스트에 체크된 박스의 name 속성값을 push한다. userId값이 들어있음
				$.ajax({
					url:"Delete.do", //삭제 요청
					type:"post",
					data:{input_check : checkArr}, 
					success:function(url2){
						location.href=url2;
					}
					
				});
			});
		}
	});
});