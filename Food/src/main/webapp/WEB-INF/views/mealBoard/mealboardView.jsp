<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jstl/core_rt" prefix="c"%>
<%@ taglib uri = "http://java.sun.com/jsp/jstl/functions" prefix = "fn" %>
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta name="description" content="">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">

<!-- 부트스트랩 -->
<link
	href="https://gitcdn.github.io/bootstrap-toggle/2.2.2/css/bootstrap-toggle.min.css"
	rel="stylesheet">
<script src="https://gitcdn.github.io/bootstrap-toggle/2.2.2/js/bootstrap-toggle.min.js"></script>
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=bb313e4cbac02a6fbeb66ff237d66b62&libraries=services"></script>
<script src="/Food/resources/js/friendMap.js"></script>

</head>

<body>

	
			<jsp:include page="../index/header.jsp">
				<jsp:param value='../' name='folder' />
			</jsp:include>
	

	<!-- 게시판 목록 보여주기 시작  -->

	<div class="container">
		<br />
		<br />

		<h1>Happy Meal With Friends</h1>
		<br />

		<div id="noticeDiv">
			<table class="table table-bordered">
				<tr>
					<td width="100">글번호</td>
					<td align="left">${board.b_no }</td>
				</tr>
				<tr>
					<td width="100">등록일</td>
					<td align="left">${board.b_date }</td>
				</tr>
				<tr>
					<td width="100">조회수</td>
					<td align="left">${board.viewCount }</td>
				</tr>
				<tr>
					<td width="100">참여인원</td>
					<td align="left" >${board.f_membercnt}</td>
				</tr>
				<tr>
					<td width="100">참여여부</td>
					<td align="left" id="joincnt">
					
					<input type="hidden" id="joinid" name="f_userId" value="${board.f_userId}">
					<input type="hidden" id="id" name="f_userId" value="${sessionScope.user_id }">
					<input type="hidden" id="b_no" name="b_no" value="${board.b_no }">
					<!-- 참여인원이 확정인원보다 크면 참가하기 버튼 보여주기 -->
					<c:if test="${board.f_membercnt > board.f_cnt}">
					<input class="btn btn-info" type="button" id="joinBtn" value="참가하기" >
					</c:if>
					<!-- 참여인원이 확정인원보다 같거나 작으면 마감되었습니다 보여주기  -->
					<c:if test="${board.f_membercnt <= board.f_cnt}">
					<span id="end">마감되었습니다.</span>
					</c:if>
					</td>
				</tr>
				<tr>
					<td width="100">작성자</td>
					<td align="left">${board.userId }</td>
				</tr>
				<tr>
					<td width="100">제목</td>
					<td align="left">${board.title }</td>
				</tr>
				<tr>
					<td width="100">약속날짜</td>
					<td align="left">
					${board.f_date }시
					</td>
				</tr>
				<tr>
					<td width="100">글내용</td>
					<td align="left">
					${board.b_content }
					</td>
				</tr>
				<tr>
					<td width="100">위치</td>
					<td align="left">
					<div id="map" style="width:100%;height:350px;">
					<input type="hidden" id="f_addr1" name="f_addr1" value="${board.f_addr1 }">
					<input type="hidden" id="f_addr2" name="f_addr2" value="${board.f_addr2 }">
					<input type="hidden" id="f_title" name="title" value="${board.title }">
					
					</div>
					</td>
				</tr>
				
			</table>

		</div>


		<!-- 페이징 -->
		<div style="display: block; text-align: center;"></div>
		<!-- 로그인된 아이디가 글작성한 유저일경우에만 수정 삭제 버튼 보여주기  -->
		<c:if test="${sessionScope.user_id == board.userId}">
		<button class="btn btn-default" onclick="location.href='mealFriendsmodify.do?b_no=${board.b_no  }'" >글수정</button>
		<button class="btn btn-default" onclick="location.href='friendsdelete.do?b_no=${board.b_no  }'" >글삭제</button>
		</c:if >
		<button class="btn btn-default" onclick="location.href='../index/mealFriends.do'" >글목록</button>
		</div>



	<!-- 게시판 목록 보여주기 끝  -->
	

	<!-- ##### Footer Area Start ##### -->
	<%@ include file="../index/footer.jsp" %>
<script src="/Food/resources/js/join.js"></script>






<script type="text/javascript">

//취소하기 버튼을 눌렀을때 
$("#cancel").click(function(){
	
    $.ajax({
    		type:'post',
    		async:true,
            url : 'cancel.do',
            contentType :'application/x-www-form-urlencoded;charset=UTF-8',
            data :
        		"f_userId=" + $("#joinid").val()+"&userId="+$("#id").val()+
        		"&b_no="+ $("#b_no").val(),
        	//dataType:"text",
            success : function(resultData){
            	alert("밥친구가 취소되었습니다.");
            	//넘겨받은 결과값이 0이 아니라면 
            	if(resultData != 0){
            		//취소하기 버튼 숨기고
            		$("#cancel").css("display", "none");
           		//참가하기 버튼 띄워주기
            		var $div = $('<input class="btn btn-info" type="button" id="joinBtn" value="참가하기" >');
            		$("#joincnt").append($div);
           		
            		//span태그 안에 마감되었습니다 라는 문자가 있다면 
            		if(end.match("마감되었습니다.")){
            			//취소버튼 지워주기
            			$("#cancel").remove();
           			}
           		
            	}else{
                	
            		
  	}
            	
            	
            },
    		error:function(xhr, ajaxOptions, thrownError){
    			alert("에러"+xhr.status);
    			alert("에러"+thrownError);
    			
    		}
    });
});


</script>
</body>

</html>