$(function(){
	
	var joincnt = $(".joincnt").text();
	var membercnt = $(".membercnt").text();
	
	
	for(var i=0 ; i<joincnt.length ; i++){
		if(joincnt[i] == membercnt[i]){
			$(".mary").eq(i).css("display","none");
			$(".end").eq(i).css("visibility","visible");
			alert(joincnt[i])
		}else{
			
		}
		
		
	}
	
	
	
	
	

	
});
   
   
   
   
   