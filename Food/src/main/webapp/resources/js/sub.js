$(function(){
		$("#submit").click(function(){
		var id = /^[a-z]+[a-z0-9]{5,19}$/g;
		var email = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
		var name =/^[가-힣]+$/;
		var birth = /^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/;
		var pass =/^[a-zA-Z0-9]{8,16}/;
		var pwd1 = $("#password1").val();
	    var pwd2 = $("#password2").val();

	  
		if(!id.test( $("input[name=id]").val() ) ) {
	            alert("아이디는 영문자로 시작하는 6~20자 영문자 또는 숫자이어야 합니다.");
	            return false;
	        }
		else if (pwd1 != pwd2) {
	            alert("비밀번호가 일치하지 않습니다.")
	            return false;
	        }	
	    else if( !email.test( $("input[name=email]").val() ) ) {
            alert("이메일 형식을 확인하세요");
            return false;
		}else if( !pass.test( $("input[name=password1]").val() ) ) {
            alert("비밀번호를 확인해주세요 영문자 혹은 0-9 8자리~16자리 이여야 합니다.");
            return false;
		}else if( !name.test( $("input[name=name]").val() ) ) {
            alert("이름을 확인해주세요");
            return false;
		}else if( !birth.test( $("input[name=birth]").val() ) ) {
            alert("생년월일을 확인해주세요");
            return false;
		}else if($(".check_1").is(":checked") == false){
			 alert("약관에 동의 하셔야 다음 단계로 진행 가능합니다.");
			return false;
		}
		else{
			alert("회원가입 완료 가입을 축하드립니다!");
        }
		});
	});

$('#birth').focusout(function () {
	   
    var birth = $("#birth").val();
    var birth2 = /^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/;
    if(birth2.test(birth)===false){
        $("#birth_check").html("생년월일을 확인해주세요");
        birthcheck = false;
    }
    else{
        $("#birth_check").html("유효한 생년월일 입니다.");
        birthcheck = true;
    }
});	


$('#name').focusout(function () {
	   
    var name = $("#name").val();
    var name2 = /^[가-힣]+$/;
    if(name2.test(name)===false){
        $("#name_check").html("이름은 한글만 가능합니다.");
        namecheck = false;
    }
    else{
        $("#name_check").html("유효한 이름 입니다.");
        namecheck = true;
    }
});	



$('#email').focusout(function () {
	   
    var email = $("#email").val();
    var email2 = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if(email2.test(email)===false){
        $("#email_check").html("이메일 형식을 확인해 주세요");
        emailcheck = false;
    }
    else{
        $("#email_check").html("유효한 이메일 입니다.");
        emailcheck = true;
    }
});	

$('#id').focusout(function () {
	   
    var id = $("#id").val();
    var id2 = /^[a-z]+[a-z0-9]{5,19}$/g;
    if(id2.test(id)===false){
        $("#id_check").html("영문자로 시작하는 6~20자 영문자 또는 숫자이어야 합니다.");
        idcheck = false;
    }
    else{
        $("#id_check").html("유효한 아이디 입니다.");
        idcheck = true;
    }
});	


$('#password1').focusout(function () {
   
        var pwd1 = $("#password1").val();
        var regexp = RegExp("[a-zA-Z0-9]{8,16}");
        if(regexp.test(pwd1)===false){
            $("#pw_check").html("영문자 혹은 0-9 8자리~16자리");
            passcheck = false;
        }
        else{
            $("#pw_check").html("유효한 비밀번호입니다.");
            passcheck = true;
        }
    });
var passcheck = false;
$('#password1').keydown(function () {

    var pwd1 = $("#password1").val();
    var regexp = RegExp("[a-zA-Z0-9]{8,16}");
    if(regexp.test(pwd1)===false){
        $("#pw_check").html("영문자 혹은 0-9 8자리~16자리");
        passcheck = false;
    }
    else{
        $("#pw_check").html("유효한 비밀번호입니다.");
        passcheck = true;
    }
});
// 비밀번호 일치하는지 확인
$('#password2').focusout(function () {
    var pwd1 = $("#password1").val();
    var pwd2 = $("#password2").val();

    if ( pwd1 != '' && pwd2 == '' ) {
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

 $('#frm').submit(function(){
    	event.preventDefault();
        if($("#logpw").val()===""){
           alert("암호를 입력하세요");
        }else{
            $.ajax({
                type:'post',
                async:true,
                url : 'login.do',
                contentType :'application/x-www-form-urlencoded;charset=UTF-8',
                data : "id="+ $('#logid').val() + "&password="+$('#logpw').val(),
                success : function(resultData){
                    if(resultData == '')
                        alert("아이디와 비밀번호를 다시 확인하세요.");
                    else{
                        $(".login").css("display","none");
                        $(".login-header").html(resultData);
                        $(".login-header table").css("display","none");
                        $(".login-header").slideUp(500);
                        $(".user-access").html(resultData+'</span>/<a href="" id="logout">로그아웃</a>');
                         
                        window.location.reload();
                    }
                }
            });
        }
    });

$(function(){
   $("#loginLabel").click(function(e) {
      
      e.preventDefault();
      
    
      if($('.loginbox').css('display')== 'none'){            
          $('.loginbox').slideDown(); 
      }
      else {
            $('.loginbox').slideUp();
      }
   });
     

   // 닫힘버튼
   $(".closeBtn").click(function(e) {
    
         $('.loginbox').slideUp();

   });            
   
});