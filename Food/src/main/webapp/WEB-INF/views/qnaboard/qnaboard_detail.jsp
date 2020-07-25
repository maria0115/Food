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
<link rel="stylesheet" href="resources/css/style.css">
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

<script type="text/javascript">
// 수정 버튼 클릭시 readonly상태에서 readonly삭제
$(function(){
	$("#modify").click(function(){
	$("#contact-title").attr('readonly', false);
	$("#message").attr('readonly', false);

// 	$("#savebtn").click(function(){
// 		alert("수정되었습니다")
// 		})
	})
})
</script>



<div class='container'>
<div class="contact-form-area mb-100">
                        <form action="modifyqna" method="post">
                            <input type="hidden" name="b_no" value=${list.b_no} readonly>
                            <div class="row">
                                <div class="col-12 col-md-6">
                                	제목
                                    <div class="form-group" style="color:black">
                                        <input style="color:black" type="text" class="form-control" id="contact-title" name="title" value=${list.title} readonly>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                	작성자
                                    <div class="form-group">
                                        <input style="color:black" type="text" class="form-control" id="contact-writer" name="userId" value=${list.userId} readonly>
                                    </div>
                                </div>
                                <div class="col-12">
                                	내용
                                    <div class="form-group">
                                        <textarea style="color:black" class="form-control" id="message" cols="30" rows="10" name="b_content" style="margin-top: 0px; margin-bottom: 15px; height: 246px;" readonly>${list.b_content}</textarea>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <button id="savebtn" type="submit" class="btn alazea-btn mt-15">SAVE</button>
                                </div>
                            </div>
                        </form>
			                        <button id="modify" style="float:right" data-toggle="tooltip" title="" class="pd-setting-ed" data-original-title="Edit"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
			                        <button id="delete" style="float:right" data-toggle="tooltip" title="" class="pd-setting-ed" data-original-title="Trash"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                    </div>
</div>




    <!-- ##### Footer Area Start ##### -->
    <%@ include file="../index/footer.jsp" %>
    <!-- ##### Footer Area End ##### -->

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