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
							<option value=7>7</option>
							<option value="8+">8+</option>
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
						<select name="r_menu" id="r_menu" class="form-control">
							<option value="메뉴">메뉴</option>
							<option value="메뉴메뉴">메뉴메뉴</option>
							<option value="메뉴메뉴메뉴">메뉴메뉴메뉴</option>
							<option value="메뉴메뉴메뉴메뉴">메뉴메뉴메뉴메뉴</option>
						</select>
					</div>
				</div>
				<div class="col-md-6 form-group">
					<label for="adults" class="font-weight-bold text-black">Menu Count</label>
					<div class="field-icon-wrap">
						<div class="icon">
							<span class="ion-ios-arrow-down"></span>
						</div>
						<select name="r_menu_count" id="r_menu_count" class="form-control">
							<option value=1>1</option>
							<option value=2>2</option>
							<option value=3>3</option>
							<option value=4>4</option>
							<option value=5>5</option>
							<option value=6>6</option>
							<option value=7>7</option>
							<option value="8+">8+</option>
						</select>
					</div>
				</div>
				
			</div>

			<div class="row mb-4">
				<div class="col-md-12 form-group">
					<label class="text-black font-weight-bold" for="message">Notes</label>
					<textarea id="message" name="r_note" class="form-control"
						cols="30" rows="8"></textarea>
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
	
	
	

</body>

</html>