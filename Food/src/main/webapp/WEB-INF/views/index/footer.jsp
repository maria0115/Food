<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  
 
<!-- Title -->
<title>Alazea - Gardening &amp; Landscaping HTML Template</title>

<!-- 달력을 위한 CSS -->
<link href='/Food/resources/css/fullcalendar.css' rel='stylesheet' />
<link href='/Food/resources/css/fullcalendar.print.css' rel='stylesheet' media='print' />
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
  	</div>	
  	
  </footer>
	<!-- ##### Footer Area End ##### -->

	<!-- ##### All Javascript Files ##### -->
	<!-- jQuery-2.2.4 js -->

	<!-- 달력을 위한 JS -->
	<!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<script src='/Food/resources/js/jquery.min.js'></script> -->
	<script src='/Food/resources/js/moment.min.js'></script>
	<script src='/Food/resources/js/fullcalendar.min.js'></script>
	<script src="/Food/resources/js/ko.js"></script>
	<script src="/Food/resources/js/calendar.js"></script>
	<script src="/Food/resources/js/bootstrap/popper.min.js"></script>

	<script src="/Food/resources/js/bootstrap/bootstrap.min.js"></script>
	
	
	
	<script src="/Food/resources/js/plugins/plugins.js"></script>

	<script src="/Food/resources/js/active.js"></script>
<!-- 	지섭  -->
	
	
	

	<script type="text/javascript">
   var count=null;

   

   
   function countAlarm(user_id){
      $.ajax({
         url : '/Food/manager/countAlarm.do?receiveId='+user_id,
         type : 'POST',
         contentType: "application/json; charset=utf-8",
         dataType: 'text',
         success : function(resultData) {
            count=resultData;
            console.log(resultData);
            if(resultData == '0'){
               $('#countAlarm').attr("display","none");
               $('#notibell').css("color", "black");
               $('#notibell').removeClass("fa-bell");
               $('#notibell').addClass("fa-bell-o");
               

            }else{
               
               $('#countAlarm').text(resultData);
               $('#notibell').css("color", "gold");
               $('#notibell').removeClass("fa-bell-o");
               $('#notibell').addClass("fa-bell");
               
            }
         },
         error : function(err){
            alert('err');
         }
         });

      }
   
   $(function(){
   var user_id = "${sessionScope.user_id}";
   


      if(user_id!=""){

      connectWs();
      countAlarm(user_id);
      }
      });
   </script>
   
   <script type="text/javascript">      
   var socket = null;
   
   function connectWs(){
     
      var ws = new WebSocket("https://115.91.88.227:60000/Food/footer");
      socket = ws;
      ws.onopen = function(){
         
         console.log("Info: connection opened");
         //setTimeout(function(){connectWs();},1000);
         
         }
      ws.onmessage = function(event){
    	  if($('.drawer-pf-trigger').hasClass("open")) {
       
    		  
    	  }
          


    	  var user_id = "${sessionScope.user_id}";
         var data = event.data;

 		 var strs = new Array();


 		 strs=data.split(",");

 		 cmd = strs[0];
 		 receive = strs[1];
 		reply = strs[2];
            
         
   
         
         console.log("ReceivMessage : " + reply + "\n");

         countAlarm(user_id);

         

            
         
         toastr.options.escapeHtml = true;
         toastr.options.closeButton = true;
         toastr.options.newestOnTop = false;
         toastr.options.progressBar = true;
         toastr.options.extendedTimeOut = 0;
         toastr.options.timeOut = 0;

         toastr.options.onclick=function(){
             if("reply"==cmd){
             location.href='/Food/detail?b_no='+receive;
             }else if("mfChat"==cmd){
            	 window.open('wss://115.91.88.227:60000/Food/mealBoard/chatBox.do?userId='+receive,'_blank','width=502,height=720,left=500,top=100,location=no,status=no');
                 }
             else if("reserv"==cmd){
            	 location.href='/Food/mypageform.do';
                 }
             };
         toastr.info('알림', reply);
         
      };
      ws.onclose = function(event){
         console.log('Info:connection closed.');
         //setTimeout(function(){connect();},1000);
         };
      ws.onerror = function(err){console.log('Error:',err);};
   };

         
   </script>







</body>

</html>