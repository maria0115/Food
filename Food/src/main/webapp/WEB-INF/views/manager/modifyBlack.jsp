<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jstl/core_rt" prefix="c"%>
<!DOCTYPE html>
<html style="background: white;">
<head>
<meta charset="UTF-8">
<title>addBlack</title>
<meta name="description" content="">
<meta name="viewport" content="width=device-width, initial-scale=1">

<!-- favicon
		============================================ -->
<link rel="shortcut icon" type="image/x-icon"
	href="/Food/resources/img/favicon.ico">
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
<link rel="stylesheet"
	href="/Food/resources/css/metisMenu/metisMenu.min.css">
<link rel="stylesheet"
	href="/Food/resources/css/metisMenu/metisMenu-vertical.css">
<!-- calendar CSS
		============================================ -->
<link rel="stylesheet"
	href="/Food/resources/css/calendar/fullcalendar.min.css">
<link rel="stylesheet"
	href="/Food/resources/css/calendar/fullcalendar.print.min.css">
<!-- style CSS
		============================================ -->
<link rel="stylesheet" href="/Food/resources/css/style2.css">
<!-- responsive CSS
		============================================ -->
<link rel="stylesheet" href="/Food/resources/css/responsive.css">
<!-- modernizr JS
		============================================ -->
<!-- Bootstrap cdn -->
<link rel="stylesheet"
	href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
<link rel="stylesheet"
	href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap-theme.min.css">
<link rel="stylesheet"
	href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">


<script
	src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
<script src="https://code.jquery.com/jquery-3.4.1.js"></script>
<script src="/Food/resources/js/vendor/modernizr-2.8.3.min.js"></script>
<script type="text/javascript" src="/Food/resources/js/blackList.js"></script>


</head>
<body>

	<form action="blackModify.do" style="margin-top: 10%;" name="frm">

		<div style="text-align: center;">
			<div class="add-group">
				<div class="addrow">
					<label class="add-black-label pull-right-pro">Id</label><br/>
					<label class="add-black-label pull-right-pro">Name </label><br/>
					<label class="add-black-label pull-right-pro">Start</label> <br/>
					<label class="add-black-label pull-right-pro">End</label> <br/>
					<label class="add-black-label pull-right-pro">Reason</label> <br/>
					<label class="add-black-label pull-right-pro">State</label> 
				</div>
			</div>
			<div class="add-group">
				<div class="addrow">
					<c:forEach items="${blackInfo }" var="black">
					<input type="text" class="add-input" name="b_id" value="${black.b_ids }"/> <br/>
					<input type="text" class="add-input" name="b_name" value="${black.b_name }"/> <br/>
					<input type="text" class="add-input" name="s_start" value="${black.s_start }"/><br/>
					<input type="text" class="add-input" name="s_end" value="${black.s_end }"/><br/>
					<input type="text" class="add-input" name="reason" value="${black.reason }"/><br/>
					<div class="modify-select-list">
						<select class="modify-select custom-select-value" name="s_state">
							<option <c:if test="${black.s_state eq '1'}" selected</c:if>>ing</option>
							<option <c:if test="${black.s_state eq '0'}" selected</c:if>>ended</option>
					
						</select>
					</div>
					</c:forEach>
				</div>
			</div>
<!-- 			<div class="form-group-inner"> -->
<!-- 				<div class="addrow"> -->
					
<!-- 				</div> -->
<!-- 			</div> -->
		</div>
		
		<br />
		<br />
		<div class="blackwindow">

			<a href="javascript:frm.submit();">Modify</a> &nbsp;&nbsp; <a href="" onclick="window.close()">Cancel</a>

		</div>

	</form>
</body>
</html>