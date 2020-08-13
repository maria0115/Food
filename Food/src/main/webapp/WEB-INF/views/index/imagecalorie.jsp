<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="en">
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
<jsp:include page="header.jsp">
	<jsp:param value='' name='folder' />
</jsp:include>
</head>
<body>
	<!-- Preloader -->
	<div class="preloader d-flex align-items-center justify-content-center">
		<div class="preloader-circle"></div>
		<div class="preloader-img">
			<img src="resources/img/core-img/leaf.png" alt="">
		</div>
	</div>

	<!-- ##### Breadcrumb Area Start ##### -->
	<div class="breadcrumb-area">
		<!-- Top Breadcrumb Area -->
		<div
			class="top-breadcrumb-area bg-img bg-overlay d-flex align-items-center justify-content-center"
			style="background-image: url(img/bg-img/24.jpg);">
			<h2>음식사진 칼로리재기</h2>
		</div>

		<div class="container">
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
						<form action="imagecalorie.do" id="form" name="form" method="POST"
							enctype="multipart/form-data">
							<!-- 					<div class="row" style="text-align: center !important; margin-left: auto; margin-right: auto;-->

							<!--     display: block;"> -->
							<div class="form-group">
								<input type="file" id="uploadFile" name="uploadFile"
									capture="camera" accept="image/*"
									class="btn btn-default btn-lg">
								<!-- 						<p class="help-block">추론 할 이미지 선택 및 촬영</p> -->

								<button type="submit" class="btn alazea-btn mt-15">Send
									Image</button>
							</div>
						</form>


					</div>
				</div>
				<div class="col-12 col-md-6">
					<div class="contact--thumbnail">
						<img src="img/bg-img/25.jpg" alt="">
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
							<span>음식명:</span> 피자
						</p>
						<p>
							<span>칼로리:</span> 300칼로리
						</p>
						<p>
							<span>음식의 정확도:</span> 퓽퓽퓽
						</p>

					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- ##### Contact Area Info End ##### -->

	<%@ include file="footer.jsp"%>

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