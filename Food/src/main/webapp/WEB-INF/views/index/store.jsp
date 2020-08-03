<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jstl/core_rt" prefix="c"%>

    
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="description" content="">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- The above 4 meta tags *must* come first in the head; any other head content must come *after* these tags -->

<!-- Favicon -->
<link rel="icon" href="/Food/resources/img/core-img/favicon.ico">
<link rel="stylesheet" href="/Food/resources/css/marker.css">
<!-- Core Stylesheet -->
<link rel="stylesheet" href="/Food/resources/css/style.css">
<style type="text/css">
.listImg {
  display: block;
  max-width:255px;
  max-height:130px;
  width: auto;
  height: auto;
}
</style> 

<!-- 부트스트랩 -->
<link
	href="https://gitcdn.github.io/bootstrap-toggle/2.2.2/css/bootstrap-toggle.min.css"
	rel="stylesheet">
<script
	src="https://gitcdn.github.io/bootstrap-toggle/2.2.2/js/bootstrap-toggle.min.js"></script>
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=bb313e4cbac02a6fbeb66ff237d66b62&libraries=services"></script>
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=bb313e4cbac02a6fbeb66ff237d66b62"></script>
<script src="/Food/resources/js/marker.js"></script>




<jsp:include page="header.jsp">
	<jsp:param value='../' name='folder' />
</jsp:include>
</head>

<body>
    <!-- Preloader -->
    <div class="preloader d-flex align-items-center justify-content-center">
        <div class="preloader-circle"></div>
        <div class="preloader-img">
            <img src="img/core-img/leaf.png" alt="">
        </div>
    </div>
    
   
    

    <!-- ##### Breadcrumb Area Start ##### -->
    <div class="breadcrumb-area">
       

        <div class="container">
            <div class="row">
                <div class="col-12">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#"><i class="fa fa-home"></i> Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page">3</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    <!-- ##### Breadcrumb Area End ##### -->
