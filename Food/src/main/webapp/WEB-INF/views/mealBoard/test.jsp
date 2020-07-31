<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jstl/core_rt" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" href="/Food/resources/css/marker.css">
</head>
<body>

<script src="http://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.js"></script>
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=bb313e4cbac02a6fbeb66ff237d66b62&libraries=services"></script>
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=bb313e4cbac02a6fbeb66ff237d66b62"></script>
<div>
<h3 style="margin-left: 15%;">BEST TOP3</h3>
<div id="map" style="width:40%;height:500px;">
</div>
</div>
<c:forEach items="${list }" var="store">
<input type="hidden" name="name" value="${store.s_brand_name }">
<input type="hidden" name="addr" value="${store.s_address }">
</c:forEach>


<script src="/Food/resources/js/marker.js"></script>

<img style="width: 3%; height: 3%;" src="/Food/resources/img/1.jpg">
	<div class ="label">
		<span class="left"></span>
		<span class="center">123</span>
		<span class="right"></span>
	</div>

</body>
</html>