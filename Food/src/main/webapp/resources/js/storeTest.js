/*
변수
	ㄴ curPage : 현재 페이지
	ㄴ defaultOpts : 페이징 처리에 사용되는 기본 옵션
		ㄴ 페이지를 클릭할 떄마다 해당 페이지에 맞는 데이터를 다시 불러오도록 이벤트를 걸어둠
	
함수
	ㄴ getWriterDataInPaging : 페이지를 클릭했을 경우 불려오는 함수로 해당 페이지에 맞는 데이터를 불러옴
	ㄴ getWriterData : 검색어를 포함하는 데이터들을 불러옴
		ㄴ 내부적으로 동적인 페이징을 구성함
	ㄴ drawWriterTable : ajax로 받아온 데이터로 테이블을 그려주는 함수
	ㄴ updateBtnEvent : 수정 버튼들 눌렀을 경우 이벤트 핸들러
		ㄴ 해당 bookId에 맞는 데이터들을 수정 화면으로 끌어가서 로딩함
	ㄴ deleteBtnEvent : 삭제 버튼들 눌렀을 경우 이벤트 핸들러
	
실행부분
	ㄴ 화면 로딩 후 바로 데이터를 가져와서 테이블를 그림
	ㄴ 검색창에 입력할때마다 테이블을 다시 그려주는 keyup이벤트 핸들러 연결
		ㄴ 동적 페이징 처리
	ㄴ 수정 버튼 이벤트 핸들러 연결
	ㄴ 삭제 버튼 이벤트 핸들러 연결
*/
var curPage;
var writerData_total_page;
var defaultOpts = {
        totalPages: 20,
        onPageClick: function (event, page) {
            $('#page-content').text('Page ' + page);
            curPage=page;
            console.log('curPage확인 :' + curPage);
            getWriterDataInPaging();
        }
    };

// 윈도우 온로드랑 비슷개념 
$(function(){
	//눌렀을때 실행되는거
	$("#reviewKing").on("click", function(){
	
		getWriterData();
	})
	
	
	getWriterData();
	$('#listSearch').on('keyup', getWriterData);
//	$('#pagination-demo').on('click', getWriterDataInPaging);
	$(document).on("click",".btn-primary", updateBtnEvent);
	$(document).on("click",".btn-warning", deleteBtnEvent);
});


function updateBtnEvent(){
	console.log( $(this).parent().prev().prev().text() );
	console.log( $(this).parent().prev().text() );
	$(this).next().submit();
}

function deleteBtnEvent(){
	console.log( $(this).parent().prev().prev().prev().text() );
	console.log( $(this).parent().prev().prev().text() );
	$(this).next().submit();
}
function getWriterDataInPaging(){
	$.ajax({
		type : 'post',
		async:true,
		url : 'storeDetailPaging.do',
		contentType : 'application/x-www-form-urlencoded;charset=UTF-8',
		data : {"searchWord" : $('#listSearch').val(),
				"curPage" : curPage,
				},
		dataType : 'json',
		success : function(resultData){
			drawWriterTable(resultData);
			console.log("페이지 안에서 뭔가를 불러오긴하냐");
			console.log(resultData);
			console.log("ajax 안에서 curPage 확인 : " + curPage);
		},
		error:function(request,status,error){
			console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
		}
		
	});
}

function getWriterData(){
	
	$.ajax({
		type : 'post',
		async:true,
		url : 'storeDetailPaging.do',
		contentType : 'application/x-www-form-urlencoded;charset=UTF-8',
		data : {"s_brand_name" : $('#title').val(),
				"curPage" : curPage
				},
		dataType : 'json',
		success : function(resultData){
			
			alert("페이징성고오오옹")
			drawWriterTable(resultData);
			var totalPages = resultData.pagination.pageCnt;
			var currentPage = $('#pagination-demo').twbsPagination('getCurrentPage');
  		  
            $('#pagination-demo').twbsPagination('destroy');
            $('#pagination-demo').twbsPagination($.extend({}, defaultOpts, {
            	startPage: currentPage,
                totalPages: totalPages
            }));
          
		},
		error:function(request,status,error){
			alert("실패패패패패iok"+"code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
			console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
		}
		
	});
}

function drawWriterTable(data){
	console.log(data);
	$('#reviewContainer').empty();
	var div1 = '<div class="comment-wrapper d-flex" style="padding: 25px 0;">';
    var div2 ='<div class="comment-author">';
	var div3 =' <img src="img/bg-img/37.jpg" alt="">';
	var div4 ='</div>';
    var div5 ='<div class="comment-content" >';
	var div6 ='<div class="d-flex align-items-center justify-content-between">';
	var h51 = '<h5>';
	var h52 = '</h5>';
	var span = '<span class="comment-date"> </span>';
	var div7 ='</div>';
	var p1 = '<p>';
	var p2 = '</p>';
	var div8 ='</div>';
	var div9 ='</div>';
	alert('>'+data.listVO2size);
	alert(">>"+data.listVO2);
       for(var i=0; i<data.listVO2size; i++){
		var listContent =
			div1+
			div2+
			div3+
			div4+
			div5+
			div6+
			h51+data.listVO2[i].s_brand_name+h52+
			span+
			div7+
			p1+
			p2+
			div8+
			div9
			
			
			
						 
		$('#reviewContainer').append(listContent);
		
		
		
		
		
		
		
		
		
		
		
	}
}