
var chartPieData;
var chartPieOptions = {
                  maintainAspectRatio : false, // 부모가 만든 크기 안에 꽉 차게 함(default 값: true)
                  responsive: true
};


$(function(){
	   makeChartPieAjax();
	   //setInterval(makeChartPieAjax, 10000);
	   makeDayPieAjax();
	});

//밥친구 시간대별
function makeChartPieAjax(){
	   $('#mealTimeContainer').empty();
	   $('#mealTimeContainer').append('<canvas class="charts" id="mealTimeChart"></canvas>');
	   $.ajax({
	      type:'post',
	       async:true,
	       url:"mealTime.do",
	       contentType : 'application/x-www-form-urlencoded;charset=UTF-8', //넘어가는 데이터를 인코딩하기 위함
	       dataType : 'json',
	       success : function(resultPieData){
	          chartPieData= makeAjaxChartPieData(resultPieData);
	          makeChartPie(chartPieData, chartPieOptions);
	        
	       },
	       error:function(request,status,error){
	           console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
	       }
	   });
	}

//밥친구 요일별
function makeDayPieAjax(){
	   $('#mealTimeContainer').empty();
	   $('#mealTimeContainer').append('<canvas class="charts" id="mealTimeChart"></canvas>');
	   $.ajax({
	      type:'post',
	       async:true,
	       url:"mealTime.do",
	       contentType : 'application/x-www-form-urlencoded;charset=UTF-8', //넘어가는 데이터를 인코딩하기 위함
	       dataType : 'json',
	       success : function(resultPieData){
	          chartPieData= makeAjaxChartPieData(resultPieData);
	          makeChartPie(chartPieData, chartPieOptions);
	        
	       },
	       error:function(request,status,error){
	           console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
	       }
	   });
	}

//밥친구 시간대별 이용수 파이차트 데이터 뽑는 함수
function makeAjaxChartPieData(resultData){
	   var pieChartData = new Array();   
	   for(var i=0; i<resultData.length; i++){
	      pieChartData.push(resultData[i]);
	      console.log(pieChartData);
	      
	   }
	   var chartData = {
	                  labels : ["야간", "아침", "점심", "저녁"],
	                  datasets : [
	                     {
	                        label : "밥친구 시간대별 이용수",
	                        data : pieChartData,
	                        backgroundColor : [
	                        	'rgb(255, 99, 132)',
	        					'rgb(255, 159, 64)',
	        					'rgb(255, 205, 86)',
	        					'#03a9f4'
	                        ],
	                     }
	                  ]
	               
	                  }
	   return chartData;
	}

//카테고리별 예약수 
function makecategoryChartPieData(resultData){
	   var pieChartData = new Array();   
	   for(var i=0; i<resultData.length; i++){
	      pieChartData.push(resultData[i]);
	      console.log(pieChartData);
	      
	   }
	   var chartData = {
	                  labels : ["야간", "아침", "점심", "저녁"],
	                  datasets : [
	                     {
	                        label : "밥친구 시간대별 이용수",
	                        data : pieChartData,
	                        backgroundColor : [
	                        	'rgb(255, 99, 132)',
	        					'rgb(255, 159, 64)',
	        					'rgb(255, 205, 86)',
	        					'#03a9f4'
	                        ],
	                     }
	                  ]
	               
	                  }
	   return chartData;
	}

function makeChartPie(chartPieData, chartPieOptions){
	   var ctx = document.getElementById('mealTimeChart').getContext('2d');
	   var mealTimeChart = new Chart(ctx, {
	      type : 'pie',
	      data : chartPieData,
	      options : chartPieOptions
	   });
	   
	}   

