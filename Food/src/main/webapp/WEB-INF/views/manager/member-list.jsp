<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
	
<%@ taglib uri="http://java.sun.com/jstl/core_rt" prefix="c"%>
<!DOCTYPE html>
<html class="no-js" lang="en">

<head>
<meta charset="utf-8">
<meta http-equiv="x-ua-compatible" content="ie=edge">
<title>Member List</title>
<meta name="description" content="">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- favicon
		============================================ -->
<link rel="shortcut icon" type="image/x-icon" href="/Food/resources/img/favicon.ico">
<!-- Google Fonts
		============================================ -->
<link href="https://fonts.googleapis.com/css?family=Play:400,700"
	rel="stylesheet">
<!-- Bootstrap CSS
		============================================ -->
<link rel="stylesheet" href="/Food/resources/css/bootstrap2.min.css">
<!-- Bootstrap CSS
		============================================ -->
<link rel="stylesheet" href="/Food/resources/css/font-awesome1.min.css">
<!-- owl.carousel CSS
		============================================ -->
<link rel="stylesheet" href="/Food/resources/css/owl.carousel.css">
<link rel="stylesheet" href="/Food/resources/css/owl.theme.css">
<link rel="stylesheet" href="/Food/resources/css/owl.transitions.css">
<!-- animate CSS
		============================================ -->
<link rel="stylesheet" href="/Food/resources/css/animate1.css">
<!-- normalize CSS
		============================================ -->
<link rel="stylesheet" href="/Food/resources/css/normalize.css">
<!-- meanmenu icon CSS
		============================================ -->
<link rel="stylesheet" href="/Food/resources/css/meanmenu.min.css">
<!-- main CSS
		============================================ -->
<link rel="stylesheet" href="/Food/resources/css/main.css">
<!-- morrisjs CSS
		============================================ -->
<link rel="stylesheet" href="/Food/resources/css/morrisjs/morris.css">
<!-- mCustomScrollbar CSS
		============================================ -->
<link rel="stylesheet"
	href="/Food/resources/css/scrollbar/jquery.mCustomScrollbar.min.css">
<!-- metisMenu CSS
		============================================ -->
<link rel="stylesheet" href="/Food/resources/css/metisMenu/metisMenu.min.css">
<link rel="stylesheet" href="/Food/resources/css/metisMenu/metisMenu-vertical.css">
<!-- calendar CSS
		============================================ -->
<link rel="stylesheet" href="/Food/resources/css/calendar/fullcalendar.min.css">
<link rel="stylesheet" href="/Food/resources/css/calendar/fullcalendar.print.min.css">
<!-- style CSS
		============================================ -->
<link rel="stylesheet" href="/Food/resources/css/style2.css">
<!-- responsive CSS
		============================================ -->
<link rel="stylesheet" href="/Food/resources/css/responsive.css">
<!-- modernizr JS
		============================================ -->
<!-- Bootstrap cdn -->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap-theme.min.css">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">


<script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
<script src="https://code.jquery.com/jquery-3.4.1.js"></script>
<script src="/Food/resources/js/vendor/modernizr-2.8.3.min.js"></script>
<script type="text/javascript" src="/Food/resources/js/memberList.js"></script>

</head>

