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
		url : 'storeDetailPaging.do',
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
			alert("getWriterData 실패"+"code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
			console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
		}
		
	});
}

function drawWriterTable(data){
	console.log(data);
	
	$('#reviewContainer').empty();
	var div1 = '<div class="comment-wrapper d-flex" style="padding: 25px 0;">';
    var div2 ='<div class="comment-author">';
	var div3Img =' <img src="/Food/resources/upload/';
	var div3ImgEnd = '" alt=""/>'
	var div4 ='</div>';
    var div5 ='<div class="comment-content" test="temp" onclick="divClick(this)">';
	var div6 ='<div class="d-flex align-items-center justify-content-between">';
	var h51 = '<h5 id="reviewName">';
	var titleA ='<a href="storeReviewDetails.do?b_no=';
	var titleAend = '">';
	var aEnd = '</a>';
	var h52 = '</h5>';
	var span = '<span class="comment-date">';
	var span2 = '</span>';
	var input ='<input type="hidden" name="b_num" value="';
	var input2 = '">';
	var div7 ='</div>';
	var p1 = '<p>';
	var p2 = '</p>';
	var div8 ='</div>';
	var div9 ='</div>';
	

       for(var i=0; i<data.listVO2size; i++){
		var listContent =
			div1+
			div2+
			div3Img + data.listVO2[i].v_fileName + div3ImgEnd+
			div4+
			div5+
			input+data.listVO2[i].b_no+input2+
			div6+
			h51+
			titleA+data.listVO2[i].b_no+titleAend +data.listVO2[i].title+aEnd +
			h52+
			span+data.listVO2[i].b_date+span2+
			
			div7+
			p1+data.listVO2[i].title+p2+
			div8+
			div9
			
			
			
						 
		$('#reviewContainer').append(listContent);
		
		
		
		
		
		
		
		
		
		
		
	}
}

