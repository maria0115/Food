<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<script type="text/javascript"
	src="https://static.nid.naver.com/js/naverLogin_implicit-1.0.2.js"
	charset="utf-8"></script>
<script type="text/javascript"
	src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>


<div class="container-fluid">
			<div class="row">
				<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
					<div class="logo-pro">
						<a href="index.html"><img class="main-logo"
							src="/Food/resources/img/logo/logo.png" alt="" /></a>
					</div>
				</div>
			</div>
		</div>
		<div class="header-advance-area">
			<div class="header-top-area">
				<div class="container-fluid">
					<div class="row">
						<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
							<div class="header-top-wraper">
								<div class="row">
									<div class="col-lg-1 col-md-0 col-sm-1 col-xs-12">
										<div class="menu-switcher-pro">
											<button type="button" id="sidebarCollapse"
												class="btn bar-button-pro header-drl-controller-btn btn-info navbar-btn">
												<i class="fa fa-bars"></i>
											</button>
											
											
										</div>
									</div>
									<div class="col-lg-6 col-md-7 col-sm-6 col-xs-12">
										<div class="header-top-menu tabl-d-n">
											<ul class="nav navbar-nav mai-top-nav">
												<li class="nav-item"><a href="Home.do" class="nav-link">Home</a>
												</li>
												<li class="nav-item"><a href="#" class="nav-link">About</a>
												</li>
												<li class="nav-item"><a href="#" class="nav-link">Services</a>
												</li>
												<li class="nav-item"><a href="#" class="nav-link">Support</a>
												</li>
											</ul>
										</div>
									</div>
									
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- Mobile Menu start -->
			<div class="mobile-menu-area">
				<div class="container">
					<div class="row">
						<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
							<div class="mobile-menu">
								<nav id="dropdown">
									<ul class="mobile-menu-nav">
										<li><a data-toggle="collapse" data-target="#Charts"
											href="#">Home <span
												class="admin-project-icon adminpro-icon adminpro-down-arrow"></span></a>
											<ul class="collapse dropdown-header-top">
												<li><a href="dashBoard.do">대시보드</a></li>
											</ul></li>
										<li><a data-toggle="collapse" data-target="#demo"
											href="#">관리 <span
												class="admin-project-icon adminpro-icon adminpro-down-arrow"></span></a>
											<ul id="demo" class="collapse dropdown-header-top">
												<li><a href="member-list.do">회원관리</a></li>
												<li><a href="mailbox-compose.html">매장 관리</a></li>
											</ul></li>
										<li><a href="black-list.do">블랙리스트 목록</a> <span
												class="admin-project-icon adminpro-icon adminpro-down-arrow"></span>
											</li>
										<li><a data-toggle="collapse" data-target="#demo"
											href="#">게시판 <span
												class="admin-project-icon adminpro-icon adminpro-down-arrow"></span></a>
											<ul id="demo" class="collapse dropdown-header-top">
												<li><a href="declarationBoard.do">신고게시판</a></li>
												<li><a href="mailbox-compose.html">리뷰게시판</a></li>
											</ul></li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- Mobile Menu end -->
			
		</div>
</body>
</html>