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
	'</div>')
	
	//가게정보 수정하기 버튼을 눌렀을때
	$("#modifyck").click(function(){
		
		var ck = $(this).is(":checked");
		
		if(ck){
			$("#addr").css("display", "none");
			$("#addrarea").append($div);
		}else{
			$("#addrmodify").remove();
			$("#addr").css("display", "");
			$("#addr").removeAttr("name","s_address");
		}
		
	});


});
