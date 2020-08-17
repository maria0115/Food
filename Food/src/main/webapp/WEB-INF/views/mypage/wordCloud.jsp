<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jstl/core_rt" prefix="c"%>

<!DOCTYPE html>
<html class="no-js" lang="en">
<script src="https://code.jquery.com/jquery-3.4.1.js"></script>
<script type="text/javascript">
var q;
$(function(){

$('#wordcloud').click(function(){
   var keyword = $('#keyword1').val();
   
   alert(keyword);
   if(q){
      clearInterval(q);
   }

      $.ajax({
         url: "wordCloudbtn.do",
         type: "post",
         data: "keyword="+keyword,
         success:function(d){
            
            q=setInterval(function(){
               $('#wordimg').attr('src','/Food/resources/wordcloud/WordCloud.jpg');
            },2000);
            

            
            },
         error:function(er){
            alert("error");
            }
      });

   
})
   
})
</script>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" type="text/css" href="/Food/resources/css/style3.css" />
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" >
<style type="text/css">

#img7{
text-align: center;

}
#keyword{
width: 32%;
    margin-bottom: 2%;
    border-radius: 40px;
    height: auto;
}
img {
    display: block; margin: 0px auto;
 }
</style>
<title>나의 가게 메뉴와 가장 연관성 있는 단어</title>
</head>
<body>
         <jsp:include page="../index/header.jsp"/>
         
               <div id="img7">
                  <span style="font-size: xx-large;font-family: js;color: black;">나의 가게 메뉴와 가장 연관성 있는 단어</span>
                  <br>
                  <input id='keyword1' type='text' placeholder="키워드를 입력해주세요">
                  <button id = "wordcloud" class="btn btn-default" style="font-size: x-large; font-family: js;">입력</button>
               </div>   
               <div id= cont;>
            <img id="wordimg" src="/Food/resources/img/bg.jpg" style="height: auto;max-width: 100%;border-radius: 35%; border: 5px solid darkslategray; margin-bottom: 3%;" />
                  </div>
                  
                  
    <!-- ##### Footer Area Start ##### -->
    <%@ include file="../index/footer.jsp" %>
    <!-- ##### Footer Area End ##### -->

    <!-- ##### All Javascript Files ##### -->
 
    
</body>
</html>