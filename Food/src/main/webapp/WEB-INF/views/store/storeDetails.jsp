<%@page import="com.food.domain.StoreListVO"%>
<%@page import="java.util.HashMap"%>
<%@page import="java.util.List"%>
<%@page import="com.food.domain.ProductVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jstl/core_rt" prefix="c"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<%StoreListVO vo = (StoreListVO)request.getAttribute("list");
String state = (String)request.getAttribute("state");
HashMap map = new HashMap();
map.put("한식", "kor");
map.put("중식", "ch");
map.put("일식", "jap");
map.put("양식", "ame");
map.put("분식", "school");
map.put("동남아", "east");
%>

<html lang="en">

<head>
<meta charset="UTF-8">
<meta name="description" content="">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">

<script type="text/javascript">
$fun
</script>



<jsp:include page="../index/header.jsp">
	<jsp:param value='../' name='folder' />
</jsp:include>



<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">
<link rel="stylesheet" href="/Food/resources/css/store.css">

<script type="text/javascript"
	src="//dapi.kakao.com/v2/maps/sdk.js?appkey=bb313e4cbac02a6fbeb66ff237d66b62&libraries=services"></script>
<script src="/Food/resources/js/storeMap.js"></script>




<script type="text/javascript">
$(function(){
	
});
</script>
</head>





<body>
	<!-- ##### Header Area Start ##### -->

	<!-- ##### Breadcrumb Area Start ##### -->
	
	<!-- ##### Breadcrumb Area End ##### -->

	<!-- ##### Single Product Details Area Start ##### -->
	<section class="single_product_details_area mb-50">
		<div class="produts-details--content mb-50">
			<div class="container">
				<div class="row justify-content-between" style="margin-top: 45px; ">

					<div class="col-12 col-md-6 col-lg-5">
						<div class="single_product_thumb">
							<div id="product_details_slider" class="carousel slide"
								data-ride="carousel">
								<div class="carousel-inner">
									<div class="carousel-item active">
										<a class="product-img" href="img/bg-img/49.jpg"
											title="Product Image"> <img class="d-block w-100"
											src="../resources/store/${list.s_brand_name}.jpg" alt="1">
										</a>
									</div>
									<div class="carousel-item">
										<a class="product-img" href="img/bg-img/49.jpg"
											title="Product Image"> <img class="d-block w-100"
											src="/Food/resources/storemenu/<%=map.get(vo.getS_category()) %>/<%=vo.getS_brand_name() %>_<%=vo.getP_name_1() %>.jpg" alt="1">
										</a>
									</div>
									<div class="carousel-item">
										<a class="product-img" href="img/bg-img/49.jpg"
											title="Product Image"> <img class="d-block w-100"
											src="/Food/resources/storemenu/<%=map.get(vo.getS_category()) %>/<%=vo.getS_brand_name() %>_<%=vo.getP_name_2() %>.jpg" alt="1">
										</a>
									</div>
									<div class="carousel-item">
										<a class="product-img" href="img/bg-img/49.jpg"
											title="Product Image"> <img class="d-block w-100"
											src="/Food/resources/storemenu/<%=map.get(vo.getS_category()) %>/<%=vo.getS_brand_name() %>_<%=vo.getP_name_3() %>.jpg" alt="1">
										</a>
									</div>
								</div>
								<ol class="carousel-indicators">
									<li class="active" data-target="#product_details_slider"
										data-slide-to="0"
										><img class="d-block w-100"
											src="/Food/resources/store/<%=vo.getS_brand_name() %>.jpg" alt="1"></li>
								<% if(vo.getP_name_1()!=null){ %>
										<li data-target="#product_details_slider" data-slide-to="1"
											><img class="d-block w-100"
											src="/Food/resources/storemenu/<%=map.get(vo.getS_category()) %>/<%=vo.getS_brand_name() %>_<%=vo.getP_name_1() %>.jpg" alt="1"></li>
										<%} %>
										<% if(vo.getP_name_2()!=null){ %>
										<li data-target="#product_details_slider" data-slide-to="2"
											><img class="d-block w-100"
											src="/Food/resources/storemenu/<%=map.get(vo.getS_category()) %>/<%=vo.getS_brand_name() %>_<%=vo.getP_name_2() %>.jpg" alt="2"></li>
										<%} %>
										<% if(vo.getP_name_3()!=null){ %>
										<li data-target="#product_details_slider" data-slide-to="3"
											><img class="d-block w-100"
											src="/Food/resources/storemenu/<%=map.get(vo.getS_category()) %>/<%=vo.getS_brand_name() %>_<%=vo.getP_name_3() %>.jpg" alt="3"></li>	
									<%} %>
								</ol>
							</div>
						</div>
					</div>
					<!-- <a href="#layer2" class="btn-example">딤처리 팝업레이어 1</a> -->



