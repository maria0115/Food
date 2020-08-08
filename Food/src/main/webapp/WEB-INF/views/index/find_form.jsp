<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>



<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">


<title>아이디 찾기</title>
</head>
<body>
	<div class="w3-content w3-container w3-margin-top">
		<div class="w3-container w3-card-4">
			<form action="/Food/findid.do" method="post">
				<div class="w3-center w3-large w3-margin-top">
					<h3>아이디 찾기</h3>
				</div>
				<div>
					<p>
						<label>Email</label>
						<input class="w3-input" type="text" id="m_email" name="m_email" placeholder="가입시 사용한 Email을 입력해 주세요" required>
					</p>
					<p class="w3-center">
						<button type="submit" id=findBtn class="w3-button w3-block w3-black w3-ripple w3-margin-top w3-round">find</button>
						<button type="button" onclick="history.go(-1);" class="w3-button w3-block w3-black w3-ripple w3-margin-top w3-margin-bottom w3-round">Cancel</button>
					</p>
				</div>
			</form>
		</div>
	</div>
	
	<div class="w3-content w3-container w3-margin-top">
		<div class="w3-container w3-card-4">
			<div class="w3-center w3-large w3-margin-top">
				<h3>비밀번호 찾기</h3>
			</div>
			<div>
				<form action ="" class="findPassword">
				<p>
					<label>ID</label>
					<input class="w3-input" type="text" id="mail_id" name="m_id" placeholder="가입시 사용한 ID를 입력해 주세요" required>	
				</p> 
				<div  id="checkmail"></div>			
				
				<p class="w3-center">
					<button type="button" id=findPasswordNext class="w3-button w3-block w3-black w3-ripple w3-margin-top w3-round">find</button>
					<button type="button" onclick="history.go(-1);" class="w3-button w3-block w3-black w3-ripple w3-margin-top w3-margin-bottom w3-round">Cancel</button>
				</p>
				
				</form>
			</div>
		</div>
	</div>
	<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
	<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
	<script src="./resources/js/jquery/jquery-2.2.4.min.js"></script>
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
	<script
	src="https://gitcdn.github.io/bootstrap-toggle/2.2.2/js/bootstrap-toggle.min.js"></script>
	
	<script type="text/javascript">
	//비밀번호 찾기
	$('#findPasswordNext').click(function(){
			
			if( $("#mail_id").val() == '' ){
	            alert("아이디를 입력해 주세요.");
	            $("#mail_id").focus();
	            return;
	        }    
			
			$.ajax({
	            type : 'get',
	            contentType :'application/x-www-form-urlencoded;charset=UTF-8',
	            url: '/Food/find-password.do?m_id='+$("#mail_id").val(),
	            dataType : "json",
	            success : function(data) {
	                //서버에서 json 데이터 response 후 목록 추가
	                data=JSON.parse(data)
	            	if(data =="1"){
	            		alert("입력한 아이디가 존재하지 않습니다.");
	            	}else if(data=='2'){
	            		window.location.href = "find_pass.do";

	            		
	            	}
	            }
	        });
	});
	</script>
	
</body>



</html>
