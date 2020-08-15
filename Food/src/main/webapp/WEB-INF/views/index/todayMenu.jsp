<%@page import="com.food.domain.WishlistVO"%>
<%@page import="java.util.HashMap"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page import="com.food.domain.ProductVO"%>
<%@page import="java.util.List"%>
<!DOCTYPE html>
<html lang="en">
<% List<ProductVO> list =(List<ProductVO>) request.getAttribute("list"); 
List<WishlistVO> wish1 =(List<WishlistVO>) request.getAttribute("wish1"); 
String id = (String)session.getAttribute("user_id");
HashMap map = new HashMap();
map.put("한식", "kor");
map.put("중식", "ch");
map.put("일식", "jap");
map.put("양식", "ame");
map.put("분식", "school");
map.put("동남아", "east");

%>
<script src="https://code.jquery.com/jquery-3.4.1.js"></script>
<script type="text/javascript">
$(function(){
	$('.imgstore').click(function(){
		event.stopPropagation();
		})
	
	$('.wishlist-btn').click(function(event){
		event.stopPropagation();
		var id = $('#id').val();
	if(id!="null"){
		var i = $(this).find('i').attr('class');
		var ii = $(this).find('i');

				var brand = $(this).find('.brand').val();
				$.ajax({
					url: "todaywish.do",
					type: "post",
					data: "w_store_name="+brand+"&m_id="+id,
					success:function(d){
						if(i=="icon_heart"){
							ii.attr('class','icon_heart_alt');
							}
						else if(i=="icon_heart_alt"){
							ii.attr('class','icon_heart');
						}
						},
					error:function(er){
						alert("error");
						}
				});
				}
			else{
				alert("로그인 하시오");
				}

		});
	

	
})
</script>
<head>
<meta charset="UTF-8">
<meta name="description" content="">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">
<!-- The above 4 meta tags *must* come first in the head; any other head content must come *after* these tags -->

<!-- Title -->
<title>TodayMenu</title>

<!-- Favicon -->
<link rel="icon" href="/Food/resources/img/core-img/fri.jpg">

<style type="text/css">
#bestfo {
	font-family: js4;
    font-size: xx-large;
    color: black;
    padding-top: 23px;
    border-bottom-style: double;
}
</style>
<!-- Core Stylesheet -->
<link rel="stylesheet" href="resources/css/style.css">

<jsp:include page="header.jsp">
	<jsp:param value='../' name='folder' />
</jsp:include>

</head>

<body>
	<!-- Preloader -->
	<input type="hidden" id="id" value="<%=id%>">
	<div class="preloader d-flex align-items-center justify-content-center">
		<div class="preloader-circle"></div>
		<div class="preloader-img">
			<img src="/Food/resources/img/core-img/fri.jpg" alt="">
		</div>
	</div>

	<!-- ##### Header Area Start ##### -->

	<!-- ##### Header Area End ##### -->

	<!-- ##### Breadcrumb Area Start ##### -->
	<div class="breadcrumb-area">

		<div class="container">
			<div class="row">
				<div class="col-12">
					<nav aria-label="breadcrumb">
						<ol class="breadcrumb">
							<li class="breadcrumb-item"><a href="#"><i
									class="fa fa-home"></i> Home</a></li>
							<li class="breadcrumb-item active" aria-current="page">오늘
								뭐먹지?</li>
						</ol>
					</nav>
				</div>
			</div>
		</div>
	</div>
	<!-- ##### Breadcrumb Area End ##### -->

	<!-- ##### Cart Area Start ##### -->
	<div class="cart-area section-padding-0-100 clearfix">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<!-- Section Heading -->
					<div class="section-heading text-center">
						<h2 style="font-family: js;">오늘의 추천 메뉴</h2>
						<p id="bestfo">오늘의 날씨와 지역별 직장인들의 월별 요일별 가장많이 먹은 카테고리 중 주문 수가
							가장 많은 top 4입니다</p>
					</div>
				</div>
			</div>

			<div class="row">
				<% if(list!=null){ 
            	String hea="<i class='icon_heart_alt'></i>";
            	ProductVO vo = new ProductVO();
            	int hot=0;
            	for(int i =0;i<list.size();i++){
            		vo = list.get(i);
            		hot++;
            		WishlistVO wvo = new WishlistVO();
            	%>
				<!-- Single Product Area -->
				<div class="col-12 col-sm-6 col-lg-3">
					<div class="single-product-area mb-50 wow fadeInUp"
						data-wow-delay="100ms">
						<!-- Product Image -->
						<div class="product-img">
							<a class="imgstore" href="store/storeDetails.do?s_brand_name=<%=vo.getS_brand_name()%>"><img class='productimg'
								style="background-size: contain; width: 270px; height: 270px; border-radius: 70px;"
								src="/Food/resources/storemenu/<%=map.get(vo.getType()) %>/<%=vo.getS_brand_name() %>_<%=vo.getP_name_1() %>.jpg"
								alt=""></a>
							<!-- Product Tag -->
							<div class="product-tag">
								<a href="#"><%=hot%>위</a>
							</div>
							<!--                             <div class="product-tag sale-tag"> -->
							<div class="product-meta d-flex">
								<a class="wishlist-btn"> <%
							 	if (id != null) {
								 	if (wish1 != null) {
								 		for (int j = 0; j < wish1.size(); j++) {
								 		wvo = wish1.get(j);
										 	if (wvo.getW_store_name().equals(vo.getS_brand_name())) {
										 		hea = "<i class='icon_heart'></i>";
										 		break;
										 	} else {
										 		hea = "<i class='icon_heart_alt'></i>";
										 	}
								 		}
								 	}else {
								 		hea = "<i class='icon_heart_alt'></i>";
								 	}
							 				} else {
													 	hea = "<i class='icon_heart_alt'></i>";
													 }%><%=hea%><input type="hidden" class="brand"
									value=<%=vo.getS_brand_name()%>>
								</a>
							</div>
						</div>
						<!-- Product Info -->
						<div class="product-info mt-15 text-center">
							<a href="store/storeDetails.do?s_brand_name=<%=vo.getS_brand_name()%>">
								<p><%=vo.getP_name_1()%></p>
								<p><%=vo.getS_brand_name()%></p>
							</a>
							<h6><%=vo.getP_price_1()%></h6>
						</div>
					</div>
				</div>
				<%
                	}
                }
                %>


				<div class="col-12 text-center">
					<a href="/Food/index/choiceMenu.do" class="btn alazea-btn">Other's Menu</a>
				</div>

			</div>
		</div>
	</div>
	<!-- ##### Cart Area End ##### -->

	<!-- ##### Footer Area Start ##### -->
	<%@ include file="footer.jsp"%>
	<!-- ##### Footer Area End ##### -->

	<!-- ##### All Javascript Files ##### -->
	<!-- jQuery-2.2.4 js -->
	<script src="resources/js/jquery/jquery-2.2.4.min.js"></script>
	<!-- Popper js -->
	<script src="resources/js/bootstrap/popper.min.js"></script>
	<!-- Bootstrap js -->
	<script src="resources/js/bootstrap/bootstrap.min.js"></script>
	<!-- All Plugins js -->
	<script src="resources/js/plugins/plugins.js"></script>
	<!-- Active js -->
	<script src="resources/js/active.js"></script>


</body>

</html>