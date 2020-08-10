<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

	 <strong>*&nbsp;카테고리</strong>
		<select name="s_category">
					<option value="한식">한식</option>
					<option value="양식">양식</option>
					<option value="중식">중식</option>
					<option value="분식">분식</option>
					<option value="일식">일식</option>
					<option value="동남아">동남아</option>
		</select>
		
   <form action="/Food/fileupload.do" method="post" enctype="multipart/form-data">
    <input type="file" name="file" id="profile_pt" class="test" onchange="previewImage(this,'View_area')" >매장사진 <button type="submit">가게 사진 등록</button>             
    
                        
                     <div id='View_area'
                        style='position: relative; width: 400px; height: 400px; color: black; border: 1px solid black; dispaly: inline;'>
                     </div>
       
              
   </form>         
   
   
   <form action="/Food/fileupload2.do" method="post" enctype="multipart/form-data">
   <input type="file" name="file" id="profile_pt1" class="test" onchange="previewImage(this,'View_area')" >메뉴1
    <input type="file" name="file" id="profile_pt2" class="test" onchange="previewImage(this,'View_area')" >메뉴2
    <input type="file" name="file" id="profile_pt3" class="test" onchange="previewImage(this,'View_area')" >메뉴3
    <button type="submit">메뉴 등록</button>      
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
</html>