//리뷰목록 클릭했을때 리뷰 상세보기 레이어팝업 띄우기
function divClick(elem){
	
	alert("시작:"+ $(this));	
	
	//var b_no = elem.getAttribute('test')
	//alert(b_no)
	//alert($(this).attr('test'));
	
	var childs = elem.childNodes;
	var b_num = childs[0].getAttribute('value');
	alert(b_num);
	$("#checkLock").val(b_num);
	
	$.ajax({
		type : 'post',
		async:true,
		url : 'reviewDetailsPop.do',
		contentType : 'application/x-www-form-urlencoded;charset=UTF-8',
		data : {
				"b_no" : b_num,
				 
				},
		dataType : 'json',
		success : function(resultData){ 
			layer_popup('#layer2',resultData)
			$("#reviewDetailBrandName").text(resultData.s_brand_name)
			$("#reviewDetailName").text(resultData.userId)
			$("#reviewDetailDate").text(resultData.b_date)
			$("#reviewDetailCount").text(resultData.viewCount)
			$("#reviewDetailTitle").val(resultData.title)
			$("#reviewDetailContent").val(resultData.b_content)
			$("#boardNoHidden").val(resultData.b_no)
			$("#reviewFileName").attr('src',"/Food/resources/upload/"+resultData.v_fileName);
			var aa = resultData.v_star
			for(i=0;i<aa;i++ ){
				$('#starTest').append($('<i class="fa fa-star" id="removeTest" aria-hidden="true" ></i>'));
				
			}
			
			$("#reviewcol").remove();
			$("#detailReviewModify").css({"display" : "inline-block"});
			$('#reviewDetailTitle').attr("readonly","readonly");
			$('#reviewDetailContent').attr("readonly","readonly");
			$('#detailModify').remove();
			$('#reviewDetailTitle').attr("style" , "border : none");
			$('#reviewDetailContent').attr("style" , "border : none");
			
			
		},
		error:function(request,status,error){
			alert("divClick실패"+"code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
			console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
		
		}
		
	});
	
	
}
//function close(){
//	alert("close실행")
//	
//	$.ajax({
//	
//		success : function(resultData){ 
//		var aa = resultData.v_star
//		for(i=0;i<aa;i++ ){
//			$('#starTest').remove();
//			
//			
//		}
//		
//	
//	}
//	});
//	
//}



function modifyre(){
	var b_num = $('#checkLock').val()
	
	$.ajax({
		type : 'post',
		async:true,
		url : 'reviewDetailsPop.do',
		contentType : 'application/x-www-form-urlencoded;charset=UTF-8',
		data : {
				"b_no" : b_num,
				 
				},
		dataType : 'json',
		success : function(resultData){ 
			layer_popup('#layer2',resultData)
			$("#reviewDetailBrandName").text(resultData.s_brand_name)
			$("#reviewDetailName").text(resultData.userId)
			$("#reviewDetailDate").text(resultData.b_date)
			$("#reviewDetailCount").text(resultData.viewCount)
			$("#reviewDetailTitle").val(resultData.title)
			$("#reviewDetailContent").val(resultData.b_content)
			$("#boardNoHidden").val(resultData.b_no)
			
			$("#reviewcol").remove();
			$("#detailReviewModify").css({"display" : "inline-block"});
			$('#reviewDetailTitle').attr("readonly","readonly");
			$('#reviewDetailContent').attr("readonly","readonly");
			$('#detailModify').remove();
			$('#reviewDetailTitle').attr("style" , "border : none");
			$('#reviewDetailContent').attr("style" , "border : none");

			
		},
		error:function(request,status,error){
			alert("divClick실패"+"code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
			console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
		}
		
	});
}






$('.btn-example').click(function(){
	
	
	var $href = $(this).attr('href');
	layer_popup($href);
	var aa = resultData.v_star
	
});


// 테스트
function layer_popup(el,resultData){

    var $el = $(el);        //레이어의 id를 $el 변수에 저장
    var isDim = $el.prev().hasClass('dimBg');   //dimmed 레이어를 감지하기 위한 boolean 변수

    isDim ? $('.dim-layer').fadeIn() : $el.fadeIn();

    var $elWidth = ~~($el.outerWidth()),
        $elHeight = ~~($el.outerHeight()),
        docWidth = $(document).width(),
        docHeight = $(document).height();

    // 화면의 중앙에 레이어를 띄운다.
    if ($elHeight < docHeight || $elWidth < docWidth) {
        $el.css({
            marginTop: -$elHeight /2,
            marginLeft: -$elWidth/2
        })
    } else {
        $el.css({top: 0, left: 0});
    }

    $el.find('a.btn-layerClose').click(function(resultData){
    	
    	isDim ? $('.dim-layer').fadeOut() : $el.fadeOut(); // 닫기 버튼을 클릭하면 레이어가 닫힌다.
    	$('#removeTest').remove();
    	$('#removeTest').remove();
    	$('#removeTest').remove();
    	$('#removeTest').remove();
    	$('#removeTest').remove();
    	return false;
    });

    $('.layer .dimBg').click(function(){
        $('.dim-layer').fadeOut();
        return false;
    });

}

// 리뷰 삭제 버튼 클릭시 
$('#detailReviewDelete').click(function(){
    
	var result = confirm("삭제하시겠습니까 ? ");
	
	if(result){
	    detailReviewDelete();
	    alert("삭제되었습니다");
	}else{
	    return false;
	}


});

// 리뷰 디테일에서 삭제버튼 눌렸을때 
function detailReviewDelete() {
	alert("dd")
	
	
	$.ajax({
		type : 'post',
		async:true,
		url : 'storeReviewDetaildelete.do',
		contentType : 'application/x-www-form-urlencoded;charset=UTF-8',
		data : {
					
			"b_no" : $("#boardNoHidden").val()
				
				},
		dataType : 'json',
		success : function(resultData){
			
			$('.dim-layer').fadeOut();
			getWriterData();
			
		},
		error:function(request,status,error){
			alert("삭제실패입니다k"+"code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
			console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
		}
		
	});
	
	
}

//수정버튼 눌렀을때
$('#detailReviewModify').click(function(){
    
	$('#reviewDetailTitle').removeAttr("readonly","readonly");
	$('#reviewDetailContent').removeAttr("readonly","readonly");
	$('#reviewDetailTitle').attr("style","border : revert");
	$('#reviewDetailContent').attr("style","border : revert");
	$("#detailReviewModify").css({"display" : "none"});
	$div = $('<a href="#none" id ="detailModify">수정완료</a>');
	$("#btnArea").append($div);
	
	
	$fileForm = $('<form id="FILE_FORM" method="post" enctype="multipart/form-data" action=""> </form>');
	$fileDiv = $('<div class="col-12" id="reviewcol"> </div>');
	$fileDivInputFile=$('<input type="file" name="file" id="file" maxlength="60" size="40">');
	$fileDivInputBtn = $('<input type="button" class="btn alazea-btn" id="reviewInsert" value="리뷰등록">');
	$('#reviewcol').append($fileForm);
	$("#titleAndContent").append($fileDiv);
	$("#reviewcol").append($fileDivInputFile);
	

	
	
	
	$('#detailModify').click(function(){
		alert("dd")
		detailReviewModify();
		
	});


});



//리뷰 디테일에서 수정완료 눌렸을때 
function detailReviewModify() {
	alert("수정완료 스크립트");

	
	$.ajax({
		type : 'post',
		async:true,
		url : 'storeReviewDetailsmodifyEnd.do',
		contentType : 'application/x-www-form-urlencoded;charset=UTF-8',
		data : {
				"b_no" : $("#boardNoHidden").val(),
				"s_brand_name" :$('#title').val(),		
				"title": $('#reviewDetailTitle').val(),
				"b_content" : $('#reviewDetailContent').val(),
				"v_fileName" : $('#file').val()
				},
		dataType : 'json',
		success : function(resultData){
			fileeee=$('#file').val();
			alert(fileeee);
			$('.dim-layer').fadeOut();
			getWriterData();
			alert($("#boardNoHidden").val());
	

			alert("다시보기");
			modifyre();
			
		},
		error:function(request,status,error){
			alert("실패패패패패iok"+"code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
			console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
		}
		
	});
	
	
}























