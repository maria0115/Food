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

				<div class="col-12 col-md-6 col-lg-5">
					<div class="single_product_thumb">
						<div id="product_details_slider" class="carousel slide"
							data-ride="carousel">
							<div class="carousel-inner">
								<div class="carousel-item active">
									<a class="product-img" href="img/bg-img/49.jpg"
										title="Product Image"> <img class="d-block w-100"
										src="img/bg-img/49.jpg" alt="1">
									</a>
								</div>
								<div class="carousel-item">
									<a class="product-img" href="img/bg-img/49.jpg"
										title="Product Image"> <img class="d-block w-100"
										src="img/bg-img/49.jpg" alt="1">
									</a>
								</div>
								<div class="carousel-item">
									<a class="product-img" href="img/bg-img/49.jpg"
										title="Product Image"> <img class="d-block w-100"
										src="img/bg-img/49.jpg" alt="1">
									</a>
								</div>
							</div>
							<ol class="carousel-indicators">
								<li class="active" data-target="#product_details_slider"
									data-slide-to="0"
									style="background-image: url(img/bg-img/49.jpg);"></li>
								<li data-target="#product_details_slider" data-slide-to="1"
									style="background-image: url(img/bg-img/49.jpg);"></li>
								<li data-target="#product_details_slider" data-slide-to="2"
									style="background-image: url(img/bg-img/49.jpg);"></li>
							</ol>
						</div>
					</div>
				</div>

				<div class="col-12 col-md-6">
					<div class="single_product_desc">
						<h4 class="title">${list.s_brand_name}</h4>
						<h4></h4>
						<div class="short_overview">
							<p>${list.s_info}</p>
						</div>


						<div class="cart--area d-flex flex-wrap align-items-center">
							<div>
								<strong style="margin-right: 15px; font-size: 18px;">성인</strong>
							</div>
							<!-- Add to Cart Form -->
							<form class="cart clearfix d-flex align-items-center"
								method="post">
								<div class="quantity">
									<span class="qty-minus"
										onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty ) &amp;&amp; qty &gt; 1 ) effect.value--;return false;"><i
										class="fa fa-minus" aria-hidden="true"></i></span> <input
										type="number" class="qty-text" id="qty" step="1" min="1"
										max="12" name="quantity" value="1"> <span
										class="qty-plus"
										onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty )) effect.value++;return false;"><i
										class="fa fa-plus" aria-hidden="true"></i></span>
								</div>
								<button type="submit" name="addtocart" value="5"
									class="btn alazea-btn ml-15">Add to cart</button>
							</form>


							<form class="cart clearfix d-flex align-items-center"
								method="post" style="margin-top: 10px;">
								<div>
									<strong style="margin-right: 15px; font-size: 18px;">아동</strong>
								</div>


								<div class="quantity">
									<span class="qty-minus"
										onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty ) &amp;&amp; qty &gt; 1 ) effect.value--;return false;"><i
										class="fa fa-minus" aria-hidden="true"></i></span> <input
										type="number" class="qty-text" id="qty" step="1" min="1"
										max="12" name="quantity" value="1"> <span
										class="qty-plus"
										onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty )) effect.value++;return false;"><i
										class="fa fa-plus" aria-hidden="true"></i></span>
								</div>
								<button type="submit" name="addtocart" value="5"
									class="btn alazea-btn ml-15">Add to cart</button>
							</form>
							<!-- Wishlist & Compare -->
							<div class="wishlist-compare d-flex flex-wrap align-items-center">
							<c:if test="${not empty sessionScope.user_id}">
								<a href="#" class="wishlist-btn ml-15" onclick=""><i
									class="icon_heart_alt"></i></a> <a href="#"
									class="compare-btn ml-15"><i class="arrow_left-right_alt"></i></a>
									</c:if>
									
									
									
<!-- 						 찜하기 기능----------------------------------------------------------- -->
						<span id='m_id' style="visibility: hidden">${sessionScope.user_id}</span>
						<script>
						$(function(){
// 							alert($('.title').text())
							if($('#name_check').val().match($('.title').text())){
// 								alert('zz')
								$('.wishlist-btn').css("background-color","lightpink")
								$('.wishlist-btn').removeAttr('onclick')
							}
							$('.wishlist-btn').click(function(){
								if(this.hasAttribute("onclick")){
									$(this).css("background-color","lightpink")
									$(this).removeAttr('onclick')
// 									alert('vvv')
									
									$.ajax({
										url: "../insertCart.do",
										type: "post",
										cache: false,
										dataType: "json",
										data: "w_store_name="+$('.title').text()+"&w_midpart="
										+$('#midpart').text()+"&w_address="+$('#addr').text()+"&m_id="+$('#m_id').text()
									});
								
								}else{
									$(this).removeAttr('style')
									$(this).attr('onclick','')

									$.ajax({
										url: "../deleteCart.do",
										type: "post",
										cache: false,
										dataType: "json",
										data: "w_store_name="+$('.title').text()+"&m_id="+$('#m_id').text()
									});
									
								}

							})
						})
						</script>
						<input id='name_check' type="hidden" value="${s_name}">
