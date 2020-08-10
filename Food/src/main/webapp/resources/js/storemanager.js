$(function(){
	var count = 2;
	 let isEnd = false;
	    
	    $(function(){
	    	
	        $(window).scroll(function(){
	            let $window = $(this);
	            let scrollTop = $window.scrollTop();
	            let windowHeight = $window.height();
	            let documentHeight = $(document).height();
	            
	            console.log("documentHeight:" + documentHeight + " | scrollTop:" + scrollTop + " | windowHeight: " + windowHeight );
	            
	            // scrollbar의 thumb가 바닥 전 30px까지 도달 하면 리스트를 가져온다.
	            if( scrollTop + windowHeight + 30 > documentHeight ){
	                fetchList();
	                count++;
	            }
	        })
	        $.ajax({
	    		type : 'post',
	    		async:true,
	    		url : 'storemanagerlist.do',
	    		contentType : 'application/x-www-form-urlencoded;charset=UTF-8',
	    		dataType : 'json',
	    		success : function(resultData){
	    			var size = resultData.list.length;
	    			for(var i=0 ;i<size ; i++ ){
	    				$("#grid").append(
	    						"<div class='grid-cell'>"+
	    						"<a href='../store/storeDetails.do?s_brand_name="+resultData.list[i].s_brand_name+"'>"+
	    						"<img id='storeimg' src='/Food/resources/store/"+resultData.list[i].s_brand_name+".jpg' >"+
	    						"</a>"+
	    						"<a href='../store/storeDetails.do?s_brand_name="+resultData.list[i].s_brand_name+"'>"+
	    						resultData.list[i].s_brand_name+"</a>"+
	    						"</div>"
	    						)
	    						
	    				console.log(resultData.list[i].s_brand_name);
	    				
	                    if( size < 5 ){
	                        isEnd = true;
	                    }
	    			}
	    			
	    		},
	    		error:function(request,status,error){
	    			console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
	    		}
	    		
	    	});
	    })
	    
	    let fetchList = function(){
	        if(isEnd == true){
	            return;
	        }
	        $.ajax({
	    		type : 'post',
	    		async:true,
	    		url : 'storemanagerlist.do',
	    		contentType : 'application/x-www-form-urlencoded;charset=UTF-8',
	    		data : {"s_category" : $("#s_category").val(),
					"keyword" : $("#keyword").val(),
					"searchClick" : 'N',
					"nowPage" : count,
					"cntPerPage" : 12
					},
	    		dataType : 'json',
	    		success : function(resultData){
	    			var size = resultData.list.length;
	    			for(var i=0 ;i<size ; i++ ){
	    				$("#grid").append(
	    						"<div class='grid-cell'>"+
	    						"<a href='../store/storeDetails.do?s_brand_name="+resultData.list[i].s_brand_name+"'>"+
	    						"<img id='storeimg' src='/Food/resources/store/"+resultData.list[i].s_brand_name+".jpg' >"+
	    						"</a>"+
	    						"<a href='../store/storeDetails.do?s_brand_name="+resultData.list[i].s_brand_name+"'>"+
	    						resultData.list[i].s_brand_name+"</a>"+
	    						"</div>"
	    						)
	    						
	    				console.log(resultData.list[i].s_brand_name);
	    				
	                    if( size < 5 ){
	                        isEnd = true;
	                    }
	    			}
	    			
	    		},
	    		error:function(request,status,error){
	    			console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
	    		}
	    		
	    	});
	    }
	 
	$("#keyword").keyup(function(e) {
		var code = e.which;
		if (code == 13)
			e.preventDefault();
		if (code == 13) {
			
			var count = 2;
			$(window).scroll(function(){
	            let $window = $(this);
	            let scrollTop = $window.scrollTop();
	            let windowHeight = $window.height();
	            let documentHeight = $(document).height();
	            
	            console.log("documentHeight:" + documentHeight + " | scrollTop:" + scrollTop + " | windowHeight: " + windowHeight );
	            
	            // scrollbar의 thumb가 바닥 전 30px까지 도달 하면 리스트를 가져온다.
	            if( scrollTop + windowHeight + 30 > documentHeight ){
	                fetchList();
	                count++;
	            }
	        })
	        
	        $("#grid").empty();
			$.ajax({
				type : 'post',
				async:true,
				url : 'storemanagerlist.do',
				contentType : 'application/x-www-form-urlencoded;charset=UTF-8',
				data : {"s_category" : $('#s_category').val(),
					"keyword" : $("#keyword").val(),
					"searchClick" : $("#searchClick").val(),
					"nowPage" : count,
					"cntPerPage" : 12
					},
				dataType : 'json',
				success : function(resultData){
					var size = resultData.list.length;
					for(var i=0 ;i<size ; i++ ){
						
						$("#grid").append(
								"<div class='grid-cell'>"+
								"<a href='../store/storeDetails.do?s_brand_name="+resultData.list[i].s_brand_name+"'>"+
								"<img id='storeimg' src='/Food/resources/store/"+resultData.list[i].s_brand_name+".jpg' >"+
								"</a>"+
								"<a href='../store/storeDetails.do?s_brand_name="+resultData.list[i].s_brand_name+"'>"+
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
			
			
		}
		
		let fetchList = function(){
	        if(isEnd == true){
	            return;
	        }
	        $.ajax({
	    		type : 'post',
	    		async:true,
	    		url : 'storemanagerlist.do',
	    		contentType : 'application/x-www-form-urlencoded;charset=UTF-8',
	    		data : {"s_category" : $('#s_category').val(),
					"keyword" : $("#keyword").val(),
					"searchClick" : "",
					"nowPage" : count,
					"cntPerPage" : 12
					},
	    		dataType : 'json',
	    		success : function(resultData){
	    			var size = resultData.list.length;
	    			for(var i=0 ;i<size ; i++ ){
	    				$("#grid").append(
	    						"<div class='grid-cell'>"+
	    						"<a href='../store/storeDetails.do?s_brand_name="+resultData.list[i].s_brand_name+"'>"+
	    						"<img id='storeimg' src='/Food/resources/store/"+resultData.list[i].s_brand_name+".jpg' >"+
	    						"</a>"+
	    						"<a href='../store/storeDetails.do?s_brand_name="+resultData.list[i].s_brand_name+"'>"+
	    						resultData.list[i].s_brand_name+"</a>"+
	    						"</div>"
	    						)
	    						
	    				console.log(resultData.list[i].s_brand_name);
	    				
	                    if( size < 5 ){
	                        isEnd = true;
	                    }
	    			}
	    			
	    		},
	    		error:function(request,status,error){
	    			console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
	    		}
	    		
	    	});
	    }
		
		
	});
	    
	    
	$("#searchBtn").click(function(){
		var count = 2;
		$(window).scroll(function(){
            let $window = $(this);
            let scrollTop = $window.scrollTop();
            let windowHeight = $window.height();
            let documentHeight = $(document).height();
            
            console.log("documentHeight:" + documentHeight + " | scrollTop:" + scrollTop + " | windowHeight: " + windowHeight );
            
            // scrollbar의 thumb가 바닥 전 30px까지 도달 하면 리스트를 가져온다.
            if( scrollTop + windowHeight + 30 > documentHeight ){
                fetchList();
                count++;
            }
        })
		
		$("#grid").empty();
		$.ajax({
			type : 'post',
			async:true,
			url : 'storemanagerlist.do',
			contentType : 'application/x-www-form-urlencoded;charset=UTF-8',
			data : {"s_category" : $('#s_category').val(),
				"keyword" : $("#keyword").val(),
				"searchClick" : $("#searchClick").val(),
				"nowPage" : count,
				"cntPerPage" : 12
				},
			dataType : 'json',
			success : function(resultData){
				var size = resultData.list.length;
				for(var i=0 ;i<size ; i++ ){
					
					$("#grid").append(
							"<div class='grid-cell'>"+
							"<a href='../store/storeDetails.do?s_brand_name="+resultData.list[i].s_brand_name+"'>"+
							"<img id='storeimg' src='/Food/resources/store/"+resultData.list[i].s_brand_name+".jpg' >"+
							"</a>"+
							"<a href='../store/storeDetails.do?s_brand_name="+resultData.list[i].s_brand_name+"'>"+
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
		
		let fetchList = function(){
	        if(isEnd == true){
	            return;
	        }
	        $.ajax({
	    		type : 'post',
	    		async:true,
	    		url : 'storemanagerlist.do',
	    		contentType : 'application/x-www-form-urlencoded;charset=UTF-8',
	    		data : {"s_category" : $('#s_category').val(),
					"keyword" : $("#keyword").val(),
					"searchClick" : "",
					"nowPage" : count,
					"cntPerPage" : 12
					},
	    		dataType : 'json',
	    		success : function(resultData){
	    			var size = resultData.list.length;
	    			for(var i=0 ;i<size ; i++ ){
	    				$("#grid").append(
	    						"<div class='grid-cell'>"+
	    						"<a href='../store/storeDetails.do?s_brand_name="+resultData.list[i].s_brand_name+"'>"+
	    						"<img id='storeimg' src='/Food/resources/store/"+resultData.list[i].s_brand_name+".jpg' >"+
	    						"</a>"+
	    						"<a href='../store/storeDetails.do?s_brand_name="+resultData.list[i].s_brand_name+"'>"+
	    						resultData.list[i].s_brand_name+"</a>"+
	    						"</div>"
	    						)
	    						
	    				console.log(resultData.list[i].s_brand_name);
	    				
	                    if( size < 5 ){
	                        isEnd = true;
	                    }
	    			}
	    			
	    		},
	    		error:function(request,status,error){
	    			console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
	    		}
	    		
	    	});
	    }
		
		
	});
	
	
});

