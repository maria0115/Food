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
       
        <!-- Top Breadcrumb Area -->
       <div class="top-breadcrumb-area bg-img bg-overlay d-flex align-items-center justify-content-center" style="background-image: url(img/bg-img/24.jpg);">
            
        </div>

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
                            
                            

                            
    <div style="display: block; text-align: center;">		
		<c:if test="${paging.startPage != 1 }">
			<a href="/Food/qnaboardList?nowPage=${paging.startPage - 1 }&cntPerPage=${paging.cntPerPage}">&lt;</a>
		</c:if>
		<c:forEach begin="${paging.startPage }" end="${paging.endPage }" var="p">
			<c:choose>
				<c:when test="${p == paging.nowPage }">
					<b>${p }</b>
				</c:when>
				<c:when test="${p != paging.nowPage }">
					<a href="/Food/qnaboardList?nowPage=${p }&cntPerPage=${paging.cntPerPage}">${p }</a>
				</c:when>
			</c:choose>
		</c:forEach>
		<c:if test="${paging.endPage != paging.lastPage}">
			<a href="/Food/qnaboardList?nowPage=${paging.endPage+1 }&cntPerPage=${paging.cntPerPage}">&gt;</a>
		</c:if>
	</div>
                            <form action="#" method="post" class="form-inline" style="width: 500px;">
								<select class="custom-select widget-title" id="selectBox" onchange="fnGetCtgSub(this.value);" style="width: 33%;">
									<!-- <option selected>한식</option> -->
									<option value="all"></option>
									<option value="한식">한식</option>
									<option value="중식">중식</option>
									<option value="양식">양식</option>
									<option value="일식">일식</option>
									<option value="분식">분식</option>
									<option value="동남아">동남아</option>
								</select> 
								<input type="text" name="searchWard" id="listSearch" placeholder="매장명을 입력해주세요" style="width: 40%; height: 38px;">
								<input type="button" name="searchButton" id="searchButton" value="검색"> 
							</form>
                            
                            
                        </div>
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