<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta name="description" content="">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">
<!-- The above 4 meta tags *must* come first in the head; any other head content must come *after* these tags -->

<!-- Title -->
<title>회원 가입</title>
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<!-- Favicon -->
<link rel="icon" href="img/core-img/favicon.ico">
<link rel="stylesheet" href="/Food/resources/css/singup.css">
<!-- Core Stylesheet -->
<link rel="stylesheet" href="/Food/resources/css/style.css">
<!-- <link rel="stylesheet" href="resources/css/js.css"> -->
<!-- 부트스트랩 -->
<link
	href="https://gitcdn.github.io/bootstrap-toggle/2.2.2/css/bootstrap-toggle.min.css"
	rel="stylesheet">
<script
	src="https://gitcdn.github.io/bootstrap-toggle/2.2.2/js/bootstrap-toggle.min.js"></script>

<style>
.box select {
	background-color: indianred;
	color: white;
	padding: 12px;
	width: 250px;
	border: none;
	font-size: 20px;
	box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
	-webkit-appearance: button;
	appearance: button;
	outline: none;
	border-radius: 80px/100px;
}

.box::before {
	content: "\f13a";
	font-family: FontAwesome;
	top: 0;
	right: 0;
	width: 20%;
	height: 100%;
	text-align: center;
	font-size: 28px;
	line-height: 45px;
	color: rgba(255, 255, 255, 0.5);
	background-color: rgba(255, 255, 255, 0.1);
	pointer-events: none;
}

.box:hover::before {
	color: rgba(255, 255, 255, 0.6);
	background-color: rgba(255, 255, 255, 0.2);
}

.box select option {
	padding: 30px;
}

#preview img {
	width: 100px;
	height: 100px;
}

#preview p {
	text-overflow: ellipsis;
	overflow: hidden;
}

.preview-box {
	border: 1px solid;
	padding: 5px;
	border-radius: 2px;
	margin-bottom: 10px;
}
.shopmem{
display: flex;

}
.happytime{
     display: grid;
    font-size: xx-large;
    font-weight: bolder;
    font-family: monospace;
}
.happytime label{
color:darkred;
margin-left: 5px;
margin-right: 5px;
}
</style>
<link rel="stylesheet"
	href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
<jsp:include page="../index/header.jsp">
	<jsp:param value='' name='folder' />
</jsp:include>
</head>

