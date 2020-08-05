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

    <!-- Title -->
    <title>Alazea - Gardening &amp; Landscaping HTML Template</title>

    <!-- Favicon -->
	<link rel="icon" href="resources/img/core-img/favicon.ico">
	
	<!-- Core Stylesheet -->
	<link rel="stylesheet" href="resources/css/style.css">
    

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
    
    	<jsp:include page="../index/header.jsp"> 
			<jsp:param value='' name='folder' />
		</jsp:include>
        <!-- Top Breadcrumb Area -->
        <div class="top-breadcrumb-area bg-img bg-overlay d-flex align-items-center justify-content-center" style="background-image: url(resources/img/bg-img/24.jpg);">
            <h2>예약내역</h2>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-12">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#"><i class="fa fa-home"></i>My Page</a></li>
                            <li class="breadcrumb-item active" aria-current="page">예약내역</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    <!-- ##### Breadcrumb Area End ##### -->

    <!-- ##### Cart Area Start ##### -->
    <div class="cart-area section-padding-0-100 clearfix">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="cart-table clearfix" style="padding:0% 0%">
                        <table class="table table-responsive">
                            <tbody style="padding:0% 0%">
                            <thead>
                                <tr style="padding:0% 0%">
                                    <th style="width:25%; font-weight:600">매장</th>
                                    <th style="width:35%; font-weight:600">메뉴</th>
                                    <th style="width:25%; font-weight:600">방문일자</th>
                                     <th style="width:20%; font-weight:600">예약자 성함</th>
                                    <th></th>
                                </tr>
                            </thead>
                      
                            <c:forEach items="${result}" var="result">
                                <tr style="padding:0% 0%; font-weight:400">
                                    <td class="cart_menu" style="padding:1% 0%; font-weight:400">${result.r_store_name}</td>
                                    <td class="cart_menu" style="padding:1% 0%; font-weight:400">${result.r_menu}</td>
                                    <td class="cart_menu" style="padding:1% 0%; font-weight:400">${result.r_visit_date} </td>
                                   	 <td class="cart_menu" style="padding:1% 0%; font-weight:400">${member.m_name} </td>
                                </tr>
                                
                                </c:forEach>
                                
                            </tbody>
                        </table>

                    </div>
                    
                </div>
                
            </div>
			
<!--             <div class="row"> -->

<!--                 Coupon Discount -->
<!--                 <div class="col-12 col-lg-6"> -->
<!--                     <div class="coupon-discount mt-70"> -->
<!--                         <h5>COUPON DISCOUNT</h5> -->
<!--                         <p>Coupons can be applied in the cart prior to checkout. Add an eligible item from the booth of the seller that created the coupon code to your cart. Click the green "Apply code" button to add the coupon to your order. The order total will update to indicate the savings specific to the coupon code entered.</p> -->
<!--                         <form action="#" method="post"> -->
<!--                             <input type="text" name="coupon-code" placeholder="Enter your coupon code"> -->
<!--                             <button type="submit">APPLY COUPON</button> -->
<!--                         </form> -->
<!--                     </div> -->
<!--                 </div> -->

                <!-- Cart Totals -->
<!--                 <div class="col-12 col-lg-6"> -->
<!--                     <div class="cart-totals-area mt-70"> -->
<!--                         <h5 class="title--">Cart Total</h5> -->
<!--                         <div class="subtotal d-flex justify-content-between"> -->
<!--                             <h5>Subtotal</h5> -->
<!--                             <h5>$9.99</h5> -->
<!--                         </div> -->
<!--                         <div class="shipping d-flex justify-content-between"> -->
<!--                             <h5>Shipping</h5> -->
<!--                             <div class="shipping-address"> -->
<!--                                 <form action="#" method="post"> -->
<!--                                     <select class="custom-select"> -->
<!--                                       <option selected>Country</option> -->
<!--                                       <option value="1">USA</option> -->
<!--                                       <option value="2">Latvia</option> -->
<!--                                       <option value="3">Japan</option> -->
<!--                                       <option value="4">Bangladesh</option> -->
<!--                                     </select> -->
<!--                                     <input type="text" name="shipping-text" id="shipping-text" placeholder="State"> -->
<!--                                     <input type="text" name="shipping-zip" id="shipping-zip" placeholder="ZIP"> -->
<!--                                     <button type="submit">Update Total</button> -->
<!--                                 </form> -->
<!--                             </div> -->
<!--                         </div> -->
<!--                         <div class="total d-flex justify-content-between"> -->
<!--                             <h5>Total</h5> -->
<!--                             <h5>$9.99</h5> -->
<!--                         </div> -->
<!--                         <div class="checkout-btn"> -->
<!--                             <a href="#" class="btn alazea-btn w-100">PROCEED TO CHECKOUT</a> -->
<!--                         </div> -->
<!--                     </div> -->
<!--                 </div> -->
<!--             </div> -->
 <a href="mypageform.do"><button  class="btn btn-default" >돌아가기</button></a> 	

        </div>
                                     <div style="display: block; text-align: center;">		
		<c:if test="${paging.startPage != 1 }">
			<a href="/Food/myreservation.do?nowPage=${paging.startPage - 1 }&cntPerPage=${paging.cntPerPage}">&lt;</a>
		</c:if>
		<c:forEach begin="${paging.startPage }" end="${paging.endPage }" var="p">
			<c:choose>
				<c:when test="${p == paging.nowPage }">
					<b>${p }</b>
				</c:when>
				<c:when test="${p != paging.nowPage }">
					<a href="/Food/myreservation.do?nowPage=${p }&cntPerPage=${paging.cntPerPage}">${p }</a>
				</c:when>
			</c:choose>
		</c:forEach>
		<c:if test="${paging.endPage != paging.lastPage}">
			<a href="/Food/myreservation.do?nowPage=${paging.endPage+1 }&cntPerPage=${paging.cntPerPage}">&gt;</a>
		</c:if>
		
	</div>
		
    </div>
	
    <!-- ##### Cart Area End ##### -->

    <!-- ##### Footer Area Start ##### -->
    <%@ include file="../index/footer.jsp" %>
    <!-- ##### Footer Area End ##### -->

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