<%@page import="com.food.domain.ReservationVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.util.*"  %>
<!DOCTYPE html>
<% List<ReservationVO> list = (List<ReservationVO>)request.getAttribute("list");
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
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- The above 4 meta tags *must* come first in the head; any other head content must come *after* these tags -->

<!-- Title -->
    <title>Alazea - Gardening &amp; Landscaping HTML Template</title>

<!-- Favicon -->
<link rel="icon" href="resources/img/core-img/favicon.ico">

<!-- Core Stylesheet -->
<link rel="stylesheet" href="resources/css/style.css">


<jsp:include page="header.jsp">
	<jsp:param value='../' name='folder' />
</jsp:include>
</head>

<body>

    <!-- ##### Header Area End ##### -->

    <!-- ##### Breadcrumb Area Start ##### -->
    <div class="breadcrumb-area">
        <!-- Top Breadcrumb Area -->
        
            

        <div class="container">
        <h2 style="margin-left: 28%;">나와 취향 비슷한 다른사람들의 메뉴</h2>
            <div class="row">
                <div class="col-12">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#"><i class="fa fa-home"></i> Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Other's Menu</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    <!-- ##### Breadcrumb Area End ##### -->

    <!-- ##### Portfolio Area Start ##### -->
    <section class="alazea-portfolio-area portfolio-page section-padding-0-100">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <!-- Section Heading -->
                    <div class="section-heading text-center">
                        <h2>Other Menu's</h2>
                        <p>나와 취향 비슷한 다른사람들은 어떤 음식을 예약했는지 궁금하신가요?</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="alazea-portfolio-filter">
                        <div class="portfolio-filter">
                            <button class="btn active" data-filter="*">All</button>
                            <button class="btn" data-filter=".kor">한식</button>
                            <button class="btn" data-filter=".ch">중식</button>
                            <button class="btn" data-filter=".jap">일식</button>
                            <button class="btn" data-filter=".ame">양식</button>
                            <button class="btn" data-filter=".school">분식</button>
                            <button class="btn" data-filter=".east">동남아</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row alazea-portfolio">
            <%if(state!=null&&state=="로그인"){
            	
            	for(int i= 0; i<list.size();i++){
            		ReservationVO vo = new ReservationVO();
            		vo = list.get(i);
            		
            	%>

                <!-- Single Portfolio Area -->
                <div class="col-12 col-sm-6 col-lg-3 single_portfolio_item design <%=map.get(vo.getType()) %>">
                    <!-- Portfolio Thumbnail -->
                    <div class="portfolio-thumbnail bg-img" style="background-image: url(/Food/resources/storemenu/<%=map.get(vo.getType()) %>/<%=vo.getR_store_name() %>_<%=vo.getR_menu() %>.jpg);"></div>
                    <!-- Portfolio Hover Text -->
                    <div class="portfolio-hover-overlay">
                        <a href="/Food/resources/storemenu/<%=map.get(vo.getType()) %>/<%=vo.getR_store_name() %>_<%=vo.getR_menu() %>.jpg" class="portfolio-img d-flex align-items-center justify-content-center" title="Portfolio 1">
                            <div class="port-hover-text">
                                <h3><%=vo.getR_menu() %></h3>
                                <h5><%=vo.getR_store_name() %></h5>
                            </div>
                        </a>
                    </div>
                </div>
                <%}}else{ %>
                <div class="col-12 col-sm-6 col-lg-12 single_portfolio_item design" style="text-align: center;">
                    <h4>로그인 하셔야 이 페이지 사용할 수 있습니다</h4>
                </div>
                
                
                <%} %>


            </div>
        </div>
    </section>
    <!-- ##### Portfolio Area End ##### -->


    <!-- ##### Footer Area Start ##### -->
    <%@ include file="footer.jsp" %>
    <!-- ##### Footer Area End ##### -->

    <!-- ##### All Javascript Files ##### -->
    <!-- jQuery-2.2.4 js -->
    <script src="/Food/resources/js/jquery/jquery-2.2.4.min.js"></script>
    <!-- Popper js -->
    <script src="/Food/resources/js/bootstrap/popper.min.js"></script>
    <!-- Bootstrap js -->
    <script src="/Food/resources/js/bootstrap/bootstrap.min.js"></script>
    <!-- All Plugins js -->
    <script src="/Food/resources/js/plugins/plugins.js"></script>
    <!-- Active js -->
    <script src="/Food/resources/js/active.js"></script>
    
    <script type="text/javascript" src="/Food/resources/js/jquery/choice_ktg.js"></script>
</body>

</html>