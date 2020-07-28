<%@ page language="java" contentType="text/html; charset=UTF-8"
   pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>   
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
<title>회원 수정</title>
<script
   src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<!-- Favicon -->
<link rel="icon" href="img/core-img/favicon.ico">
<link rel="stylesheet" href="resources/css/singup.css">
<!-- Core Stylesheet -->
<link rel="stylesheet" href="resources/css/style.css">
<!-- <link rel="stylesheet" href="resources/css/js.css"> -->
<!-- 부트스트랩 -->
<link
   href="https://gitcdn.github.io/bootstrap-toggle/2.2.2/css/bootstrap-toggle.min.css"
   rel="stylesheet">
<script
   src="https://gitcdn.github.io/bootstrap-toggle/2.2.2/js/bootstrap-toggle.min.js"></script>

<style>
.menu a {
   cursor: pointer;
}

.menu .hide {
   display: none;
}
</style>
<style type="text/css">
.sing2 {
    width: 100%;
    height: 40px;
    border: 1px solid #ebebeb;
    font-size: 14px;
    color: black;
    padding: 10px 20px;
    margin-bottom: 20px;
    -webkit-transition-duration: 500ms;
    transition-duration: 500ms;
}
</style>
<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
<jsp:include page="header.jsp">
   <jsp:param value='' name='folder' />
</jsp:include>
<%--    <c:if test="${ empty sessionScope.ID }"> --%>
</head>

<body>
   <div class="preloader d-flex align-items-center justify-content-center">
      <div class="preloader-circle"></div>
      <div class="preloader-img">
         <img src="img/core-img/leaf.png" alt="">
      </div>
   </div>

   <!-- ##### Header Area Start ##### -->

   <!-- ##### Header Area End ##### -->

   <!-- ##### Breadcrumb Area Start ##### -->
   <div class="breadcrumb-area">
      <!-- Top Breadcrumb Area -->
      <div
         class="top-breadcrumb-area bg-img bg-overlay d-flex align-items-center justify-content-center"
         style="background-image: url(img/bg-img/24.jpg);"></div>

      <div class="container">
         <div class="row">
            <div class="col-12">
               <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                     <li class="breadcrumb-item"><a href="#"><i
                           class="fa fa-home"></i> Home</a></li>
                     <li class="breadcrumb-item active" aria-current="page">회원 정보 수정</li>
                  </ol>
               </nav>
            </div>
         </div>
      </div>
   </div>