<div class="dim-layer">
    <div class="dimBg"></div>
    <div id="layer2" class="pop-layer">
        <div class="pop-container" >
            
            <div class="pop-imgArea" style=" float:left; width: 700px;">
            <div style="position: relative;
    				width: 100%;
    				height: 100%;
    				text-align: center;
    				background: #222;">
            <div style="width: 100%;height: auto; padding-top: 50px;padding-bottom: 50px;">
            	<ul>
            		<li>
            			<img class="d-block w-100" style="    position: relative;
    						top: 50%;
						    width: auto;
						    max-width: 100%;
						    max-height: 100%;" 
					src="/Food/resources/storemenu/ame/인더버거_더블치즈버거.jpg" alt="1">
            	
	            	</li>
             	</ul>
            	
            	
            </div>
            </div>
            </div>
            
            <div class="pop-conts" style=" float:left;width: 350px;padding: 14px;">
                <!--content //-->
                <div class="xans-element- xans-board xans-board-product-4 xans-board-product xans-board-4 prdArea" 
              		  style= "width: 100%;
					    padding: 10px;
					    border: 1px solid #e2e2e2;
					   -moz-box-sizing: border-box;
					    -webkit-box-sizing: border-box;
					    box-sizing: border-box;
					    border-radius: 4px;
					    margin-bottom: 5%;
					   ">
                <div class="thumbnail">
                	<a href="#" target="_blank"><img src="/Food/resources/store/<%=vo.getS_brand_name() %>.jpg" alt="" 
                	style="max-width: 25%;"></a>
                	<span class="description" style="text-align: center;">
						<a id="reviewDetailBrandName" style="text-align: center;">가게명</a>
					</span>
                </div>
				
				</div>
               	<div>
               	<form action="" style="margin-top: auto;">
               	<div >
               	<div>
               		<div style="padding: 10px;
					    border: 1px solid #e2e2e2;
					   -moz-box-sizing: border-box;
					    -webkit-box-sizing: border-box;
					    box-sizing: border-box;
					    border-radius: 4px;">
               			<span>별점</span></br>
               			<input id="boardNoHidden" type="hidden" value="${board.b_no}">
               			<input type="hidden" id ="checkLock" value="">
               			<span id="reviewDetailName" >이름</span><span>&nbsp&nbsp&nbsp/&nbsp&nbsp&nbsp</span>
               			<span id="reviewDetailDate" >날짜</span><span>&nbsp&nbsp&nbsp/&nbsp&nbsp&nbsp</span>
               			<span id="reviewDetailCount">조회수</span>
               		
               		<div id="titleAndContent" style="position: relative;
  						margin-top: 10px;
    					padding-top: 15px;
    					border-top: 1px dashed #e2e2e2;">
               			<label>제목</label><br/>
               			<input id="reviewDetailTitle" type="text" readonly="readonly" 
               			style="border: none; "><br/>
               			<label >내용</label><br/>
				 		<textarea id="reviewDetailContent" readonly="readonly" style="width:100%; border: none;">내용</textarea>
               		</div>
               		
               		<div id="btn" style="position: relative;
  						margin-top: 10px;
    					padding-top: 15px;
    					border-top: 1px dashed #e2e2e2;	">
               			<div id="btnArea" style="margin-left: 25%;">
               			<a href="#none" id ="detailReviewDelete" style="background-color: #fff;border: 1px solid rgba(70,70,70,.25); color: #7d7d7d;">삭제</a>
               			<a href="#none" id ="detailReviewModify">수정</a>
               			</div>
               		</div>
               		</div>
               	</div>
               	
               	
               	
               	</div>
               	</form>
               	</div>
               
               
               
               

                <div class="btn-r">
                    <a href="#" class="btn-layerClose"
                     style="background-color: #fff;border: 1px solid rgba(70,70,70,.25); color: #7d7d7d;
                     border-radius:10px; ">Close</a>
                </div>
                <!--// content-->
            </div>
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
								
								<!-- Add to Cart Form -->
								


								
								<!-- Wishlist & Compare -->
								<div
									class="wishlist-compare d-flex flex-wrap align-items-center">
									<c:if test="${not empty sessionScope.user_id}">
										<a href="#" class="wishlist-btn ml-15" onclick=""><i
											class="icon_heart_alt"></i></a>
										<a href="#" class="compare-btn ml-15"><i
											class="arrow_left-right_alt"></i></a>
									</c:if>
								</div>


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
										+$('#midpart').text()+"&w_address="+$('#addrs').text()+"&m_id="+$('#m_id').text()
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
										<span>작은카테고리 :</span> <span id='midpart'>${list.s_midpart }
										</span>
									</p>
									<p>
										<span>주소 :</span> <span id='addrs'>${list.s_address } </span>
									</p>
									<p></p>
								</div>

								<!-- 예약 버튼 -->
								<button id="reserv" name="addtocart" value="5"
									class="btn alazea-btn ml-15">예약</button>

								<script>
                        $('#reserv').click(function(){
//                            location.href='../reservation.do?r_store_name=${list.s_brand_name}&menu1=${list.p_name_1}&menu2=${list.p_name_2}&menu3=${list.p_name_3}'
                           window.open('../reservation.do?r_store_name=${list.s_brand_name}&menu1=${list.p_name_1}&menu2=${list.p_name_2}&menu3=${list.p_name_3}&m_id=${sessionScope.user_id}','ddd','width=780,height=843,left=500,top=100,location=no,status=no,scrollbars=yes')

                           })
