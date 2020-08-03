<%@page import="java.util.HashMap"%>

<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html lang="en">
<% HashMap map = (HashMap)request.getAttribute("map"); %>
<head>
<meta charset="UTF-8">
<meta name="description" content="">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">
<!-- The above 4 meta tags *must* come first in the head; any other head content must come *after* these tags -->

<!-- Title -->
<title></title>
<script type="text/javascript">
	$(document).ready(function() {
		var name = ${result}.response.name;
		$(".login-header").css("display","none");
		$(".access").html("<span class='login-font'>"+name+" Welcome.</span><a href='' id='naverlogout' ><button class='logout'>Log-Out</button></a><a href='mypageform.do' id='mypage' class='fa fa-user' >My Page</a>");
	  });
</script>


<!-- Favicon -->
<link rel="icon" href="resources/img/core-img/favicon.ico">

<!-- Core Stylesheet -->
<link rel="stylesheet" href="resources/css/style.css">
<link rel="stylesheet" href="/Food/resources/css/js.css">
<!-- 부트스트랩 -->
<link
	href="https://gitcdn.github.io/bootstrap-toggle/2.2.2/css/bootstrap-toggle.min.css"
	rel="stylesheet">
<script
	src="https://gitcdn.github.io/bootstrap-toggle/2.2.2/js/bootstrap-toggle.min.js"></script>

<style>
.menu a {
	cursor: pointer;
}

.menu .hide {
	display: none;
}

.logo{
	height: 10%;
	width: 10;
}

#manageLabel1 {
   display: revert;
    font-size: larger;
    margin-right: 25px;
}
</style>




</head>

