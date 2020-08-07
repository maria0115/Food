<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>

<meta charset="UTF-8">
<title>Chart Page</title>
<link rel="shortcut icon" type="image/x-icon"
	href="/Food/resources/img/favicon.ico">
<!-- Google Fonts
		============================================ -->
<link href="https://fonts.googleapis.com/css?family=Play:400,700"
	rel="stylesheet">
<!-- Bootstrap CSS
		============================================ -->
<link rel="stylesheet" href="/Food/resources/css/bootstrap2.min.css">
<!-- Bootstrap CSS
		============================================ -->
<link rel="stylesheet" href="/Food/resources/css/font-awesome1.min.css">
<!-- owl.carousel CSS
		============================================ -->
<link rel="stylesheet" href="/Food/resources/css/owl.carousel.css">
<link rel="stylesheet" href="/Food/resources/css/owl.theme.css">
<link rel="stylesheet" href="/Food/resources/css/owl.transitions.css">
<!-- animate CSS
		============================================ -->
<link rel="stylesheet" href="/Food/resources/css/animate1.css">
<!-- normalize CSS
		============================================ -->
<link rel="stylesheet" href="/Food/resources/css/normalize.css">
<!-- meanmenu icon CSS
		============================================ -->
<link rel="stylesheet" href="/Food/resources/css/meanmenu.min.css">
<!-- main CSS
		============================================ -->
<link rel="stylesheet" href="/Food/resources/css/main.css">
<!-- morrisjs CSS
		============================================ -->
<link rel="stylesheet" href="/Food/resources/css/morrisjs/morris.css">
<!-- mCustomScrollbar CSS
		============================================ -->
<link rel="stylesheet"
	href="/Food/resources/css/scrollbar/jquery.mCustomScrollbar.min.css">
<!-- metisMenu CSS
		============================================ -->
<link rel="stylesheet"
	href="/Food/resources/css/metisMenu/metisMenu.min.css">
<link rel="stylesheet"
	href="/Food/resources/css/metisMenu/metisMenu-vertical.css">
<!-- calendar CSS
		============================================ -->
<link rel="stylesheet"
	href="/Food/resources/css/calendar/fullcalendar.min.css">
<link rel="stylesheet"
	href="/Food/resources/css/calendar/fullcalendar.print.min.css">
<!-- style CSS
		============================================ -->
<link rel="stylesheet" href="/Food/resources/css/style2.css">
<!-- responsive CSS
		============================================ -->
<link rel="stylesheet" href="/Food/resources/css/responsive.css">
<!-- modernizr JS
		============================================ -->
<!-- Bootstrap cdn -->
<link rel="stylesheet"
	href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
<link rel="stylesheet"
	href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap-theme.min.css">
<link rel="stylesheet"
	href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet"
	href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,400,400i,500,500i,600,600i,700,700i&amp;subset=latin-ext">

<script
	src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
<script src="https://code.jquery.com/jquery-3.4.1.js"></script>
<script src="/Food/resources/js/vendor/modernizr-2.8.3.min.js"></script>
</head>
<body style="background: #f5f5f5;">
<jsp:include page="sideBar.jsp">
		<jsp:param value='' name='folder' />
	</jsp:include>
	<div class="all-content-wrapper">
		<jsp:include page="wrapper.jsp">
			<jsp:param value='' name='' />
		</jsp:include>

	<div class="charts-area mg-tb-15">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div class="charts-single-pro responsive-mg-b-30">
                            <div class="alert-title">
                                <h2>일별 예약</h2>
                            </div>
                            <div id="dayReservContainer">
                              
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div class="charts-single-pro">
                            <div class="alert-title">
                                <h2>방문자 수</h2>
                                
                            </div>
                            <div id="visitCountContainer" style="text-align: center;">
                                
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div class="charts-single-pro mg-tb-30 responsive-mg-b-0">
                            <div class="alert-title">
                                <h2>밥친구 시간대별 이용자수</h2>
