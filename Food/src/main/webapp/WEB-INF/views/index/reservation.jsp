<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta name="description" content="">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">
<!-- The above 4 meta tags *must* come first in the head; any other head content must come *after* these tags -->

<!-- Title -->
<title>Alazea - Gardening &amp; Landscaping HTML Template</title>

<!-- Favicon -->
<link rel="icon" href="resources/img/core-img/favicon.ico">

<!-- Core Stylesheet -->
<link rel="stylesheet" href="resources/css/reservation_css/aos.css">
<link rel="stylesheet" href="resources/css/reservation_css/animate.css">
<link rel="stylesheet" href="resources/css/reservation_css/bootstrap-datepicker.css">
<link rel="stylesheet" href="resources/css/reservation_css/bootstrap.min.css">
<link rel="stylesheet" href="resources/css/reservation_css/fancybox.min.css">
<link rel="stylesheet" href="resources/css/reservation_css/jquery.timepicker.css">
<link rel="stylesheet" href="resources/css/reservation_css/owl.carousel.min.css">
<link rel="stylesheet" href="resources/css/reservation_css/style.css">




</head>

<body>



	<!-- ### 예약 팝업 창 start ### -->
	<div class="col-md-7 aos-init aos-animate" data-aos="fade-up"
		data-aos-delay="100" style='margin: auto'>

		<form action="reservInsert.do" method="post" class="bg-white p-md-5 p-4 mb-5 border">
			<div class="row">
				<div class="col-md-12 form-group">
					<label class="text-black font-weight-bold" for="store">매장</label>
					<input id="store" class="form-control" value=<%= request.getParameter("r_store_name") %> name="r_store_name" readonly>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12 form-group">
					<label class="text-black font-weight-bold" for="id">ID</label>
					<input id="id" class="form-control" name="m_id">
				</div>
			</div>
			<div class="row">
				<div class="col-md-6 form-group">
					<label class="text-black font-weight-bold" for="checkin_date">Visit Date</label>
					<input type="text" id="checkin_date" class="form-control" name="r_visit_date">
				</div>
				<div class="col-md-6 form-group">
					<label for="adults" class="font-weight-bold text-black">People Count</label>
					<div class="field-icon-wrap">
						<div class="icon">
							<span class="ion-ios-arrow-down"></span>
						</div>
						<select name="r_people_count" id="adults" class="form-control">
							<option value=1>1</option>
							<option value=2>2</option>
							<option value=3>3</option>
							<option value=4>4</option>
							<option value=5>5</option>
							<option value=6>6</option>
						</select>
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-md-6 form-group">
					<label for="adults" class="font-weight-bold text-black">Menu</label>
					<div class="field-icon-wrap">
						<div class="icon">
							<span class="ion-ios-arrow-down"></span>
						</div>
						<select name="" id="r_menu" class="form-control">
							<option value=<%= request.getParameter("menu1") %>><%= request.getParameter("menu1") %></option>
							<option value=<%= request.getParameter("menu2") %>><%= request.getParameter("menu2") %></option>
							<option value=<%= request.getParameter("menu3") %>><%= request.getParameter("menu3") %></option>
						</select>
					</div>
				</div>
				<div class="col-md-6 form-group">
					<label for="adults" class="font-weight-bold text-black">Menu Count</label>
					<div class="field-icon-wrap">
						<div class="icon">
							<span class="ion-ios-arrow-down"></span>
						</div>
						<select name="" id="r_menu_count" class="form-control">
							<option id="default" disabled="disabled" selected>수량</option>
							<option value=1>1</option>
							<option value=2>2</option>
							<option value=3>3</option>
							<option value=4>4</option>
							<option value=5>5</option>
							<option value=6>6</option>
						</select>
					</div>
				</div>
			</div>
			숫자가 초과될 경우 노트에 남겨주세요
			<div class="row mb-4">
				<div class="col-md-12 form-group">
					<label class="text-black font-weight-bold" for="message">Notes</label>
					<textarea id="r_note" name="r_note" class="form-control"
						cols="30" rows="3"></textarea>
					<!-- 메뉴 선택하면 추가되는 부분 -->
					<label style="font-weight:bold;color:black">선택한 메뉴</label>
					<div id="div1">
					<!-- input이 추가될 부분 -->
					</div>
					<input type='button' class='button1' value='삭제'>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6 form-group">
					<input type="submit" value="Reserve Now"
						class="btn btn-primary text-white py-3 px-5 font-weight-bold"
						onclick="alert('예약되었습니다')">
				</div>
			</div>
		</form>
	</div>
	<!-- ### 예약 팝업 창 end ### -->





	<!-- ##### All Javascript Files ##### -->
	<!-- jQuery-2.2.4 js -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<!-- Popper js -->
	<script src="resources/js/bootstrap/popper.min.js"></script>
	<!-- Bootstrap js -->
	<script src="resources/js/bootstrap/bootstrap.min.js"></script>
	<!-- All Plugins js -->
	<script src="resources/js/plugins/plugins.js"></script>
	
	
	<script src="resources/js/reservation_js/aos.js"></script>
	<script src="resources/js/reservation_js/bootstrap-datepickersogo.js"></script>
	<script src="resources/js/reservation_js/bootstrap.min.js"></script>
	<script src="resources/js/jquery-migrate-3.0.1.min.js"></script>
	<script src="resources/js/reservation_js/jquery.fancybox.min.js"></script>
	<script src="resources/js/reservation_js/jquery.stellar.min.js"></script>
	<script src="resources/js/reservation_js/jquery.timepicker.min.js"></script>
	<script src="resources/js/reservation_js/main.js"></script>
	<script src="resources/js/reservation_js/owl.carousel.min.js"></script>
	<script src="resources/js/reservation_js/popper.min.js"></script>
	
	
<script>
$(function(){
	$("#r_menu_count").change(function(){
		var addlabel = "<label>메뉴 :</label><input class='input1' style='border:none;width:170px' name='r_menu' readonly><label>수량 :</label><input class='input2' style='border:none;width:40px' name='r_menu_count' readonly><hr>"
		$("#div1").append(addlabel)

		var sel_menu = $("#r_menu option:selected").val()
		var sel_menucount = $("#r_menu_count option:selected").val()
		$(".input1:last").val(sel_menu)
		$(".input2:last").val(sel_menucount)
		$("#r_menu_count option:eq(0)").prop("selected", true);


	$(".button1").click(function(){
		$("#div1").children().remove()
		
		})
	})
})
</script>

</body>

</html>