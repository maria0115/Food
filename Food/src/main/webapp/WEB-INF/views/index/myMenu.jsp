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

    <!-- Title -->
    <title>Alazea - Gardening &amp; Landscaping HTML Template</title>

    <!-- Favicon -->
	<link rel="icon" href="/Food/resources/img/core-img/favicon.ico">
	
	<!-- Core Stylesheet -->
	<link rel="stylesheet" href="/Food/resources/css/style.css">
    <link rel="stylesheet" href="/Food/resources/css/mymenu.css">
    
    <jsp:include page="header.jsp">
		<jsp:param value='../' name='folder' />
	</jsp:include>

	
	<script>
	function selChange() {
		var sel = document.getElementById('cntPerPage').value;
		location.href="boardList?nowPage=${paging.nowPage}&cntPerPage="+sel;
	}
</script>
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
        

        <div class="container">
            <div class="row">
                <div class="col-12">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#"><i class="fa fa-home"></i> Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page">2</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    <!-- ##### Breadcrumb Area End ##### -->


    <section class="alazea-portfolio-area section-padding-100-0">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <!-- Section Heading -->
                    <div class="section-heading text-center">
                        <h2>OUR PORTFOLIO</h2>
                        <p>We devote all of our experience and efforts for creation</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="alazea-portfolio-filter">
                        <div class="portfolio-filter">
                            <button class="btn active" data-filter="*">All</button>
                            <button class="btn" data-filter=".design">Coffee Design</button>
                            <button class="btn" data-filter=".garden">Garden</button>
                            <button class="btn" data-filter=".home-design">Home Design</button>
                            <button class="btn" data-filter=".office-design">Office Design</button>
                        </div>
                    </div>
                </div>
            </div>

			
			
			<script>
			function update_form(r_number){
				  $.ajax({
				    url: "myMenuDetail.do",
				    type: "get",
				    cache: false,
				    dataType: "json",
				    data: "r_number=" + r_number,
				    success: function(data){
				  $('.i_store_name').val(data.r_store_name);
			      $('.i_visit_date').val(data.time);  
			      $('.i_pplcount').val(data.r_people_count);          
			      $('.i_menu').val(data.r_menu);
			      $('.i_note').val(data.r_note);
			      $('.r_cancel').val(data.r_number);
					if(data.r_state == 0){
// 						alert("취소 불가")
						$(".r_cancel").attr("disabled",true)
					}else{
						$(".r_cancel").attr("disabled",false)
					}
			    },
				    error: function (request, status, error){    
				        var msg = "ERROR : " + request.status + "<br>"
				      msg +=  + "내용 : " + request.responseText + "<br>" + error;
				      console.log(msg);              
				    }

				  });
				}
			</script>
			<script>
			$(function(){
				$(".r_cancel").click(function(){
					var cancel = $(".r_cancel").val()
					alert(cancel)
					location.href="reservDelete.do?r_number="+cancel+"&m_id=${sessionScope.user_id}"
				})
			})

			</script>


<!--        ###################################################### -->
<!-- 		<button class="dialog__trigger">Open Dialog</button> -->
		
		<div class="dialog">
			<span class="dialog__close">&#x2715;</span>
			<h2 class="dialog__title">예약 내역</h2>
			<p class="dialog__content" style="color:black">Lorem ipsum dolor sit amet,
				consectetur adipisicing elit. Impedit necessitatibus illo
				deleniti doloremque culpa volupta.</p>
			<label class="label_name">매장</label><input style="color:black" class="input_name i_store_name" disabled><hr>
			<label class="label_name">날짜</label><input style="color:black" class="input_name i_visit_date" disabled><hr>
			<label class="label_name">인원</label><input style="color:black" class="input_name i_pplcount" disabled><hr>
			<label class="label_name">메뉴</label><input style="color:black" class="input_name i_menu" disabled><hr>
			<label class="label_name">문의</label><input style="color:black" class="input_name i_note" disabled><hr>

			<button class="r_cancel" value="">예약 취소</button>
		</div>
<!-- 		###################################################### -->





            <div class="row alazea-portfolio">
            
				<c:forEach items="${list}" var="list">
                <!-- Single Portfolio Area -->
                <div class="col-12 col-sm-6 col-lg-3 single_portfolio_item design home-design wow fadeInUp" data-wow-delay="100ms">
                    <!-- Portfolio Thumbnail -->
                    <div class="portfolio-thumbnail bg-img" style="background-image: url(/Food/resources/img/bg-img/16.jpg);"></div>
                	
                    <!-- Portfolio Hover Text -->
                    <div class="portfolio-hover-overlay">
                    <div class="dialog__trigger" onclick="update_form(${list.r_number})" style="height:400px">
<!--                         <a href="resources/img/bg-img/16.jpg" class="portfolio-img d-flex align-items-center justify-content-center" title="Portfolio 1"> -->
                            <div class="port-hover-text" style="padding-top: 35%">
                                <h3>${list.r_store_name}</h3>
                                <h5>${list.r_menu}</h5>
                                <h5>${list.time}</h5>
                                <h5>${list.r_number}</h5>
                            </div>
<!--                         </a> -->
                    </div>
                    </div>
				</div>				
				</c:forEach>
            </div>
            
    <div style="display: block; text-align: center;">		
		<c:if test="${paging.startPage != 1 }">
			<a href="/Food/index/myMenu.do?m_id=${sessionScope.user_id}&nowPage=${paging.startPage - 1 }&cntPerPage=${paging.cntPerPage}">&lt;</a>
		</c:if>
		<c:forEach begin="${paging.startPage }" end="${paging.endPage }" var="p">
			<c:choose>
				<c:when test="${p == paging.nowPage }">
					<b>${p }</b>
				</c:when>
				<c:when test="${p != paging.nowPage }">
					<a href="/Food/index/myMenu.do?m_id=${sessionScope.user_id}&nowPage=${p }&cntPerPage=${paging.cntPerPage}">${p }</a>
				</c:when>
			</c:choose>
		</c:forEach>
		<c:if test="${paging.endPage != paging.lastPage}">
			<a href="/Food/index/myMenu.do?m_id=${sessionScope.user_id}&nowPage=${paging.endPage+1 }&cntPerPage=${paging.cntPerPage}">&gt;</a>
		</c:if>
	</div>
            
            
        </div>
        
        
        
        
        
    </section>
    <!-- ##### Portfolio Area End ##### -->

    

    <!-- ##### Footer Area Start ##### -->
    <%@ include file="footer.jsp" %>
    <!-- ##### Footer Area End ##### -->

    <!-- ##### All Javascript Files ##### -->
    <script src="/Food/resources/js/mymenu.js"></script>
    <script src="/Food/resources/js/active.js"></script>
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