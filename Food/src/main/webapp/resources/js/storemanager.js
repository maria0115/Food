$(function(){
	

	
	$.ajax({
		type : 'post',
		async:true,
		url : 'storemanagerlist.do',
		contentType : 'application/x-www-form-urlencoded;charset=UTF-8',
		data : {"s_category" : $('#title').val(),
				"keyword" : $("#keyword").val(),
				},
		dataType : 'json',
		success : function(resultData){
			alert("성공");
			var size = resultData.list.length;
			alert(size);
			for(var i=0 ;i<size ; i++ ){
				$("#grid").append(
						"<div class='grid-cell'>"+
						"<a href='../store/storeDetails.do?"+resultData.list[i].s_brand_name+"'>"+
						"<img id='storeimg' src='/Food/resources/store/"+resultData.list[i].s_brand_name+".jpg' >"+
						"</a>"+
						"<a href='../store/storeDetails.do?"+resultData.list[i].s_brand_name+"'>"+
						resultData.list[i].s_brand_name+"</a>"+
						"</div>"
						)
						
			if(i == size) {
            $(window).bind("scroll",infinityScrollFunction);
        }
				console.log(resultData.list[i].s_brand_name);
			}
			
		},
		error:function(request,status,error){
			console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
		}
		
	});
	
	$("#searchBtn").click(function(){
		$("#grid").empty();
		$.ajax({
			type : 'post',
			async:true,
			url : 'storemanagerlist.do',
			contentType : 'application/x-www-form-urlencoded;charset=UTF-8',
			data : {"s_category" : $('#s_category').val(),
					"keyword" : $("#keyword").val(),
					"searchClick" : $("#searchClick").val()
					},
			dataType : 'json',
			success : function(resultData){
				alert("성공");
				var size = resultData.list.length;
				alert(size);
				for(var i=0 ;i<size ; i++ ){
					
					$("#grid").append(
							"<div class='grid-cell'>"+
							"<a href='../store/storeDetails.do?"+resultData.list[i].s_brand_name+"'>"+
							"<img id='storeimg' src='/Food/resources/store/"+resultData.list[i].s_brand_name+".jpg' >"+
							"</a>"+
							"<a href='../store/storeDetails.do?"+resultData.list[i].s_brand_name+"'>"+
							resultData.list[i].s_brand_name+"</a>"+
							"</div>"
							)
							
				if(i == size) {
	            $(window).bind("scroll",infinityScrollFunction());
				}
					console.log(resultData.list[i].s_brand_name);
				}
				
			},
			error:function(request,status,error){
				console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
			}
			
		});
		
	});
	
	
	function infinityScrollFunction() {

        //현재문서의 높이를 구함.
        var documentHeight  = $(document).height();
        console.log("documentHeight : " + documentHeight);
        
        //scrollTop() 메서드는 선택된 요소의 세로 스크롤 위치를 설정하거나 반환    
        //스크롤바가 맨 위쪽에 있을때 , 위치는 0
        console.log("window의 scrollTop() : " + $(window).scrollTop()); 
        //height() 메서드는 브라우저 창의 높이를 설정하거나 반환
        console.log("window의 height() : " + $(window).height());
        
        //세로 스크롤위치 max값과 창의 높이를 더하면 현재문서의 높이를 구할수있음.
        //세로 스크롤위치 값이 max이면 문서의 끝에 도달했다는 의미
        var scrollHeight = $(window).scrollTop()+$(window).height();         
        console.log("scrollHeight : " + scrollHeight);
            
        if(scrollHeight == documentHeight) { //문서의 맨끝에 도달했을때 내용 추가 
        	var count = 2;
        	$.ajax({
    			type : 'post',
    			async:true,
    			url : 'storemanagerlist.do',
    			contentType : 'application/x-www-form-urlencoded;charset=UTF-8',
    			data : {"s_category" : $('#s_category').val(),
    					"keyword" : $("#keyword").val(),
    					"searchClick" : $("#searchClick").val(),
    					"nowpage" : count
    					},
    			dataType : 'json',
    			success : function(resultData){
    				alert("성공");
    				var size = resultData.list.length;
    				alert(size);
    				for(var i=0 ;i<size ; i++ ){
    					
    					$("#grid").append(
    							"<div class='grid-cell'>"+
    							"<a href='../store/storeDetails.do?"+resultData.list[i].s_brand_name+"'>"+
    							"<img id='storeimg' src='/Food/resources/store/"+resultData.list[i].s_brand_name+".jpg' >"+
    							"</a>"+
    							"<a href='../store/storeDetails.do?"+resultData.list[i].s_brand_name+"'>"+
    							resultData.list[i].s_brand_name+"</a>"+
    							"</div>"
    							)
    							
    					console.log(resultData.list[i].s_brand_name);
    				}
    				
    			},
    			error:function(request,status,error){
    				console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
    			}
    			
    		});
        }
    }
	
	
	
});

