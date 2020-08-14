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




var searchWard;
var category;
var curPage;
var writerData_total_page;
var defaultOpts = {
	totalPages : 20,
	onPageClick : function(event, page) {
		$('#page-content').text('Page ' + page);
		curPage = page;
		console.log('curPage확인 :' + curPage);
		getWriterDataInPaging(category);
	}
};

// 윈도우 온로드랑 비슷개념
$(function() {
	category="all";
	getWriterData(category);
	//셀렉트박스 바꿨을때
	$('#selectBox').change(changeselectBox=function(){
		category = $(this).val();
		
		getWriterData(category);
	});
	
	

	//검색버튼에서 엔터키 눌렸을때
	$("#listSearch").keypress(function(e) {
		if (e.which == 13) {
			getWriterData(category);
		}
	});
	// 검색버튼 클릭했을때
	$("#searchButton").on("click", function(e) {
		getWriterData(category);
		
	})
	
	
	$(document).on("click", ".btn-primary", updateBtnEvent);
	$(document).on("click", ".btn-warning", deleteBtnEvent);
});
//셀렉박스클릭시 텍스트박스 초기화
$("#selectBox").click(function(){
	$("#listSearch").val("");
});


function updateBtnEvent() {
	console.log($(this).parent().prev().prev().text());
	console.log($(this).parent().prev().text());
	$(this).next().submit();
}

function deleteBtnEvent() {
	console.log($(this).parent().prev().prev().prev().text());
	console.log($(this).parent().prev().prev().text());
	$(this).next().submit();
}
function getWriterDataInPaging(category) {
	$.ajax({
		type : 'post',
		async : true,
		url : 'storelist.do',
		contentType : 'application/x-www-form-urlencoded;charset=UTF-8',
		data : {
			"searchWord" : $('#listSearch').val(), // 검색텍스트박스 value 값가져와서 넘기기
			"s_category" : category,
			"s_brand_name" : $('#title').val(),
			"s_address" : $('#addrs').val(),
			"curPage" : curPage,
		},
		dataType : 'json',
		success : function(resultData) {
			drawWriterTable(resultData);
			console.log("페이지 안에서 뭔가를 불러오긴하냐");
			console.log(resultData);
			console.log("ajax 안에서 curPage 확인 : " + curPage);
		},
		error : function(request, status, error) {
			console.log("code:" + request.status + "\n" + "message:"
					+ request.responseText + "\n" + "error:" + error);
		}

	});
}


function getWriterData(category) {

	
	$.ajax({
		type : 'post',
		async : true,
		url : 'storelist.do',
		contentType : 'application/x-www-form-urlencoded;charset=UTF-8',
		data : {
			"searchWord" : $('#listSearch').val(), // 검색텍스트박스 value 값가져와서 넘기기
			"s_category" : category,
			"s_brand_name" : $('#title').val(),
			"s_address" : $('#addrs').val(),
			"curPage" : curPage
		},
		dataType : 'json',

		success : function(resultData) {

			console.log(resultData);
			drawWriterTable(resultData);
			var totalPages = resultData.pagination.pageCnt;
			

			var currentPage =1; 
			$('#pagination-demo').twbsPagination('destroy');
			$('#pagination-demo').twbsPagination($.extend({}, defaultOpts, {
				startPage : currentPage,
				totalPages : totalPages,
				first : "<<",
				prev : "<",
				next : ">",
				last : ">>"
			}));

		},
		error : function(request, status, error) {
			alert("실패패패패패iok" + "code:" + request.status + "\n" + "message:"
					+ request.responseText + "\n" + "error:" + error);
			console.log("code:" + request.status + "\n" + "message:"
					+ request.responseText + "\n" + "error:" + error);
		}

	});
}

// 데이터받아서 새로그려주기
function drawWriterTable(data) {
	console.log("그리기" + data);
	
	$('#storeTT').empty();
	div1 = '<div class="col-12 col-sm-6 col-lg-4">';
	div2 = '<div class="single-product-area mb-50">';
	div3 = '<div class="product-img" id="photo">';
	imgA = '<a href="../store/storeDetails.do?s_brand_name=';
	imgAtest ='">';
	imgSrc = '<img class="listImg" src="../resources/store/';
	imgSrcEnd = '.jpg" alt="" style="cursor:pointer" onclick="window.open("../resources/store/101번지남산돈까스 현대시티아울렛가산점.jpg","asdfo8or","scrollbars=yes,width=417,height=385,top=10,left=20");">';
	imgAend = '</a>';
	div4 = '<div class="product-tag">';
	aHot = '<a href="#">Hot</a>';
	div4End = '</div>';
	div5 = '<div class="product-meta d-flex">';
	div5a1 = '<a href="#" class="wishlist-btn"><i class="icon_heart_alt"></i></a>';
	div5a2 = '<a href="cart.html" class="add-to-cart-btn">Add to cart</a>';
	div5a3 = '<a href="#" class="compare-btn"><i class="arrow_left-right_alt"></i></a>';
	div5End = '</div>';
	div3End = '</div>';
	div6 = '<div class="product-info mt-15 text-center">';
	div6A = '<a href="../store/storeDetails.do?s_brand_name=';
	div6A2 = '">';
	pTag = '<p>';
	pTagEnd = '</p>';
	div6Aend = '</a>';
	h6Tag = '<h6>';
	h6TagEnd = '</h6>';
	div6End = '</div>';
	div2End = '</div>';
	div1End = '</div>';
	
	for (var i = 0; i < data.listVO2size; i++) {

		var listContent = div1 + div2 + div3 + imgA+ data.listVO2[i].s_brand_name +imgAtest+ imgSrc
				+ data.listVO2[i].s_brand_name + imgSrcEnd + imgAend 
			
				
				
				+ div6 + div6A + data.listVO2[i].s_brand_name
				+ div6A2 + pTag + data.listVO2[i].s_brand_name + pTagEnd
				+ div6Aend + div6End + div2End + div1End
		
		$('#storeTT').append(listContent);

	}
	
	
}

function searchButton(){
	var searchText = document.getElementById("listSearch").value;

	
	return searchText;
	
}







