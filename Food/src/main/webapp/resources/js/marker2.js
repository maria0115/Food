var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
mapOption = {
	center : new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
	level : 3
// 지도의 확대 레벨
};
// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
var map = new kakao.maps.Map(mapContainer, mapOption);

var size = $("input[name='name']").length;
var name = new Array();
var addr = new Array();
var cnt = new Array();
var positions = new Array();
	

for(i=0;i<size;i++){
	name[i]=$("input[name='name']").eq(i).attr("value");
	addr[i]=$("input[name='addr']").eq(i).attr("value");
	cnt[i]=$("input[name='cnt']").eq(i).attr("value");

}
// 주소-좌표 변환 객체를 생성합니다.

positions.forEach(function(v, i) {
	var geocoder = new kakao.maps.services.Geocoder();
	var bounds = new kakao.maps.LatLngBounds();
	geocoder.addressSearch(addr[i], function(result, status) {
		// 정상적으로 검색이 완료됐으면 
		if (status === kakao.maps.services.Status.OK) {
			var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

			// 결과값으로 받은 위치를 마커로 표시합니다
			var content = '<div class="point point' + cnt[i]+ '"> ' 
					+ '	<div class="info">' + ' <h1> ' + name[i]
					+ '</h1>' + '		</div>' + '</div>';

			var customOverlay = new kakao.maps.CustomOverlay({
				position : coords, // 마커를 표시할 위치
				content : content,
			});
			customOverlay.setMap(map);
			map.setCenter(coords);
		}
	});

});