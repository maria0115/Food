<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>



<%
	// <jsp:param>의 값 넘겨받기
String folder = request.getParameter("folder");
if (folder == null || folder.equals(""))
	folder = "";
%>
<!DOCTYPE html>
<html lang="en">

  <link href="https://gitcdn.github.io/bootstrap-toggle/2.2.2/css/bootstrap-toggle.min.css" rel="stylesheet">
  <link rel="stylesheet" href="/Food/resources/css/v3/patternfly-adjusted.min.css"> 
  <link rel="stylesheet" href="/Food/resources/css/v3/patternfly-additions.min.css">
 <!--  <link rel="stylesheet" href="/Food/resources/css/v3/patternfly-site.min.css">  -->
  <link rel="stylesheet" href="/Food/resources/css/headerpage/style3.css">
  <link rel="stylesheet" href="/Food/resources/css/headerpage/js3.css">
  
<script src="https://gitcdn.github.io/bootstrap-toggle/2.2.2/js/bootstrap-toggle.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
   <script src="/Food/resources/js/v3/bootstrap.min.js"></script>
  <script src="/Food/resources/js/v3/notification_header.js"></script> 

<head>
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
<script type="text/javascript" src="https://static.nid.naver.com/js/naverLogin_implicit-1.0.2.js" charset="utf-8"></script>
	
<!-- <script type="text/javascript" -->
<!-- 	src="http://code.jquery.com/jquery-1.11.3.min.js"></script> -->
<!-- 	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> -->
<!-- 	<script src='/Food/resources/js/jquery.min.js'></script> -->

<style type="text/css">
.qna_table {
	cursor: pointer;
}
</style>



<meta charset="UTF-8">
<meta name="description" content="">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">
<!-- The above 4 meta tags *must* come first in the head; any other head content must come *after* these tags -->

<!-- Title -->
<title>Alazea - Gardening &amp; Landscaping HTML Template</title>
<script type="text/javascript">
	$(document).ready(function() {
		if(${result}!=null){
			var name = ${result}.response.name;
		$(".login-header").css("display","none");
		$(".access").html("<span class='login-font'>"+name+" Welcome.</span><a href='' id='naverlogout' ><button class='logout'>Log-Out</button></a><a href='/Food/mypage.do' id='mypage' class='fa fa-user' >My Page</a>");
		}
		  });
</script>


<!-- Favicon -->
<link rel="icon" href="/Food/resources/img/core-img/favicon.ico">

<!-- Core Stylesheet -->


<!-- 부트스트랩 -->



<style>
.access {
	will-change: auto;
	/* width: auto; */
	width: max-content;
}

.menu a {
	cursor: pointer;
}

.menu .hide {
	display: none;
}

#manageLabel1 {
	display: revert;
	font-size: larger;
	margin-right: 25px;
}

