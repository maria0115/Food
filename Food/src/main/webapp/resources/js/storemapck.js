window.onload = function(){ 
	
	var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
	    mapOption = {
	        center : new daum.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
	        level : 5
	    // 지도의 확대 레벨
	    };
	 
	    var map = new daum.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
	    var distanceOverlay; // 선의 거리정보를 표시할 커스텀오버레이 입니다 
	    var dots = {}; // 선이 그려지고 있을때 클릭할 때마다 클릭 지점과 거리를 표시하는 커스텀 오버레이 배열입니다.
	    var userx = $("#userx").val();
	    var usery = $("#usery").val();
	    var addr1 = "서울 금천구 남부순환로112길 55";
	    var name = "또바기피자";
	    var positions = new Array();
	    size = ['0','1'];
	    var linePath;
	    var lineLine = new daum.maps.Polyline();
	    var distance;
	    
	 
	    // 마커를 표시할 위치와 title 객체 배열입니다 
	    
	    
	    // 주소로 좌표를 검색합니다
	    size.forEach(function(v,i){
	    	var bounds = new kakao.maps.LatLngBounds();
	    	var geocoder = new kakao.maps.services.Geocoder();
		    geocoder.addressSearch(addr1, function(result, status) {
	
		        // 정상적으로 검색이 완료됐으면 
		         if (status === kakao.maps.services.Status.OK) {
	
		            var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
		            var positions = [{
		            	title : name,
		            	latlng : new daum.maps.LatLng(result[0].y, result[0].x)
		            },{
		        	    title : "내위치",
		        	    latlng : new daum.maps.LatLng(usery, userx)
		        	}];
		            
		            //이미지 경로
		            var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
		            // 마커 이미지의 이미지 크기 입니다
		            var imageSize = new daum.maps.Size(24, 35);
		     
		            // 마커 이미지를 생성합니다    
		            var markerImage = new daum.maps.MarkerImage(imageSrc, imageSize);
		     
		            // 마커를 생성합니다
		            var marker = new daum.maps.Marker({
		                map : map, // 마커를 표시할 지도
		                position : positions[i].latlng, // 마커를 표시할 위치
		                title : positions[i].title,
		                image : markerImage
		            // 마커 이미지 
		            });
			        
		            clickLine = new kakao.maps.Polyline({
		                map: map, // 선을 표시할 지도입니다 
		                path: [positions[0].latlng], // 선을 구성하는 좌표 배열입니다 클릭한 위치를 넣어줍니다
		                strokeWeight: 3, // 선의 두께입니다 
		                strokeColor: '#db4040', // 선의 색깔입니다
		                strokeOpacity: 1, // 선의 불투명도입니다 0에서 1 사이값이며 0에 가까울수록 투명합니다
		                strokeStyle: 'solid' // 선의 스타일입니다
		            });
			        
			        alert(positions[i].latlng+","+positions[i].title)
			        
			        if (i != 0) {
			            linePath = [ positions[i - 1].latlng, positions[i].latlng ] //라인을 그리려면 두 점이 있어야하니깐 두 점을 지정했습니다
			        }
			        ;
			        lineLine.setPath(linePath); // 선을 그릴 라인을 세팅합니다
			 
			        var drawLine = new daum.maps.Polyline({
			            map : map, // 선을 표시할 지도입니다 
			            path : linePath,
			            strokeWeight : 3, // 선의 두께입니다 
			            strokeColor : '#db4040', // 선의 색깔입니다
			            strokeOpacity : 1, // 선의 불투명도입니다 0에서 1 사이값이며 0에 가까울수록 투명합니다
			            strokeStyle : 'solid' // 선의 스타일입니다
			        });
			 
			        distance = Math.round(lineLine.getLength());
			        displayCircleDot(positions[i].latlng, distance);
			        var distance = Math.round(clickLine.getLength()), // 선의 총 거리를 계산합니다
	                content = getTimeHTML(distance);
		            
		         };
		         marker.setMap(map);
		    }); 
		    
	    }); 
	    
	    
	    
	    // 마커 이미지의 이미지 주소입니다
	    
	    function displayCircleDot(position, distance) {
	        if (distance > 0) {
	            // 클릭한 지점까지의 그려진 선의 총 거리를 표시할 커스텀 오버레이를 생성합니다
	            var distanceOverlay = new daum.maps.CustomOverlay(
	                    {
	                        content : '<div class="dotOverlay">거리 <span class="number">'
	                                + distance + '</span>m</div>',
	                        position : position,
	                        yAnchor : 1,
	                        zIndex : 2
	                    });
	 
	            // 지도에 표시합니다
	            distanceOverlay.setMap(map);
	            
	        }
	    }
	
	// 마우스 우클릭 하여 선 그리기가 종료됐을 때 호출하여 
	// 그려진 선의 총거리 정보와 거리에 대한 도보, 자전거 시간을 계산하여
	// HTML Content를 만들어 리턴하는 함수입니다
	function getTimeHTML(distance) {
	
	    // 도보의 시속은 평균 4km/h 이고 도보의 분속은 67m/min입니다
	    var walkkTime = distance / 67 | 0;
	    var walkHour = '', walkMin = '';
	
	    // 계산한 도보 시간이 60분 보다 크면 시간으로 표시합니다
	    if (walkkTime > 60) {
	        walkHour = '<span class="number">' + Math.floor(walkkTime / 60) + '</span>시간 '
	    }
	    walkMin = '<span class="number">' + walkkTime % 60 + '</span>분'
	
	    // 자전거의 평균 시속은 16km/h 이고 이것을 기준으로 자전거의 분속은 267m/min입니다
	    var bycicleTime = distance / 227 | 0;
	    var bycicleHour = '', bycicleMin = '';
	
	    // 계산한 자전거 시간이 60분 보다 크면 시간으로 표출합니다
	    if (bycicleTime > 60) {
	        bycicleHour = '<span class="number">' + Math.floor(bycicleTime / 60) + '</span>시간 '
	    }
	    bycicleMin = '<span class="number">' + bycicleTime % 60 + '</span>분'
	
	    // 거리와 도보 시간, 자전거 시간을 가지고 HTML Content를 만들어 리턴합니다
	    var content = '<ul class="dotOverlay distanceInfo">';
	    content += '    <li>';
	    content += '        <span class="label">총거리</span><span class="number">' + distance + '</span>m';
	    content += '    </li>';
	    content += '    <li>';
	    content += '        <span class="label">도보</span>' + walkHour + walkMin;
	    content += '    </li>';
	    content += '    <li>';
	    content += '        <span class="label">자전거</span>' + bycicleHour + bycicleMin;
	    content += '    </li>';
	    content += '</ul>'
	
	    return content;
	}
}