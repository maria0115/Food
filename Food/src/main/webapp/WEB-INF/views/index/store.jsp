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
<link rel="stylesheet" href="/Food/resources/css/store.css">
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
			<div class="breadcrumb-area">


				<div class="row">
					<div class="col-12">
						<nav aria-label="breadcrumb">
							<ol class="breadcrumb">
								<li class="breadcrumb-item"><a href="/Food/main.do"><i
										class="fa fa-home"></i> Home</a></li>
								<li class="breadcrumb-item active" aria-current="page">매장정보</li>
							</ol>
						</nav>
					</div>
				</div>
			</div>
			<h2 style="TEXT-ALIGN: CENTER; FONT-SIZE: xxx-large;">STORE LIST</h2>

		</div>
    </div>
    <!-- ##### Breadcrumb Area End ##### -->
<!--  -->
    <!-- ##### Shop Area Start ##### -->
    <section class="shop-page section-padding-0-100">
        <div class="container">
            <div class="row">
                <!-- Shop Sorting Data -->
                <div class="col-12" >
                    <div class="shop-sorting-data d-flex flex-wrap align-items-center justify-content-between" 
                    	style="padding-bottom: 10px;"		>
                        <!-- Shop Page Count -->
                        <div class="shop-page-count">
                            <p></p>
                        </div>
                        <!-- Search by Terms -->
                        <div class="search_by_terms" >
							<form action="#" method="post" class="form-inline" onSubmit="return false;" 
								style="width: 500px; margin-right: -80px;">
								<select class="custom-select widget-title" id="selectBox"
									onchange="fnGetCtgSub(this.value);" style="
									position: relative;
								    display: block;
								    overflow: hidden;
								    padding: 0 0 0 8px;
								    height: 25px;
								    border: 1px solid #ccc;
								    border-radius: 0px;
								    background-color: #fff;
								    color: #444;
								    text-decoration: none;
								    white-space: nowrap;
								    line-height: 24px;
								    width: 80px;
								    height: 31px;
								    margin-right: 5px;	
								    border-radius: 10px; ">
									<!-- <option selected>한식</option> -->
									<option value="all">전체</option>
									<option value="한식">한식</option>
									<option value="중식">중식</option>
									<option value="양식">양식</option>
									<option value="일식">일식</option>
									<option value="분식">분식</option>
									<option value="동남아">동남아</option>
								</select> 
								<input type="text" name="searchWard" id="listSearch"
									placeholder="매장명을 입력해주세요"
									
									style="width: 40%; height: 38px; 
									    height: 31px;
									    padding: 0 5px;
									    color: #333333;
									    border: 1px solid #d6d6d6;
									    line-height: 31px;
									    -webkit-box-sizing: border-box;
									    -moz-box-sizing: border-box;
									    box-sizing: border-box;
									    margin-right: 5px;	
									    border-radius: 10px;">
								<input type="button" name="searchButton" id="searchButton"  value="검색" 
								
								style="
									display: inline-block;
								    min-width: 100px;
								    height: 31px;
								    color: #ffffff;
								    font-weight: bold;
								    border: 1px solid #3e3d3c;
								    background: #3e3d3c;
								    text-align: center;
								    border-radius: 30px;
								"> 
								
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
                            <h4 class="widget-title">BEST REVIEW STORE 3</h4>
                            <div class="widget-desc">

                                <!-- Single Best Seller Products -->
                               <c:forEach items="${starAvg}" var="starAvg">
                                <div class="single-best-seller-product d-flex align-items-center">
                                    <div class="product-thumbnail">
                                        <a href="shop-details.html">
                                        <img class="starAvgImg" src="../resources/store/${starAvg.s_brand_name }.jpg" alt="">
                                        </a>
                                    </div>
                                    <div class="product-info">
                                        <a href="../store/storeDetails.do?s_brand_name=${starAvg.s_brand_name}">${starAvg.s_brand_name}</a>
                                        <div class="ratings">
                                            <i class="fa fa-star"></i><span>${starAvg.star_avg}</span>
                                            
                                            <c:if test="${starAvg.review_count >10}">
                                            <span>(10+)</span>
                                            </c:if>
                                        </div>
                                       
                                        
                                    </div>
                                </div>
								</c:forEach>
                                <!-- Single Best Seller Products -->
                                
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
                      
                            
                        </div>
                
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
<script src="/Food/resources/js/active.js"></script>

</body>

</html>