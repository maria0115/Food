(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Work");
            this.set_titletext("Form_Work");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"b_no\" type=\"INT\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"b_content\" type=\"STRING\" size=\"256\"/><Column id=\"b_date\" type=\"DATE\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","215","122","873","445",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"138\"/><Column size=\"243\"/><Column size=\"230\"/><Column size=\"179\"/></Columns><Rows><Row size=\"24\" band=\"head\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"작성자\"/><Cell col=\"2\" text=\"제목\"/><Cell col=\"3\" text=\"내용\"/><Cell col=\"4\" text=\"작성일\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("boardType","215","80","203","42",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var boardType_innerdataset = new nexacro.NormalDataset("boardType_innerdataset", obj);
            boardType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">QnA</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">밥친구</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">매장리뷰</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">예약목록</Col></Row></Rows>");
            obj.set_innerdataset(boardType_innerdataset);
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Combo("searchType","215","567","244","42",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var searchType_innerdataset = new nexacro.NormalDataset("searchType_innerdataset", obj);
            searchType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">userId</Col><Col id=\"datacolumn\">작성자</Col></Row><Row><Col id=\"codecolumn\">title</Col><Col id=\"datacolumn\">제목</Col></Row><Row><Col id=\"codecolumn\">b_content</Col><Col id=\"datacolumn\">내용</Col></Row></Rows>");
            obj.set_innerdataset(searchType_innerdataset);
            obj.set_text("Combo01");
            this.addChild(obj.name, obj);

            obj = new Edit("keyword","459","567","431","42",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Button("searchBtn","890","567","198","42",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("검색");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Work.xfdl", function() {

        this.searchBtn_onclick = function(obj,e)
        {
        	this.transaction(
        		"urlTest01",	//strSvcID,
        		"strURL::all",	//strURL("http://localhost:8080/step01/all" 직접 링크는 됨)
        		"",	        //strInDatasets,
        		" dsdept=ar ",  //strOutDatasets 데이터셋에 바인딩 될 부분,
        		"",		//"deptno=10dname=총무부", //strArgument  이부분은 파라미터 ,
        		"fn_callback"     //strCallbackFunc[,bAsync[,nDataType[,bCompress]]]
        	);
        	this.fn_callback = function(svcID, errCD, errMSG){
        		let ret = (errMSG=="FAILED" || svcID != "urlTest01") ? "error" : "success";
        		if(ret=="error")
        			this.alert("[폼이름_fn_callback] "+ret + " : " + svcID + ", " + errCD + ", " + errMSG);
        		else
        			this.alert(ret);
        	};

        };

        this.boardType_onitemchanged = function(obj,e)
        {

        };

        this.searchType_onitemchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.boardType.addEventHandler("onitemchanged",this.boardType_onitemchanged,this);
            this.searchType.addEventHandler("onitemchanged",this.searchType_onitemchanged,this);
            this.searchBtn.addEventHandler("onclick",this.searchBtn_onclick,this);
        };

        this.loadIncludeScript("Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
