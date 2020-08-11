<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  
 
<!-- Title -->
<title>Alazea - Gardening &amp; Landscaping HTML Template</title>


<!-- Favicon -->
<link rel="icon" href="/Food/resources/img/core-img/favicon.ico">
<link rel="stylesheet" type="text/css" href="http://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css" />
<link rel="stylesheet" href="/Food/resources/css/myfooter.css">
<!-- Core Stylesheet -->
<script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>

<!-- 부트스트랩 -->
<link
	href="https://gitcdn.github.io/bootstrap-toggle/2.2.2/css/bootstrap-toggle.min.css"
	rel="stylesheet">
<script
	src="https://gitcdn.github.io/bootstrap-toggle/2.2.2/js/bootstrap-toggle.min.js"></script>

<style>
.menu a {
	cursor: pointer;
}

.menu .hide {
	display: none;
}



</style>



</head>

<body>
	
	<!-- ##### Footer Area Start ##### -->
 <footer>

  	<div class="container-fluid">
  		<div class="row">
  			<div class="col-md-3">
  				<h2 class="footerh2">오늘 뭐 먹지?</h2>
          <ul class="footer">
            <li><a href="/Food/index/store.do?category='한식'">한식</a></li>
            <li><a href="/Food/index/store.do?category='중식'">중식</a></li>
            <li><a href="/Food/index/store.do?category='일식'">일식</a></li>
            <li><a href="/Food/index/store.do?category='양식'">양식</a></li>
            <li><a href="/Food/index/store.do?category='동남아'">동남아</a></li>
          </ul>
  			</div>
  			<div class="col-md-3">
  				<h2 class="footerh2">service</h2>
  				<ul class="footer" >
            <li><a href="#">Event</a></li>
            <li><a href="#">Business</a></li>
            <li><a href="#">Agency</a></li>
            <li><a href="#">Start-up</a></li>
          </ul>
  			</div>
  			<div class="col-md-3">
  				<h2 class="footerh2">account</h2>
  				<ul class="footer">
            <li><a href="#">profile</a></li>
            <li><a href="#">user details</a></li>
            <li><a href="#">projects</a></li>
            <li><a href="#">account</a></li>
          </ul>
  			</div>
  			<div class="col-md-3">
  				<h2 class="footerh2">download our app</h2> 
  				<div class="android">
          <p class="download-icon"><i class="fa fa-apple"></i>
          <i class="fa fa-android"></i></p>
          <p class="social">
        
          <a href="#"><i class="fa fa-facebook-square"></i></a>
          <a href="#"><i class="fa fa-twitter-square"></i></a>
          <a href="#"><i class="fa fa-google-plus-square"></i></a>
          <a href="#"><i class="fa fa-linkedin-square"></i></a></p>
  		
  			</div>
  			</div> 
        <hr>
  			
  		</div>
  		<div class='well'>
  			<input type="text" id="msg" value="1212" class="form-control"/>
  			<button id="btnSend"class="btn btn-primary">Send Message</button>
  		</div>
  	</div>	
  	
  </footer>
	<!-- ##### Footer Area End ##### -->

	<!-- ##### All Javascript Files ##### -->
	<!-- jQuery-2.2.4 js -->
<!-- 	<script	src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>  -->
	

	<script src="/Food/resources/js/bootstrap/popper.min.js"></script>

	<script src="/Food/resources/js/bootstrap/bootstrap.min.js"></script>

	<script src="/Food/resources/js/plugins/plugins.js"></script>

	<script src="/Food/resources/js/active.js"></script>
<!-- 	지섭  -->

	<script src="/Food/resources/js/sub.js"></script>
	

	<script type="text/javascript">

	$(function(){
	var user_id = "${sessionScope.user_id}";

	
	$('#btnSend').click(function(evt){
		alert("bbb");
		evt.preventDefault();
		if(socket.readyState !==1) return;

		let msg = $('input#msg').val();
		socket.send(msg); 

		});
		if(user_id!=""){
			alert(user_id);
		connectWs();
		}
		});
	</script>
	
	<script type="text/javascript">		
	var socket = null;
	function connectWs(){
		
		var ws = new WebSocket("ws://localhost:8080/Food/footer");
		socket = ws;
		ws.onopen = function(){
			
			console.log("Info: connection opened");
			setTimeout(function(){connect();},1000);
			
			}
		ws.onmessage = function(event){
			var data = event.data;
			console.log("ReceivMessage : " + data + "\n");
			$.ajax({
				url : '/Food/manager/countAlarm.do',
				type : 'POST',
				dataType: 'text',
				success : function(data) {
					if(data == '0'){
					}else{
						toastr.options.escapeHtml = true;
						toastr.options.closeButton = true;
						toastr.options.newestOnTop = false;
						toastr.options.progressBar = true;
						toastr.info('예제', '명월일지', {timeOut: 5000});
					}
				},
				error : function(err){
					alert('err');
				}
		   	});
			}
	
		ws.onclose = function(event){
			console.log('Info:connection closed.');
			//setTimeout(function(){connect();},1000);
			};
		ws.onerror = function(err){console.log('Error:',err);};
	};
	$("#example").on("click", function(){
	
		});
			
	</script>







</body>

</html>