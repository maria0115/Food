<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ taglib uri="http://java.sun.com/jstl/core_rt" prefix="c"%>
    
<!DOCTYPE html>
<html lang="en">

<head>
<title>QnA 게시판</title>
    <meta charset="UTF-8">
    <meta name="description" content="">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- The above 4 meta tags *must* come first in the head; any other head content must come *after* these tags -->

<!-- Favicon -->


<!-- Core Stylesheet -->
<!-- <link rel="stylesheet" href="resources/css/style.css"> -->
<!-- <link rel="stylesheet" href="resources/css/style1.css"> -->
<!-- <link rel="stylesheet" href="resources/css/main1.css"> -->
<!-- <link rel="stylesheet" href="resources/css/normalize1.css"> -->
<!-- <link rel="stylesheet" href="resources/css/bootstrap1.min.css"> -->
<link href="resources/css/reservation_css/qna_hc.css" rel="stylesheet">
<!-- 부트스트랩 -->
<link
	href="https://gitcdn.github.io/bootstrap-toggle/2.2.2/css/bootstrap-toggle.min.css"
	rel="stylesheet">
<script
	src="https://gitcdn.github.io/bootstrap-toggle/2.2.2/js/bootstrap-toggle.min.js"></script>


<jsp:include page="../index/header.jsp">
	<jsp:param value='' name='folder' />
</jsp:include>
</head>

<body>


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




<div class='container'>
	<div class="contact-form-area mb-100">
        <form action="qnaboard_insert.do" method="post">
        
            <div class="row">
                <div class="col-12">
                	<label style='font-weight: bold;color:black'>제목</label>
                    <div class="form-group title" style="color:black">
                    <input style="color:black;font-weight:bold;border:none;display:inline;width: 98%;" type="text" class="form-control" id="contact-title" name="title">
                    <span id='date1' style='float:right;font-family:none'>${list.b_date}</span>
                    </div>
                </div>
                <div class="col-12">
                    <div class="form-group writer" style="color:black">
<!--                 	<label style='font-weight: bold'>작성자</label> -->
                        <input style="color:black;border:none;display:inline;width: 40%;" type="text" class="form-control" id="contact-writer" name="userId" value="${sessionScope.user_id}" readonly>
                    </div>
                </div>
                <div class="col-12" style="padding-top: 45px;">
                    <div class="form-group" style="color:black">
                	<label style="font-size: 30px;font-weight: bold;">Q.</label>
                        <textarea style="color:black;height: 120px;border-color:#9E9E9E" class="form-control" id="message" cols="30" rows="10" name="b_content"></textarea>
                    </div>
                </div>
                <div class="col-12">
                	<button id="savebtn" type="submit" style='margin-top:23px;font-size:larger;font-weight:bold;width:100px' class="btn btn-outline-success">SAVE</button>
                </div>
            </div>
        
        
<!--             <div class="row"> -->
<!--                 <div class="col-12 col-md-6"> -->
<!--              	   제목 -->
<!--                     <div class="form-group"> -->
<!--                         <input style='color:black' type="text" class="form-control" id="contact-name" name="title"> -->
<!--                     </div> -->
<!--                 </div> -->
<!--                 <div class="col-12 col-md-6"> -->
<!--                 	작성자 -->
<!--                     <div class="form-group"> -->
<%--                         <input style='color:black' type="text" class="form-control" id="contact-email" name="userId" value="${sessionScope.user_id}" readonly> --%>
<!--                     </div> -->
<!--                 </div> -->
<!--                 <div class="col-12"> -->
<!--                 	내용 -->
<!--                     <div class="form-group"> -->
<!--                         <textarea class="form-control" id="message" cols="30" rows="10" name="b_content" style="color:black; margin-top: 0px; margin-bottom: 15px; height: 246px;"></textarea> -->
<!--                     </div> -->
<!--                 </div> -->
<!--                 <div class="col-12"> -->
<!--                     <button type="submit" class="btn alazea-btn mt-15">Send Message</button> -->
<!--                 </div> -->
<!--             </div> -->
        </form>
    </div>
</div>




    <!-- ##### Footer Area Start ##### -->
    <%@ include file="../index/footer.jsp" %>
    <!-- ##### Footer Area End ##### -->
<script src="/Food/resources/js/active.js"></script>
<script src="/Food/resources/js/reservation_js/qna_hc.js"></script>
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