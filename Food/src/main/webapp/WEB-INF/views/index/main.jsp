<%@page import="java.util.HashMap"%>

<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html lang="en">
<% HashMap map = (HashMap)request.getAttribute("map"); %>
<head>
<meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> 
		<meta name="viewport" content="width=device-width, initial-scale=1.0"> 
        <title>오늘 뭐 먹지?</title>
        <meta name="description" content="A responsive folded flyer-like restaurant menu with some 3D" />
        <meta name="keywords" content="css3, perspective, 3d, jquery, transform3d, responsive, template, restaurant, menu, leaflet, folded, flyer, concept" />
        <meta name="author" content="Codrops" />
        <link rel="shortcut icon" href="../favicon.ico"> 
        <link rel="stylesheet" type="text/css" href="/Food/resources/main/css/style.css" />
		<link href='http://fonts.googleapis.com/css?family=Raleway:300,500|Arvo:700' rel='stylesheet' type='text/css'>
		<script type="text/javascript" src="js/modernizr.custom.79639.js"></script> 
		<link rel="stylesheet" href="/Food/resources/css/v3/patternfly-adjusted.min.css">
		<link rel="stylesheet" href="/Food/resources/css/v3/patternfly-additions.min.css">
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
<link rel="icon" href="/Food/resources/img/core-img/fri.jpg">

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
	max-width: 100%;
	height:auto;
}

#manageLabel1 {
   display: revert;
    font-size: larger;
    margin-right: 25px;
}
.access{
 will-change: auto;
    /* width: auto; */
    width: max-content;

}




* {
  margin: 0;
  padding: 0;
}

body {
  margin: 100px;

}

.pop-layer .pop-container {
  padding: 20px 25px;
}

.pop-layer p.ctxt {
  color: #666;
  line-height: 25px;
}

.pop-layer .btn-r {
  width: 100%;
  margin: 10px 0 20px;
  padding-top: 10px;
  border-top: 1px solid #DDD;
  text-align: right;
}

.pop-layer {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 410px;
  height: auto;
  background-color: #fff;
  border: 5px solid #3571B5;
  z-index: 10;
}

.dim-layer {
  display: none;
  position: fixed;
  _position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
}

.dim-layer .dimBg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: .5;
  filter: alpha(opacity=50);
}

.dim-layer .pop-layer {
  display: block;
}

a.btn-layerClose {
  display: inline-block;
  height: 25px;
  padding: 0 14px 0;
  border: 1px solid #304a8a;
  background-color: #3f5a9d;
  font-size: 13px;
  color: #fff;
  line-height: 25px;
}

a.btn-layerClose:hover {
  border: 1px solid #091940;
  background-color: #1f326a;
  color: #fff;
}
</style>




</head>



