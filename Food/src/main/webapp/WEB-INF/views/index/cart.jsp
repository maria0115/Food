<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
    <%@ taglib uri="http://java.sun.com/jstl/core_rt" prefix="c"%>
<!DOCTYPE html>
<html lang="en">

<head>
<title>cart</title>
    <meta charset="UTF-8">
    <meta name="description" content="">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- The above 4 meta tags *must* come first in the head; any other head content must come *after* these tags -->

    <!-- Title -->
    <title>Alazea - Gardening &amp; Landscaping HTML Template</title>

    <!-- Favicon -->
	<link rel="icon" href="/Food/resources/img/core-img/fri.jpg">
	
	<!-- Core Stylesheet -->
	<link rel="stylesheet" href="resources/css/style.css">
    
    

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
    
    	<jsp:include page="header.jsp">
			<jsp:param value='' name='folder' />
		</jsp:include>


        <div class="container">
            <div class="row">
                <div class="col-12">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#"><i class="fa fa-home"></i> Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page">My Wish</li>
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
                                    <th style="width:60%; font-weight:600">위치</th>
                                    <th style="width:15%; font-weight:600">분류</th>
                                    <th></th>
                                </tr>
                            </thead>
                            

                            
                            <c:forEach items="${list}" var="list">
                                <tr style="padding:0% 0%; font-weight:400">
                                    <td class="cart_menu" style="padding:1% 0%; font-weight:400">${list.w_store_name}</td>
                                    <td class="cart_menu" style="padding:1% 0%; font-weight:400">${list.w_address}</td>
                                    <td class="cart_menu" style="padding:1% 0%; font-weight:400">${list.w_midpart}</td>
                                    <td class="trash" style="padding:1% 0%"><a href="#"><i class="icon_close"></i></a></td>
                                </tr>
                            </c:forEach>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            	<button  onclick="history.go(-1);" class="btn btn-default" style="height: 50px; font-size:large;">돌아가기</button>



        </div>
    </div>
    <!-- ##### Cart Area End ##### -->

    <!-- ##### Footer Area Start ##### -->
    <%@ include file="footer.jsp" %>
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
    <script src="resources/js/reservation_js/cart_hc.js"></script>
</body>

</html>