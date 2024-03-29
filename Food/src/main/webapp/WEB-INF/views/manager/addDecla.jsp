<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

	
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>addDecla</title>
<link rel="stylesheet" href="/Food/resources/css/style2.css">
<!-- 부트스트랩 -->
<link
	href="https://gitcdn.github.io/bootstrap-toggle/2.2.2/css/bootstrap-toggle.min.css" rel="stylesheet">
<script src="https://gitcdn.github.io/bootstrap-toggle/2.2.2/js/bootstrap-toggle.min.js"></script>
<script src="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=bb313e4cbac02a6fbeb66ff237d66b62&libraries=services"></script>
<script src="https://code.jquery.com/jquery-3.4.1.js"></script>
<script type="text/javascript">
$(document).ready(function(){ 
	var fileTarget = $('.filebox .upload-hidden'); 
	fileTarget.on('change', function(){ // 값이 변경되면 
		if(window.FileReader){ // modern browser 
			var filename = $(this)[0].files[0].name; 
			} else { // old IE 
				var filename = $(this).val().split('/').pop().split('\\').pop(); // 파일명만 추출 
				} // 추출한 파일명 삽입 
				$(this).siblings('.upload-name').val(filename); 
				});

	$("#d_suspect").blur(function(){
		
		$.ajax({
	                type:'post',
	                async:true,
	                url : '/Food/checkId.do',
	                contentType :'application/x-www-form-urlencoded;charset=UTF-8',
	                data : "m_id="+ $("#d_suspect").val(),
	                success : function(resultData){
		                if(resultData=="중복된 아이디입니다"){
		                	$("#check").html("등록된 회원 입니다");
		                }
		                else{
		                	$("#check").html("없는 회원 입니다");
			                }
		                
	                   
	                  	
	                } 
					
	        });	
	        	
			
	        
	        });

	$('#add').click(function(){
		var formData = new FormData($('#frm')[0]);
// 		formData.append("title",$("input[name=title]").val());
// 		formData.append("userId",$("input[name=userId]").val());
// 		formData.append("d_suspect",$("input[name=d_suspect]").val());
// 		formData.append("b_content",$("textarea[name=b_content]").val());
// 		formData.append("file2",$("input[name=file2]")[0].files[0]);



	


		$.ajax({
			url:"insertDecla.do", 
			type:"post",
			data:formData,
			processData: false,
            contentType: false,
			success:function(result){
				alert("글등록 성공");
				opener.location.reload();
				window.close();
			},error:function(error){
				alert(error);
			}					
		});
		
		
			
		});
});



</script>
</head>

<body>
	
	<div class="footer-copyright-area">
		<div class="container-fluid">
			<div class="row">
				<div class="col-lg-12">
				</div>
			</div>
		</div>
	</div>
	<div class="product-status mg-tb-15">
	<div class="container">
		<br /> <br />

		<h1>신고글 등록</h1>
		<br />
	
		<form method="post" action="insertDecla.do" name="frm" id="frm" enctype="multipart/form-data">

		
			<table class="table table-striped">


				<tr>
					<td width="100%">제목</td>
					<td align="left"><input size="120%" type="text"
						name="title" /></td>
				</tr>
				<tr>
					<td width="100%">작성자</td>
					<td align="left"><input size="120%" type="text" name="userId"
						value="${sessionScope.user_id}" readonly="readonly" /></td>
				</tr>
				<tr>
					<td width="100%">신고대상</td>
					<td align="left"><input type="text" name="d_suspect" id="d_suspect"/><div id="check"></div></td>
				</tr>
				<tr>
					<td width="100%">신고사유</td>
					<td align="left"><input type="text" name="d_reason"/></td>
				</tr>

				<tr>
					<td width="100%">내용</td>
					<td align="left"><textarea rows=5 cols=120
							name="b_content" class="b_content" style="margin: 0px; width: 870px; height: 250px;"></textarea></td>
				</tr>
				<tr>
					<td width="100%">파일선택</td>
					<td>
					<div class="filebox bs3-primary">
					 	<input class="upload-name" value="파일선택" disabled="disabled">
						<label for="ex_filename">업로드</label> 
                        <input type="file" name="file2" id="ex_filename" class="upload-hidden" style="visibility: hidden"> 
                        
					</div>
					</td>
				</tr>

			</table>
		
		</form>
		
		<div class="blackwindow">

			<a href="#" id="add">글등록</a> &nbsp;&nbsp; <a href="" onclick="window.close()">취소</a>

		</div>

	</div>
		</div>



	<div class="footer-copyright-area">
		<div class="container-fluid">
			<div class="row">
				<div class="col-lg-12">
				</div>
			</div>
		</div>
	</div>
</body>

</html>