<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ taglib uri="http://java.sun.com/jstl/core_rt" prefix="c"%>
    
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="description" content="">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- The above 4 meta tags *must* come first in the head; any other head content must come *after* these tags -->

<!-- Favicon -->
<link rel="icon" href="resources/img/core-img/favicon.ico">

<!-- Core Stylesheet -->
<!-- <link rel="stylesheet" href="resources/css/style.css"> -->
<link rel="stylesheet" href="resources/css/style1.css">
<link rel="stylesheet" href="resources/css/main1.css">
<link rel="stylesheet" href="resources/css/normalize1.css">
<link rel="stylesheet" href="resources/css/bootstrap1.min.css">

<!-- 부트스트랩 -->
<link
	href="https://gitcdn.github.io/bootstrap-toggle/2.2.2/css/bootstrap-toggle.min.css"
	rel="stylesheet">
<script
	src="https://gitcdn.github.io/bootstrap-toggle/2.2.2/js/bootstrap-toggle.min.js"></script>

<script>
	function selChange() {
		var sel = document.getElementById('cntPerPage').value;
		location.href="boardList?nowPage=${paging.nowPage}&cntPerPage="+sel;
	}
</script>



<jsp:include page="../index/header.jsp">
	<jsp:param value='' name='folder' />
</jsp:include>
</head>

<body>
    <!-- Preloader -->
    <div class="preloader d-flex align-items-center justify-content-center">
        <div class="preloader-circle"></div>
        <div class="preloader-img">
            <img src="img/core-img/leaf.png" alt="">
        </div>
    </div>
    

    <!-- ##### Breadcrumb Area Start ##### -->
    <div class="breadcrumb-area">
       


        <div class="container">
            <div class="row">
                <div class="col-12">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#"><i class="fa fa-home"></i> Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page">3</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    <!-- ##### Breadcrumb Area End ##### -->



<!-- <div class='move'> -->
<div class="product-status mg-tb-15">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="product-status-wrap">
                            <h4 style='display:inline'>QnA 게시판</h4>
                            	<c:if test="${not empty sessionScope.user_id}">
                                <a style='float:right;font-size:16px;color:#28a745;margin-bottom: 2%;' class="btn btn-outline-success" href="qnaboard_insertpage.do">글쓰기</a>
                            	</c:if>

                            <table>
                                <tbody><tr>
                                    <th>NO</th>
                                    <th>TITLE</th>
                                    <th>WRITER</th>
                                    <th>DATE</th>
                                </tr>
                                
                                <script type="text/javascript">
                                $(document).on("click",".qna_table",function(){
 									var no = $(this).parent().children().eq(0).text()
 									location.href="detail?b_no="+no;
                                });
                                 $(document).on("click","#trash",function(){
  									var no = $(this).parent().parent().children().eq(0).text()
  									location.href="deleteqna?b_no="+no;
                                 });
                                 </script>
                                
                                
                                <c:forEach items="${listVO}" var="list">
                                <tr>
                                    <td class='qna_table'>${list.b_no}</td>
                                    <td class='qna_table' width="600px">${list.title}</td>
                                    <td class='qna_table'>${list.userId}</td>
                                    <td class='qna_table'>${list.b_date}</td>
                                </tr>
                                </c:forEach>
                                </tbody>
                            </table>
                            
                            

                            
<!--     <div style="display: block; text-align: center;">		 -->
<%-- 		<c:if test="${paging.startPage != 1 }"> --%>
<%-- 			<a href="/Food/qnaboardList?nowPage=${paging.startPage - 1 }&cntPerPage=${paging.cntPerPage}">&lt;</a> --%>
<%-- 		</c:if> --%>
<%-- 		<c:forEach begin="${paging.startPage }" end="${paging.endPage }" var="p"> --%>
<%-- 			<c:choose> --%>
<%-- 				<c:when test="${p == paging.nowPage }"> --%>
<%-- 					<b>${p }</b> --%>
<%-- 				</c:when> --%>
<%-- 				<c:when test="${p != paging.nowPage }"> --%>
<%-- 					<a href="/Food/qnaboardList?nowPage=${p }&cntPerPage=${paging.cntPerPage}">${p }</a> --%>
<%-- 				</c:when> --%>
<%-- 			</c:choose> --%>
<%-- 		</c:forEach> --%>
<%-- 		<c:if test="${paging.endPage != paging.lastPage}"> --%>
<%-- 			<a href="/Food/qnaboardList?nowPage=${paging.endPage+1 }&cntPerPage=${paging.cntPerPage}">&gt;</a> --%>
<%-- 		</c:if> --%>
<!-- 	</div> -->
	
<div class='pagediv'>
<ul class="pagination">
	<li class="page-item"><a class="page-link"
			href="/Food/qnaboardList?nowPage=${paging.startPage }&cntPerPage=${paging.cntPerPage}&searchType=${searchType}&keyword=${keyword}&searchClick=N"
		style="font-size: 20px;">Start</a></li>
	<c:if test="${paging.nowPage != 1 }">
		<li class="page-item"><a class="page-link"
			href="/Food/qnaboardList?nowPage=${paging.nowPage - 1 }&cntPerPage=${paging.cntPerPage}&searchType=${searchType}&keyword=${keyword}&searchClick=N"
			style="font-size: 20px;">Previous</a></li>
	</c:if>
	<c:forEach begin="${paging.startPage }"
		end="${paging.endPage }" var="p">
		<c:choose>
			<c:when test="${p == paging.nowPage }">
				<li class="page-item"><a class="page-link" href="#"
					style="font-size: 30px;">${p }</a></li>
			</c:when>
			<c:when test="${p != paging.nowPage }">
				<li class="page-item"><a class="page-link"
					href="/Food/qnaboardList?nowPage=${p }&cntPerPage=${paging.cntPerPage}&searchType=${searchType}&keyword=${keyword}&searchClick=N"
					style="font-size: 20px;">${p }</a></li>
			</c:when>
		</c:choose>
	</c:forEach>
	<c:if test="${paging.nowPage != paging.lastPage}">
		<li class="page-item"><a class="page-link"
			href="/Food/qnaboardList?nowPage=${paging.nowPage+1 }&cntPerPage=${paging.cntPerPage}&searchType=${searchType}&keyword=${keyword}&searchClick=N"
			style="font-size: 20px;">Next</a></li>
	</c:if>
	<li class="page-item"><a class="page-link"
		href="/Food/qnaboardList?nowPage=${paging.lastPage }&cntPerPage=${paging.cntPerPage}&searchType=${searchType}&keyword=${keyword}&searchClick=N"
		style="font-size: 20px;">End</a></li>

</ul>
</div>
	
                            
</div>
                        
                        
        <form action="qnaboardList">
		<input type="hidden" id="nowPage" name="nowPage" value="${paging.nowPage}"> 
		<input type="hidden" id="cntPerPage" name="cntPerPage" value="${paging.cntPerPage }"> 
		<input type="hidden" id="searchClick" name="searchClick" value="Y">
		<table style=" margin-left: 40%;">
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
                </div>
            </div>
        </div>
<!-- </div> -->





    <!-- ##### Footer Area Start ##### -->
    <%@ include file="../index/footer.jsp" %>
    <!-- ##### Footer Area End ##### -->
<script src="/Food/resources/js/active.js"></script>
    <!-- ##### All Javascript Files ##### -->
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