<body>
	<!--[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->



	<jsp:include page="sideBar.jsp">
		<jsp:param value='' name='folder' />
	</jsp:include>
	<!-- Start Welcome area -->
	<div class="all-content-wrapper">
		<jsp:include page="wrapper.jsp">
			<jsp:param value='' name='' />
		</jsp:include>
		<div class="product-status mg-tb-15">
			<div class="container-fluid">
				<div class="row">
					<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<div class="product-status-wrap">
						
								
								
									<div class="del-member">
							<button data-toggle="tooltip" title="Trash" class="chk_del">
											<i class="fa fa-trash-o" aria-hidden="true"></i>
							
							</button>
							</div>
							<h4>Member List</h4>
							<table>
								<tr>
									<th>Id</th>
									<th>Name</th>
									<th>Tel</th>
									<th>Birth</th>
									<th>Place</th>
									<th>Most</th>
									<th>Date</th>
									<th>Email</th>
									<th><div class="check_all"><input type='checkbox' id="check_all"></div></th>

								</tr>
								<c:forEach items="${memList }" var="member">
									<tr>
										<td>${member.m_id }</td>
										<td>${member.m_name }</td>
										<td>${member.m_tel}</td>
										<td>${member.m_birth }</td>
										<td>${member.m_area }</td>
										<td>${member.m_most}</td>
										<td>${member.m_date }</td>
										<td>${member.m_email }</td>
										<td>
											<button data-toggle="tooltip" title="Edit"
												class="pd-setting-ed">
												<i class="fa fa-pencil-square-o" aria-hidden="true"></i>
											</button> 
											<button data-toggle="tooltip" title="Trash" class="pd-setting-ed" onclick="location.href='Delete.do?m_id=${member.m_id}'">
											<i class="fa fa-trash-o" aria-hidden="true"></i>
											</button>
											<input type='checkbox' class='input_check' name="${member.m_id}">
										</td>
									</tr>
								</c:forEach>
							</table>

							<div class="custom-pagination">
								<nav aria-label="Page navigation example">
								
								<div class="breadcome-heading">
			
										<form role="search" class="frm">

											<div class="form-select-list">
												<select class="form-control custom-select-value" id="searchType"
													name="searchType">
													<option <c:if test="${searchType eq 'm_id'}">selected</c:if>>Id</option>
													<option <c:if test="${searchType eq 'm_tel'}">selected</c:if>>Tel</option>
													<option <c:if test="${searchType eq 'm_email'}">selected</c:if>>Email</option>
													<option <c:if test="${searchType eq 'm_area'}">selected</c:if>>Place</option>
												</select> <input type="text" placeholder="Search..."
													class="form-control" name='keyword' id='keywordInput' <c:if test="${keyword ne null}">value="${keyword}"</c:if>> <a href="javascript:formname.submit();"
													class="searchvalue"><i class="fa fa-search"></i></a>
											</div>

											
											<input type="hidden" id="nowPage"
													name="nowPage" value="${paging.nowPage}"> <input
													type="hidden" id="cntPerPage" name="cntPerPage"
													value="${paging.cntPerPage }"> <input type="hidden"
													id="searchClick" name="searchClick" value="Y">
										</form>

										</div>
								
								
								
								<div class='pagediv'>
									<ul class="pagination">
										<li class="page-item"><a class="page-link"
												href="../manager/member-list.do?nowPage=${paging.startPage }&cntPerPage=${paging.cntPerPage}&searchType=${searchType}&keyword=${keyword}&searchClick=N"
											style="font-size: 20px;">Start</a></li>
										<c:if test="${paging.nowPage != 1 }">
											<li class="page-item"><a class="page-link"
												href="../manager/member-list.do?nowPage=${paging.nowPage - 1 }&cntPerPage=${paging.cntPerPage}&searchType=${searchType}&keyword=${keyword}&searchClick=N"
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
														href="../manager/member-list.do?nowPage=${p }&cntPerPage=${paging.cntPerPage}&searchType=${searchType}&keyword=${keyword}&searchClick=N"
														style="font-size: 20px;">${p }</a></li>
												</c:when>
											</c:choose>
										</c:forEach>
										<c:if test="${paging.nowPage != paging.lastPage}">
											<li class="page-item"><a class="page-link"
												href="../manager/member-list.do?nowPage=${paging.nowPage+1 }&cntPerPage=${paging.cntPerPage}&searchType=${searchType}&keyword=${keyword}&searchClick=N"
												style="font-size: 20px;">Next</a></li>
										</c:if>
										<li class="page-item"><a class="page-link"
											href="../manager/member-list.do?nowPage=${paging.lastPage }&cntPerPage=${paging.cntPerPage}&searchType=${searchType}&keyword=${keyword}&searchClick=N"
											style="font-size: 20px;">End</a></li>

									</ul>
									</div>
								</nav>
								</div>
								
									<!-- id는 고유한 이름으로 설정하고 tab의 href와 연결되어야 한다. -->
						
									<!-- fade 클래스는 선택적인 사항으로 트랜지션(transition)효과가 있다.
									<!-- in 클래스는 fade 클래스를 선언하여 트랜지션효과를 사용할 때 in은 active와 선택되어 있는 탭 영역의 설정이다. -->







							
								

								
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="footer-copyright-area">
			<div class="container-fluid">
				<div class="row">
					<div class="col-lg-12">
						<div class="footer-copy-right">
							<p>
								Copyright &copy; 2020 <a
									href="https://colorlib.com/wp/templates/">Colorlib</a> All
								rights reserved.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- jquery
		============================================ -->
	<script src="/Food/resources/js/vendor/jquery-1.11.3.min.js"></script>
	<!-- bootstrap JS
		============================================ -->
	<script src="/Food/resources/js/bootstrap.min.js"></script>
	<!-- wow JS
		============================================ -->
	<script src="/Food/resources/js/wow.min.js"></script>
	<!-- price-slider JS
		============================================ -->
	<script src="/Food/resources/js/jquery-price-slider.js"></script>
	<!-- meanmenu JS
		============================================ -->
	<script src="/Food/resources/js/jquery.meanmenu.js"></script>
	<!-- owl.carousel JS
		============================================ -->
	<script src="/Food/resources/js/owl.carousel.min.js"></script>
	<!-- sticky JS
		============================================ -->
	<script src="/Food/resources/js/jquery.sticky.js"></script>
	<!-- scrollUp JS
		============================================ -->
	<script src="/Food/resources/js/jquery.scrollUp.min.js"></script>
	<!-- mCustomScrollbar JS
		============================================ -->
	<script src="/Food/resources/js/scrollbar/jquery.mCustomScrollbar.concat.min.js"></script>
	<script src="/Food/resources/js/scrollbar/mCustomScrollbar-active.js"></script>
	<!-- metisMenu JS
		============================================ -->
	<script src="/Food/resources/js/metisMenu/metisMenu.min.js"></script>
	<script src="/Food/resources/js/metisMenu/metisMenu-active.js"></script>
	<!-- morrisjs JS
		============================================ -->
	<script src="/Food/resources/js/sparkline/jquery.sparkline.min.js"></script>
	<script src="/Food/resources/js/sparkline/jquery.charts-sparkline.js"></script>
	<!-- calendar JS
		============================================ -->
	<script src="/Food/resources/js/calendar/moment.min.js"></script>
	<script src="/Food/resources/js/calendar/fullcalendar.min.js"></script>
	<script src="/Food/resources/js/calendar/fullcalendar-active.js"></script>
	<!-- plugins JS
		============================================ -->
	<script src="/Food/resources/js/plugins.js"></script>
	<!-- main JS
		============================================ -->
	<script src="/Food/resources/js/main.js"></script>
</body>

</html>