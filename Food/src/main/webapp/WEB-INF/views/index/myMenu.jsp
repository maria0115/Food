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
                            <li class="breadcrumb-item active" aria-current="page">2</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    <!-- ##### Breadcrumb Area End ##### -->

<%= request.getParameter("m_id") %>

<%-- ${list.r_number} --%>

<%-- <table border='solid'>
    <tbody>
    <tr>
        <th>m_id</th>
        <th>r_number</th>
        <th>r_menu</th>
        <th>r_menu_count</th>
        <th>r_visit_date</th>
    </tr>
<c:forEach items="${list}" var="list">
<tr>
    <td class='qna_table'>${list.m_id}</td>
    <td class='qna_table'>${list.r_number}</td>
    <td class='qna_table'>${list.r_menu}</td>
    <td class='qna_table'>${list.r_menu_count}</td>
    <td class='qna_table'>${list.r_visit_date}</td>
</tr>
</c:forEach>
    </tbody>
</table> --%>



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
			      $('.i_visit_date').val(data.r_visit_date);  
			      $('.i_pplcount').val(data.r_people_count);          
			      $('.i_menu').val(data.r_menu);
			      $('.i_note').val(data.r_note);
			    },
				    error: function (request, status, error){    
				        var msg = "ERROR : " + request.status + "<br>"
				      msg +=  + "내용 : " + request.responseText + "<br>" + error;
				      console.log(msg);              
				    }

				  });
				}
			</script>


<!--        ###################################################### -->
<!-- 		<button class="dialog__trigger">Open Dialog</button> -->
		
		<div class="dialog">
			<span class="dialog__close">&#x2715;</span>
			<h2 class="dialog__title">예약 내역</h2>
			<p class="dialog__content" style="color:black">Lorem ipsum dolor sit amet,
				consectetur adipisicing elit. Impedit necessitatibus illo
				deleniti doloremque culpa volupta.</p>
			<label class="label_name">매장</label><input class="input_name i_store_name"><hr>
			<label class="label_name">날짜</label><input class="input_name i_visit_date"><hr>
			<label class="label_name">인원</label><input class="input_name i_pplcount"><hr>
			<label class="label_name">메뉴</label><input class="input_name i_menu"><hr>
			<label class="label_name">문의</label><input class="input_name i_note"><hr>

			<button class="dialog__action">Read more &#8594;</button>
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
                                <h5>${list.r_visit_date}</h5>
                                <h5>${list.r_number}</h5>
                            </div>
<!--                         </a> -->
                    </div>
                    </div>
				</div>
				
				
				
				
				</c:forEach>

<!--                 Single Portfolio Area -->
<!--                 <div class="col-12 col-sm-6 col-lg-3 single_portfolio_item garden wow fadeInUp" data-wow-delay="200ms"> -->
<!--                     Portfolio Thumbnail -->
<!--                     <div class="portfolio-thumbnail bg-img" style="background-image: url(/Food/resources/img/bg-img/17.jpg);"></div> -->
<!--                     Portfolio Hover Text -->
<!--                     <div class="portfolio-hover-overlay"> -->
<!--                         <a href="/Food/resources/img/bg-img/17.jpg" class="portfolio-img d-flex align-items-center justify-content-center" title="Portfolio 2"> -->
<!--                             <div class="port-hover-text"> -->
<!--                                 <h3>Minimal Flower Store</h3> -->
<!--                                 <h5>Office Plants</h5> -->
<!--                             </div> -->
<!--                         </a> -->
<!--                     </div> -->
<!--                 </div> -->

<!--                 Single Portfolio Area -->
<!--                 <div class="col-12 col-sm-6 col-lg-3 single_portfolio_item garden design wow fadeInUp" data-wow-delay="300ms"> -->
<!--                     Portfolio Thumbnail -->
<!--                     <div class="portfolio-thumbnail bg-img" style="background-image: url(img/bg-img/18.jpg);"></div> -->
<!--                     Portfolio Hover Text -->
<!--                     <div class="portfolio-hover-overlay"> -->
<!--                         <a href="img/bg-img/18.jpg" class="portfolio-img d-flex align-items-center justify-content-center" title="Portfolio 3"> -->
<!--                             <div class="port-hover-text"> -->
<!--                                 <h3>Minimal Flower Store</h3> -->
<!--                                 <h5>Office Plants</h5> -->
<!--                             </div> -->
<!--                         </a> -->
<!--                     </div> -->
<!--                 </div> -->

