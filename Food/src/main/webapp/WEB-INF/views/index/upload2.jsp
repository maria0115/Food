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

	
	  <form action="/Food/fileupload2.do" method="post" enctype="multipart/form-data">
	   <strong>*&nbsp;카테고리</strong>
		<select name="s_category">
					<option value="한식">한식</option>
					<option value="양식">양식</option>
					<option value="중식">중식</option>
					<option value="분식">분식</option>
					<option value="일식">일식</option>
					<option value="동남아">동남아</option>
		</select>
   <input type="file" name="file" id="profile_pt1" class="test" onchange="previewImage(this,'View_area')" >메뉴1
    <input type="file" name="file" id="profile_pt2" class="test" onchange="previewImage(this,'View_area')" >메뉴2
    <input type="file" name="file" id="profile_pt3" class="test" onchange="previewImage(this,'View_area')" >메뉴3
    <br>
             
                     <div id='View_area'
                        style='position: relative; width: 400px; height: 270px; color: black; border: 1px solid black; dispaly: inline;'>
                     </div>
    <button type="submit" class="btn btn-dark" id="imgup">메뉴사진등록</button>      
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
	var fileCheck1 = $("#profile_pt1").val();
	var fileCheck2 = $("#profile_pt2").val();
	var fileCheck3 = $("#profile_pt3").val();
	if(!fileCheck1){
		alert("메뉴1파일을 등록해주세요")
		return false;
	}else if(!fileCheck2){
		alert("메뉴2파일을 등록해주세요")	
		return false;
	}else if(!fileCheck3){
		alert("메뉴3파일을 등록해주세요")	
		return false;
	}else{
		alert("메뉴 등록 완료")
		}
	


	
})


</script>
</html>