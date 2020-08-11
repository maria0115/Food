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
			<img src="img/core-img/leaf.png" alt="">
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
							<div class="top-header-meta">
									<!--로고 이미지 들어올곳  -->
								<a href="/Food/main.do" class="nav-brand"><img
							src="/Food/resources/img/logo.png" alt="" class="logo">
						</a>
							</div>

							<!-- Top Header Content -->
							<div class="top-header-meta d-flex">
								<!-- Language Dropdown -->
								
								<!-- Login -->
								<div class="access" >
									<c:if test="${not empty sessionScope.user_id}">
										<span class="login-font">${sessionScope.user_name}
											Welcome.</span>
										<a href="" id="logout"><button class="logout">Log-Out</button></a>
										<a href="mypageform.do" id="mypage" class="fa fa-user">My
											Page</a>
											<a><img src="/Food/resources/img/bell.jpg"></a>					
								<span class="cart">
									<a href="/Food/selectCart.do?m_id=${sessionScope.user_id}"><i style="font-size: 17px; color:red;"  class="fa fa-heart-o"
									aria-hidden="true"></i> <span style="font-size: 17px; color: red; font-weight: bold;" >Wish<span
										>(${wish})</span></span></a>
								</span>
							
									</c:if>
								</div>
								<c:if test="${empty sessionScope.user_id }">
									<!-- Login -->
									<div class="login-header">
										<div class="login">
											<a href="#" id="loginLabel" class="fa fa-user">Login</a>
											<div class="loginbox" style="z-index: 2;">
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
											
										
											<a href="#layer2" class="btn-example fa fa-user" style="display: revert;
														    color: snow;
														    font-size: x-large;margin-left: 10px;
														    margin-top: 6px;
														    margin-right: 10px;">Sign Up</a>
															<div class="dim-layer">
															    <div class="dimBg"></div>
															    <div id="layer2" class="pop-layer">
															        <div class="pop-container">
															            <div class="pop-conts">
															                <!--content //-->
															                <p class="ctxt mb20">
															             	<a href="/Food/singup.do"><button class="btn btn-primary" style="height: 170px; width: 150px; margin-right: 40px;font-weight: bolder; font-size: x-large;">일반 회원</button></a>
															                <a href="/Food/singup2.do"><button class="btn btn-danger" style="height: 170px; width: 150px;font-weight: bolder; font-size: x-large">기업 회원</button></a>
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
									<!--                               <li> -->
									<a href="/Food/manager/dashBoard.do" id="manageLabel1"
										class="fa fa-user"><br />Manage</a>
										


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
	</header>

	<!-- ##### Hero Area Start ##### -->
	<!-- 	<section class="hero-area"> --> 
		<div class="slide-img bg-img"
       style='background-image: url(/Food/resources/img/mainmenu/<%=map.get("menu")%>.jpg)'>
		<!-- Single Hero Post -->
		<div class="single-hero-post2 bg-overlay">

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
	<!-- Channel Plugin Scripts -->
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
<!-- End Channel Plugin -->
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
<script src="/Food/resources/js/active.js"></script>	
	<script src="/Food/resources/js/search.js"></script>
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
		<script src="/Food/resources/js/sub.js"></script>
	<!-- 지섭 -->








</body>

</html>