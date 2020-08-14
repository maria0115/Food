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
	<!-- Core Stylesheet -->
	<link rel="stylesheet" href="/Food/resources/css/style.css">
    <link rel="stylesheet" href="/Food/resources/css/mymenu.css">
    <link href="/Food/resources/css/reservation_css/qna_hc.css" rel="stylesheet">
  
  			 <jsp:include page="../index/header.jsp">
				<jsp:param value='../' name='folder' />
			</jsp:include>
<style type="text/css">
hr {

   height: 0.7em;
  background-color: rightgray;
}

#review{

	font-family: js4;
	font-size: 25px;
}

#returnBtn{

	font-family: js4;
	font-size: 21px;
	color:black;
	font-weight: 1px;
}

</style>	

	 
	 
</head>

<body>
    <!-- ##### Portfolio Area End ##### -->
	
	<c:if test="${not empty sessionScope.user_id}">

    		

	<!-- Preloader -->
	<div class="preloader d-flex align-items-center justify-content-center">
		<div class="preloader-circle"></div>
		<div class="preloader-img">
			<img src="img/core-img/leaf.png" alt="">
		</div>
	</div>


	<!-- 게시판 목록 보여주기 시작  -->

	<div class="container">
		<br />
		<br />

		<h1 style="font-family: fantasy;">MY Review</h1>
		<br />

	
			<c:forEach items="${list}" var="board">
			<div id="review">
				<div class="row" style="border: lightgrey solid 0.3px; border-radius: 15px  19px;" >
                <div style="width: 100%;">
                    <div class="form-group title" style="color:black;border-top-right-radius: 72px 62px;border-bottom-left-radius: 5px 124px;border-top-left-radius: 72px 62px;">
                 	<label style='font-weight: bold'>&nbsp;&nbsp;&nbsp;&nbsp;제목&nbsp;:&nbsp;</label> 
                    <input style="color:black;font-weight:bold;border:none;display:inline;width: 50%;" type="text"  id="contact-title" name="title" value="${board.title}" readonly>
                    </div>
                </div>
                <div style="width: 100%">
                    <div class="form-group writer" style="color:black">
                 	<label style='font-weight: bold'>&nbsp;&nbsp;&nbsp;&nbsp;작성자&nbsp;:&nbsp;</label> 
                        <input style="color:black;border:none;display:inline;width: 40%;" type="text"  id="contact-writer" name="userId" value="${board.userId}" readonly>
						<span id='viewcount' style='float:right'>조회수&nbsp;:&nbsp;${board.viewCount}</span>
                    </div>
                </div>
                <div style="padding-top: 45px;width: 100%;">
                    <div class="form-group" style="color:black">
                        <span style="margin-left: 1%;">${board.b_content}</span>
                    </div>
                </div>
             	</div>
             	<p></p>
             </div>
			</c:forEach>
			
			<!-- 페이징 -->
		<div style="display: block; text-align: center; font-family: js; font-size: 25px;">		
		<c:if test="${paging.startPage != 1 }">
			<a href="/Food/myreview.do?s_brand_name=${user_Info.S_BRAND_NAME }&nowPage=${paging.startPage - 1 }&cntPerPage=${paging.cntPerPage}">&lt;</a>
		</c:if>
		<c:forEach begin="${paging.startPage }" end="${paging.endPage }" var="p">
			<c:choose>
				<c:when test="${p == paging.nowPage }">
					<b>${p }</b>
				</c:when>
				<c:when test="${p != paging.nowPage }">
					<a href="/Food/myreview.do?s_brand_name=${user_Info.S_BRAND_NAME }&nowPage=${p }&cntPerPage=${paging.cntPerPage}">${p }</a>
				</c:when>
			</c:choose>
		</c:forEach>
		<c:if test="${paging.endPage != paging.lastPage}">
			<a href="/Food/myreview.do?s_brand_name=${user_Info.S_BRAND_NAME }&nowPage=${paging.endPage+1 }&cntPerPage=${paging.cntPerPage}">&gt;</a>
		</c:if>
		<input type="hidden" id="nowPage" name="nowPage" value="${paging.nowPage}"> 
		<input type="hidden" id="cntPerPage" name="cntPerPage" value="${paging.cntPerPage }">
        </div>
			
		
			<button  onclick="history.go(-1);" class="btn btn-default" id="returnBtn" >돌아가기</button> 	
	
		

</div>    
	</c:if>


	<!-- 게시판 목록 보여주기 끝  -->
	
			
				
				

	
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