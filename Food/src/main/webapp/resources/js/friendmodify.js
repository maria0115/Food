$(function(){
	//주소 변경 체크박스를 클릭시
	$("#check").click(function(){
		//체크박스 체크 상태를 저장
		var check = $(this).is(":checked");
		
		if(check){//체크박스가 체크되어있을 경우
			$("#f_addr1").attr("readonly","readonly");
			$("#f_addr2").attr("readonly","readonly");
			$("#f_addr1").removeAttr('name');
			$("#f_addr2").removeAttr('name');
			
			var $div = $('<tr id="ckeck_addr">'+
					'<td width="100%">식사장소</td>'+
					'<td align="left">'+
					'<input type="text" id="sample4_postcode" name = "postcode" placeholder="우편번호" readonly>'+
					'<input type="button" name="search" id="search1" value="우편번호 찾기" onclick="execDaumPostcode();" ><br>'+
					'<input type="text" id="sample4_roadAddress" name="f_addr1" placeholder="도로명주소" style="width:40%" readonly>'+
					'<span id="guide" style="color:#999;display:none"></span>'+
					'<input type="text" id="sample4_detailAddress" name="f_addr2" placeholder="상세주소" style="width: 40%">'+
					'</td>'+
					'</tr>')
			$("#mealtable").append($div);
		
		}else{//체크박스가 체크되어있지 않을 경우
			$("#ckeck_addr").remove();
			$("#f_addr1").attr("name","f_addr1");
			$("#f_addr2").attr("name","f_addr2");
			$("#f_addr1").removeAttr("readonly","readonly");
			$("#f_addr2").removeAttr("readonly","readonly");
		}
	});
	
	$("#modifyBtn").click(function(){
		$("#modifyfrm").submit();
	});
	
	
	
});