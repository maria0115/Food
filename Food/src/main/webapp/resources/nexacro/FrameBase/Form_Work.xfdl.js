(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Emp");
            this.set_titletext("Employees");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_board", this);
            obj.set_keystring("");
            obj._setContents("<ColumnInfo><Column id=\"title\" type=\"STRING\" size=\"40\"/><Column id=\"userid\" type=\"STRING\" size=\"100\"/><Column id=\"b_no\" type=\"INT\" size=\"256\"/><Column id=\"b_date\" type=\"STRING\" size=\"256\"/><Column id=\"BOARDTYPE\" type=\"INT\" size=\"256\"/><Column id=\"b_content\" type=\"STRING\" size=\"200\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("SearchType", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">userid</Col><Col id=\"CONTENT\">작성자</Col></Row><Row><Col id=\"CODE\">title</Col><Col id=\"CONTENT\">제목</Col></Row><Row><Col id=\"CONTENT\">내용</Col><Col id=\"CODE\">b_content</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","10","40",null,"50","10",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("div_WFSA");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","285","13","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_verticalAlign("");
            obj.set_cssclass("btn_WF_search");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_search_nm","157","13","124","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            this.div_search.addChild(obj.name, obj);

            obj = new Radio("rdo_boardtype","431","13","328","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("-1");
            obj.set_columncount("-1");
            var div_search_form_rdo_boardtype_innerdataset = new nexacro.NormalDataset("div_search_form_rdo_boardtype_innerdataset", obj);
            div_search_form_rdo_boardtype_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">A</Col><Col id=\"datacolumn\">All  </Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">QnA  </Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">밥친구  </Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">매장리뷰  </Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">예약목록  </Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_rdo_boardtype_innerdataset);
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static04","349","16","73","16",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("BoardType");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00","10","13","81","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("BOARD");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("SearchType","85","13","69","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_datacolumn("CONTENT");
            obj.set_innerdataset("SearchType");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("st_title","10","5","193","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("BoardList");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_WF_emptitle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"5","60","30","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Grid("board","10","95",null,null,"396","10",null,null,null,null,this);
            obj.set_taborder("3");
            obj.getSetter("leftbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_binddataset("ds_board");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"제목\" color=\"#000000\"/><Cell col=\"1\" text=\"사용자\" color=\"#000000\"/><Cell col=\"2\" text=\"내용\" color=\"#000000\"/><Cell col=\"3\" text=\"작성날짜\" color=\"#000000\"/><Cell col=\"4\" text=\"BOARDTYPE\" color=\"#000000\"/><Cell col=\"5\" text=\"보드No\" color=\"#000000\"/></Band><Band id=\"body\"><Cell text=\"bind:title\" edittype=\"text\"/><Cell col=\"1\" text=\"bind:userid\" editlimit=\"\" edittype=\"mask\" maskeditformat=\"AAAA-#\" displaytype=\"mask\" maskedittype=\"string\"/><Cell col=\"2\" text=\"bind:b_content\" edittype=\"normal\"/><Cell col=\"3\" text=\"bind:b_date\" displaytype=\"date\" edittype=\"date\" textAlign=\"center\" calendarpopupsize=\"200 220\"/><Cell col=\"4\" text=\"expr:comp.parent.fn_boardtype(BOARDTYPE)\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:b_no\" edittype=\"normal\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_detail",null,"95","380",null,"10","10",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.getSetter("leftbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","128","12","240","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("5");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablebg");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static01","128","45","240","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("6");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablebg");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static09","128","78","240","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("8");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablebg");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static15","128","111","240","108",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("12");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablebg");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static17","128","218","240","106",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("14");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablebg");
            this.div_detail.addChild(obj.name, obj);

            obj = new Edit("b_no","128","324","240","30",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("6");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_accessibilityrole("edit");
            obj.set_enable("false");
            obj.set_text("");
            this.div_detail.addChild(obj.name, obj);

            obj = new Edit("title","133","17","162","24",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("0");
            this.div_detail.addChild(obj.name, obj);

            obj = new Edit("userid","133","50","162","24",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("1");
            this.div_detail.addChild(obj.name, obj);

            obj = new Radio("rdo_boardtype","133","221","229","101",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            var div_detail_form_rdo_boardtype_innerdataset = new nexacro.NormalDataset("div_detail_form_rdo_boardtype_innerdataset", obj);
            div_detail_form_rdo_boardtype_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">QnA</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">밥친구</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">매장리뷰</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">예약목록</Col></Row></Rows>");
            obj.set_innerdataset(div_detail_form_rdo_boardtype_innerdataset);
            this.div_detail.addChild(obj.name, obj);

            obj = new Calendar("b_date","133","83","162","24",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("3");
            this.div_detail.addChild(obj.name, obj);

            obj = new TextArea("b_content","133","117","229","97",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("4");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static08","9","78","120","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("7");
            obj.set_text("작성날짜");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablelabel");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static10","9","12","120","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("9");
            obj.set_text("제목");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_table_required");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static14","9","111","120","108",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("11");
            obj.set_text("내용");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablelabel");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static16","9","218","120","106",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("13");
            obj.set_text("BOARDTYPE");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablelabel");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static00","9","45","120","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("15");
            obj.set_text("UserId");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_table_required");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static03","9","324","120","30",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("16");
            obj.set_text("보드No");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablelabel");
            this.div_detail.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,600,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","div_detail.form.title","value","ds_board","title");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_detail.form.userid","value","ds_board","userid");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_detail.form.b_date","value","ds_board","b_date");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_detail.form.b_no","value","ds_board","b_no");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_detail.form.rdo_boardtype","value","ds_board","BOARDTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_detail.form.b_content","value","ds_board","b_content");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("Form_Work.xfdl","Lib::Common.xjs");
        this.registerScript("Form_Work.xfdl", function() {


        this.executeIncludeScript("Lib::Common.xjs"); /*include "Lib::Common.xjs"*/

        this.Form_onload = function(obj,e)
        {

        		var boardType_val =  encodeURI(this.div_search.form.rdo_boardtype.value,"UTF-8");

        		var id = "search";

        		var url ="https://115.91.88.227:60000/Food/nexasearch?boardType_val="+boardType_val;
        		var reqDs = "";
        		var respDs = "ds_board=ar";
        		var args = "";
        		var callback = "received";
        		this.transaction(id, url, reqDs, respDs, args, callback);

        		this.received = function(svcID, errCD, errMSG){
          		let ret = (errMSG=="FAILED" || svcID != "search") ? "error" : "success";
          		if(ret=="error")
          			this.alert("[폼이름_fn_callback] "+ret + " : " + svcID + ", " + errCD + ", " + errMSG);
          			//this.alert(ret);
        			}

        };



        this.fn_init = function(obj)
        {



        }






        // Delete Button
        this.btn_del_onclick = function(obj,e)
        {
        	alert("hihide9");
        	  var b_no_val = encodeURI(this.div_detail.form.b_no.value,"UTF-8");


        	var id = "del_b_no";
              //var url = "strURL::deptAdd;
         	 //
        	 var url ="https://115.91.88.227:60000/Food/del_b_no?b_no="+b_no_val;
              var reqDs = "";
              var respDs = "ds_board=ar";
              var args = "";
              var callback = "received";
              this.transaction(id, url, reqDs, respDs, args, callback);

        	  this.received = function(svcID, errCD, errMSG){
          		let ret = (errMSG=="FAILED" || svcID != "del_b_no") ? "error" : "success";
          		if(ret=="error")
          			this.alert("[폼이름_fn_callback] "+ret + " : " + svcID + ", " + errCD + ", " + errMSG);
          			//this.alert(ret);
        			}
        };


        this.out_var = "";
        this.fn_callback = function(svcID, errCD, errMSG)
        {
        	if(errCD < 0){
        		this.alert("Error: " + errMSG);
        		return;
        	}
        	if(svcID == "svcSelect"){
        		this.alert("Select Success");
        	}
        	else if(svcID == "svcSave"){
        		this.alert("Save Success");
        	}
        }

        // Today
        this.fn_today = function()
        {
        	var objDate = new Date();
        	var sToday  = objDate.getFullYear().toString();
        	    sToday += (objDate.getMonth()+1).toString().padLeft(2, "0")
        	    sToday += objDate.getDate().toString().padLeft(2, "0");

        	return sToday;
        }

        // boardtype Code --> Name
        this.fn_boardtype = function(arg)
        {
        	if(arg == 3){
        		return "QnA";
        	}if(arg == 4){
        		return "밥친구";
        	}if(arg == 2){
        		return "매장리뷰";
        	}if(arg == 5){
        		return "예약목록";
        	}
        }

        this.grd_list_onheadclick = function(obj,e)
        {
        //	this.cfn_GridSort(obj, e);
        };


        this.ds_emp_onrowsetchanged = function(obj,e)
        {
        	if(e.reason == 31){
        		this.setTimer(1, 20);
        	}
        };

        this.Form_Emp_ontimer = function(obj,e)
        {
        	if(e.timerid == 1){
        		this.killTimer(1);
        		this.fn_setRow(0);
        	}
        };

        this.fn_setRow = function(nRow)
        {
        	this.ds_emp.set_rowposition(nRow);
        }
        this.div_search_Combo00_onitemchanged = function(obj,e)
        {

        };



        this.div_search_rdo_boardtype_onitemchanged = function(obj,e)
        {
        	if(e.postvalue == "A")
         	{
         		this.ds_board.filter("");
         	}
         	else
         	{
         		this.ds_board.filter("BOARDTYPE == '" + e.postvalue + "'");
         	}
        };







        this.div_search_btn_dept_onclick = function(obj,e)
        {
        	  var searchType_val = encodeURI(this.div_search.form.SearchType.value,"UTF-8");
        	var keyword_val = encodeURI(this.div_search.form.edt_search_nm.value,"UTF-8");

        	if(searchType_val!="undefined"){
        	if(keyword_val=="undefined"){
        	keyword_val="";
        	}
        	var id = "searchtype";
              //var url = "strURL::deptAdd;
         	 //
        	 var url ="https://115.91.88.227:60000/Food/hello?searchType="+searchType_val+"&keyword="+keyword_val;
              var reqDs = "";
              var respDs = "ds_board=ar";
              var args = "";
              var callback = "received";
              this.transaction(id, url, reqDs, respDs, args, callback);

        	  this.received = function(svcID, errCD, errMSG){
          		let ret = (errMSG=="FAILED" || svcID != "searchtype") ? "error" : "success";
          		if(ret=="error")
          			this.alert("[폼이름_fn_callback] "+ret + " : " + svcID + ", " + errCD + ", " + errMSG);
          			//this.alert(ret);
        			}
        	}else{
        	alert("검색 type을 선택해주세요");
        	}

        };

        this.st_title_onclick = function(obj,e)
        {
        	location.href="/Food/manager/dashBoard.do"
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.addEventHandler("ontimer",this.Form_Emp_ontimer,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.div_search_btn_dept_onclick,this);
            this.div_search.form.rdo_boardtype.addEventHandler("onitemchanged",this.div_search_rdo_boardtype_onitemchanged,this);
            this.div_search.form.Static04.addEventHandler("onclick",this.div_search_Static04_onclick,this);
            this.div_search.form.SearchType.addEventHandler("onitemchanged",this.div_search_Combo00_onitemchanged,this);
            this.st_title.addEventHandler("onclick",this.st_title_onclick,this);
            this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.board.addEventHandler("onheadclick",this.grd_list_onheadclick,this);
            this.div_detail.form.title.addEventHandler("canchange",this.div_detail_edt_name_canchange,this);
            this.div_detail.form.userid.addEventHandler("onchanged",this.div_detail_userid_onchanged,this);
            this.div_detail.form.rdo_boardtype.addEventHandler("onitemchanged",this.div_detail_rdo_boardtype_onitemchanged,this);
            this.div_detail.form.Static10.addEventHandler("onclick",this.div_detail_Static10_onclick,this);
            this.ds_board.addEventHandler("cancolumnchange",this.ds_board_cancolumnchange,this);
            this.ds_board.addEventHandler("onrowsetchanged",this.ds_board_onrowsetchanged,this);
            this.ds_board.addEventHandler("onrowposchanged",this.ds_board_onrowposchanged,this);
        };

        this.loadIncludeScript("Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
