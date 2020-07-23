<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
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
<script type="text/javascript">
$(function(){

	$('#add').click(function(){
			
		var queryString = $('form[name=frm]').serialize();
		alert(queryString);
		$.ajax({
			url:"blackAdd.do", 
			type:"get",
			dataType:"text",
			data:queryString, 
			success:function(result){
				opener.location.reload();
				window.close();
			},error:function(error){
			}					
		});
		
			
		});
});

</script>

</head>
<body>

	<form style="margin-top: 10%;" name="frm" id="frm1">

		<div style="text-align: center;">
			<div class="add-group">
				<div class="addrow">
					<label class="add-black-label pull-right-pro">Id</label><br/>
					<label class="add-black-label pull-right-pro">REASON</label> 
				</div>
			</div>
			<div class="add-group">
				<div class="addrow">
					
					<input type="text" class="add-input" name="b_id"/> <br/>
					<input type="text" class="add-input" name="reason"/>

				</div>
			</div>
<!-- 			<div class="form-group-inner"> -->
<!-- 				<div class="addrow"> -->
					
<!-- 				</div> -->
<!-- 			</div> -->
		</div>
		<div class="add-select-list">
			<select class="add-select custom-select-value" name="select">
				<option>3 Day</option>
				<option>7 Day</option>
				<option>30 Day</option>
				<option>1000 Year</option>
			</select>
		</div>
		<br />
		<br />
		<div class="blackwindow">

			<a href="#" id="add">Add</a> &nbsp;&nbsp; <a href="" onclick="window.close()">Cancel</a>

		</div>

	</form>
</body>
</html>