//                         }
                                </script>


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
										class="nav-link active" data-toggle="tab" role="tab">Location</a>
									</li>
									<li class="nav-item"><a href="#addi-info" class="nav-link"
										data-toggle="tab" role="tab">Shop information</a></li>
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












										




										<div class="submit_a_review_area mt-50">
											<h4>Submit A Review</h4>
											<form action="reviewInsert.do?name=${list.s_brand_name}"
												method="post" enctype="multipart/form-data"
												id="reviewInsertFrm">
												<div class="row">
													<div class="col-12">
														<div class="form-group d-flex align-items-center">
															<span class="mr-15">Your Ratings:</span>
													<div class="stars">
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
                                                    </div> 
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
															<label for="comments">내용</label>
															<textarea class="form-control" id="comments"
																name="b_content" rows="5" data-max-length="150"></textarea>
														</div>
													</div>
													<div class="col-12">

														<!-- ************** name은 MultipartFile 프라퍼티임 -->
														<input type="file" name="file" maxlength="60" size="40">
														<input type="button" class="btn alazea-btn"
															id="reviewInsert" value="리뷰등록">
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
									href="#" class="compare-btn"><i
									class="arrow_left-right_alt"></i></a>
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
									href="#" class="compare-btn"><i
									class="arrow_left-right_alt"></i></a>
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
									href="#" class="compare-btn"><i
									class="arrow_left-right_alt"></i></a>
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
									href="#" class="compare-btn"><i
									class="arrow_left-right_alt"></i></a>
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