<!--                 Single Portfolio Area -->
<!--                 <div class="col-12 col-sm-6 col-lg-3 single_portfolio_item garden office-design wow fadeInUp" data-wow-delay="400ms"> -->
<!--                     Portfolio Thumbnail -->
<!--                     <div class="portfolio-thumbnail bg-img" style="background-image: url(img/bg-img/19.jpg);"></div> -->
<!--                     Portfolio Hover Text -->
<!--                     <div class="portfolio-hover-overlay"> -->
<!--                         <a href="img/bg-img/19.jpg" class="portfolio-img d-flex align-items-center justify-content-center" title="Portfolio 4"> -->
<!--                             <div class="port-hover-text"> -->
<!--                                 <h3>Minimal Flower Store</h3> -->
<!--                                 <h5>Office Plants</h5> -->
<!--                             </div> -->
<!--                         </a> -->
<!--                     </div> -->
<!--                 </div> -->

<!--                 Single Portfolio Area -->
<!--                 <div class="col-12 col-sm-6 col-lg-3 single_portfolio_item design office-design wow fadeInUp" data-wow-delay="100ms"> -->
<!--                     Portfolio Thumbnail -->
<!--                     <div class="portfolio-thumbnail bg-img" style="background-image: url(img/bg-img/20.jpg);"></div> -->
<!--                     Portfolio Hover Text -->
<!--                     <div class="portfolio-hover-overlay"> -->
<!--                         <a href="img/bg-img/20.jpg" class="portfolio-img d-flex align-items-center justify-content-center" title="Portfolio 5"> -->
<!--                             <div class="port-hover-text"> -->
<!--                                 <h3>Minimal Flower Store</h3> -->
<!--                                 <h5>Office Plants</h5> -->
<!--                             </div> -->
<!--                         </a> -->
<!--                     </div> -->
<!--                 </div> -->

<!--                 Single Portfolio Area -->
<!--                 <div class="col-12 col-sm-6 col-lg-3 single_portfolio_item garden wow fadeInUp" data-wow-delay="200ms"> -->
<!--                     Portfolio Thumbnail -->
<!--                     <div class="portfolio-thumbnail bg-img" style="background-image: url(img/bg-img/21.jpg);"></div> -->
<!--                     Portfolio Hover Text -->
<!--                     <div class="portfolio-hover-overlay"> -->
<!--                         <a href="img/bg-img/21.jpg" class="portfolio-img d-flex align-items-center justify-content-center" title="Portfolio 6"> -->
<!--                             <div class="port-hover-text"> -->
<!--                                 <h3>Minimal Flower Store</h3> -->
<!--                                 <h5>Office Plants</h5> -->
<!--                             </div> -->
<!--                         </a> -->
<!--                     </div> -->
<!--                 </div> -->

<!--                 Single Portfolio Area -->
<!--                 <div class="col-12 col-lg-6 single_portfolio_item home-design wow fadeInUp" data-wow-delay="300ms"> -->
<!--                     Portfolio Thumbnail -->
<!--                     <div class="portfolio-thumbnail bg-img" style="background-image: url(img/bg-img/22.jpg);"></div> -->
<!--                     Portfolio Hover Text -->
<!--                     <div class="portfolio-hover-overlay"> -->
<!--                         <a href="img/bg-img/22.jpg" class="portfolio-img d-flex align-items-center justify-content-center" title="Portfolio 7"> -->
<!--                             <div class="port-hover-text"> -->
<!--                                 <h3>Minimal Flower Store</h3> -->
<!--                                 <h5>Office Plants</h5> -->
<!--                             </div> -->
<!--                         </a> -->
<!--                     </div> -->
<!--                 </div> -->

            </div>
        </div>
    </section>
    <!-- ##### Portfolio Area End ##### -->

    

    <!-- ##### Footer Area Start ##### -->
    <%@ include file="footer.jsp" %>
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