.wish {
	-webkit-text-stroke-width: medium;
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
	<!-- Preloader -->

	<div class="single-hero-post bg-overlay" style="background-color: white;">
		<!-- Post Image -->
		
	</div>

	<div class="preloader d-flex align-items-center justify-content-center">
		<div class="preloader-circle"></div>
		<div class="preloader-img">
			<img src="/Food/resources/img/core-img/leaf.png" alt="">
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
							<a href="/Food/main.do" class="nav-brand" style="    font-family: js; font-size: 50px; color: black;">오늘 뭐 먹지?
						</a>
				</div>
						<!-- Top Header Content -->
						<div class="top-header-meta d-flex">
							<!-- Language Dropdown -->



							<div class="access">
								<c:if test="${not empty sessionScope.user_id}">
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
									<i class="fa fa-lg fa-bell" id="notibell" style="color: yellow;"></i>
									</button>
									
									<span class="notification-badge badge badge-danger" id="countAlarm"></span>
									
									<span class="wish"> <a
										href="/Food/selectCart.do?m_id=${sessionScope.user_id}"><i
											style="font-size: 17px; color: red;" class="fa fa-heart-o"
											aria-hidden="true"></i> <span
											style="font-size: 17px; color: red;">Wish <span>(${wish})</span></span></a>


									</span>
								</c:if>
							</div>
							<c:if test="${empty sessionScope.user_id }">
								<!-- Login -->
								<div class="login-header"> 
										<div class="login">
											<i class="fa fa-user" style="font-size: 20px; color:black; margin-right: 10px;"></i><a href="#" id="loginLabel" >Login</a>
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
											
										
										<a href="#layer2"  style="display: revert;
														    color: black;
														    font-size: x-large;margin-left: 10px;
														    font-family:js8;" class="btn-example" ><i
									class="fa fa-user"
									style="font-size: 20px; color: black; margin-right: 10px;"></i>Sign Up</a>
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
									<!--                               <li> -->
									<div>	 <!--                               <li> -->
								<i class="fa fa-user" style="font-size: 20px; color:black; margin-right: 10px; margin-left: 10px;" ></i><a href="/Food/manager/dashBoard.do" id="loginLabel"
										>Manage</a>
										</div>

								<!--                                </li> -->

							</c:if>




							<!-- Cart -->

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
							<div class="classynav" >

								<ul >
									<li><a href="/Food/todayMenu.do" id="today" style="font-size: 37px;">오늘의 메뉴</a></li>
									<li ><a 
										href="/Food/index/myMenu.do?m_id=${sessionScope.user_id}"
										id="mymenu" style="padding: 0 24px; font-size: 37px;" >My Menu</a></li>
									<li><a href="/Food/index/choiceMenu.do" id="choice" style="font-size: 37px;">Other's
											Menu</a></li>
									<li><a href="/Food/index/mealFriends.do" style="font-size: 37px;">밥친구 만들기</a></li>
									<li><a href="/Food/index/store.do" style="font-size: 37px;">매장 정보</a></li>
									<li><a href="/Food/qnaboardList" style="font-size: 37px;">Q & A</a></li>
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

						<form action="/Food/index/searchmap.do" method="get"
							id="searchfrm">
							<div class="closeIcon">
								<i class="fa fa-times" aria-hidden="true"></i>
							</div>
							<div>
								<input type="search" name="keyword" id="keyword"
									placeholder="검색하실 단어를 입력해주세요 ">
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
		
		
		
		
		
		
		<!-- 		********************** header 알림버튼 ********************* -->
 <nav class="navbar navbar-default navbar-pf" role="navigation" style='display: contents'>
<!--     <ul class="nav navbar-nav navbar-utility"> -->
<!--       <li class="drawer-pf-trigger dropdown"> -->
        <button class="btn btn-link nav-item-iconic drawer-pf-trigger-icon drawer-pf-trigger dropdown">
          <span class="fa fa-bell dropdown-title" title="Notifications"></span>
        </button>
<!--       </li> -->

<!--     </ul> -->
    
    
    
    
    
<!--     *************** 여기서 부터 ********************* -->
<div class="drawer-pf hide drawer-pf-notifications-non-clickable" style='right:215px;top:37%;height:300%'>
  <div class="drawer-pf-title">
    <a class="drawer-pf-toggle-expand fa fa-angle-double-left hidden-xs"></a>
    <a  class="drawer-pf-close pficon pficon-close"></a>
    <h3 class="text-center">Notifications Drawer</h3>
  </div>
  <div class="panel-group" id="notification-drawer-accordion">
    <div class="panel panel-default">
      <div class="panel-heading" data-component="collapse-heading">
        <h4 class="panel-title">
          <a data-toggle="collapse" data-parent="#notification-drawer-accordion" href="#fixedCollapseOne">
            Notification Tab 1
          </a>
        </h4>
        <span class="panel-counter">5 New Events</span>
      </div>
      <div id="fixedCollapseOne" class="panel-collapse collapse in">
        <div class="panel-body">
        
        
        
<!--         	목록 한개 -->
          <div class="drawer-pf-notification unread">
  
  <div class="dropdown pull-right dropdown-kebab-pf">
  <button class="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight11" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
    <span class="fa fa-ellipsis-v"></span>
  </button>
  <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight11">
    <li><a href="#">Action</a></li>
    <li><a href="#">Another Action</a></li>
    <li><a href="#">Something Else Here</a></li>
    <li role="separator" class="divider"></li>
    <li><a href="#">Separated Link</a></li>
  </ul>
</div>

  <span class="pficon pficon-info pull-left"></span>
  <div class="drawer-pf-notification-content">
    <span class="drawer-pf-notification-message">A New Event! Huzzah! Bold!</span>
    <div class="drawer-pf-notification-info">
      <span class="date">3/31/16</span>
      <span class="time">12:12:44 PM</span>
    </div>
  </div>
</div>




<div class="drawer-pf-notification unread">
  
  <div class="dropdown pull-right dropdown-kebab-pf">
  <button class="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight21" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
    <span class="fa fa-ellipsis-v"></span>
  </button>
  <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight21">
    <li><a href="#">Action</a></li>
    <li><a href="#">Another Action</a></li>
    <li><a href="#">Something Else Here</a></li>
    <li role="separator" class="divider"></li>
    <li><a href="#">Separated Link</a></li>
  </ul>
</div>

  <span class="pficon pficon-ok pull-left"></span>
  <div class="drawer-pf-notification-content">
    <span class="drawer-pf-notification-message">Another Event Notification</span>
    <div class="drawer-pf-notification-info">
      <span class="date">3/31/16</span>
      <span class="time">12:12:44 PM</span>
    </div>
  </div>
</div>
<div class="drawer-pf-notification">
  
  <div class="dropdown pull-right dropdown-kebab-pf">
  <button class="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight31" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
    <span class="fa fa-ellipsis-v"></span>
  </button>
  <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight31">
    <li><a href="#">Action</a></li>
    <li><a href="#">Another Action</a></li>
    <li><a href="#">Something Else Here</a></li>
    <li role="separator" class="divider"></li>
    <li><a href="#">Separated Link</a></li>
  </ul>
</div>

  <span class="pficon pficon-warning-triangle-o pull-left"></span>
  <div class="drawer-pf-notification-content">
    <span class="drawer-pf-notification-message">Another Event Notification that is really long to see how it reacts on smaller screens sizes.</span>
    <div class="drawer-pf-notification-info">
      <span class="date">3/31/16</span>
      <span class="time">12:12:44 PM</span>
    </div>
  </div>
</div>
<div class="drawer-pf-notification">
  
  <div class="dropdown pull-right dropdown-kebab-pf">
  <button class="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight41" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
    <span class="fa fa-ellipsis-v"></span>
  </button>
  <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight41">
    <li><a href="#">Action</a></li>
    <li><a href="#">Another Action</a></li>
    <li><a href="#">Something Else Here</a></li>
    <li role="separator" class="divider"></li>
    <li><a href="#">Separated Link</a></li>
  </ul>
</div>

  <span class="pficon pficon-error-circle-o pull-left"></span>
  <div class="drawer-pf-notification-content">
    <span class="drawer-pf-notification-message">Another Event Notification</span>
    <div class="drawer-pf-notification-info">
      <span class="date">3/31/16</span>
      <span class="time">12:12:44 PM</span>
    </div>
  </div>
</div>

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
              <span class="pficon pficon-close"></span>
              Clear All
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
	<!-- ##### Header Area End ##### -->

	<!-- ##### All Javascript Files ##### -->
	<!-- jQuery-2.2.4 js -->
	
	<!-- Popper js -->
	<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src="/Food/resources/js/bootstrap/popper.min.js"></script>
	<!-- Bootstrap js -->
	<script src="/Food/resources/js/bootstrap/bootstrap.min.js"></script>
	<!-- All Plugins js -->
	<script src="/Food/resources/js/plugins/plugins.js"></script>
	<!-- Active js -->
	<script src="/Food/resources/js/active.js"></script>
	<script
		src="https://cdnjs.cloudflare.com/ajax/libs/twbs-pagination/1.4.2/jquery.twbsPagination.min.js"></script>
	<script src="/Food/resources/js/storeTest.js"></script>
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

	<!-- <script src="/Food/resources/js/storePaging.js"></script> -->

	<!-- 지섭-->


</body>

</html>