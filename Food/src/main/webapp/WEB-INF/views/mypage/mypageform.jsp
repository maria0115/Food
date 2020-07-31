<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
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
	<link rel="stylesheet" href="/Food/resources/css/mypage.css">
	<!-- Core Stylesheet -->
	<link rel="stylesheet" href="/Food/resources/css/style.css">
    <link rel="stylesheet" href="/Food/resources/css/mymenu.css">
    
  		
<style>
    .box{
    width: auto;
    height: 200px;
    padding: 20px;
    border: slategray;
    margin: 10 10 10 10;
    font-family: inherit;
    font-size: x-large;
    border-style: double;
    text-align: center;
    color: black;
    -webkit-text-stroke-width: medium;
        
    }   
    
 
    .jsjs{
    	padding: 30px;
    text-align: center;
    /* font-family: serif; */
    font-size: -webkit-xxx-large;
    text-transform: uppercase;
}

    } 
    
html {
  box-sizing: border-box;
  
}
*, *::before, *::after {
  box-sizing: inherit;
}

.grid-wrapper {
    /* Prevents odd margin behaviour */
    // overflow: hidden;
    padding: 0.1px 0;
}

.grid {
  /* forces equal cell heights */
  display: flex;
  flex-wrap: wrap;

  /* creates gaps */
  padding: 20px 0 0 20px;

    /* pulls grid cells hard against edges */
    margin: -20px;
}

.grid-cell {
  /* sets column count */
  width: calc(100% / 1); /* 1 columns */

  /* creates gaps */
  border: 0 solid transparent;
  border-width: 0 20px 20px 0;
    
  /* prevents background bleed */
  background-clip: padding-box;

  /* forces inner to take up full grid cell height */
  display: flex;
}

@media (min-width: 400px){
    .grid-cell {
    width: calc(100% / 2); /* 2 columns */
    }
}

@media (min-width: 600px){
    .grid-cell {
    width: calc(100% / 5); /* 3 columns */
    }
}

.grid-cell-inner {
    width: 100%;
}

.cen{
 	text-align: center;
    padding-top: 23px;
    font-size: 28px;
}

/************************************\
  Prettiness only below this point
\************************************/

.grid-cell-inner {
    box-shadow: 0 0 10px 3px blue;
}

.grid-cell {
    /* So that we can see the grid cells */
 /*    box-shadow: inset 0 0 0 3px #0119; */
    height: 150px;
    margin-bottom: 100px;
    -webkit-text-stroke-width: medium;
   justify-content: center
}

.grid-wrapper {
    /* So that we can see the edges of the grid */
    // border: 3px solid green;
}

.grid-wrapper {
    max-width: 500px;
    margin: 30px auto;
}

html {
  margin: auto;
}
</style>    	

	 
	 
</head>

<body>
 <jsp:include page="../index/header.jsp">
				<jsp:param value='../' name='folder' />
			</jsp:include>
	

    <!-- ##### Portfolio Area End ##### -->
	
	<c:if test="${not empty sessionScope.user_id}">
   		<div class ="container">		
		<h1 class="jsjs"> my page </h1>
			<div class ="box">
			환영합니다.${user_Info.M_ID}님<br> 
			저희 홈페이지를 방문해 주셔서 감사합니다.<br>
			회원님의 가입일은 ${user_Info.M_DATE} 입니다.
			
			</div>
		<div class="grid-wrapper">
</div>

  <div class="grid">
    <div class="grid-cell"><a href="mypage.do" class="cen"><span style="color: crimson;">MY INFO</span><br/>회원 정보</a></div>
    <div class="grid-cell"><a href="mywrite.do" class="cen"><span style="color: cornflowerblue;">MY BOARD</span><br/>나의 글목록</a></div>
    <div class="grid-cell"><a href="foodcalorie.do" class="cen"><span style="color: lightcoral;">CALORIE CALCULATOR</span><br/>칼로리?</a></div>
    <div class="grid-cell"><a href="selectCart.do?m_id=${user_Info.M_ID}" class="cen"><span style="color: steelblue;">MY WISH</span><br/>찜목록보기</a></div>
   	<div class="grid-cell"><a href="myreservation.do" class="cen"><span style="color: crimson;">MY RESERVATION</span><br/>예약 리스트</a></div>
  </div>
  
</div>	


		
    	
	</c:if>
	
	<c:if test="${empty sessionScope.user_id}">
	<div class="container">
	<div id="nomember">현재 네이버 아이디로 이용중 입니다.
	네이버 아이디로 로그인시 오늘뭐먹지 MY Page 서비스를 이용하실수 없습니다.
	회원가입후 MY Page 서비스 이용가능 합니다.감사합니다.<br><button  onclick="history.go(-1);" class="btn btn-danger">되돌아가기</button> 

	</div>
	</div>

	</c:if>
	

    

    <!-- ##### Footer Area Start ##### --> 
    <%@ include file="../index/footer.jsp" %>
    <!-- ##### Footer Area End ##### -->

    <!-- ##### All Javascript Files ##### -->
    <script src="/Food/resources/js/mymenu.js"></script>
    <!-- jQuery-2.2.4 js -->
<!--     <script src="resources/js/jquery/jquery-2.2.4.min.js"></script> -->
<!--     Popper js -->
<!--     <script src="resources/js/bootstrap/popper.min.js"></script> -->
<!--     Bootstrap js -->
<!--     <script src="resources/js/bootstrap/bootstrap.min.js"></script> -->
<!--     All Plugins js -->
<!--     <script src="resources/js/plugins/plugins.js"></script> -->
<!--     Active js -->
<!--     <script src="resources/js/active.js"></script> -->
 
    
</body>

</html>