<!--                                 <p>A bar chart provides a way of showing data values represented as Horizontal bars. It is sometimes used to show trend data, and the comparison of multiple data sets</p> -->
                            </div>
                            <div id="mealTimeContainer">
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div class="charts-single-pro mg-tb-30 responsive-mg-b-0">
                            <div class="alert-title">
                                <h2>밥친구 주간 이용자수</h2>
<!--                                 <p>A bar chart provides a way of showing data values represented as Horizontal bars. It is sometimes used to show trend data, and the comparison of multiple data sets</p> -->
                            </div>
                            <div id="mealDayContainer">
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div class="charts-single-pro">
                            <div class="alert-title">
                                <h2>회원 연령별</h2>
                            </div>
                            <div id="memberYearContainer">
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div class="charts-single-pro">
                            <div class="alert-title">
                                <h2>예약수 TOP10 매장</h2>
                            </div>
                            <div id="toptenStoreContainer">
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div class="charts-single-pro mg-tb-30">
                            <div class="alert-title">
                                <h2>카테고리별 일별 예약수</h2>
                            </div>
                            <div id="categoryDayContainer">
                                
                            </div>
                        </div>
                    </div>
                </div>
                
               
            </div>
        </div>
	</div>
	<div class="footer-copyright-area">
		<div class="container-fluid">
			<div class="row">
				<div class="col-lg-12">
					<div class="footer-copy-right">
						<p>
							Copyright &copy; 2020 <a 
								href="https://colorlib.com/wp/templates/">Colorlib</a> All
							rights reserved.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<!-- jquery
		============================================ -->
	<script src="/Food/resources/js/vendor/jquery-1.11.3.min.js"></script>
	<!-- bootstrap JS
		============================================ -->
	<script src="/Food/resources/js/bootstrap.min.js"></script>
	<!-- wow JS
		============================================ -->
	<script src="/Food/resources/js/wow.min.js"></script>
	<!-- price-slider JS
		============================================ -->
	<script src="/Food/resources/js/jquery-price-slider.js"></script>
	<!-- meanmenu JS
		============================================ -->
	<script src="/Food/resources/js/jquery.meanmenu.js"></script>
	<!-- owl.carousel JS
		============================================ -->
	<script src="/Food/resources/js/owl.carousel.min.js"></script>
	<!-- sticky JS
		============================================ -->
	<script src="/Food/resources/js/jquery.sticky.js"></script>
	<!-- scrollUp JS
		============================================ -->
	<script src="/Food/resources/js/jquery.scrollUp.min.js"></script>
	<!-- mCustomScrollbar JS
		============================================ -->
	<script
		src="/Food/resources/js/scrollbar/jquery.mCustomScrollbar.concat.min.js"></script>
	<script src="/Food/resources/js/scrollbar/mCustomScrollbar-active.js"></script>
	<!-- metisMenu JS
		============================================ -->
	<script src="/Food/resources/js/metisMenu/metisMenu.min.js"></script>
	<script src="/Food/resources/js/metisMenu/metisMenu-active.js"></script>
	<!-- morrisjs JS
		============================================ -->
	<script src="/Food/resources/js/sparkline/jquery.sparkline.min.js"></script>
	<script src="/Food/resources/js/sparkline/jquery.charts-sparkline.js"></script>
	<!-- calendar JS
		============================================ -->
	<script src="/Food/resources/js/calendar/moment.min.js"></script>
	<script src="/Food/resources/js/calendar/fullcalendar.min.js"></script>
	<script src="/Food/resources/js/calendar/fullcalendar-active.js"></script>
	<!-- plugins JS
		============================================ -->
	<script src="/Food/resources/js/plugins.js"></script>
	<!-- main JS
		============================================ -->
	<script src="/Food/resources/js/main.js"></script>
	    <!-- Charts JS
		============================================ -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
    <script src="/Food/resources/js/charts/bar-chart.js"></script>
    <script src="/Food/resources/js/charts/admin_chart.js"></script>
    <script src="/Food/resources/js/charts/admin_pieChart.js"></script>
    <script src="/Food/resources/js/charts/admin_barChart.js"></script>
</body>
</html>