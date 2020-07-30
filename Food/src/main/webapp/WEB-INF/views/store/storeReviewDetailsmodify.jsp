<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jstl/core_rt" prefix="c"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta name="description" content="">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">





<jsp:include page="../index/header.jsp">
	<jsp:param value='../' name='folder' />
</jsp:include>



<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">


<script type="text/javascript"
	src="//dapi.kakao.com/v2/maps/sdk.js?appkey=bb313e4cbac02a6fbeb66ff237d66b62&libraries=services"></script>
<script src="/Food/resources/js/storeMap.js"></script>





</head>





<body>
	<!-- ##### Header Area Start ##### -->

	<!-- ##### Breadcrumb Area Start ##### -->
	<div class="breadcrumb-area">
		<!-- Top Breadcrumb Area -->
		<div
			class="top-breadcrumb-area bg-img bg-overlay d-flex align-items-center justify-content-center"
			style="background-image: url(img/bg-img/24.jpg);">
			<h2>SHOP DETAILS</h2>
		</div>

		<div class="container">
			<div class="row">
				<div class="col-12">
					<nav aria-label="breadcrumb">
						<ol class="breadcrumb">
							<li class="breadcrumb-item"><a href="#"><i
									class="fa fa-home"></i> Home</a></li>
							<li class="breadcrumb-item"><a href="#">Shop</a></li>
							<li class="breadcrumb-item active" aria-current="page">Shop
								Details</li>
						</ol>
					</nav>
				</div>
			</div>
		</div>
	</div>
	<!-- ##### Breadcrumb Area End ##### -->

	<!-- ##### Single Product Details Area Start ##### -->
	<section class="single_product_details_area mb-50">
		<div class="produts-details--content mb-50">
			<div class="container">
				<div class="row justify-content-between">

					<div class="col-12 col-md-6 col-lg-5"></div>
				</div>
			</div>
		</div>


		<div class="container">
			<div class="row">
				<div class="col-12">
					<div class="product_details_tab clearfix">
						<!-- Tabs -->

						<!-- Tab Content -->
						<div class="tab-content">
							<div class="submit_a_review_area mt-50">
								<h4>Submit A Review</h4>
								
								<div class="left" style="width: 600px;float:left;line-height: 100px; text-align: center;" >
									<img src="/Food/resources/img/naver.png" alt="My Image" style="width: 100%; max-width: 760px; vertical-align: middle;">
								</div>
								<div class="right" style="width: 400px;float:left">
								<form action="storeReviewDetailsmodifyEnd.do?b_no=${board.b_no}"
									method="post" enctype="multipart/form-data"
									id="reviewInsertFrm">
									<div class="row">
										<div class="col-12">
											<div class="form-group d-flex align-items-center">
												<span class="mr-15">Your Ratings:</span>
												<!-- <div class="stars">
                                                        <input type="radio" name="star" class="star-1" id="star-1">
                                                        <label class="star-1" for="star-1">1</label>
                                                        <input type="radio" name="star" class="star-2" id="star-2">
                                                        <label class="star-2" for="star-2">2</label>
                                                        <input type="radio" name="star" class="star-3" id="star-3">
                                                        <label class="star-3" for="star-3">3</label>
                                                        <input type="radio" name="star" class="star-4" id="star-4">
                                                        <label class="star-4" for="star-4">4</label>
                                                        <input type="radio" name="star" class="star-5" id="star-5">
                                                        <label class="star-5" for="star-5">5</label>
                                                        <span></span>
                                                    </div> -->
											</div>
										</div>

										<div class="col-12 col-md-6">
											<div class="form-group">
												<label for="name">가게명</label> <input type="text"
													class="form-control" id="name" name="s_brand_name"
													placeholder="Nazrul" value="${board.s_brand_name}">
											</div>
											<div class="form-group">
												<label for="name">제목</label> 
												<input type="text"
													class="form-control" id="name" name="title"
													placeholder="제목" value="${board.title}">
											</div>
											<div class="form-group">
												<label for="name">작성자</label> <input type="text"
													class="form-control" id="name" name="userId"
													placeholder="작성자" value="${board.userId}">
											</div>
											
										</div>
<!-- 
										<div class="col-12 col-md-6">
											<div class="form-group">
												<label for="name">제목</label> <input type="text"
													class="form-control" id="name" name="title"
													placeholder="제목">
											</div>
										</div> -->

									<!-- 	<div class="col-12 col-md-6">
											<div class="form-group">
												<label for="name">작성자</label> <input type="text"
													class="form-control" id="name" name="userId"
													placeholder="작성자">
											</div>
										</div> -->

										<div class="col-12">
											<div class="form-group">
												<label for="comments">내용</label>
												<textarea class="form-control" id="comments"
															name="b_content" rows="5" data-max-length="150">${board.b_content}</textarea>
											</div>
										</div>
										<div class="col-12">

											<!-- ************** name은 MultipartFile 프라퍼티임 -->
											<input type="file" name="file" maxlength="60" size="40">
											
										</div>
									</div>
									<div>
										<button id="reviewModify" name="addtocart" value="5"
										class="btn alazea-btn ml-15" 
										onclick="location.href='storeReviewDetailsmodifyEnd.do?b_no=${board.b_no}&s_brand_name=${board.s_brand_name}&title=${board.title}&userId=${board.userId}&b_content=${board.b_content}'" > 수정하기 </button>
										</div>
								</form>
										
										<div>
										<button id="reviewDelete" name="addtocart" value="5"
										class="btn alazea-btn ml-15"
										onclick="location.href='storeReviewDetaildelete.do?b_no=${board.b_no}&s_brand_name=${board.s_brand_name}'"> 삭제 </button>
										</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>

	</section>
	<!-- ##### Single Product Details Area End ##### -->

	<!-- ##### Related Product Area Start ##### -->
	<div class="related-products-area">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<!-- Section Heading -->

				</div>
			</div>


		</div>
	</div>
	<!-- ##### Related Product Area End ##### -->

	<!-- ##### Footer Area Start ##### -->
	<%@ include file="../index/footer.jsp"%>
	<!-- ##### Footer Area End ##### -->

	<script src="/Food/resources/js/storeTest.js"></script>
	<script src="/Food/resources/js/store.js"></script>
</body>

</html>