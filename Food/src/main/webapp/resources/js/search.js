$(function(){
	
	$("#keyword").keyup(function(e){ 
        var code = e.which; 
        if(code==13)e.preventDefault();
        if(code==13){
        $("#searchfrm").submit();
        } 
    });
	
	
});