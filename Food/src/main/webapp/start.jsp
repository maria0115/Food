<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=d256eadcce9c22afd468b3f969eae576&libraries=services,clusterer,drawing"></script>
<script src="https://code.jquery.com/jquery-3.4.1.js"></script>
<script type="text/javascript">
$(function(){
	$.ajax({
		url:"/Food/manager/visiter.do", 
		type:"post", 
		dataType:'json',
		success:function(data){

		},
		error:function(request,status,error){
			console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
		}
	});
});



var latitude="";
var longitude="";

var detailAddr="";
	navigator.geolocation.getCurrentPosition((position) => {
		longitude = position.coords.longitude;
		latitude = position.coords.latitude;
		var region=""
			var geocoder = new kakao.maps.services.Geocoder();

		var coord = new kakao.maps.LatLng(latitude, longitude);
		var callback = function(result, status) {
		    if (status === kakao.maps.services.Status.OK) {
			    
		    	region = result[0].address.region_2depth_name;
		    	location.href="main.do?latitude="+latitude+"&longitude="+longitude+"&region="+region;
		    }
		};

		geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
		
		}); 
	
 		

		


		
	
</script>
<head>
<meta charset="UTF-8">

<title>Insert title here</title>

</head>



<body>






	<%
	

	
// 	response.sendRedirect("main.do");
		//response.sendRedirect("qnaboard.do");
		
		
		
		
	%>
	
<!-- <!-- 	예약 버튼 --> 
<!-- 	<button id='button' onclick="window.open('reservation.do', -->
<!-- 		'window_nameddddd','width=780,height=843,left=500,top=100,location=no,status=no,scrollbars=yes');">예약</button> -->


</body>
</html>