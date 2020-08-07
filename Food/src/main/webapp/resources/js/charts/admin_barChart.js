var chartBarData;
var chartType = "bar";
var chartBarOptions=[{
	maintainAspectRatio : false,
	responsive: true,
	title:{
		display:true,
		text:'회원 연령별 차트'
	},
	scales: {
		xAxes: [{
				scaleLabel: {
					display: true,
					labelString: '연령별'
				}
		}],
		yAxes: [{
			scaleLabel: {
				display: true,
				labelString: '회원수'
			}
		}]
	}

},
{
	maintainAspectRatio : false,
	responsive: true,
	title:{
		display:true,
		text:'예약 순위 TOP10'
	},
	scales: {
		xAxes: [{
			scaleLabel: {
				display: true,
				labelString: '예약수'
			}
		}],
		yAxes: [{
			scaleLabel: {
				display: true,
				labelString: '가게명'
			}
		}]
	}
	}];

$(function(){
	makeBarChartAjax();
	makeHorizontalBar();
});

//바차트
function makeBarChartAjax(){
	var chartId= "memberYearChart";
	$('#memberYearContainer').empty();
	$('#memberYearContainer').append('<canvas class="charts" id="'+chartId+'" style="height:300px;"></canvas>');

	$.ajax({
		url:"memberYearChart.do", 
		type:"post", 
		dataType:'json',
		success:function(data){
			chartType="bar";
			chartBarData=makeAjaxChartBarData(data);
			makeChartbar(chartBarData,chartBarOptions[0],chartId);
		},
		error:function(request,status,error){
			console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
		}
	});

}
//horizontal 바차트
function makeHorizontalBar(){
	var chartId= "toptenStore";
	$('#toptenStoreContainer').empty();
	$('#toptenStoreContainer').append('<canvas class="charts" id="'+chartId+'" style="height:300px;"></canvas>');

	$.ajax({
		url:"topStore.do", 
		type:"post", 
		dataType:'json',
		success:function(data){
			chartType="horizontalBar";
			chartBarData=makeAjaxChartBarData(data);
			makeChartbar(chartBarData,chartBarOptions[1],chartId);
		},
		error:function(request,status,error){
			console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
		}
	});

}

function makeAjaxChartBarData(resultData){
	var chartLabel = new Array();
	var lineChartData = new Array();
	
	if(resultData.chartNum == 1){
		for(var i=0;i<resultData.memberYearSize;i++){
			chartLabel.push(resultData.memberYear[i].YEAR);
			lineChartData.push(resultData.memberYear[i].CNT);
		}

		var chartData = {
				labels : chartLabel,
				datasets: [{
					label: '회원 연령별 차트',
					data: lineChartData,
					backgroundColor: [
						'rgba(255, 99, 132, 0.2)',
						'rgba(54, 162, 235, 0.2)',
						'rgba(255, 206, 86, 0.2)',
						'rgba(75, 192, 192, 0.2)',
						'rgba(153, 102, 255, 0.2)',
						'rgba(255, 159, 64, 0.2)'
					],
					borderColor: [
						'rgba(255,99,132,1)',
						'rgba(54, 162, 235, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(75, 192, 192, 1)',
						'rgba(153, 102, 255, 1)',
						'rgba(255, 159, 64, 1)'
					],
					borderWidth: 1
				}]
				
		};
	}else if(resultData.chartNum ==2){
		for(var i=0;i<resultData.toptenStoreSize;i++){
			chartLabel.push(resultData.toptenStore[i].STORE);
			lineChartData.push(resultData.toptenStore[i].COUNT);
		}
		chartColor = chartColorSet(resultData.toptenStoreSize);	
		var chartData = {
				labels : chartLabel,
				datasets: [{
					label: '예약 순위 TOP10',
					data: lineChartData,
					backgroundColor: chartColor
					
				}]
				
		};
	}
	
	
	
	return chartData;
}

function makeChartbar(chartBarData, chartOptions,chartId){
	var ctx = document.getElementById(chartId).getContext('2d');

	new Chart(ctx, {
		type : chartType,
		data : chartBarData,
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