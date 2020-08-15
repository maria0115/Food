<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="en">
<script src="https://code.jquery.com/jquery-3.4.1.js"></script>
<script type="text/javascript">
$(function(){
	var fileTarget = $('.filebox .upload-hidden'); 
	fileTarget.on('change', function(){ // 값이 변경되면 
		if(window.FileReader){ // modern browser 
			var filename = $(this)[0].files[0].name; 
			} else { // old IE 
				var filename = $(this).val().split('/').pop().split('\\').pop(); // 파일명만 추출 
				} // 추출한 파일명 삽입 
				$(this).siblings('.upload-name').val(filename); 
				});


	$("#send").click(function(){
		var formData = new FormData($('#form')[0]);
		$.ajax({
			
			url: "imagecalorie2.do",
			type:"post",
			data:formData,
			dataType:'text',
			processData: false,
            contentType: false,
            
			 // 여기에 url과 enctype은 꼭 지정해주어야 하는 부분이며 multipart로 지정해주지 않으면 controller로 파일을 보낼 수 없음

			success: function(result){

			data = result.split( "," )
			$('#name').text(data[0])
			$('#calorie').text(data[1])
			$('#percent').text(data[2])


			},error:function(error){
				alert(error);
			}				

			});

		});


}); 
function LoadImg(value) {
    if(value.files && value.files[0]) {
         var reader = new FileReader();
         reader.onload = function (e) {
              $('#img').attr('src', e.target.result);
         }
         reader.readAsDataURL(value.files[0]);
    }
    
}


	// 여기까지는 ajax와 같다. 하지만 아래의 submit명령을 추가하지 않으면 백날 실행해봤자 액션이 실행되지 않는다.

	

	

</script>

<head>
<meta charset="UTF-8">
<meta name="description" content="">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">
<!-- The above 4 meta tags *must* come first in the head; any other head content must come *after* these tags -->

<!-- Title -->
<title>Alazea - Gardening &amp; Landscaping HTML Template</title>

<!-- Favicon -->
<link rel="icon" href="/Food/resources/img/core-img/fri.jpg">

<!-- Core Stylesheet -->
<link rel="stylesheet" href="resources/css/style.css">
 <jsp:include page="../index/header.jsp">
				<jsp:param value='../' name='folder' />
			</jsp:include>
</head>
<body>
	<!-- Preloader -->
	<div class="preloader d-flex align-items-center justify-content-center">
		<div class="preloader-circle"></div>
		<div class="preloader-img">
			<img src="/Food/resources/img/core-img/fri.jpg" alt="">
		</div>
	</div>

	<!-- ##### Breadcrumb Area Start ##### -->
	<div class="breadcrumb-area">

		<div class="container">
		<h2 style="margin-left: 35%;">음식사진 칼로리재기</h2>
			<div class="row">
				<div class="col-12">
					<nav aria-label="breadcrumb">
						<ol class="breadcrumb">
							<li class="breadcrumb-item"><a href="#"><i
									class="fa fa-home"></i> Home</a></li>
							<li class="breadcrumb-item active" aria-current="page">칼로리
								측정</li>
						</ol>
					</nav>
				</div>
			</div>
		</div>
	</div>
	<!-- ##### Breadcrumb Area End ##### -->



	<!-- ##### Contact Area Start ##### -->
	<section class="contact-area">
		<div class="container">
			<div class="row align-items-center justify-content-between">
				<!--                 <div class="col-12 col-lg-5" style="text-align: center;" id="imageE"> -->
				<div class="col-12 col-lg-5">
					<!-- Section Heading -->
					<div class="section-heading">
						<h2>사진입력란</h2>
						<p>사진을 입력하시고 SEND 버튼을 눌러주세요.</p>
						그럼 칼로리가 떠요!
					</div>
					<!-- Contact Form Area -->
					<div class="contact-form-area mb-100">
						<form action="" id="form" name="form" method="POST"
							enctype="multipart/form-data">
							<!-- 					<div class="row" style="text-align: center !important; margin-left: auto; margin-right: auto;-->

							<!--     display: block;"> -->
							<div class="form-group">
									
									<div class="filebox bs3-primary">
					 	<input class="upload-name" value="파일선택" disabled="disabled">
						<label for="ex_filename">Choice Image</label> 
                        <input type="file" name="uploadFile" capture="camera" accept="image/*" onchange="LoadImg(this);" id="ex_filename" class="upload-hidden" style="visibility: hidden"> 
<!-- 						<input type="file" id="imgAttach" name="imgAttach" > -->
						<button type="button" id="send" class="btn alazea-btn mt-15">Send Image</button>
					</div>                        
							</div>
						</form>


					</div>
				</div>
				<div class="col-12 col-md-6">
					<div class="contact--thumbnail">
						<img src="" id="img" alt="">
					</div>
				</div>


			</div>
		</div>
	</section>
	<!-- ##### Contact Area End ##### -->

	<!-- ##### Contact Area Info Start ##### -->
	<div class="contact-area-info section-padding-0-100">
		<div class="container">
			<div class="row align-items-center justify-content-between">
				<!-- Contact Thumbnail -->


				<div class="col-12 col-md-12" style="text-align: center;">
					<!-- Section Heading -->
					<div class="section-heading">
						<h2>칼로리 측정</h2>
						<p>여러분 이 음식의 칼로리는 저기저기입니다</p>
					</div>
					<!-- Contact Information -->
					<div class="contact-information">
						<p>
							<span>음식명:</span> <span id="name"></span>
						</p>
						<p>
							<span>칼로리:</span> <span id="calorie"></span>
						</p>
						<p>
							<span>음식의 정확도:</span> <span id="percent"></span>
						</p>

					</div>
				</div>
			</div>
			<button  onclick="history.go(-1);" class="btn btn-dark" style="height: 100px;
    font-size:xx-large;">돌아가기</button>
		</div>
	</div> 
	
	<!-- ##### Contact Area Info End ##### -->

	<%@ include file="../index/footer.jsp" %>

	<!-- ##### All Javascript Files ##### -->
	<!-- jQuery-2.2.4 js -->
	<script src="resources/js/jquery/jquery-2.2.4.min.js"></script>
	<!-- Popper js -->
	<script src="resources/js/bootstrap/popper.min.js"></script>
	<!-- Bootstrap js -->
	<script src="resources/js/bootstrap/bootstrap.min.js"></script>
	<!-- All Plugins js -->
	<script src="resources/js/plugins/plugins.js"></script>
	<!-- Active js -->
	<script src="resources/js/active.js"></script>
</body>
</html>