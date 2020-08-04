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
            obj = new Dataset("board", this);
            obj._setContents("<ColumnInfo><Column id=\"boardtype\" type=\"INT\" size=\"256\" sumtext=\"\"/><Column id=\"b_no\" type=\"INT\" size=\"256\" sumtext=\"\"/><Column id=\"userid\" type=\"STRING\" size=\"100\" sumtext=\"\"/><Column id=\"title\" type=\"STRING\" size=\"40\" sumtext=\"\"/><Column id=\"b_content\" type=\"STRING\" size=\"200\" sumtext=\"\"/><Column id=\"b_date\" type=\"DATE\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("listdiv","-170","-15","1280","710",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","350","99","811","428",null,null,null,null,null,null,this.listdiv.form);
            obj.set_taborder("0");
            obj.set_binddataset("board");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"241\"/><Column size=\"204\"/><Column size=\"123\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"게시판번호\"/><Cell col=\"1\" text=\"글번호\"/><Cell col=\"2\" text=\"작성자\"/><Cell col=\"3\" text=\"제목\"/><Cell col=\"4\" text=\"내용\"/><Cell col=\"5\" text=\"작성일\"/></Band><Band id=\"body\"><Cell text=\"bind:boardtype\"/><Cell col=\"1\" text=\"bind:b_no\"/><Cell col=\"2\" text=\"bind:userid\"/><Cell col=\"3\" text=\"bind:title\"/><Cell col=\"4\" text=\"bind:b_content\"/><Cell col=\"5\" text=\"bind:b_date\"/></Band></Format></Formats>");
            this.listdiv.addChild(obj.name, obj);

            obj = new Combo("boardType","350","66","203","33",null,null,null,null,null,null,this.listdiv.form);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var listdiv_form_boardType_innerdataset = new nexacro.NormalDataset("listdiv_form_boardType_innerdataset", obj);
            listdiv_form_boardType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">QnA</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">밥친구</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">매장리뷰</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">예약목록</Col></Row></Rows>");
            obj.set_innerdataset(listdiv_form_boardType_innerdataset);
            obj.set_text("Combo00");
            this.listdiv.addChild(obj.name, obj);

            obj = new Combo("searchType","350","527","203","25",null,null,null,null,null,null,this.listdiv.form);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var listdiv_form_searchType_innerdataset = new nexacro.NormalDataset("listdiv_form_searchType_innerdataset", obj);
            listdiv_form_searchType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">userId</Col><Col id=\"datacolumn\">작성자</Col></Row><Row><Col id=\"codecolumn\">title</Col><Col id=\"datacolumn\">제목</Col></Row><Row><Col id=\"codecolumn\">b_content</Col><Col id=\"datacolumn\">내용</Col></Row></Rows>");
            obj.set_innerdataset(listdiv_form_searchType_innerdataset);
            obj.set_text("Combo01");
            this.listdiv.addChild(obj.name, obj);

            obj = new Edit("keyword","553","527","420","25",null,null,null,null,null,null,this.listdiv.form);
            obj.set_taborder("3");
            this.listdiv.addChild(obj.name, obj);

            obj = new Button("searchBtn","973","527","188","25",null,null,null,null,null,null,this.listdiv.form);
            obj.set_taborder("4");
            obj.set_text("검색");
            this.listdiv.addChild(obj.name, obj);

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
        	var id = "search";
            var url = "http://localhost:8080/Food/nexasearch.do";
            var reqDs = "";
            var respDs = "dsdept=ar";
            var args = "";
            var callback = "fn_callback";
        	 this.transaction(id, url, reqDs, respDs, args, callback);

        	this.fn_callback = function(svcID, errCD, errMSG){
        		let ret = (errMSG=="FAILED" || svcID != "search") ? "error" : "success";
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
            this.listdiv.form.boardType.addEventHandler("onitemchanged",this.boardType_onitemchanged,this);
            this.listdiv.form.searchType.addEventHandler("onitemchanged",this.searchType_onitemchanged,this);
            this.listdiv.form.searchBtn.addEventHandler("onclick",this.searchBtn_onclick,this);
        };

        this.loadIncludeScript("Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