<!--  -->
    <!-- ##### Shop Area Start ##### -->
    <section class="shop-page section-padding-0-100">
        <div class="container">
            <div class="row">
                <!-- Shop Sorting Data -->
                <div class="col-12">
                    <div class="shop-sorting-data d-flex flex-wrap align-items-center justify-content-between">
                        <!-- Shop Page Count -->
                        <div class="shop-page-count">
                            <p>Showing 1–9 of 72 results</p>
                        </div>
                        <!-- Search by Terms -->
                        <div class="search_by_terms">
							<form action="#" method="post" class="form-inline">
								<select class="custom-select widget-title" id="selectBox"
									onchange="fnGetCtgSub(this.value);">
									<!-- <option selected>한식</option> -->
									<option value="0"></option>
									<option value="한식">한식</option>
									<option value="중식">중식</option>
									<option value="양식">양식</option>
									<option value="일식">일식</option>
									<option value="동남아">동남아</option>
								</select> <input type="search" name="keyword" id="keyword"
									placeholder="매장명을 입력해주세요" style="width: 50%">
							</form>
						</div>
                    </div>
                </div>
            </div>

            <div class="row">
                <!-- Sidebar Area -->
                <div class="col-12 col-md-4 col-lg-3">
                    <div class="shop-sidebar-area">

						<!-- <div class="shop-widget catagory mb-50">
							<h4 class="widget-title">Categories</h4>
							<div class="widget-desc">
								Single Checkbox
								<div
									class="custom-control custom-checkbox d-flex align-items-center mb-2">
									<input type="checkbox" class="custom-control-input"
										id="checkAll" name="checkList"> <label class="custom-control-label"
										for="checkAll">All <span class="text-muted">(72)</span></label>
								</div>
								Single Checkbox
								<div
									class="custom-control custom-checkbox d-flex align-items-center mb-2">
									<input type="checkbox" class="custom-control-input"
										id="checkKorean" name="checkList"> <label class="custom-control-label"
										for="checkKorean">Korean Food<span class="text-muted">(20)</span></label>
								</div>
								Single Checkbox
								<div
									class="custom-control custom-checkbox d-flex align-items-center mb-2">
									<input type="checkbox" class="custom-control-input"
										id="checkChinese"name="checkList"> <label class="custom-control-label"
										for="checkChinese">Chinese Food <span
										class="text-muted">(15)</span></label>
								</div>
								Single Checkbox
								<div
									class="custom-control custom-checkbox d-flex align-items-center mb-2">
									<input type="checkbox" class="custom-control-input"
										id="checkJapanese" name="checkList"> <label
										class="custom-control-label" for="checkJapanese">Japanese
										Food <span class="text-muted">(20)</span>
									</label>
								</div>
								Single Checkbox
								<div
									class="custom-control custom-checkbox d-flex align-items-center mb-2">
									<input type="checkbox" class="custom-control-input"
										id="checkWestern" name="checkList"> <label class="custom-control-label"
										for="checkWestern">Western Food <span
										class="text-muted">(15)</span></label>
								</div>
								Single Checkbox
								<div
									class="custom-control custom-checkbox d-flex align-items-center mb-2">
									<input type="checkbox" class="custom-control-input"
										id="checkSoutheastAsian" name="checkList"> <label
										class="custom-control-label" for="checkSoutheastAsian">Southeast
										Asian food <span class="text-muted">(2)</span>
									</label>
								</div>

							</div>
						</div> -->
						

						<!-- Shop Widget -->
                        <!-- Shop Widget -->
                        <div class="shop-widget best-seller mb-50">
                            <h4 class="widget-title">BEST FOOD</h4>
                            <div class="widget-desc">

                                <!-- Single Best Seller Products -->
                                <div class="single-best-seller-product d-flex align-items-center">
                                    <div class="product-thumbnail">
                                        <a href="shop-details.html"><img src="../resources/store/ame/또바기피자.jpg" alt=""></a>
                                    </div>
                                    <div class="product-info">
                                        <a href="shop-details.html"></a>
                                        <p>$10.99</p>
                                        <div class="ratings">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                        </div>
                                    </div>
                                </div>

                                <!-- Single Best Seller Products -->
                                <div class="single-best-seller-product d-flex align-items-center">
                                    <div class="product-thumbnail">
                                        <a href="shop-details.html"><img src="./resources/img/bg-img/5.jpg" alt=""></a>
                                    </div>
                                    <div class="product-info">
                                        <a href="shop-details.html">Tulip Flower</a>
                                        <p>$11.99</p>
                                        <div class="ratings">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                        </div>
                                    </div>
                                </div>

                                <!-- Single Best Seller Products -->
                                <div class="single-best-seller-product d-flex align-items-center">
                                    <div class="product-thumbnail">
                                        <a href="shop-details.html"><img src="../resources/store/ame/경성함바그 현대시티아울렛 가산점.jpg" alt=""></a>
                                    </div>
                                    <div class="product-info">
                                        <a href="shop-details.html">Recuerdos Plant</a>
                                        <p>$9.99</p>
                                        <div class="ratings">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                    </div>
                    <!-- 예약 best3 지도 마커 찍기 -->
                    <div class="shop-widget best-seller mb-50">
                            <h4 class="widget-title">BEST TOP 3</h4>
                            <div id="map" style="width: 90%; height: 188px;">
							<c:forEach items="${map}" var="store">
							<input type="hidden" name="name" value="${store.s_brand_name }">
							<input type="hidden" name="addr" value="${store.s_address }">
							</c:forEach>
							</div>
                            </div>
                    </div>
                </div>
                

                <!-- All Products Area -->
                <div class="col-12 col-md-8 col-lg-9">
                    <div class="shop-products-area">
                        <div class="row"  id='storeTT'>

                            <!-- Single Product Area -->
                         	<c:forEach items="${listVO}" var="store">
                            <div class="col-12 col-sm-6 col-lg-4">
                                <div class="single-product-area mb-50">
                                    <!-- Product Image -->
                                    <div class="product-img">
                                        <a href="shopDetails.do"><img src="./resources/img/bg-img/40.png" alt=""></a>
                                        <!-- Product Tag -->
                                        <div class="product-tag">
                                            <a href="#">Hot</a>
                                        </div>
                                        <div class="product-meta d-flex">
                                            <a href="#" class="wishlist-btn"><i class="icon_heart_alt"></i></a>
                                            <a href="cart.html" class="add-to-cart-btn">Add to cart</a>
                                            <a href="#" class="compare-btn"><i class="arrow_left-right_alt"></i></a>
                                        </div>
                                    </div>
                                    <!-- Product Info -->
                                    <div class="product-info mt-15 text-center">
                                        <a href="../store/storeDetails.do?s_brand_name=${store.s_brand_name}">
                                            <p> ${store.s_brand_name}</p>
                                     
                                        </a>
                                        <h6>aa</h6>
                                    </div>
                                </div>
                            </div>
                            </c:forEach>
                          

                            <!-- Single Product Area -->
                            

                            <!-- Single Product Area -->
                            

                            <!-- Single Product Area -->
                            

                            <!-- Single Product Area -->
                            

                            <!-- Single Product Area -->
                            

                            <!-- Single Product Area -->
                            

                            <!-- Single Product Area -->
                            

                            <!-- Single Product Area -->
                            
                        </div>

                      
                        <!-- Shop Page Count -->
                        
                        <!-- Search by Terms -->
                        
                    
						<div class="container" id="pagination-div">
							<div id="pagination_container">
								<ul id="pagination-demo" class="pagination-lg"></ul>
							</div>
						</div>
					</div>
                </div>
                </div>
                        </div>
         
    </section>
    <!-- ##### Shop Area End ##### -->

    <!-- ##### Footer Area Start ##### -->
    <%@ include file="footer.jsp" %>
    <!-- ##### Footer Area End ##### -->

<script src="/Food/resources/js/storePaging.js"></script>
<script src="/Food/resources/js/storeCheckBox.js"></script>
<script src="/Food/resources/js/active.js"></script>

</body>

</html>