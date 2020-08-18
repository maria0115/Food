
var chartData;
var chartType = "line";
var chartOptions=[{
	maintainAspectRatio : false,
	responsive: true,
	title:{
		display:true,
		text:'일별 회원가입 차트'
	},
	tooltips: {
		mode: 'index',
		intersect: false,
	},
	hover: {
		mode: 'nearest',
		intersect: true
	},
	scales: {
		xAxes: [{
			scaleLabel: {
				display: true,
				labelString: '날짜'
			}
		}],
		yAxes: [{
			type:"linear",
			display:true,
			position:"left",
			id: "y-axis-1",
		},{
			scaleLabel: {
				display: true,
				labelString: '회원가입수'
			}

		}]
	}

},{
	maintainAspectRatio : false,
	responsive: true,
	hoverMode: 'index',
	stacked: false,
	title:{
		display:true,
		text:'카테고리 일별 예약숫자'
	},
	tooltips: {
		mode: 'index',
		intersect: false,
	},
	hover: {
		mode: 'nearest',
		intersect: true
	},
	scales: {
		xAxes: [{
			scaleLabel: {
				display: true,
				labelString: '날짜'
			}
		}],
		yAxes: [{
			type:"linear",
			display:true,
			position:"left",
			id: "y-axis-1",
		},{
			scaleLabel: {
				display: true,
				labelString: '예약수'
			}

		}]
	}
},{
	maintainAspectRatio : false,
	responsive: false,
	title:{
		display:true,
		text:'주간 방문자수'
	},
	tooltips: {
		mode: 'index',
		intersect: false,
	},
	hover: {
		mode: 'nearest',
		intersect: true
	},
	scales: {
		xAxes: [{
			scaleLabel: {
				display: true,
				labelString: '날짜'
			}
		}],
		yAxes: [{
			type:"linear",
			display:true,
			position:"left",
			id: "y-axis-1",
		},{
			scaleLabel: {
				display: true,
				labelString: '방문자 수'
			}

		}]
	}
}

];


$(function(){
	makeChartAjax();
	makecategoryChartAjax();
	makeVisitChart();
});
//일별 회원가입 차트 요청
function makeChartAjax(){
	var chartId= "dayReservChart";
	$('#dayReservContainer').empty();
	$('#dayReservContainer').append('<canvas class="charts" id="'+chartId+'" style="height:300px;"></canvas>');

	$.ajax({
		url:"dayReservChart.do", 
		type:"post", 
		dataType:'json',
		success:function(data){
			chartType="line";
			chartData=makeAjaxChartData(data);
			makeChart(chartData,chartOptions[0],chartId);
		},
		error:function(request,status,error){
			console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
		}
	});

}

//카테고리 일별 예약수 요청
function makecategoryChartAjax(){
	var chartId= "categoryDayChart";
	$('#categoryDayContainer').empty();
	$('#categoryDayContainer').append('<canvas class="charts" id="'+chartId+'" style="height:300px;"></canvas>');

	$.ajax({
		url:"categoryDayChart.do", 
		type:"post", 
		dataType:'json',
		success:function(data){
			chartType="line";
			chartData=makeAjaxChartData(data);
			makeChart(chartData,chartOptions[1],chartId);
		},
		error:function(request,status,error){
			console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
		}
	});
}

//주간 방문자수
function makeVisitChart(){
	var chartId= "visitCountChart";
	$('#visitCountContainer').empty();
	$('#visitCountContainer').append('<canvas class="charts" id="'+chartId+'" style="height:300px; text-align:center; display:inline-block"></canvas>');

	$.ajax({
		url:"visitChart.do", 
		type:"post", 
		dataType:'json',
		success:function(data){
			chartType="line";
			chartData=makeAjaxChartData(data);
			makeChart(chartData,chartOptions[2],chartId);
		},
		error:function(request,status,error){
			console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
		}
	});

}



//ajax에서 받아온 json 데이터를 가공하여 차트의 데이터를 만들어주는 과정
function makeAjaxChartData(resultData){
	var chartLabel = new Array();
	var lineChartData = new Array();
	
	if(resultData.chartNum==1){
		if(chartType != "line"){
			chartColor = chartColorSet(resultData.reduceMemberCountSize);	
		}else if(chartType=='line'){
			chartColor = "rgba(3,169,244,1)";
		}
		for(var i=0;i<resultData.reduceMemberCountSize;i++){
			chartLabel.push(resultData.reduceMemberCount[i].M_DATE);
			lineChartData.push(resultData.reduceMemberCount[i].MEMBERCOUNT);
		}

		var chartData = {
				labels : chartLabel,
				datasets:[
					{
						label : resultData.label,
						fill:false,
						backgroundColor:chartColor,
						borderColor:chartColor,
						data:lineChartData,


					},
					]
		};
	}
	else if(resultData.chartNum==2){
		var wFoodData = new Array();
		var jFoodData = new Array();
		var cFoodData = new Array();
		var kFoodData = new Array();
		var sFoodData = new Array();
		var asFoodData = new Array();
		
		
			chartColor = chartColorSet(resultData.reduceCategoryCountSize);	
		
		for(var i=0;i<resultData.reduceCategoryCountSize;i++){
			
			chartLabel.push(resultData.reduceCategoryCount[i].R_DATE);
			wFoodData.push(resultData.reduceCategoryCount[i].WFOOD);
			jFoodData.push(resultData.reduceCategoryCount[i].JFOOD);
			cFoodData.push(resultData.reduceCategoryCount[i].CFOOD);
			kFoodData.push(resultData.reduceCategoryCount[i].KFOOD);
			sFoodData.push(resultData.reduceCategoryCount[i].SFOOD);
			asFoodData.push(resultData.reduceCategoryCount[i].ASFOOD);
			
		}

		var chartData = {
				labels : chartLabel,
				datasets:[
					{
						label : "동남아",
						fill:false,
						backgroundColor:chartColor[0],
						borderColor:chartColor[0],
						data:asFoodData,
						yAxisID: "y-axis-1"
					},{
						label: "중식",
						fill: false,
						backgroundColor: chartColor[1],
						borderColor: chartColor[1],
						data: cFoodData
					}, {
						label: "분식",
						fill: false,
						backgroundColor: chartColor[2],
						borderColor: chartColor[2],
						data: sFoodData
					}, {
						label: "양식",
						fill: false,
						backgroundColor: chartColor[3],
						borderColor: chartColor[3],
						data: wFoodData

					}, {
						label: "일식",
						fill: false,
						backgroundColor: chartColor[4],
						borderColor: chartColor[4],
						data:jFoodData

					}, {
						label: "한식",
						fill: false,
						backgroundColor: chartColor[5],
						borderColor: chartColor[5],
						data: kFoodData,
						yAxisID: "y-axis-1"
					}
					]
		};
	}
	else if(resultData.chartNum==3){
		for(var i=0;i<resultData.visitCountSize;i++){
			chartLabel.push(resultData.visitCount[i].VISITDAY);
			lineChartData.push(resultData.visitCount[i].VISITCOUNT);
		}
		var chartData = {
				labels : chartLabel,
				datasets:[
					{
						label : "주간 방문자수",
						fill:false,
						backgroundColor:'rgba(255, 0, 10, 0.2)',
						borderColor:'rgba(255, 0, 10, 0.8)',
						data:lineChartData,


					},
					]
		};
		
	}
	return chartData;


}

function makeChart(chartData, chartOptions,chartId){
	var ctx = document.getElementById(chartId).getContext('2d');

	new Chart(ctx, {
		type : chartType,
		data : chartData,
		options : chartOptions
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