<!-- 						---------------------------------------------------------------------------- -->



						<div class="products--meta">
							<p>
								<span>메뉴:</span> <span>${list.p_name_1 }<br />
									${list.p_name_2 }<br /> ${list.p_name_3 }
								</span> <span style="display: table-cell; margin: auto;">
									${list.p_price_1 }<br /> ${list.p_price_2 }<br />
									${list.p_price_3 }
								</span>




							</p>
							<p>
								<span>카테고리 :</span> <span>${list.s_category }</span>
							</p>
							<p>
								<span>작은카테고리 :</span> <span id='midpart'>${list.s_midpart } </span>
							</p>
							<p>
								<span>주소 :</span> <span id='addr'>${list.s_address } </span>
							</p>
							<p></p>
						</div>

						<!-- 예약 버튼 -->
						<button id="reserv" name="addtocart" value="5"
							class="btn alazea-btn ml-15">예약</button>

						<script>
                        $('#reserv').click(function(){
//                            location.href='../reservation.do?r_store_name=${list.s_brand_name}&menu1=${list.p_name_1}&menu2=${list.p_name_2}&menu3=${list.p_name_3}'
                           window.open('../reservation.do?r_store_name=${list.s_brand_name}&menu1=${list.p_name_1}&menu2=${list.p_name_2}&menu3=${list.p_name_3}','ddd','width=780,height=843,left=500,top=100,location=no,status=no,scrollbars=yes')

                           })
//                         }
                                </script>

					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="container">
		<div class="row">
			<div class="col-12">
				<div class="product_details_tab clearfix">
					<!-- Tabs -->
					<ul class="nav nav-tabs" role="tablist" id="product-details-tab">
						<li class="nav-item"><a href="#description"
							class="nav-link active" data-toggle="tab" role="tab">Description</a>
						</li>
						<li class="nav-item"><a href="#addi-info" class="nav-link"
							data-toggle="tab" role="tab">Additional Information</a></li>
						<li class="nav-item"><a href="#reviews" class="nav-link"
							data-toggle="tab" role="tab" id="reviewKing">Reviews <span
								class="text-muted">(1)</span></a></li>
					</ul>
					<!-- Tab Content -->
					<div class="tab-content">
						<div role="tabpanel" class="tab-pane fade show active"
							id="description">
							<div class="description_area">
								<div id="map" style="width: 100%; height: 350px;">
									<input type="hidden" id="title" value="${list.s_brand_name}">
									<input type="hidden" id="addr" value="${list.s_address }">
								</div>
							</div>
						</div>
						<div role="tabpanel" class="tab-pane fade" id="addi-info">
							<div class="additional_info_area">
								<p style="">${list.s_info}</p>
							</div>
						</div>
						<div role="tabpanel" class="tab-pane fade" id="reviews">
							<div class="reviews_area">
								<ul>
									<li>
										<div class="single_user_review mb-15">

											<div class="comment_area clearfix">


												<h4 class="headline">Comments</h4>


												<ol>
													<!-- Single Comment Area -->
													
													<li class="single_comment_area" id="reviewContainer">
					<form action="">								
					<c:forEach items="${listVO}" var="board">
						<div class="comment-wrapper d-flex"
							style="padding: 25px 0;">
							<!-- Comment Meta -->
							<div class="comment-author">
								<img src="img/bg-img/37.jpg" alt="">
							</div>
							<!-- Comment Content -->

							<div class="comment-content">
								<div
									class="d-flex align-items-center justify-content-between">
									<h5 id="reviewName">${board.s_brand_name}</h5>
									
									<span class="comment-date"> </span>
								</div>
								<p>${board.b_content}</p>
								<input type="hidden">
							</div>
						
						</div>
					</c:forEach>
			
						<script>

							/* function clickTest(){
								alert("aa")
								location.href='storeReviewDetails.do?b_no=${board.b_no}';
								//window.open('storeReviewDetails.do','ddd','width=780,height=843,left=500,top=100,location=no,status=no,scrollbars=yes')
								
								}
                         */

                        </script>
					</form>
											

							
													</li>
											
												</ol>





											</div>





										</div>


									</li>

								</ul>
										<div id="pagination-div">
    									 <div id="pagination_container">
    									 <ul id="pagination-demo" class="pagination-lg"></ul>
      										</div>
                          				  </div> 


							</div>
							
                        


							<div></div>
			
					










						<div class="col-12 col-sm-6 col-lg-3 single_portfolio_item design home-design wow fadeInUp" data-wow-delay="100ms">
                    <!-- Portfolio Thumbnail -->
                    <div class="portfolio-thumbnail bg-img" style="background-image: url(/Food/resources/img/bg-img/16.jpg);"></div>
                	
                    <!-- Portfolio Hover Text -->
                    <div class="portfolio-hover-overlay">
                    <div class="dialog__trigger" onclick="update_form" style="height:400px">
