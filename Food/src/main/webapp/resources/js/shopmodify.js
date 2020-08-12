$(function(){
	
	var $div = $(
			'<div id="addrmodify">'+
	'<div class="form-group">'+
	'<input class="sing" style="width: 40%; display: inline;"'+
		'placeholder="우편번호" id="shopaddr1" type="text" name="m_post"'+
		'readonly="readonly">'+
	'<button type="button" class="btn btn-default"'+
		'onclick="execPostCode();">'+
		'<i class="fa fa-search"></i> 우편번호 찾기'+
	'</button>'+
	'</div>'+
	'<div class="form-group">'+
		'<input class="sing" style="top: 5px;" placeholder="도로명 주소"'+
			'name="s_address" id="shopaddr2" type="text" readonly="readonly" />'+
	'</div>'+
	'<div class="form-group">'+
		'<input class="sing" placeholder="상세주소" id="detailaddr" type="text" />'+
	'</div>'+
	'</div>');
	
	var $div2 = $('<select id="categorymodify" class="form-control" name="s_category">'+
	'<option value="한식">한식</option>'+
	'<option value="양식">양식</option>'+
	'<option value="중식">중식</option>'+
	'<option value="분식">분식</option>'+
	'<option value="일식">일식</option>'+
	'<option value="동남아">동남아</option>'+
	'</select>')
	
	//주소 수정하기 버튼을 눌렀을때
	$("#modifyck").click(function(){
		
		var ck = $(this).is(":checked");
		
		if(ck){
			$("#addr").css("display", "none");
			$("#addr").removeAttr("name","s_address");
			$("#addrarea").append($div);
		}else{
			$("#addrmodify").remove();
			$("#addr").css("display", "");
			$("#addr").attr("name","s_address");
		}
		
	});
	
	//카테고리 수정 눌렀을때
	$("#modifyck1").click(function(){
			
			var ck = $(this).is(":checked");
			
			if(ck){
				$("#category").css("display", "none");
				$("#categoryarea").append($div2);
				$("#category").attr("name","s_address");
			}else{
				$("#categorymodify").remove();
				$("#category").css("display", "");
				$("#category").removeAttr("name","s_address");
			}
			
		});


});