<body>
<div class="single-hero-post bg-overlay">
				<!-- Post Image -->
			<img style="max-width: 100%; background-size: contain;" src="/Food/resources/img/header.jpg" alt="">
			</div>
	<!-- Preloader -->
	<div class="preloader d-flex align-items-center justify-content-center">
		<div class="preloader-circle"></div>
		<div class="preloader-img">
			<img src="/Food/resources/img/core-img/fri.jpg" alt="">
		</div>
	</div>
	

	<!-- ##### Header Area Start ##### -->
	<header class="header-area">

		<!-- ***** Top Header Area ***** -->
		
			<div class="container">
				<div class="row">
					<div class="col-12">
						<div
							class="top-header-content d-flex align-items-center justify-content-between">
							<!-- Top Header Content -->
							<div class="top-header-meta" >
									<!--로고 이미지 들어올곳  -->
								<a href="/Food/main.do" class="nav-brand" style="font-family: js; font-size: 50px; color: snow;">오늘 뭐 먹지?
						</a>
							</div>

							<!-- Top Header Content -->
							<div class="top-header-meta d-flex">
								<!-- Language Dropdown -->
								
								<!-- Login -->
							<div class="access">
								<c:if test= "${not empty sessionScope.user_id && sessionScope.user_id != 'admin1234' }">
									<span class="login-font">${sessionScope.user_name}
										Welcome.</span>
									<a href="" id="logout"><button class="logout">Log-Out</button></a>
								<i class="fa fa-user" style="font-size:20px; color:black;"></i><a href="/Food/mypageform.do" id="mypage"  >MyPage</a>
									
									<button id="noti" class='btn btn-link nav-item-iconic drawer-pf-trigger-icon drawer-pf-trigger dropdown'
										style="
									    background-color: transparent !important;
									    background-image: none !important;
									    border-color: transparent;
									    border: none;
 									    color: #FFFFFF;
									">
									<i class="fa fa-2x fa-bell" id="notibell" style="color: yellow;"></i>
									</button>
									
									<span class="notification-badge badge badge-danger" id="countAlarm"></span>
									
									<span class="wish"> <a
										href="/Food/selectCart.do?m_id=${sessionScope.user_id}"><i
											style="font-size: 17px; color: red;" class="fa fa-heart-o"
											aria-hidden="true"></i> <span
											style="font-size: 17px; color: red; font-family: js7;">Wish <span>(${wish})</span></span></a>


									</span>
									
									
								</c:if>
								
								
								<c:if test="${sessionScope.user_id eq 'admin1234'}">
								<div>	 <!--                               <li> -->
									<span class="login-font">${sessionScope.user_name} Welcome.</span>
									<i class="fa fa-user" style="font-size: 20px; color:gold;border:1px; margin-right: 10px; margin-left: 10px;" ></i> <a href="/Food/manager/dashBoard.do" style="font-size: 20px; font-family: js8; color:white">Manage</a>
								<a href="" id="logout"><button class="logout">Log-Out</button></a>
								</div>
								</c:if>
								
							</div>
								<c:if test="${empty sessionScope.user_id }">
									<!-- Login -->
									<div class="login-header">
										<div class="login">
											<i class="fa fa-user" style="font-size: 20px; color:snow; margin-right: 10px;"></i><a href="#" id="loginLabel" >Login</a>
											<div class="loginbox" style="z-index: 2; border-radius: 15%;">
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
												<a href="find_form.do" class="memberInfo" style="text-align: center;">아이디 비밀번호 찾기 </a>
											<div></div>
												 <a id="naver" href="/Food/loginview.do">소셜 로그인</a>		   
												<div class="closeBtn">X</div>

											</div>

										</div>
									</div>
											
										
											<a href="#layer2"  style="display: revert;
														    color: snow;
														    font-size: x-large;margin-left: 10px;
														    font-family:js8;" class="btn-example" ><i class="fa fa-user" style="font-size: 20px; color:snow; margin-right: 10px;"></i>Sign Up</a>
															<div class="dim-layer">
															    <div class="dimBg"></div>
															    <div id="layer2" class="pop-layer">
															        <div class="pop-container">
															            <div class="pop-conts">
															                <!--content //-->
															                <p class="ctxt mb20">
															             	<a href="/Food/singup.do"><button class="btn btn-primary" style="height: 170px;font-family: js5;width: 150px;margin-right: 40px;font-weight: bolder;font-size: xx-large;">일반 회원</button></a>
															                <a href="/Food/singup2.do"><button class="btn btn-danger"style="height: 170px;font-family: js5;width: 150px;font-weight: bolder;font-size: xx-large;">기업 회원</button></a>
															                </p>
															
															                <div class="btn-r">
															                    <a href="#" class="btn-layerClose">Close</a>
															                </div>
															                <!--// content-->
															            </div>
															        </div>
															    </div>
															</div>
						      			                 
						
									<!--                         <ul id="navi"> -->



									<!--                           </ul> -->
					
								<!-- Cart -->
							
								</c:if>
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
									<li><a href="/Food/todayMenu.do" id="today">오늘의 메뉴</a></li>
									<li><a
										href="/Food/index/myMenu.do?m_id=${sessionScope.user_id}"
										id="mymenu" style="padding: 0 24px;">My Menu</a></li>
									<li><a href="/Food/index/choiceMenu.do" id="choice">Other's
											Menu</a></li>
									<li><a href="/Food/index/mealFriends.do">밥친구 만들기</a></li>
									<li><a href="/Food/index/store.do">매장 정보</a></li>
									<li><a href="/Food/qnaboardList">Q & A</a></li>
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
								<input type="search" name="keyword" id="keyword"
									placeholder="검색하실 단어를 입력해주세요 " >
							</div>
						</form>
						<!-- Close Icon -->
					</div>
				</div>
			</div>
		</div>
		<!-- 		********************** header 알림버튼 ********************* -->
		<nav class="navbar navbar-default navbar-pf" role="navigation"
			style='display: contents'>


			<!--     *************** 여기서 부터 ********************* -->
			<div class="drawer-pf hide drawer-pf-notifications-non-clickable"
				style='right: 215px; top: 37%; height: 300%'>
				<div class="drawer-pf-title">
					<a
						class="drawer-pf-toggle-expand fa fa-angle-double-left hidden-xs"></a>
					<a class="drawer-pf-close pficon pficon-close"></a>
					<h3 class="text-center">Notifications Drawer</h3>
				</div>
				<div class="panel-group" id="notification-drawer-accordion">
					<div class="panel panel-default">
						
						<div id="fixedCollapseOne" class="panel-collapse in collapse show">
							<div class="panel-body">

								

							</div>
							<div class="blank-slate-pf hidden">
								<div class="blank-slate-pf-icon">
									<span class="pficon-info"></span>
								</div>
								<h1>There are no notifications to display.</h1>
							</div>
							<div class="drawer-pf-action">
								<div class="drawer-pf-action-link" data-toggle="mark-all-read">
									<button class="btn btn-link">Mark All Read</button>
								</div>
								<div class="drawer-pf-action-link" data-toggle="clear-all">
									<button class="btn btn-link">
										<span class="pficon pficon-close"></span> Clear All
									</button>
								</div>
							</div>
						</div>
					</div>



				</div>
			</div>






		</nav>
		<!-- 		******************************************************** -->
		
		
		
	</header>





	<!-- ##### Hero Area Start ##### -->
	<!-- 	<section class="hero-area"> --> 
	  <div class="container">
		
			<!-- Codrops top bar -->
          
			<header>
			
				
				
				<div class="support-note"><!-- let's check browser support with modernizr -->
					<span class="no-cssanimations">CSS animations are not supported in your browser</span>
					<span class="no-csstransforms">CSS transforms are not supported in your browser</span>
					<span class="no-csstransforms3d">CSS 3D transforms are not supported in your browser</span>
					<span class="no-csstransitions">CSS transitions are not supported in your browser</span>
					<span class="note-ie">Sorry, only modern browsers.</span>
				</div>
				
			</header>
			
			<section class="main">

				<div id="rm-container" class="rm-container">

					<div class="rm-wrapper">

						<div class="rm-cover">

							<div class="rm-front">
								<div class="rm-content">

									<div class="rm-logo"  style='background-image: url(/Food/resources/img/mainmenu/<%=map.get("menu")%>.jpg)'></div>
									<h2>Today menu</h2>
									<h3>Packing &amp; meal</h3>

									<a href="#" class="rm-button-open" style="font-family:js4; font-size: 35px;">오늘 뭐 먹지?</a>
									<div class="rm-info">
										<p>
										<strong>현재 <%= map.get("address")%>입니다.<br> 날씨는 <%=map.get("reondo")%><%=map.get("nalsi")%></strong><br>
										<strong>오늘은 <%=map.get("category")%> 어떠세요?</strong><br>
										<strong>202006<br> 요일별 직장인 방문 음식점 업종 TOP5</strong> <br>
										<a href="https://kdx.kr/data/view?product_id=4322" style="font-size: 24px;color: red;font-family: js;">KDX한국데이터거래소</a><br>
										날씨<br><strong>OPENWEATHERMAP</strong>
										</p>
									</div>

								</div><!-- /rm-content -->
							</div><!-- /rm-front -->

							<div class="rm-back">
								<div class="rm-content">
									<h4>korea food</h4>
									<dl>
										 
										<dt ><a href="/Food/store/storeDetails.do?s_brand_name=${kor.s_brand_name}" style="color: darkred;" class="rm-viewdetails" data-thumb="/Food/resources/store/${kor.s_brand_name}.jpg">한식 카테고리 1위 예약매장!</a></dt>
										<dt>Store name</dt>
										<dd> ${kor.s_brand_name}</dd>

										<dt>menu&amp;Food prices</dt>
										<dd>${kor.p_name_1} ${kor.p_price_1}<br> ${kor.p_name_2}  ${kor.p_price_2}<br> ${kor.p_name_3}  ${kor.p_price_3}</dd>

										<dt class="rm-viewdetails" >Store location</dt>
										<dd>${kor.s_address}</dd>

										
									</dl>
									<h4>Western food</h4>
									<dl>
						
										<dt><a href="/Food/store/storeDetails.do?s_brand_name=${eng.s_brand_name}" style="color: darkred;" class="rm-viewdetails" data-thumb="/Food/resources/store/${eng.s_brand_name}.jpg">양식 카테고리 1위 예약매장!</a></dt>
										<dt>Store name</dt>
										<dd> ${eng.s_brand_name}</dd>

										<dt>menu&amp;Food prices</dt>
										<dd>${eng.p_name_1} ${eng.p_price_1}<br> ${eng.p_name_2}  ${eng.p_price_2}<br> ${eng.p_name_3}  ${eng.p_price_3}</dd>

										<dt class="rm-viewdetails" >Store location</dt>
										<dd>${eng.s_address}</dd>

										
									</dl>
								</div><!-- /rm-content -->
								<div class="rm-overlay"></div>

							</div><!-- /rm-back -->

						</div><!-- /rm-cover -->

						<div class="rm-middle">
							<div class="rm-inner">
								<div class="rm-content">
									<h4>Chinese food</h4>
									<dl>
										
										<dt><a href="/Food/store/storeDetails.do?s_brand_name=${ch.s_brand_name}" style="color: darkred;" class="rm-viewdetails" data-thumb="/Food/resources/store/${ch.s_brand_name}.jpg">중식 카테고리 1위 예약매장!</a></dt>
										<dt>Store name</dt>
										<dd> ${ch.s_brand_name}</dd>

										<dt>menu&amp;Food prices</dt>
										<dd>${ch.p_name_1} ${ch.p_price_1}<br> ${ch.p_name_2}  ${ch.p_price_2}<br> ${ch.p_name_3}  ${ch.p_price_3}</dd>

										<dt class="rm-viewdetails" >Store location</dt>
										<dd>${ch.s_address}</dd>

										
									</dl>
										<h4>Japanese food</h4>
									<dl>
										
										<dt><a href="/Food/store/storeDetails.do?s_brand_name=${jap.s_brand_name}" style="color: darkred;" class="rm-viewdetails" data-thumb="/Food/resources/store/${jap.s_brand_name}.jpg">일식 카테고리 1위 예약매장!</a></dt>
										<dt>Store name</dt>
										<dd> ${jap.s_brand_name}</dd>

										<dt>menu&amp;Food prices</dt>
										<dd>${jap.p_name_1} ${jap.p_price_1}<br> ${jap.p_name_2}  ${jap.p_price_2}<br> ${jap.p_name_3}  ${jap.p_price_3}</dd>

										<dt class="rm-viewdetails" >Store location</dt>
										<dd>${jap.s_address}</dd>

										
									</dl>
								</div><!-- /rm-content -->
								<div class="rm-overlay"></div>
							</div><!-- /rm-inner -->
						</div><!-- /rm-middle -->

						<div class="rm-right">

							<div class="rm-front">
								
							</div>

							<div class="rm-back">
								<span class="rm-close">Close</span>
								<div class="rm-content">
									<h4>flour based food</h4>
									<dl>
										
										<dt><a href="/Food/store/storeDetails.do?s_brand_name=${min.s_brand_name}" style="color: darkred;" class="rm-viewdetails" data-thumb="/Food/resources/store/${min.s_brand_name}.jpg">분식 카테고리 1위 예약매장!</a></dt>
										<dt>Store name</dt>
										<dd> ${min.s_brand_name}</dd>

										<dt>menu&amp;Food prices</dt>
										<dd>${min.p_name_1} ${min.p_price_1}<br> ${min.p_name_2}  ${min.p_price_2}<br> ${min.p_name_3}  ${min.p_price_3}</dd>

										<dt class="rm-viewdetails" >Store location</dt>
										<dd>${min.s_address}</dd>

										
									</dl>
									<h4>Southeast Asian food</h4>
									<dl>
										
										<dt><a href="/Food/store/storeDetails.do?s_brand_name=${east.s_brand_name}"  style="color: darkred;" class="rm-viewdetails" data-thumb="/Food/resources/store/${east.s_brand_name}.jpg">동남아 카테고리 1위 예약매장!</a></dt>
										<dt>Store name</dt>
										<dd> ${east.s_brand_name}</dd>

										<dt>menu&amp;Food prices</dt>
										<dd>${east.p_name_1} ${east.p_price_1}<br> ${east.p_name_2}  ${east.p_price_2}<br> ${east.p_name_3}  ${east.p_price_3}</dd>

										<dt class="rm-viewdetails" >Store location</dt>
										<dd>${east.s_address}</dd>

										
									</dl>
								</div><!-- /rm-content -->
							</div><!-- /rm-back -->

						</div><!-- /rm-right -->
					</div><!-- /rm-wrapper -->

				</div><!-- /rm-container -->

			</section>
			
        </div>
		<!-- jQuery if needed -->
		<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script type="text/javascript" src="/Food/resources/main/js/menu.js"></script>
		<script type="text/javascript">
			$(function() {

				Menu.init();
			
			});
		</script>


	<!-- 	</section> -->


	<!-- ##### Contact Area End ##### -->








	<!-- ##### Footer Area Start ##### -->
	<%@ include file="footer.jsp"%>
	<!-- ##### Footer Area End ##### -->
	<!-- Channel Plugin Scripts -->

