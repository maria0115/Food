(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("LeftFrame");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(160,663);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grd", this);
            obj._setContents("<ColumnInfo><Column id=\"data\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"formurl\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">Environment</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"data\">ScreenDefinition</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"data\">Variables</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"data\">Cookies</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"data\">Script</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"data\">TypeDefinition</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"data\">Objects</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"data\">Protocols</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"data\">Update</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"data\">App Information</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"data\">AppVariables</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"data\">Temp</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"data\">Template01</Col><Col id=\"level\">1</Col><Col id=\"formurl\">Temp::Template01.xfdl</Col></Row><Row><Col id=\"data\">Template02</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"data\">CompGuide</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"data\">CompGuide01</Col><Col id=\"level\">1</Col><Col id=\"formurl\">CompGuide::CompGuide01.xfdl</Col></Row><Row><Col id=\"data\">CompGuide02</Col><Col id=\"level\">1</Col><Col id=\"formurl\">CompGuide::CompGuide02.xfdl</Col></Row><Row><Col id=\"data\">CompGuide03</Col><Col id=\"level\">1</Col><Col id=\"formurl\">CompGuide::CompGuide03.xfdl</Col></Row><Row><Col id=\"data\">CompGuide04</Col><Col id=\"level\">1</Col><Col id=\"formurl\">CompGuide::CompGuide04.xfdl</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_LF_bg");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","30",null,null,"0","0",null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("grd_LF_mnutree");
            obj.set_binddataset("gds_menu");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeuseimage("true");
            obj.set_treeuseline("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"30\"/></Rows><Band id=\"body\"><Cell text=\"bind:MENU_NAME\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:MENU_LEVEL\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","0","0","50%","29",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("Menu");
            obj.set_cssclass("btn_LF_mnu");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01","Button00:0","0","50%","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("Bookmark");
            obj.set_cssclass("btn_LF_mnu");
            this.Div00.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",160,663,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("LeftFrame.xfdl", function() {

        this.LeftFrame_onload = function(obj,e)
        {
        	this.Div00.form.Button00.setSelectStatus(true);
        };

        this.Div00_Grid00_oncelldblclick = function(obj,e)
        {
        	var objDs = obj.getBindDataset();

        	var sID   = objDs.getColumn(e.row, "MENU_ID");		//메뉴ID Key
        	var sName = objDs.getColumn(e.row, "MENU_NAME");	//메뉴 명
        	var sURL  = objDs.getColumn(e.row, "FORM_URL");	    //화면 URL

        	this.fn_openForm(sID, sName, sURL);
        };

        this.fn_openForm = function(sID, sName, sURL)
        {
        	if(sURL.length <= 0) return;

        	var objApp = nexacro.getApplication();
        	var nCnt = objApp.gds_openForm.getRowCount();
        	if(nCnt >= 10){
        		this.alert("The Form can be opened up to 10.");
        		return;
        	}

        	//업무영역 Size, application.av_WorkFrame --> WorkFrame Path
        	var nWidth  = objApp.av_WorkFrame.getOffsetWidth();
        	var nHeight = objApp.av_WorkFrame.getOffsetHeight();

        	//화면 ID 생성("FORM_" + 메뉴ID + random)
        	var sFormID = "FORM_" + sID + "_" + parseInt(Math.random() * 1000);

        	var objChildFrame = new ChildFrame();
        	objChildFrame.init(sFormID, 0, 0, nWidth, nHeight);

        	objApp.av_WorkFrame.addChild(sFormID, objChildFrame);

        	objChildFrame.set_resizable(true);
         	objChildFrame.set_openstatus("maximize");
        	objChildFrame.set_border("1px solid #5d6468");

        	var oParam = { FORM_ID : sFormID,
                           MENU_ID : sID,
                           MENU_NM : sName,
                           FORM_URL : sURL,
                           FORM_TYPE : "ADD" };

        	//Work Frame에 필요한 정보 Set
        	objChildFrame.param = oParam;
         	objChildFrame.set_formurl("FrameBase::WorkFrame.xfdl");
        	objChildFrame.show();

        	//열린 화면 Tab 생성
        	nexacro.getApplication().mainframe.VFrameSet0.HFrameSet0.VFrameSet1.MDIFrame.form.fn_addTab(oParam);

        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.LeftFrame_onload,this);
            this.Div00.form.Grid00.addEventHandler("oncelldblclick",this.Div00_Grid00_oncelldblclick,this);
        };

        this.loadIncludeScript("LeftFrame.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
