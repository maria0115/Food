(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Pop_EmpSearch");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_emp", this);
            obj.set_keystring("");
            obj._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"FULL_NAME\">Olivia</Col><Col id=\"DEPT_CD\">01</Col><Col id=\"EMPL_ID\">AA001</Col></Row><Row><Col id=\"FULL_NAME\">John</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"EMPL_ID\">AA002</Col></Row><Row><Col id=\"FULL_NAME\">Dillon</Col><Col id=\"DEPT_CD\">03</Col><Col id=\"EMPL_ID\">AA003</Col></Row><Row><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"EMPL_ID\">BB001</Col></Row><Row><Col id=\"FULL_NAME\">Maia</Col><Col id=\"DEPT_CD\">04</Col><Col id=\"EMPL_ID\">BB002</Col></Row><Row><Col id=\"FULL_NAME\">Adam</Col><Col id=\"DEPT_CD\">04</Col><Col id=\"EMPL_ID\">CC001</Col></Row><Row><Col id=\"FULL_NAME\">Ray</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"EMPL_ID\">CC002</Col></Row><Row><Col id=\"FULL_NAME\">Cameron</Col><Col id=\"DEPT_CD\">03</Col><Col id=\"EMPL_ID\">CC003</Col></Row><Row><Col id=\"FULL_NAME\">Tyler</Col><Col id=\"DEPT_CD\">04</Col><Col id=\"EMPL_ID\">DD001</Col></Row><Row><Col id=\"FULL_NAME\">David</Col><Col id=\"DEPT_CD\">04</Col><Col id=\"EMPL_ID\">DD002</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CD\">01</Col><Col id=\"DEPT_NAME\">Accounting Team</Col></Row><Row><Col id=\"DEPT_CD\">02</Col><Col id=\"DEPT_NAME\">HR Team</Col></Row><Row><Col id=\"DEPT_CD\">03</Col><Col id=\"DEPT_NAME\">Sales Team</Col></Row><Row><Col id=\"DEPT_CD\">04</Col><Col id=\"DEPT_NAME\">Design Team</Col></Row><Row><Col id=\"DEPT_CD\">05</Col><Col id=\"DEPT_NAME\">Education Team</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","10","5","193","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Employees Search");
            obj.set_cssclass("sta_WF_emptitle");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","10","40",null,"310","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_emp");
            obj.set_autofittype("col");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"140\"/><Column size=\"80\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Dept\"/><Cell col=\"1\" text=\"ID\"/><Cell col=\"2\" text=\"Name\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPT_CD\" displaytype=\"combotext\" combodataset=\"ds_dept\" combocodecol=\"DEPT_CD\" combodatacol=\"DEPT_NAME\"/><Cell col=\"1\" text=\"bind:EMPL_ID\" textAlign=\"center\" displaytype=\"mask\" maskeditformat=\"AA-###\" maskedittype=\"string\"/><Cell col=\"2\" text=\"bind:FULL_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ok","131","358","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("OK");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel","201","358","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Cancel");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"0","30","30","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_background("URL(\"Images::img_search2.png\")");
            obj.set_border("0px none #ffffff");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00",null,"10","150","25","10",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NAME");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",400,400,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Pop_EmpSearch.xfdl", function() {

        this.Combo00_onitemchanged = function(obj,e)
        {
        	this.ds_emp.filter("DEPT_CD == '" + e.postvalue + "'");
        };

        this.btn_ok_onclick = function(obj,e)
        {
        	var sRtn  = this.ds_emp.getColumn(this.ds_emp.rowposition, "EMPL_ID") + "|";
        	    sRtn += this.ds_emp.getColumn(this.ds_emp.rowposition, "FULL_NAME");

        	this.close(sRtn);
        };

        this.Grid00_oncelldblclick = function(obj,e)
        {
        	this.btn_ok_onclick();
        };

        this.btn_cancel_onclick = function(obj,e)
        {
        	this.close();
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.grd_list.addEventHandler("oncelldblclick",this.Grid00_oncelldblclick,this);
            this.btn_ok.addEventHandler("onclick",this.btn_ok_onclick,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Combo00.addEventHandler("onitemchanged",this.Combo00_onitemchanged,this);
        };

        this.loadIncludeScript("Pop_EmpSearch.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
