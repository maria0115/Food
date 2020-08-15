window.onload = function(){

var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
mapOption = { 
    center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
    level:10  // 지도의 확대 레벨
};

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
// 주소-좌표 변환 객체를 생성합니다

var size = $("input[name='name']").length;
var name = new Array();
var addr = new Array();
var positions = new Array();
var b_no = new Array();

for(i=0;i<size;i++){
	name[i]=$("input[name='name']").eq(i).attr("value");
	addr[i]=$("input[name='addr']").eq(i).attr("value");
	b_no[i]=$("input[name='b_no']").eq(i).attr("value");
}
	//주소로 좌표를 검색합니다
	name.forEach(function(v,i){
		var marker = {};
		var geocoder = new kakao.maps.services.Geocoder();
		var bounds = new kakao.maps.LatLngBounds();
		geocoder.addressSearch(addr[i], function(result, status) {
		     // 정상적으로 검색이 완료됐으면 
		     if (status === kakao.maps.services.Status.OK) {
		        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
		        positions[i]=coords;
		        
		        var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png", // 마커이미지의 주소입니다    
		        imageSize = new kakao.maps.Size(24, 35), // 마커이미지의 크기입니다
		        imageOption = {offset: new kakao.maps.Point(14, 42)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
		          
			    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
			    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
		        markerPosition = new kakao.maps.LatLng(result[0].y, result[0].x); // 마커가 표시될 위치입니다
			    
			    var marker = new kakao.maps.Marker({
			        position: markerPosition, 
			        image: markerImage // 마커이미지 설정 
			    });
			    
			    var content = '<div class ="label"><span class="left"></span>'+
			    	'<span class="center">'+
			    	'<a name="mealck" href="../mealBoard/mealboardView.do?b_no='+b_no[i]+'">'+name[i]+'</a>'+	
			    	'</span><span class="right"></span></div>';

				var customOverlay = new kakao.maps.CustomOverlay({
					position : coords,
					title : name[i], 
					content: content
				});
				customOverlay.setMap(map);
				marker.setMap(map);
				map.setCenter(positions[0]);
		    };
		});
	});
	
}