<body>
	<div class="preloader d-flex align-items-center justify-content-center">
		<div class="preloader-circle"></div>
		<div class="preloader-img">
			<img src="/Food/resources/img/core-img/leaf.png" alt="">
		</div>
	</div>

	<!-- ##### Header Area Start ##### -->

	<!-- ##### Header Area End ##### -->

	<!-- ##### Breadcrumb Area Start ##### -->
	<div class="breadcrumb-area">
		<!-- Top Breadcrumb Area -->


		<div class="container">
			<div class="row">
				<div class="col-12">
					<nav aria-label="breadcrumb">
						<ol class="breadcrumb">
							<li class="breadcrumb-item"><a href="#"><i
									class="fa fa-home"></i> Home</a></li>
							<li class="breadcrumb-item active" aria-current="page">매장회원정보</li>
						</ol>
					</nav>
				</div>
			</div>
		
	</div>

	<div class="container">
		<form action="/Food/shopinfomodify.do" method="post">
			<!-- 아이디 -->

			<label>아이디</label> <input type="text" class="sing" id="shopid"
				name="m_id" value="${user.m_id }" readonly="readonly">
			

			<label>비밀번호</label> <input type="password" class="sing"
				id="shoppass" name="m_pass" placeholder="PASSWORD" required>
			<div class="check_font" id="shoppass_check"></div>


			<label>비밀번호 확인</label> <input type="password" class="sing"
				id="shoppass2" name="password2" placeholder="Confirm Password"
				required>
			<div class="check_font" id="shoppass2_check"></div>

			
			<p></p>
			<!-- 휴대전화 -->
			<div id="storeInfo">
			<h2 style="display: inline;">우리 매장 정보</h2><p></p>
			<table class="table table" id="storeinfotable">
				<tr>
					<td style="width: 20%;">
						<label>매장이름</label>
					</td>
					<td>
						<input class="form-control" name="s_brand_name" type="text" value="${store.s_brand_name }">
					</td>
				</tr>
				<tr>
					<td>
						<label>매장 주소</label>
						<input style="float: right; margin-top: 6px;" type="checkbox" id="modifyck">
						<label style="float: right;">주소변경</label>
					</td>
					<td id="addrarea">
						<input id="addr" class="form-control" name="s_address" type="text" value="${store.s_address }" readonly="readonly">
					</td>
				</tr>
				<tr>
					<td>
						<label>카테고리</label>
					</td>
					<td>
						<span id="category">${store.s_category }</span>
					</td>
				</tr>
				<tr>
					<td>
						<label>중분류</label>
					</td>
					<td>
						<input class="form-control" name="s_midpart" type="text" value="${store.s_midpart }">
					</td>
				</tr>
				<tr>
					<td ><label>매장소개</label></td>
					<td >
						<textarea class="form-control" rows="10" cols="300" name="s_info">${store.s_info }</textarea>
					</td>
				</tr>
				<tr>
					<td colspan="2" style="text-align: center;">우리매장메뉴</td>
				</tr>
				<tr>
					<td>
					<label>대표메뉴1</label>
					</td>
					<td>
						<input class="form-control" type="text" name="p_name_1" value="${store.p_name_1 }">
					</td>
				</tr>
				<tr>
					<td>
					<label>대표메뉴 가격1</label>
					</td>
					<td>
						<input class="form-control" type="text" name="p_price_1" value="${store.p_price_1 }">
					</td>
				</tr>
				<tr>
					<td>
					<label>대표메뉴2</label>
					</td>
					<td>
						<input class="form-control" type="text" name="p_name_2" value="${store.p_name_2 }">
					</td>
				</tr>
				<tr>
					<td>
					<label>대표메뉴 가격2</label>
					</td>
					<td>
						<input class="form-control" type="text" name="p_price_2" value="${store.p_price_2 }">
					</td>
				</tr>
				<tr>
					<td>
					<label>대표메뉴3</label>
					</td>
					<td>
						<input class="form-control" type="text" name="p_name_3" value="${store.p_name_3 }">
					</td>
				</tr>
				<tr>
					<td>
					<label>대표메뉴 가격3</label>
					</td>
					<td>
						<input class="form-control" type="text" name="p_price_3" value="${store.p_price_3 }" >
					</td>
				</tr>
			</table>
			
			
			</div>
		
			<br> <br>
			<h1>*사진수정</h1>
			<br> 
			<div style="display: flex;">
				<input id="upload" type="button" class="btn btn-white" style="width: 50%; font-size: 20px; font-weight: bolder;" value="매장등록"> 	     <br>
				<input id="upload2" type="button" class="btn btn-dark" style="width: 50%; font-size: 20px; font-weight: bolder;" value="메뉴등록"> 	  
             </div>    
                              <br>
                        
			


			<div class="move">
				<input class="btn btn-info" type="submit" value="수정하기" id="shopsubmit">
				<button id="cancle_btn" class="btn btn-default">취소하기</button>
			</div>
		</form> 
		</div> 
