
var chartPieData;
var chartPieOptions = [{
                  maintainAspectRatio : false, // 부모가 만든 크기 안에 꽉 차게 함(default 값: true)
                  responsive: true
},{
	maintainAspectRatio : false, // 부모가 만든 크기 안에 꽉 차게 함(default 값: true)
    responsive: true
}];


$(function(){
	   makeChartPieAjax();
	   //setInterval(makeChartPieAjax, 10000);
	   makeDayPieAjax();
	});

//밥친구 시간대별
function makeChartPieAjax(){
	var chartId="mealTimeChart";
	   $('#mealTimeContainer').empty();
	   $('#mealTimeContainer').append('<canvas class="charts" id="'+chartId+'"></canvas>');
	   $.ajax({
	      type:'post',
	       async:true,
	       url:"mealTime.do",
	       contentType : 'application/x-www-form-urlencoded;charset=UTF-8', //넘어가는 데이터를 인코딩하기 위함
	       dataType : 'json',
	       success : function(resultPieData){
	          chartPieData= makeAjaxChartPieData(resultPieData);
	          makeChartPie(chartPieData, chartPieOptions[0],chartId);
	          
	        
	       },
	       error:function(request,status,error){
	           console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
	       }
	   });
	}

//밥친구 요일별
function makeDayPieAjax(){
		var chartId="mealDayChart";
	   $('#mealDayContainer').empty();
	   $('#mealDayContainer').append('<canvas class="charts" id="'+chartId+'"></canvas>');
	   $.ajax({
	      type:'post',
	       async:true,
	       url:"mealDay.do",
	       contentType : 'application/x-www-form-urlencoded;charset=UTF-8', //넘어가는 데이터를 인코딩하기 위함
	       dataType : 'json',
	       success : function(resultPieData){
	    	   
	          chartPieData= makeAjaxChartPieData(resultPieData);
	          makeChartPie(chartPieData, chartPieOptions[1],chartId);
	          
	       },
	       error:function(request,status,error){
	           console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
	       }
	   });
	}

//밥친구 시간대별 이용수 파이차트 데이터 뽑는 함수
function makeAjaxChartPieData(resultData){
	   var pieChartData = new Array();  
	   var chartLabel = new Array();
	   if(resultData.chartNum==2){
		   chartColor = chartColorSet(resultData.mealDayCountSize);
		   for(var i=0; i<resultData.mealDayCountSize; i++){
			   	  chartLabel.push(resultData.mealDayCount[i].DAY);
			      pieChartData.push(resultData.mealDayCount[i].COUNT);
			   }

		   var chartData = {
	                  labels : chartLabel,
	                  datasets : [
	                     {
	                        label : "밥친구 요일별 이용수",
	                        data : pieChartData,
	                        backgroundColor : chartColor
	                     }
	                  ]
	               
	                  }
		   
	   }
	   else{
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
	   }
	   return chartData;
	}


function makeChartPie(chartPieData, chartPieOptions,chartId){
	   var ctx = document.getElementById(chartId).getContext('2d');
	  new Chart(ctx, {
	      type : 'pie',
	      data : chartPieData,
	      options : chartPieOptions
	   });
	   
	}   
function chartColorSet(size){
	var resultColor;
	var rRanNum =  Math.floor(Math.random()*255);
	var gRanNum =  Math.floor(Math.random()*255);
	var bRanNum =  Math.floor(Math.random()*255);

	if(size>1){
		resultColor = new Array();
		for(var i=0; i<size; i++){
			rRanNum =  Math.floor(Math.random()*255);
			gRanNum =  Math.floor(Math.random()*255);
			bRanNum =  Math.floor(Math.random()*255);
			temp = 'rgba(' +rRanNum + ', ' + gRanNum + ', ' + bRanNum + ')';
			resultColor.push(temp);
		}
	}else if(size==1){
		resultColor = 'rgba(' +rRanNum + ', ' + gRanNum + ', ' + bRanNum + ')';
	}

	return resultColor
}
