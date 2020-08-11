<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<style type="text/css">
button{
    font-size: larger;
    background-color: coral;
    font-weight: bolder;
    border-radius: 70px/100px;
}
select{
FONT-SIZE: X-LARGE;
    border: outset;
    font-family: inherit;
    font-weight: bolder;
    background-color: ivory;
}	
	
}

</style>
</head>
<body>

	

		
		
   <form action="/Food/fileupload.do" method="post" enctype="multipart/form-data" >
    <input type="file" name="file" id="profile_pt" class="test" onchange="previewImage(this,'View_area')" > <br><button id="imgup" type="submit" >매장 사진 등록</button>             
    
                        
                     <div id='View_area'
                        style='position: relative; width: 400px; height: 270px; color: black; border: 1px solid black; dispaly: inline;'>
                     </div>
       
              
   </form>         
   
   
 
</body>
<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
	<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

	<script src="resources/js/jquery/jquery-2.2.4.min.js"></script>
	<!-- Popper js -->
	<script src="resources/js/bootstrap/popper.min.js"></script>
	<!-- Bootstrap js -->
	<script src="resources/js/bootstrap/bootstrap.min.js"></script>
<script src="/Food/resources/js/fileuplod.js"></script>
<script type="text/javascript">


$("#imgup").click(function(){
	var fileCheck = $("#profile_pt").val();
	if(!fileCheck){
		alert("파일을 등록해주세요")
		return false;
		}else{
			alert("매장사진이 등록되었습니다.");
	}
	


	
})


</script>
</html>