</div>

 



	<p></p>

	<!-- Search Form -->


	<!-- ##### Hero Area Start ##### -->

	<!-- ##### Footer Area End ##### -->
	<%@ include file="../index/footer.jsp"%>
	<!-- ##### All Javascript Files ##### -->
	<!-- jQuery-2.2.4 js -->
 
	<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
	<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

	<script src="resources/js/jquery/jquery-2.2.4.min.js"></script>
	
	<!-- Popper js -->
	<script src="resources/js/bootstrap/popper.min.js"></script>
	<!-- Bootstrap js -->
	<script src="resources/js/bootstrap/bootstrap.min.js"></script>
	<!-- All Plugins js -->
	<script src="resources/js/plugins/plugins.js"></script>
	<!-- Active js -->
	<script src="resources/js/active.js"></script>
	

	<script src="http://dmaps.daum.net/map_js_init/postcode.v2.js"></script>
    <script src="/Food/resources/js/shopmodify.js"></script>

    
	<script type="text/javascript">
		
		//회원가입 정규화
		$("#shopsubmit")
				.click(
						function() {
							var id = /^[a-z]+[a-z0-9]{5,19}$/g;			
							var name = /^[가-힣]+$/;
							var pass = /^[a-zA-Z0-9]{8,16}/;
							var pwd1 = $("#shoppass").val();
							var pwd2 = $("#shoppass2").val();
							var idcheck = $("#id_check2").html();
							var menu =$(".shopmenu").val();
							

							if (!id.test($("#shopid").val())) {
								alert("아이디는 영문자로 시작하는 6~20자 영문자 또는 숫자이어야 합니다.");
								return false;
							} 
							else if ($(".shopmenu").val() == "") {
								alert("내용을 전부 입력해주세요.");
								return false;
							} else if (idcheck == "중복된 아이디입니다") {
								alert("중복된 아이디입니다. 아이디를 확인하여주세요")
								return false;
							} else if (pwd1 != pwd2) {
								alert("비밀번호가 일치하지 않습니다.")
								return false;
							} else if (!pass.test($("#shoppass").val())) {
								alert("비밀번호를 확인해주세요 영문자 혹은 0-9 8자리~16자리 이여야 합니다.");
								return false;
							} else if (!name.test($("#shopname").val())) {
								alert("이름을 확인해주세요");
								return false;
							} else if ($("#addr2").val() == "") {
								alert("주소를 입력해주세요");
								return false;
							} else if ($("#shopcheck_1").is(":checked") == false) {
								alert("필수약관에 동의 하셔야 다음 단계로 진행 가능합니다.");
								return false;
							} else if ($("#shopcheck_2").is(":checked") == false) {
								alert("필수약관에 동의 하셔야 다음 단계로 진행 가능합니다.");
								return false;
							} else {
								alert("회원가입 완료 가입을 축하드립니다!");
							}
						});

		//취소버튼 클릭시

	
		//아이디 중복체크 
		$("#shopid").blur(function() {
								$.ajax({
										type : 'post',
										async : true,
										url : 'checkId.do',
										contentType : 'application/x-www-form-urlencoded;charset=UTF-8',
										data : "m_id=" + $("#shopid").val(),
										success : function(resultData) {
											$("#shopid_check2").html(resultData);

										}

									});

							if ($("#shopid").val() == "")
								$("#shopid_check2").html("아이디를 작성하세요.");
						});

		$('#shopname').focusout(function() {

			var name = $("#shopname").val();
			var name2 = /^[가-힣]+$/;
			if (name2.test(name) === false) {
				$("#shopname_check").html("이름은 한글만 가능합니다.");
				namecheck = false;
			} else {
				$("#shopname_check").html("유효한 이름 입니다.");
				namecheck = true;
			}
		});

		$('#shopid').focusout(function() {

			var id = $("#shopid").val();
			var id2 = /^[a-z]+[a-z0-9]{5,19}$/g;
			if (id2.test(id) === false) {
				$("#shopid_check").html("영문자로 시작하는 6~20자 영문자 또는 숫자이어야 합니다.");
				idcheck = false;
			} else {
				$("#shopid_check").html("아이디 입력 결과");
				idcheck = true;
			}
		});

		$('#shoppass').focusout(function() {

			var pwd1 = $("#shoppass").val();
			var regexp = RegExp("[a-zA-Z0-9]{8,16}");
			if (regexp.test(pwd1) === false) {
				$("#shoppass_check").html("영문자 혹은 0-9 8자리~16자리");
				passcheck = false;
			} else {
				$("#shoppass_check").html("유효한 비밀번호입니다.");
				passcheck = true;
			}
		});
		var passcheck = false;
		$('#shoppass').keydown(function() {

			var pwd1 = $("#shoppass").val();
			var regexp = RegExp("[a-zA-Z0-9]{8,16}");
			if (regexp.test(pwd1) === false) {
				$("#shoppass_check").html("영문자 혹은 0-9 8자리~16자리");
				passcheck = false;
			} else {
				$("#shoppass_check").html("유효한 비밀번호입니다.");
				passcheck = true;
			}
		});
		// 비밀번호 일치하는지 확인
		$('#shoppass2').focusout(function() {
			var pwd1 = $("#shoppass").val();
			var pwd2 = $("#shoppass2").val();

			if (pwd1 != '' && pwd2 == '') {
				null;
			} else if (pwd1 != "" || pwd2 != "") {
				if (pwd1 == pwd2) {
					$("#shoppass2_check").html("비밀번호가 일치합니다");
					passcheck = true;
				} else {
					$("#shoppass2_check").html("비밀번호가 불일치합니다");
					passcheck = false;
				}
			}
		});

		// 최상단 체크박스 클릭
		$("#chk").click(function() {
			// 클릭되었으면
			if ($("#chk").prop("checked")) {
				// input태그의 name이 chk인 태그들을 찾아서 checked옵션을 true로 정의
				$("li>input[name=chk]").prop("checked", true);
				// 클릭이 안되있으면
			} else {
				// input태그의 name이 chk인 태그들을 찾아서 checked옵션을 false로 정의
				$("input[name=chk]").prop("checked", false);
			}
		});

		function execPostCode() {
			new daum.Postcode({
				oncomplete : function(data) {
					// 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

					// 도로명 주소의 노출 규칙에 따라 주소를 조합한다.
					// 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
					var fullRoadAddr = data.roadAddress; // 도로명 주소 변수
					var extraRoadAddr = ''; // 도로명 조합형 주소 변수

					// 법정동명이 있을 경우 추가한다. (법정리는 제외)
					// 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
					if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
						extraRoadAddr += data.bname;
					}
					// 건물명이 있고, 공동주택일 경우 추가한다.
					if (data.buildingName !== '' && data.apartment === 'Y') {
						extraRoadAddr += (extraRoadAddr !== '' ? ', '
								+ data.buildingName : data.buildingName);
					}
					// 도로명, 지번 조합형 주소가 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
					if (extraRoadAddr !== '') {
						extraRoadAddr = ' (' + extraRoadAddr + ')';
					}
					// 도로명, 지번 주소의 유무에 따라 해당 조합형 주소를 추가한다.
					if (fullRoadAddr !== '') {
						fullRoadAddr += extraRoadAddr;
					}

					// 우편번호와 주소 정보를 해당 필드에 넣는다.
					console.log(data.zonecode);
					console.log(fullRoadAddr);

					$("#shopaddr1").val(data.zonecode);
					$("#shopaddr2").val(fullRoadAddr);

					/*
					 * document.getElementById('signUpUserPostNo').value =
					 * data.zonecode; //5자리 새우편번호 사용
					 * document.getElementById('signUpUserCompanyAddress').value =
					 * fullRoadAddr;
					 * document.getElementById('signUpUserCompanyAddressDetail').value =
					 * data.jibunAddress;
					 */
				}
			}).open();
		}


		function popup(){
            var url = "upload.do";
            var name = "popup test";
            var option = "width = 450, height = 450, top = 100, left = 400, location = no"
			
	       window.open(url, name, option);
        }

		function popup2(){
            var url = "upload2.do";
            var name = "popup test";
            var option = "width = 450, height = 450, top = 100, left = 400, location = no"
			
	       window.open(url, name, option);
        }
		
		
		$("#upload").click(function(){
				popup();
			});

		$("#upload2").click(function(){
			 popup2();
		});
		
	</script>






</body>

</html>