
$(document).on("click",".cart_menu",function(){
	var no = $(this).parent().children().eq(0).text()
// 	게시글을 누르면 해당 매장으로 상세페이지 이동
	location.href="/Food/store/storeDetails.do?s_brand_name="+no
	
});

 $(document).on("click",".trash",function(){
	alert("trash1")
	var no = $(this).parent().children().eq(0).text()
	
	
$.ajax({
    url: "deleteCart.do",
    type: "post",
    cache: false,
    data: "w_store_name="+no,
    success: function(){
	    alert("success")
    },
    
    error: function (request, status, error){        
        var msg = "ERROR : " + request.status + "<br>"
      msg +=  + "내용 : " + request.responseText + "<br>" + error;
      console.log(msg);              
    }
  });

	$(this).parent().remove()
	

 });