<body>

	<!-- Preloader -->
	<div class="preloader d-flex align-items-center justify-content-center">
		<div class="preloader-circle"></div>
		<div class="preloader-img">
			<img src="img/core-img/leaf.png" alt="">
		</div>
	</div>

	<!-- ##### Header Area Start ##### -->
	<header class="header-area">

		<!-- ***** Top Header Area ***** -->
		<div class="top-header-area">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<div
							class="top-header-content d-flex align-items-center justify-content-between">
							<!-- Top Header Content -->
							<div class="top-header-meta">
							<img alt="" src="/Food/resources/img/logo1.jpg">
								<a href="/Food/main.do" class="nav-brand"><img
							src="/Food/resources/img/logo.png" alt="" class="logo">
						</a>
							</div>

							<!-- Top Header Content -->
							<div class="top-header-meta d-flex">
								<!-- Language Dropdown -->
								<div class="language-dropdown">
									<div class="dropdown">
										<button class="btn btn-secondary dropdown-toggle mr-30"
											type="button" id="dropdownMenuButton" data-toggle="dropdown"
											aria-haspopup="true" aria-expanded="false">Language</button>
										<div class="dropdown-menu"
											aria-labelledby="dropdownMenuButton">
											<a class="dropdown-item" href="#">USA</a> <a
												class="dropdown-item" href="#">UK</a> <a
												class="dropdown-item" href="#">Bangla</a> <a
												class="dropdown-item" href="#">Hindi</a> <a
												class="dropdown-item" href="#">Spanish</a> <a
												class="dropdown-item" href="#">Latin</a>
										</div>
									</div>
								</div>
								<!-- Login -->
								<div class="access">
									<c:if test="${not empty sessionScope.user_id}">
										<span class="login-font">${sessionScope.user_name}
											Welcome.</span>
										<a href="" id="logout"><button class="logout">Log-Out</button></a>
										<a href="mypageform.do" id="mypage" class="fa fa-user">My
											Page</a>
								<span class="cart">
									<a href="/Food/selectCart.do?m_id=${sessionScope.user_id}"><i class="fa fa-heart-o"
										aria-hidden="true"></i> <span>Wish <span
											class="cart-quantity">(${wish})</span></span></a>
								</span>
									</c:if>
								</div>
								<c:if test="${empty sessionScope.user_id }">
									<!-- Login -->
									<div class="login-header">
										<div class="login">
											<a href="#" id="loginLabel" class="fa fa-user">Login</a>
											<div class="loginbox">
												<form action="login.do" method="post" id="frm" name="frm">
													<p>
														<label for="logid">ID</label>&nbsp&nbsp <input type="text"
															name="m_id" id="logid" placeholder="ID" />
													</p>
													<p>
														<label for="logpw">PW</label>&nbsp&nbsp <input
															type="password" name="m_pass" id="logpw"
															placeholder="PassWord" />
													</p>
													<p>
														<input class="loginBtn" id="btn_submit" value=""
															type="submit" />
													</p>
												</form>

												<a href="singup.do" class="memberInfo">회원가입 </a> <a
													href="find_form.do" class="memberInfo">아이디 비밀번호 찾기 </a> <a
													id="naver" href="/Food/loginview.do">네이버 아이디로 로그인</a>
												<div class="closeBtn">X</div>

											</div>

										</div>
									</div>
								
						
									<!--                         <ul id="navi"> -->
									<!--                               <li> -->
									<a href="/Food/manager/member-list.do" id="manageLabel1"
										class="fa fa-user"><br />Manage</a>
									<!--                                </li> -->


									<!--                           </ul> -->
					
								<!-- Cart -->
							
								</c:if>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- ***** Navbar Area ***** -->
		<div class="alazea-main-menu">
			<div class="classy-nav-container breakpoint-off">
				<div class="container">
					<!-- Menu -->
					<nav class="classy-navbar justify-content-between" id="alazeaNav">

						<!-- Nav Brand -->
						<a href="index.html" class="nav-brand"><img
                     src="img/core-img/logo.png" alt=""></a>

						<!-- Navbar Toggler -->
						<div class="classy-navbar-toggler">
							<span class="navbarToggler"><span></span><span></span><span></span></span>
						</div>

						<!-- Menu -->
						<div class="classy-menu">

							<!-- Close Button -->
							<div class="classycloseIcon">
								<div class="cross-wrap">
									<span class="top"></span><span class="bottom"></span>
								</div>
							</div>

							<!-- Navbar Start -->
							<div class="classynav">
								<ul>
									<li>
										<!-- -------------------------------------------------------- -->
										<button class="openbtn" onclick="openNav()">
											<img src="/Food/resources/img/menu_icon.png" alt="#">
										</button> <!-- ------------------------------------------------------- -->

										<div id="mySidepanel" class="sidepanel">
											<a href="javascript:void(0)" class="closebtn"
												onclick="closeNav()"><font size="10em">×</font></a> <a
												href="/Food/index/store.do?category='한식'">한식</a> <a
												href="/Food/index/store.do?category='중식'">중식</a> <a
												href="/Food/index/store.do?category='일식'">일식</a> <a
												href="/Food/index/store.do?category='양식'">양식</a> <a
												href="/Food/index/store.do?category='동남아'">동남아</a>
										</div> <!--  -------------------------------------------------------- -->

										<!-- END menu-toggle -->


									</li>
								</ul>
								<ul>
									<li><a href="/Food/todayMenu.do" id="today">오늘의 메뉴</a></li>
									<li><a
										href="/Food/index/myMenu.do?m_id=${sessionScope.user_id}"
										id="mymenu" style="padding: 0 24px;">My Menu</a></li>
									<li><a href="/Food/index/choiceMenu.do" id="choice">Other's
											Menu</a></li>
									<li><a href="/Food/index/mealFriends.do">밥친구 만들기</a></li>
									<li><a href="/Food/index/store.do">매장 정보</a></li>
								</ul>


								<!-- Search Icon -->
								<div id="searchIcon">
									<i class="fa fa-search" aria-hidden="true"></i>
								</div>

							</div>
							<!-- Navbar End -->
						</div>
					</nav>

					<!-- Search Form -->
					<div class="search-form">

						<form action="/Food/index/searchmap.do" method="get" id="searchfrm">
							<div class="closeIcon">
								<i class="fa fa-times" aria-hidden="true"></i>
							</div>
							<div>
								<input type="search" name="keyword" id="keyword" >
							</div>
						</form>
						<!-- Close Icon -->
					</div>
				</div>
			</div>
		</div>
	</header>

	<!-- ##### Hero Area Start ##### -->
	<!-- 	<section class="hero-area"> -->
		<div class="slide-img bg-img"
		style="background-image: url(/Food/resources/img/mainmenu/<%=map.get("menu")%>.jpg);">
		<!-- Single Hero Post -->
		<div class="single-hero-post2 bg-overlay" >

			<div
				style="text-align: center; height: 50%; line-height: 50%; transform: translateY(100%); text-shadow: black; position: absolute; width: 100%;">
				<a style="color:black; font-size: 5vw;font-weight: 900;">현재 <%= map.get("address")%>의
					날씨는 <%=map.get("reondo")%>도 <%=map.get("nalsi")%>입니다
				</a>
				<p>
					<a href="/Food/todayMenu.do" style="font-size: 8vw;font-weight: 900;">오늘은 <%=map.get("category")%> 어떠세요?
					</a>
				</p>
				<p>
				<a style="color:black; font-size: 2vw;font-weight: 900;">202006 요일별 직장인 방문 음식점 업종 TOP5 - </a>
					<a href="https://kdx.kr/data/view?product_id=4322" style="font-size: 3vw;color:white;">KDX한국데이터거래소</a>
				</p>
				<p>
				<a style="color:black; font-size: 2vw;font-weight: 900;">날씨 </a>
					<a style="color:black; font-size: 3vw;font-weight: 900;">openweathermap</a>
				</p>

			</div>
			<!-- 			<a href="" style="font-size: 10vw;">현재 의 날씨는 도 입니다^^</a> -->
			<!-- 			<p> -->
			<!-- 			<a href="" style="font-size: 15vw;">오늘은 의  어떠세요? 먹고 싶다면 눌러주세요</a> -->
			<!-- 			</p> -->
			<!-- 			</div> -->

			<!-- Post Image -->
		</div>
	</div>


	<!-- 	</section> -->


	<!-- ##### Contact Area End ##### -->








	<!-- ##### Footer Area Start ##### -->
	<%@ include file="footer.jsp"%>
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

	<script src="/Food/resources/js/sub.js"></script>
	<script src="/Food/resources/js/search.js"></script>
	<!-- 지섭 -->








</body>

</html>