<div class="container">
      <form action="modify.do" method="post" >
         <!-- 아이디 -->
         <h2 style="color:blue">회원정보 변경 후 수정하기 버튼을 눌러주세요!</h2>
         <label style="color:red" >아이디는 변경이 불가능합니다.</label> <input type="text" class="sing2" id="id" value='${user_Info.M_ID}' 
            name="m_id"  required readonly="readonly">
         
      

         <label>비밀번호 수정</label> <input type="password" class="sing2"
            id="updatepass1" name="m_pass" value="${user_Info.M_PASS}"  required>
         <div class="check_font"  id="pw_check"></div>


         <label>수정 비밀번호 확인</label> <input type="password" class="sing2"
            id="updatepass2" name="password2"  value="${user_Info.M_PASS}" 
            required>
         <div class="check_font" id="pw2_check"></div>

         <!-- 이름 -->

         <label>이름 수정</label> <input type="text" class="sing2" id="updatename"
            name="m_name" value='${user_Info.M_NAME}'  required>
         <div class="check_font" id="name_check"></div>

         <!-- 생년월일 -->

         <label>생년월일 수정</label> <input type="text" class="sing2" id="updatebirth"
            name="m_birth" value='${user_Info.M_BIRTH}'  required>
         <div class="check_font" id="birth_check"></div>

         <!-- 본인확인 이메일 -->
   
   <label>   <span style="color: red; font-weight: bold;">이메일 수정 (이메일을 인증후 수정 가능합니다.)</span></label> <input type="text" class="sing2" name="m_email"
            id="updateMail" value="${user_Info.M_EMAIL}" required>
            <div class="check_font" id="email_check"></div>
            <div class="check_font" id="email_check2"></div>          
             <input type="button"  id="emailsend1" class ="btn btn-warning" value="이메일 인증받기 (이메일 보내기)"/>
             <p>
             </p>
           
            <label> <span style="color: green; font-weight: bold;">수정한 이메일로 받은 인증번호를 입력하세요. (인증번호가 맞아야 다음 단계로 넘어가실 수 있습니다.)</span></label> <input type="number"  id="checkmail"
                       class="sing2"  placeholder="  인증번호를 입력하세요. "/>
                                         
             <input  type ="button" id ="emailsubmit1"  class ="btn btn-primary" value ="인증번호 확인 "><br>
 
           <p></p>
               
         <!-- 휴대전화 -->

         <label>전화번호 수정</label> <input type="text" class="sing2" id="updatephone"
            name="m_tel" value='${user_Info.M_TEL}'  required>
         <div class="check_font" id="phone_check"></div>
   
   
         <label>주소 수정</label>
         <div class="form-group">
            <input class="sing2" style="width: 40%; display: inline;"
                 id="updateaddr" type="text"  name="m_post" value="${user_Info.M_POST}"
               readonly="readonly">
            <button type="button" class="btn btn-default"
               onclick="execPostCode1();">
               <i class="fa fa-search"></i> 우편번호 찾기
            </button>
         </div>
         <div class="form-group">
            <input class="sing2" style="top: 5px;"  value="${user_Info.M_AREA}"
               name="m_area" id="updateaddr2" type="text" readonly="readonly" />
         </div>

      

      <div class="move">
      <button id="cancle" class ="btn btn-info">돌아가기</button><input class ="btn btn-danger" type="submit" value="수정하기"  id="modify">   
      <input type="button" value="회원 탈퇴 하기" class="btn btn-dark" id="deletemember"/>
      <input type="hidden" id="m_id" value="${user_Info.M_ID}"/>
      </div>                  
      
      </form>
   </div>
      


   <p></p>

   <!-- Search Form -->


   <!-- ##### Hero Area Start ##### -->

   <!-- ##### Footer Area End ##### -->
   <%@ include file="footer.jsp"%>
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
   
   <!-- 지섭 -->
   <script >

   $(document).on("click","#deletemember",function(){ 
      event.preventDefault();
      var result = confirm("회원님의 모든 정보가 사라지면서 회원 탈퇴가 진행됩니다 진행 하시겠습니까?");
         if(result) {
               $.ajax({
                  type : 'post',
                  async : true,
                  url : 'deleteMember.do',
                  data : "m_id="+$("#m_id").val(), 
                  contentType : 'application/x-www-form-urlencoded;charset=UTF-8',
                  success : function(resultData) {
                     alert("tkr");
                     //window.location.reload();
                     window.location = "start.jsp"; 
                     // window.location=document.referrer;
                  }
               });
            } 
               else {
            
               }
            });

   
   
   //회원수정시이메일 전송
   var  check;
   $("#emailsend1").click(function(){
      $.ajax({
           type:'post',
           async:true,
           url : 'signEmail.do',
           contentType :'application/x-www-form-urlencoded;charset=UTF-8',
           data : "m_email="+ $("#updateMail").val(),
           success : function(resultData){
              alert("입력하신 E-mail 로 인증번호를 발송해 드렸습니다. 확인해주세요 " )
              check = resultData;
             
           } ,
          
         
   });   
   });
   //이메일 발송후 번호가 맞는지 확인 
   $("#emailsubmit1").click(function(){
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


// 회원수정 정규화
   $("#modify").click(function() {
                     var id = /^[a-z]+[a-z0-9]{5,19}$/g;
                     var email = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
                     var name = /^[가-힣]+$/;
                     var birth = /^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/;
                     var pass = /^[a-zA-Z0-9]{8,16}/;
                     var pwd1 = $("#updatepass1").val();
                     var pwd2 = $("#updatepass2").val();
                     var idcheck =  $("#id_check2").html();
                     var emailcheck = $("#email_check2").html();
                     var mostfood =$(".mostfood").val();
                     var phone = /(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/g;
                     
                     if (!id.test($("#id").val())) {
                     alert("아이디는 영문자로 시작하는 6~20자 영문자 또는 숫자이어야 합니다.");
                     return false;                     
                     }else if(check == null){
                        alert("이메일 인증후 회원정보 수정이 가능합니다.")
                        return false;
                     }
                     else if(!phone.test($("#updatephone").val())){
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
                     
                        else if (pwd1 != pwd2) {
                        alert("비밀번호가 일치하지 않습니다.")
                        return false;
                     } else if (!email.test($("#updateMail").val())) {
                        alert("이메일 형식을 확인하세요");
                        return false;
                     } else if (!pass.test($("#updatepass1").val())) {
                        alert("비밀번호를 확인해주세요 영문자 혹은 0-9 8자리~16자리 이여야 합니다.");
                        return false;
                     } else if (!name.test($("#updatename").val())) {
                        alert("이름을 확인해주세요");
                        return false;
                     } else if (!birth.test($("#updatebirth").val())) {
                        alert("생년월일을 확인해주세요");
                        return false;
                     } else if ($("#updateaddr2").val() == "") {
                        alert("주소를 입력해주세요");
                        return false;
                     } else {
                        alert("회원 수정이 완료 되었습니다. 다시 로그인 후 이용해주세요.");
                        $.ajax({
                           type : 'post',
                           async : true,
                           url : 'logout.do', 
                           contentType : 'application/x-www-form-urlencoded;charset=UTF-8',
                           success : function(resultData) {
                              
                              //window.location.reload();
                              window.location = "start.jsp"; 
                              // window.location=document.referrer;
                           }
                        });
                     }
                  });



// 주소
function execPostCode1() {
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

         $("#updateaddr").val(data.zonecode);
         $("#updateaddr2").val(fullRoadAddr);

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
$('#cancle').click(function(){
       event.preventDefault();
        history.back(); //이전 히스토리 가기
    });
    
//이메일 중복체크  
$("#updateMail").blur(function(){
   
        $.ajax({
                url : 'checkEmail.do',
                contentType :'application/x-www-form-urlencoded;charset=UTF-8',
                data : "m_email="+ $("#updateMail").val(),
                success : function(resultData){
                    $("#email_check2").html(resultData);
                    
                }
        });
           if($("#updateMail").val()==""){
            $("#email_check2").html("이메일 작성하세요.");
           }
        });

   
   $('#updatebirth').focusout(
               function() {

                  var birth = $("#updatebirth").val();
                  var birth2 = /^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/;
                  if (birth2.test(birth) === false) {
                     $("#birth_check").html("생년월일을 확인해주세요");
                     birthcheck = false;
                  } else {
                     $("#birth_check").html("올바른 생년월일 입니다.");
                     birthcheck = true;
                  }

               });

   $('#updatename').focusout(function() {

      var name = $("#updatename").val();
      var name2 = /^[가-힣]+$/;
      if (name2.test(name) === false) {
         $("#name_check").html("이름은 한글만 가능합니다.");
         namecheck = false;
      } else {
         $("#name_check").html("유효한 이름 입니다.");
         namecheck = true;
      }
   });

   $('#updateMail').focusout(
               function() {

                  var email = $("#updateMail").val();
                  var email2 = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
                  if (email2.test(email) === false) {
                     $("#email_check").html("이메일 형식을 확인해 주세요");
                     emailcheck = false;
                  } else {
                     $("#email_check").html(" 이메일 입력결과");
                     emailcheck = true;
                  }
               });

$('#updatephone').focusout(function() {

   var phone = $("#updatephone").val();
   var phone2 = /(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/g
   if (phone2.test(콜) === false) {
      $("#phone_check").html("전화번호를 확인해주세요");
      phonecheck = false;
   } else {
      $("#phone_check").html("올바른 전화번호 입니다.");
      phonecheck = true;
   }
});



   $('#updatepass1').focusout(function() {

      var pwd1 = $("#updatepass1").val();
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
   
   // 비밀번호 일치하는지 확인
   $('#updatepass2').focusout(function() {
      var pwd1 = $("#updatepass1").val();
      var pwd2 = $("#updatepass2").val();

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





   </script>






</body>

</html>