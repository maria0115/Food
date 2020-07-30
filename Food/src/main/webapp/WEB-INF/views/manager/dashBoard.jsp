<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Dash Board</title>
<!-- favicon
		============================================ -->
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
<!-- Dashboard Core -->
<link href="/Food/resources/css/dashboard.css" rel="stylesheet" />
<script src="/Food/resources/css/dashboard/dashboard.js"></script>
<!-- c3.js Charts Plugin -->
<link href="/Food/resources/css/dashboard/charts-c3.css" rel="stylesheet" />
<script src="/Food/resources/css/dashboard/charts-c3.js"></script>
</head>
<body>
	<jsp:include page="sideBar.jsp">
		<jsp:param value='' name='folder' />
	</jsp:include>

	<!-- Start Welcome area -->
	<div class="all-content-wrapper">
		<jsp:include page="wrapper.jsp">
			<jsp:param value='' name='' />
		</jsp:include>
		<div class="container">
			<div class="page-header">
				<h1 class="page-title">Dashboard</h1>
			</div>
			<div class="col-6 col-sm-4 col-lg-2">
				<div class="card">
					<div class="card-body p-3 text-center">
						<div class="text-right text-green">
							6% <i class="icon-up"></i>
						</div>
						<div class="h1 m-0">43</div>
						<div class="text-muted mb-4">신규회원</div>
					</div>
				</div>
			</div>
			<div class="col-6 col-sm-4 col-lg-2">
				<div class="card">
					<div class="card-body p-3 text-center">
						<div class="text-right text-red">
							-3% <i class="icon-down"></i>
						</div>
						<div class="h1 m-0">17</div>
						<div class="text-muted mb-4">신규예약</div>
					</div>
				</div>
			</div>
			<div class="col-6 col-sm-4 col-lg-2">
				<div class="card">
					<div class="card-body p-3 text-center">
						<div class="text-right text-green">
							9% <i class="icon-up"></i>
						</div>
						<div class="h1 m-0">7</div>
						<div class="text-muted mb-4">페이지 뷰</div>
					</div>
				</div>
			</div>
			<div class="col-6 col-sm-4 col-lg-2">
				<div class="card">
					<div class="card-body p-3 text-center">
						<div class="text-right text-green">
							3% <i class="icon-up"></i>
						</div>
						<div class="h1 m-0">27.3K</div>
						<div class="text-muted mb-4">Followers</div>
					</div>
				</div>
			</div>
			<div class="col-6 col-sm-4 col-lg-2">
				<div class="card">
					<div class="card-body p-3 text-center">
						<div class="text-right text-red">
							-2%
							<!--                       <i class="icon-down"></i> -->
							<!-- 						<img src='/Food/resources/img/chevron-down.svg' class="svgcss"> -->
							<i class="icon-down"></i>


						</div>
						<div class="h1 m-0">$95</div>
						<div class="text-muted mb-4">Daily Earnings</div>
					</div>
				</div>
			</div>
			<div class="col-6 col-sm-4 col-lg-2">
				<div class="card">
					<div class="card-body p-3 text-center">
						<div class="text-right text-red">
							-1% <i class="icon-down"></i>
						</div>
						<div class="h1 m-0">621</div>
						<div class="text-muted mb-4">Products</div>
					</div>
				</div>
			</div>
			<div class="col-lg-6">
				<div class="card">

					
					<div class="product-status mg-tb-15" style="height:30rem;">
						<div class="container-fluid">
							<div class="row">
								<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
									<div class="status-wrap">

										<!-- Tab을 구성할 영역 설정-->
										<div style="margin: 10px;">
											<!-- tab 영역이다. -->
											<ul class="nav nav-tabs">
												<!-- data-load를 넣어서 이미 로드를 했는지 않했는지의 판단 값을 넣는다. -->
												<!-- true면 이미 content영역에 load가 끝나서 더이상 load가 필요없다는 뜻이다. -->
												<li class="active"><a href="#home1" data-toggle="tab"
													data-load="true">일간 예약</a></li>
												<!-- false라면 data-url영역의 url주소로 데이터를 가져와서 tab-content에 표시한다. -->
												<li><a href="#homepage" data-toggle="tab"
													data-load="false" data-url="https://nowonbun.tistory.com">페이지
														뷰</a></li>
											</ul>
											<!-- tab-content 영역이다. -->
											<div class="tab-content">
												<div class="tab-pane fade in active" id="home">Home 메뉴</div>
												<div class="tab-pane fade" id="homepage"></div>
											</div>
										</div>


									</div>
								</div>
							</div>
						</div>
					</div>

				</div>
				<script>
                  require(['c3', 'jquery'], function(c3, $) {
                  	$(document).ready(function(){
                  		var chart = c3.generate({
                  			bindto: '#chart-development-activity', // id of chart wrapper
                  			data: {
                  				columns: [
                  				    // each columns data
                  					['data1', 0, 5, 1, 2, 7, 5, 6, 8, 24, 7, 12, 5, 6, 3, 2, 2, 6, 30, 10, 10, 15, 14, 47, 65, 55]
                  				],
                  				type: 'area', // default type of chart
                  				groups: [
                  					[ 'data1', 'data2', 'data3']
                  				],
                  				colors: {
                  					'data1': tabler.colors["blue"]
                  				},
                  				names: {
                  				    // name of each serie
                  					'data1': 'Purchases'
                  				}
                  			},
                  			axis: {
                  				y: {
                  					padding: {
                  						bottom: 0,
                  					},
                  					show: false,
                  						tick: {
                  						outer: false
                  					}
                  				},
                  				x: {
                  					padding: {
                  						left: 0,
                  						right: 0
                  					},
                  					show: false
                  				}
                  			},
                  			legend: {
                  				position: 'inset',
                  				padding: 0,
                  				inset: {
                                      anchor: 'top-left',
                  					x: 20,
                  					y: 8,
                  					step: 10
                  				}
                  			},
                  			tooltip: {
                  				format: {
                  					title: function (x) {
                  						return '';
                  					}
                  				}
                  			},
                  			padding: {
                  				bottom: 0,
                  				left: -1,
                  				right: -1
                  			},
                  			point: {
                  				show: false
                  			}
                  		});
                  	});
                  });
                </script>
			</div>
			<div class="col-md-6">
				<div class="alert alert-primary">
					 차트를 더 보고 싶다면?<a href="" class="alert-link">&nbsp;&nbsp;차트</a>를 누르세요
				</div>
				<div class="row">
					<div class="col-sm-6">
						<div class="card">
							<div class="card-header">
								<h3 class="card-title">Chart title</h3>
							</div>
							<div class="card-body">
								<div id="chart-donut" style="height: 12rem;"></div>
							</div>
						</div>
						<script>
                      require(['c3', 'jquery'], function(c3, $) {
                      	$(document).ready(function(){
                      		var chart = c3.generate({
                      			bindto: '#chart-donut', // id of chart wrapper
                      			data: {
                      				columns: [
                      				    // each columns data
                      					['data1', 63],
                      					['data2', 37]
                      				],
                      				type: 'donut', // default type of chart
                      				colors: {
                      					'data1': tabler.colors["green"],
                      					'data2': tabler.colors["green-light"]
                      				},
                      				names: {
                      				    // name of each serie
                      					'data1': 'Maximum',
                      					'data2': 'Minimum'
                      				}
                      			},
                      			axis: {
                      			},
                      			legend: {
                                      show: false, //hide legend
                      			},
                      			padding: {
                      				bottom: 0,
                      				top: 0
                      			},
                      		});
                      	});
                      });
                    </script>
					</div>
					<div class="col-sm-6">
						<div class="card">
							<div class="card-header">
								<h3 class="card-title">Chart title</h3>
							</div>
							<div class="card-body">
								<div id="chart-pie" style="height: 12rem;"></div>
							</div>
						</div>
						<script>
                      require(['c3', 'jquery'], function(c3, $) {
                      	$(document).ready(function(){
                      		var chart = c3.generate({
                      			bindto: '#chart-pie', // id of chart wrapper
                      			data: {
                      				columns: [
                      				    // each columns data
                      					['data1', 63],
                      					['data2', 44],
                      					['data3', 12],
                      					['data4', 14]
                      				],
                      				type: 'pie', // default type of chart
                      				colors: {
                      					'data1': tabler.colors["blue-darker"],
                      					'data2': tabler.colors["blue"],
                      					'data3': tabler.colors["blue-light"],
                      					'data4': tabler.colors["blue-lighter"]
                      				},
                      				names: {
                      				    // name of each serie
                      					'data1': 'A',
                      					'data2': 'B',
                      					'data3': 'C',
                      					'data4': 'D'
                      				}
                      			},
                      			axis: {
                      			},
                      			legend: {
                                      show: false, //hide legend
                      			},
                      			padding: {
                      				bottom: 0,
                      				top: 0
                      			},
                      		});
                      	});
                      });
                    </script>
					</div>
					<div class="col-sm-6">
						<div class="card">
							<div class="card-body text-center">
								<div class="h5">New feedback</div>
								<div class="display-4 font-weight-bold mb-4">62</div>
								<div class="progress progress-sm">
									<div class="progress-bar bg-red" style="width: 28%"></div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-sm-6">
						<div class="card">
							<div class="card-body text-center">
								<div class="h5">Today profit</div>
								<div class="display-4 font-weight-bold mb-4">$652</div>
								<div class="progress progress-sm">
									<div class="progress-bar bg-green" style="width: 84%"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-sm-6 col-lg-3">
				<div class="card p-3">
					<div class="d-flex align-items-center">
						<span class="stamp stamp-md bg-blue mr-3"> <i
							class="fe fe-dollar-sign"></i>
						</span>
						<div>
							<h4 class="m-0">
								<a href="javascript:void(0)">132 <small>Sales</small></a>
							</h4>
							<small class="text-muted">12 waiting payments</small>
						</div>
					</div>
				</div>
			</div>
			<div class="col-sm-6 col-lg-3">
				<div class="card p-3">
					<div class="d-flex align-items-center">
						<span class="stamp stamp-md bg-green mr-3"> <i
							class="fe fe-shopping-cart"></i>
						</span>
						<div>
							<h4 class="m-0">
								<a href="javascript:void(0)">78 <small>Orders</small></a>
							</h4>
							<small class="text-muted">32 shipped</small>
						</div>
					</div>
				</div>
			</div>
			<div class="col-sm-6 col-lg-3">
				<div class="card p-3">
					<div class="d-flex align-items-center">
						<span class="stamp stamp-md bg-red mr-3"> <i
							class="fe fe-users"></i>
						</span>
						<div>
							<h4 class="m-0">
								<a href="javascript:void(0)">1,352 <small>Members</small></a>
							</h4>
							<small class="text-muted">163 registered today</small>
						</div>
					</div>
				</div>
			</div>
			<div class="col-sm-6 col-lg-3">
				<div class="card p-3">
					<div class="d-flex align-items-center">
						<span class="stamp stamp-md bg-yellow mr-3"> <i
							class="fe fe-message-square"></i>
						</span>
						<div>
							<h4 class="m-0">
								<a href="javascript:void(0)">132 <small>Comments</small></a>
							</h4>
							<small class="text-muted">16 waiting</small>
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
</body>
</html>