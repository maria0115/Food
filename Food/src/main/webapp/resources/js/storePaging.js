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
	alert("54654d")
	
	//눌렀을때 실행되는거
	$("#storeListPaging").on("click", function(e){
		alert("ddd")
		
		getWriterData();
	})
	
	getWriterData();
	
	
	
	//getWriterData();
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
		url : 'storelist.do',
		contentType : 'application/x-www-form-urlencoded;charset=UTF-8',
		data : {"s_brand_name" : $('#title').val(),
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
	alert("ddd")
	$.ajax({
		type : 'post',
		async:true,
		url : 'storelist.do',
		contentType : 'application/x-www-form-urlencoded;charset=UTF-8',
		data : {"s_brand_name" : $('#title').val(),
				"curPage" : curPage
				},
		dataType : 'json',
		
		success : function(resultData){
			alert("성공")
			
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
	$('#storeList').empty();
	var div1 = '<div class="single-product-area mb-50">';
    var div2 =' <div class="product-img">';
	var div3 =' <a href="shopDetails.do"><img src="./resources/img/bg-img/40.png" alt=""></a>';
	var div4 ='<div class="product-tag">';
    var div5 ='<a href="#">Hot</a>';
	var div6 ='  </div>';
	var h51 = ' <div class="product-meta d-flex">';
	var titleA ='<a href="#" class="wishlist-btn"><i class="icon_heart_alt"></i></a>';
	var titleAend = '<a href="cart.html" class="add-to-cart-btn">Add to cart</a>';
	var aEnd = '<a href="#" class="compare-btn"><i class="arrow_left-right_alt"></i></a>';
	var h52 = '</div>';
	var span = '</div>';
	var span2 = '<div class="product-info mt-15 text-center">';
	var input ='<a href="../store/storeDetails.do?s_brand_name=';
	var input2 = '">';
	var div7 ='<p>';
	var endP='</p>';
	var p1 = '</a>';
	var p2 = '<h6>aa</h6>';
	var div8 ='</div>';
	var div9 ='</div>';
	var a1 = '</div>';

       for(var i=0; i<data.listVO2size; i++){
		var listContent =
			div1+
			div2+
			div3+
			div4+
			div5+
			div6+
			h51+
			titleA+
			titleAend+
			aEnd+
			h52+
			span+
			span2+
			input+	listVO2[i].s_brand_name	+input2+
			div7+ listVO2[i].s_brand_name +endP+
			p1+
			p2+
			div8+ 
			div9+
			a1+
			
			
						 
		$('#storeList').append(listContent);
		
		
		
		
		
		
		
		
		
		
		
	}
}