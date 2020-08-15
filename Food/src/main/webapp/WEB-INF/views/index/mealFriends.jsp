<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jstl/core_rt" prefix="c"%>
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta name="description" content="">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">
<link rel="stylesheet" href="/Food/resources/css/style.css">
<link rel="stylesheet" href="/Food/resources/css/marker.css">
<title>Eating with friends</title>
<!-- 부트스트랩 -->
<link
	href="https://gitcdn.github.io/bootstrap-toggle/2.2.2/css/bootstrap-toggle.min.css"
	rel="stylesheet">
<script src="https://gitcdn.github.io/bootstrap-toggle/2.2.2/js/bootstrap-toggle.min.js"></script>
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=bb313e4cbac02a6fbeb66ff237d66b62&libraries=services"></script>
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=bb313e4cbac02a6fbeb66ff237d66b62"></script>
<script src="/Food/resources/js/mealboardMap.js"></script>
<link rel="icon" href="/Food/resources/img/core-img/fri.jpg">
</head>

<body>

	
			<jsp:include page="header.jsp">
				<jsp:param value='../' name='folder' />
			</jsp:include>
		
	
	

	<!-- Preloader -->
	<div class="preloader d-flex align-items-center justify-content-center">
		<div class="preloader-circle"></div>
		<div class="preloader-img">
			<img src="/Food/resources/img/core-img/fri.jpg" alt="">
		</div>
	</div>
	
	<!-- 밥친구 게시판에 등록된 게시글 위치 마커 찍어주기 -->
	
   
	<!-- 게시판 목록 보여주기 시작  -->
	

	<div class="container">
	
	<!-- 예약 best3 지도 마커 찍기 -->
    
        <div class="breadcrumb-area">
       

            <div class="row">
                <div class="col-12">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/Food/main.do"><i class="fa fa-home"></i> Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page">밥친구 만들기</li>
                        </ol>
                    </nav>
                    
                    <h2 style="text-align: center; font-size: xxx-large;">Eating with friends</h2>
                </div>
            </div>
    </div>

		<br />
		
		<div class="shop-widget best-seller mb-50">
        <div id="map" style="width: 100%; height: 400px;">
			<c:forEach items="${list}" var="board">
			<input type="hidden" name="name" value="${board.title}">
			<input type="hidden" name="addr" value="${board.f_addr1 }">
			<input type="hidden" id="b_no" name="b_no" value="${board.b_no }">
			<input type="hidden" name="f_date" value="${board.f_date }">
			</c:forEach>
		</div>
    	</div>

		<div >
			<table class="table table-striped" >
				<tr style="font-size: 14px;">
					<th></th>
					<th style="width: 25%;">제목</th>
					<th style="width: 25%;">위치</th>
					<th>작성자</th>
					<th>등록일</th>
					<th style="width: 6%;">조회수</th>
					<th style="width: 6%;">참여</th>
					<th style="width: 6%;">확정</th>
					<th>채팅방</th>
				</tr>
				
				<c:forEach items="${friendlist}" var="board">
				<!-- 프라퍼티이름 변경 -->
				<tr id="b_tr" style="font-size: 16px;">
					<td><a  id="mfAlarm_bno" class="mealck" href="../mealBoard/mealboardView.do?b_no=${board.b_no }">${board.b_no}</a></td>
					<!-- 글 상세보기를 위해서 a태그로 경로 연결해주기 -->
					<td><a class="mealck" href="../mealBoard/mealboardView.do?b_no=${board.b_no }">${board.title}</a></td>
					<td><a class="mealck" href="../mealBoard/mealboardView.do?b_no=${board.b_no }">${board.f_addr1}&nbsp;${board.f_addr2}</a></td>
					<td id="contact-writer">${board.userId}<input type="hidden" name="f_date" value="${board.f_date }"></td>
					<td>${board.b_date}</td>
					<td style="text-align: center;">${board.viewCount}</td>
					<td style="text-align: center;"><span class="membercnt">${board.f_membercnt}</span></td>
					<td style="text-align: center;"><span class="joincnt">${board.f_cnt }</span></td>
					<td>
					<!-- 참여인원이 확정 인원보다 클때만 채팅방 참여하기 버튼 보여주기 -->
                    <c:if test="${board.f_membercnt >  board.f_cnt && sessionScope.user_id!= null}">
                    <button id="chatbtn" class="btn btn-default mary" >입장하기</button>
                    </c:if>
					<!-- 참여인원과 확정인원이 같을때 입장마감으로 바꿔주기 -->
					<c:if test="${board.f_membercnt == board.f_cnt && sessionScope.user_id!= null }">
					<span style="text-align: center;">입장마감</span>
					</c:if>
					</td>
					
				</tr>
				</c:forEach>

			</table>
		<input type="hidden" id= "sessionId" value="${sessionScope.user_id}">
		<!-- 페이징 -->
		<div style="display: block; text-align: center; font-family: js; font-size: 25px;">		
		<c:if test="${paging.startPage != 1 }">
			<a href="../index/mealFriends.do?nowPage=${paging.startPage - 1 }&cntPerPage=${paging.cntPerPage}&searchType=${searchType}
			&keyword=${keyword}&searchClick=N">&lt;</a>
		</c:if>
		<c:forEach begin="${paging.startPage }" end="${paging.endPage }" var="p">
			<c:choose>
				<c:when test="${p == paging.nowPage }">
					<b>${p }</b>
				</c:when>
				<c:when test="${p != paging.nowPage }">
					<a href="../index/mealFriends.do?nowPage=${p }&cntPerPage=${paging.cntPerPage}&searchType=${searchType}
					&keyword=${keyword}&searchClick=N">${p }</a>
				</c:when>
			</c:choose>
		</c:forEach>
		<c:if test="${paging.endPage != paging.lastPage}">
			<a href="../index/mealFriends.do?nowPage=${paging.endPage+1 }&cntPerPage=${paging.cntPerPage}&searchType=${searchType}
			&keyword=${keyword}&searchClick=N">&gt;</a>
		</c:if>
        </div>
        <!-- 페이지에 접속했을때 로그인을 하지 않았을경우 글등록 ,신고하기 버튼 안보여주기 -->
        <c:if test="${sessionScope.user_id!= null }">
		<button class="btn btn-default" onclick="location.href='../mealBoard/mealBoardInsert.do'" id="writebtn" >글등록</button>
		<button class="btn btn-danger" onclick="window.open('../manager/addDecla.do?boardType=3','_blank','width=1150 ,height=650');"
			 id="balckbtn">신고하기</button>
		</c:if>
		</div>
		</div>
		
		
		<div class="search-form">
		<form action="mealFriends.do">
		<input type="hidden" id="nowPage" name="nowPage" value="${paging.nowPage}"> 
		<input type="hidden" id="cntPerPage" name="cntPerPage" value="${paging.cntPerPage }"> 
		<input type="hidden" id="searchClick" name="searchClick" value="Y">
		<table style=" margin-left: 45%;">
			<tr>
				<td>
					<select class="form-control" id="searchType" name="searchType">
						<option value="title">제목</option>
						<option value="userId">작성자</option>
						<option value="b_content">내용</option>
					</select>
				</td>
				<td>
				<input class="form-control" type="text" name="keyword" id="keyword">
				</td>
				<td>
				<button class="btn btn-default" id="mealsearchBtn" type="submit">검색</button>
				</td>
			</tr>
		</table>
		</form>
		</div>
		<br/><br/><br/>

	<!-- 게시판 목록 보여주기 끝  -->
	

	<!-- ##### Footer Area Start ##### -->
	<%@ include file="footer.jsp" %>
	<script src="/Food/resources/js/active.js"></script>
	<script src="/Food/resources/js/jointimeck.js"></script>
	<script src="/Food/resources/js/alarmData/mealFriendsData.js"></script>
	


</body>

</html>