//회원가입시이메일 전송
	var  check;
	$("#emailsend").click(function(){
		$.ajax({
	        type:'post',
	        async:true,
	        url : 'signEmail.do',
	        contentType :'application/x-www-form-urlencoded;charset=UTF-8',
	        data : "m_email="+ $("#email").val(),
	        success : function(resultData){
	        	alert("입력하신 E-mail 로 인증번호를 발송해 드렸습니다. 확인해주세요 " )
	        	check = resultData;
	          
	        } ,
	       
			
	});	
	});
	//이메일 발송후 번호가 맞는지 확인 
	$("#emailsubmit").click(function(){
		$.ajax({
	        type:'post',
	        async:true,
	        url : 'signcheckEmail.do',
	        contentType :'application/x-www-form-urlencoded;charset=UTF-8',
	        data : "check="+ $("#checkmail").val(),
	        success : function(resultData){
	          if(resultData ==check){
	        	  alert("인증이 완료 되었습니다")
	          }else{
	        	  alert("인증번호가 다릅니다.")
	          }
	        } 
			
	});	
	});


// 회원가입 정규화
	$("#submit").click(function() {
							var id = /^[a-z]+[a-z0-9]{5,19}$/g;
							var email = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
							var name = /^[가-힣]+$/;
							var birth = /^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/;
							var pass = /^[a-zA-Z0-9]{8,16}/;
							var pwd1 = $("#password1").val();
							var pwd2 = $("#password2").val();
							var idcheck =  $("#id_check2").html();
							var emailcheck = $("#email_check2").html();
							var mostfood =$(".mostfood").val();
							var phone = /(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/g;
							
							if (!id.test($("#id").val())) {
							alert("아이디는 영문자로 시작하는 6~20자 영문자 또는 숫자이어야 합니다.");
							return false;							
							}else if(check == null){
								alert("이메일 인증후 회원가입 가능합니다.")
								return false;
							}
							else if(!phone.test($("#phone").val())){
								alert("전화번호 형식을 확인해주세요.")
								return false;
							}
							else if(check !=$("#checkmail").val()){
								alert("이메일 인증번호가 다릅니다. 이메일 인증후 회원가입 가능합니다.")
								return false;
							}
							else if(emailcheck == "중복된 이메일 입니다"){
								alert("중복된 이메일입니다. 이메일을 확인하여주세요")
								return false;
							}
							else if(idcheck == "중복된 아이디입니다"){
								alert("중복된 아이디입니다. 아이디를 확인하여주세요")
								return false;
							}
								else if (pwd1 != pwd2) {
								alert("비밀번호가 일치하지 않습니다.")
								return false;
							} else if (!email.test($("#email").val())) {
								alert("이메일 형식을 확인하세요");
								return false;
							} else if (!pass.test($("#password1").val())) {
								alert("비밀번호를 확인해주세요 영문자 혹은 0-9 8자리~16자리 이여야 합니다.");
								return false;
							} else if (!name.test($("#name").val())) {
								alert("이름을 확인해주세요");
								return false;
							}else if(mostfood == null){
								alert("좋아하는 음식을 하나이상 입력해주세요.")
								return false;
							} else if (!birth.test($("#birth").val())) {
								alert("생년월일을 확인해주세요");
								return false;
							} else if ($("#addr2").val() == "") {
								alert("주소를 입력해주세요");
								return false;
							} else if ($("#check_1").is(":checked") == false) {
								alert("필수약관에 동의 하셔야 다음 단계로 진행 가능합니다.");
								return false;
							} else if ($("#check_2").is(":checked") == false) {
								alert("필수약관에 동의 하셔야 다음 단계로 진행 가능합니다.");
								return false;
							} else {
								alert("회원가입 완료 가입을 축하드립니다!");
							}
						});



// 주소
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

			$("#addr1").val(data.zonecode);
			$("#addr2").val(fullRoadAddr);

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








//취소버튼 클릭시
$('#cancle_btn').click(function(){
       event.preventDefault();
        history.back(); //이전 히스토리 가기
    });
    
//이메일 중복체크 
$("#email").blur(function(){
	
        $.ajax({
                url : 'checkEmail.do',
                contentType :'application/x-www-form-urlencoded;charset=UTF-8',
                data : "m_email="+ $("#email").val(),
                success : function(resultData){
                    $("#email_check2").html(resultData);
                    
                }
        });
        	if($("#email").val()==""){
            $("#email_check2").html("이메일 작성하세요.");
        	}
        });


//아이디 중복체크 
$("#id").blur(function(){
	
	$.ajax({
                type:'post',
                async:true,
                url : 'checkId.do',
                contentType :'application/x-www-form-urlencoded;charset=UTF-8',
                data : "m_id="+ $("#id").val(),
                success : function(resultData){
                    $("#id_check2").html(resultData);
                  
                } 
				
        });	
        	
		
        	if($("#id").val()=="")
            $("#id_check2").html("아이디를 작성하세요.");
        });
    




	$("#m_most").click(function() {
		
		var len = $(".mostfood").length;
		
		if(len < 3){
			var a = $("#testInput").val();
			if(a == ""){
				alert("좋아하는 음식을 입력해주세요");
			}else{
				var $div = $("<input class='mostfood' name='m_most' value='"+a+"' ><input type='button' class='btn btn-danger' id='mostdelete' value='X'/>")
				$("#mostfood").append($div)
				$(this).prev().val("");
			}
			
		}else{
			alert("좋아하는 음식은 3개 까지만 선택가능합니다.");
			$(this).prev().val("");
		}
		$($div).click(function(){
			$(this).prev().remove();
			$(this).remove();	
			
		});
	});
		 
		 
	

	

	
	$('#birth').focusout(
					function() {

						var birth = $("#birth").val();
						var birth2 = /^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/;
						if (birth2.test(birth) === false) {
							$("#birth_check").html("생년월일을 확인해주세요");
							birthcheck = false;
						} else {
							$("#birth_check").html("올바른 생년월일 입니다.");
							birthcheck = true;
						}

					});

	$('#name').focusout(function() {

		var name = $("#name").val();
		var name2 = /^[가-힣]+$/;
		if (name2.test(name) === false) {
			$("#name_check").html("이름은 한글만 가능합니다.");
			namecheck = false;
		} else {
			$("#name_check").html("유효한 이름 입니다.");
			namecheck = true;
		}
	});

	$('#email').focusout(
					function() {

						var email = $("#email").val();
						var email2 = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
						if (email2.test(email) === false) {
							$("#email_check").html("이메일 형식을 확인해 주세요");
							emailcheck = false;
						} else {
							$("#email_check").html(" 이메일 입력결과");
							emailcheck = true;
						}
					});

$('#id').focusout(function() {

		var id = $("#id").val();
		var id2 = /^[a-z]+[a-z0-9]{5,19}$/g;
		if (id2.test(id) === false) {
			$("#id_check").html("영문자로 시작하는 6~20자 영문자 또는 숫자이어야 합니다.");
			idcheck = false;
		} else {
			$("#id_check").html("아이디 입력 결과");
			idcheck = true;
		}
	});


$('#phone').focusout(function() {

	var phone = $("#phone").val();
	var phone2 = /(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/g
	if (phone2.test(phone) === false) {
		$("#phone_check").html("전화번호를 확인해주세요");
		phonecheck = false;
	} else {
		$("#phone_check").html("올바른 전화번호 입니다.");
		phonecheck = true;
	}
});







	$('#password1').focusout(function() {

		var pwd1 = $("#password1").val();
		var regexp = RegExp("[a-zA-Z0-9]{8,16}");
		if (regexp.test(pwd1) === false) {
			$("#pw_check").html("영문자 혹은 0-9 8자리~16자리");
			passcheck = false;
		} else {
			$("#pw_check").html("유효한 비밀번호입니다.");
			passcheck = true;
		}
	});
	var passcheck = false;
	$('#password1').keydown(function() {

		var pwd1 = $("#password1").val();
		var regexp = RegExp("[a-zA-Z0-9]{8,16}");
		if (regexp.test(pwd1) === false) {
			$("#pw_check").html("영문자 혹은 0-9 8자리~16자리");
			passcheck = false;
		} else {
			$("#pw_check").html("유효한 비밀번호입니다.");
			passcheck = true;
		}
	});
	// 비밀번호 일치하는지 확인
	$('#password2').focusout(function() {
		var pwd1 = $("#password1").val();
		var pwd2 = $("#password2").val();

		if (pwd1 != '' && pwd2 == '') {
			null;
		} else if (pwd1 != "" || pwd2 != "") {
			if (pwd1 == pwd2) {
				$("#pw2_check").html("비밀번호가 일치합니다");
				passcheck = true;
			} else {
				$("#pw2_check").html("비밀번호가 불일치합니다");
				passcheck = false;
			}
		}
	});

	$("#loginLabel").click(function(e) {

		e.preventDefault();

		if ($('.loginbox').css('display') == 'none') {
			$('.loginbox').slideDown();
		} else {
			$('.loginbox').slideUp();
		}
	});

	// 닫힘버튼
	$(".closeBtn").click(function(e) {

		$('.loginbox').slideUp();

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


// 로그아웃
$(document).on("click","#logout",function(){ //$('#logout').click(function() {
	event.preventDefault();
	$.ajax({
		type : 'post',
		async : true,
		url : '/Food/logout.do',
		contentType : 'application/x-www-form-urlencoded;charset=UTF-8',
		success : function(resultData) {
			
			window.location.reload();
			
			// window.location=document.referrer;
		}
	});
});

// 로그인 ajax
$('#frm').submit(
				function() {
					event.preventDefault();
					if ($("#logpw").val() === "") {
						alert("암호를 입력하세요");
					} else {
						$
								.ajax({
									type : 'post',
									async : true,
									url : '/Food/login.do',
									contentType : 'application/x-www-form-urlencoded;charset=UTF-8',
									data : "m_id=" + $('#logid').val()
											+ "&m_pass=" + $('#logpw').val(),
									success : function(resultData) {
										if (resultData == '')
											alert("아이디와 비밀번호를 다시 확인하세요.");
										else {
										$(".login-header").css("display","none");
											$(".access").html(resultData+ '</span>/<a href="" id="logout">로그아웃</a>');
											window.location.reload();
										}
									}
								});
					}
				});

// 자동전송 막기
$('#frm input[type="text"]').keydown(function() {
	if (event.keyCode === 13) {
		event.preventDefault();
	}
});
 

