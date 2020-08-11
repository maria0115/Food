function selChange() {
	var sel = document.getElementById('cntPerPage').value;
	location.href="boardList?nowPage=${paging.nowPage}&cntPerPage="+sel;
}
function update_form(r_number){
    $.ajax({
	    url: "myMenuDetail.do",
    type: "get",
    cache: false,
    dataType: "json",
    data: "r_number=" + r_number,
    success: function(data){
$('.i_store_name').val(data.r_store_name);
$('.i_visit_date').val(data.time);  
$('.i_pplcount').val(data.r_people_count);          
$('.i_menu').val(data.r_menu);
$('.i_note').val(data.r_note);
$('.r_cancel').val(data.r_number);
	if(data.r_state == 0){
		$(".r_cancel").attr("disabled",true)
	}else{
		$(".r_cancel").attr("disabled",false)
		}
},
	    error: function (request, status, error){    
	        var msg = "ERROR : " + request.status + "<br>"
      msg +=  + "내용 : " + request.responseText + "<br>" + error;
      console.log(msg);              
    }

  });
}

$(".r_cancel").click(function(){
	var cancel = $(".r_cancel").val()
	alert(cancel)
	location.href="reservDelete.do?r_number="+cancel+"&m_id=${sessionScope.user_id}"
})