<!--                         <a href="resources/img/bg-img/16.jpg" class="portfolio-img d-flex align-items-center justify-content-center" title="Portfolio 1"> -->
                            <div class="port-hover-text" style="padding-top: 35%">
                             
                            </div>
<!--                         </a> -->
                    </div>
                    </div>
				</div>				





							<div class="submit_a_review_area mt-50">
								<h4>Submit A Review</h4>
								<form action="reviewInsert.do?name=${list.s_brand_name}"
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
													placeholder="Nazrul" value="${list.s_brand_name}">
											</div>
											<div class="form-group">
												<label for="name">제목</label> <input type="text"
													class="form-control" id="name" name="title"
													placeholder="제목">
											</div>
											<div class="form-group">
												<label for="name">작성자</label> <input type="text"
													class="form-control" id="name" name="userId"
													placeholder="작성자">
											</div>
										</div>
										

										

										<div class="col-12">
											<div class="form-group">
												<label for="comments">내용</label> <textarea class="form-control"
													id="comments" name="b_content" rows="5"
													data-max-length="150"></textarea>
											</div>
										</div>
										<div class="col-12">

											<!-- ************** name은 MultipartFile 프라퍼티임 -->
											<input type="file" name="file" maxlength="60" size="40">
											<input type="button" class="btn alazea-btn" id="reviewInsert"
												value="리뷰등록">																					
										</div>
									</div>
								</form>
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
				<div class="section-heading text-center">
					<h2>Related Products</h2>
				</div>
			</div>
		</div>

		<div class="row">

			<!-- Single Product Area -->
			<div class="col-12 col-sm-6 col-lg-3">
				<div class="single-product-area mb-100">
					<!-- Product Image -->
					<div class="product-img">
						<a href="shop-details.html"><img src="img/bg-img/40.png"
							alt=""></a>
						<!-- Product Tag -->
						<div class="product-tag">
							<a href="#">Hot</a>
						</div>
						<div class="product-meta d-flex">
							<a href="#" class="wishlist-btn"><i class="icon_heart_alt"></i></a>
							<a href="cart.html" class="add-to-cart-btn">Add to cart</a> <a
								href="#" class="compare-btn"><i class="arrow_left-right_alt"></i></a>
						</div>
					</div>
					<!-- Product Info -->
					<div class="product-info mt-15 text-center">
						<a href="shop-details.html">
							<p>Cactus Flower</p>
						</a>
						<h6>$10.99</h6>
					</div>
				</div>
			</div>
			

			<!-- Single Product Area -->
			<div class="col-12 col-sm-6 col-lg-3">
				<div class="single-product-area mb-100">
					<!-- Product Image -->
					<div class="product-img">
						<a href="shop-details.html"><img src="img/bg-img/41.png"
							alt=""></a>
						<div class="product-meta d-flex">
							<a href="#" class="wishlist-btn"><i class="icon_heart_alt"></i></a>
							<a href="cart.html" class="add-to-cart-btn">Add to cart</a> <a
								href="#" class="compare-btn"><i class="arrow_left-right_alt"></i></a>
						</div>
					</div>
					<!-- Product Info -->
					<div class="product-info mt-15 text-center">
						<a href="shop-details.html">
							<p>Cactus Flower</p>
						</a>
						<h6>$10.99</h6>
					</div>
				</div>
			</div>

			<!-- Single Product Area -->
			<div class="col-12 col-sm-6 col-lg-3">
				<div class="single-product-area mb-100">
					<!-- Product Image -->
					<div class="product-img">
						<a href="shop-details.html"><img src="img/bg-img/42.png"
							alt=""></a>
						<div class="product-meta d-flex">
							<a href="#" class="wishlist-btn"><i class="icon_heart_alt"></i></a>
							<a href="cart.html" class="add-to-cart-btn">Add to cart</a> <a
								href="#" class="compare-btn"><i class="arrow_left-right_alt"></i></a>
						</div>
					</div>
					<!-- Product Info -->
					<div class="product-info mt-15 text-center">
						<a href="shop-details.html">
							<p>Cactus Flower</p>
						</a>
						<h6>$10.99</h6>
					</div>
				</div>
			</div>

			<!-- Single Product Area -->
			<div class="col-12 col-sm-6 col-lg-3">
				<div class="single-product-area mb-100">
					<!-- Product Image -->
					<div class="product-img">
						<a href="shop-details.html"><img src="img/bg-img/43.png"
							alt=""></a>
						<!-- Product Tag -->
						<div class="product-tag sale-tag">
							<a href="#">Hot</a>
						</div>
						<div class="product-meta d-flex">
							<a href="#" class="wishlist-btn"><i class="icon_heart_alt"></i></a>
							<a href="cart.html" class="add-to-cart-btn">Add to cart</a> <a
								href="#" class="compare-btn"><i class="arrow_left-right_alt"></i></a>
						</div>
					</div>
					<!-- Product Info -->
					<div class="product-info mt-15 text-center">
						<a href="shop-details.html">
							<p>Cactus Flower</p>
						</a>
						<h6>$10.99</h6>
					</div>
				</div>
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