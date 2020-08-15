<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<title>MyPage</title>
<meta charset="UTF-8">
<link rel="stylesheet" type="text/css" href="/Food/resources/css/style3.css" />
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" >
<title>예약 정보</title>
</head>
<body>

	<div class="container">
	<br/>
		<h1 style="font-family: js5;">예약 상세 내역</h1>
			<table class="table">
				<tr>
					<td><label class="label_name" style="font-family: js5; font-size: 30px;">매장명</label></td>
					<td><input class="form-control" value="${user.r_store_name }" disabled></td>
				</tr>
				<tr>
					<td><label class="label_name" style="font-family: js5; font-size: 30px;">방문예정날짜</label></td>
					<td><input class="form-control" value="${user.r_visit_date }" disabled></td>
				</tr>
				<tr>
					<td><label class="label_name" style="font-family: js5; font-size: 30px;">방문예정인원</label></td>
					<td><input class="form-control" value="${user.r_people_count }" disabled></td>
				</tr>
				<tr>
					<td><label class="label_name" style="font-family: js5; font-size: 30px;">예약메뉴</label></td>
					<td><textarea class="form-control" rows="5" cols="15" disabled>${user.r_menu }</textarea>
				</tr>
				<tr>
					<td><label class="label_name" style="font-family: js5; font-size: 30px;">고객문의사항</label></td>
					<td><textarea class="form-control" rows="7" cols="15" disabled>${user.r_note }</textarea>
				</tr>
			</table>
		</div>

</body>
</html>