<!-- End Channel Plugin -->
	<!-- ##### All Javascript Files ##### -->
	<!-- jQuery-2.2.4 js -->
	<script
		src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<!-- Popper js -->
	<script src="resources/js/bootstrap/popper.min.js"></script>
	<!-- Bootstrap js -->
	<script src="resources/js/bootstrap/bootstrap.min.js"></script>
	<!-- All Plugins js -->
	<script src="resources/js/plugins/plugins.js"></script>
	<!-- Active js -->
		<script src="/Food/resources/js/search.js"></script>
<script src="/Food/resources/js/active.js"></script>
<script src="/Food/resources/js/v3/Alarm-active.js"></script>	

	<script >
	$('.btn-example').click(function(){
        var $href = $(this).attr('href');
        layer_popup($href);
    });
    function layer_popup(el){

        var $el = $(el);        //레이어의 id를 $el 변수에 저장
        var isDim = $el.prev().hasClass('dimBg');   //dimmed 레이어를 감지하기 위한 boolean 변수

        isDim ? $('.dim-layer').fadeIn() : $el.fadeIn();

        var $elWidth = ~~($el.outerWidth()),
            $elHeight = ~~($el.outerHeight()),
            docWidth = $(document).width(),
            docHeight = $(document).height();

        // 화면의 중앙에 레이어를 띄운다.
        if ($elHeight < docHeight || $elWidth < docWidth) {
            $el.css({
                marginTop: -$elHeight /2,
                marginLeft: -$elWidth/2
            })
        } else {
            $el.css({top: 0, left: 0});
        }

        $el.find('a.btn-layerClose').click(function(){
            isDim ? $('.dim-layer').fadeOut() : $el.fadeOut(); // 닫기 버튼을 클릭하면 레이어가 닫힌다.
            return false;
        });

        $('.layer .dimBg').click(function(){
            $('.dim-layer').fadeOut();
            return false;
        });

    }
	</script>
	<script>
  (function() {
    var w = window;
    if (w.ChannelIO) {
      return (window.console.error || window.console.log || function(){})('ChannelIO script included twice.');
    }
    var d = window.document;
    var ch = function() {
      ch.c(arguments);
    };
    ch.q = [];
    ch.c = function(args) {
      ch.q.push(args);
    };
    w.ChannelIO = ch;
    function l() {
      if (w.ChannelIOInitialized) {
        return;
      }
      w.ChannelIOInitialized = true;
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
      s.charset = 'UTF-8';
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
    }
    if (document.readyState === 'complete') {
      l();
    } else if (window.attachEvent) {
      window.attachEvent('onload', l);
    } else {
      window.addEventListener('DOMContentLoaded', l, false);
      window.addEventListener('load', l, false);
    }
  })();
  ChannelIO('boot', {
    "pluginKey": "82a91101-4061-4a1b-b124-49afdb3d0949"
  });
</script>
<script type="text/javascript">
$("#loginLabel").click(function(e) {

	e.preventDefault();

	if ($('.loginbox').css('display') == 'none') {
		$('.loginbox').slideDown();
		$('.classy-navbar-toggler').css('display','none');
	} else {
		$('.loginbox').slideUp();
	    setTimeout(function() {
			$('.classy-navbar-toggler').css('display','block');
			}, 500);
		
		
		
	}
});

// 닫힘버튼
$(".closeBtn").click(function(e) {

	$('.loginbox').slideUp();

});

</script>
		<script src="/Food/resources/js/sub.js"></script>
	<!-- 지섭 -->








</body>

</html>