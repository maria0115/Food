(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_Cont_Tab");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_emp", this);
            obj.set_keystring("");
            obj._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"POS_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"10\"/><Column id=\"MEMO\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"FULL_NAME\">Olivia</Col><Col id=\"POS_CD\">02</Col><Col id=\"HIRE_DATE\">20101003</Col><Col id=\"SALARY\">83000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">ivory</Col><Col id=\"DEPT_CD\">01</Col><Col id=\"EMPL_ID\">AA001</Col></Row><Row><Col id=\"FULL_NAME\">John</Col><Col id=\"POS_CD\">02</Col><Col id=\"HIRE_DATE\">20051011</Col><Col id=\"SALARY\">76000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">false</Col><Col id=\"MEMO\">greenyellow</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"EMPL_ID\">AA002</Col></Row><Row><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20070206</Col><Col id=\"SALARY\">95000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">aliceblue</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"EMPL_ID\">BB001</Col></Row><Row><Col id=\"FULL_NAME\">Adam</Col><Col id=\"POS_CD\">04</Col><Col id=\"HIRE_DATE\">20010109</Col><Col id=\"SALARY\">88000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">greenyellow</Col><Col id=\"DEPT_CD\">04</Col><Col id=\"EMPL_ID\">CC001</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static08","10","10","250","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Tab");
            obj.set_cssclass("sta_WF_subtitle");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_fmBtn","28","432","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Get");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","28","408","282","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("this.Tab00.Tabpage1.form.edt_text.value;");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_text","103","432","167","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_value("Form Edit");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","395","380","250","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("☞ Tab Structure");
            obj.set_cssclass("sta_WF_label");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","20","380","250","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("☞ Form To Tabpage Component");
            obj.set_cssclass("sta_WF_label");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","10","40","380","320",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("TabPage1");
            this.Tab00.addChild(obj.name, obj);

            obj = new Grid("Grid01","8","38","361","97",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_emp");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Name\"/><Cell col=\"1\" text=\"Hire Date\"/><Cell col=\"2\" text=\"Salary\"/></Band><Band id=\"body\"><Cell text=\"bind:FULL_NAME\"/><Cell col=\"1\" text=\"bind:HIRE_DATE\"/><Cell col=\"2\" text=\"bind:SALARY\"/></Band></Format></Formats>");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static08","8","140","100","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("Name");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablelabel");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit00","112","140","142","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("1");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static01","8","169","100","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("Hire Date");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablelabel");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","112","169","142","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("2");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static03","8","213","250","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("☞ Tabpage To Form Component");
            obj.set_cssclass("sta_WF_label");
            obj.set_positionstep("0");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static00","8","237","175","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("this.edt_form.value;");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_tabBtn","8","261","70","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("Get");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_text","83","261","156","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("4");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static02","10","10","250","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_text("☞ Contents Form");
            obj.set_cssclass("sta_WF_label");
            obj.set_positionstep("0");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("TabPage2");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tab("Tab01","398","410","390","180",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab01);
            obj.set_text("Tabpage1");
            this.Tab01.addChild(obj.name, obj);

            obj = new Button("btn_tab","10","7","261","24",null,null,null,null,null,null,this.Tab01.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text(" 1. Tabpage Color Change > Yellow");
            obj.set_textAlign("left");
            this.Tab01.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_form","10","39","261","24",null,null,null,null,null,null,this.Tab01.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text(" 2. Tabpage Form Color Change -> Pink");
            obj.set_textAlign("left");
            this.Tab01.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_size","10","71","261","24",null,null,null,null,null,null,this.Tab01.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text(" 3. Tabpage Form Size");
            obj.set_textAlign("left");
            this.Tab01.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab01);
            obj.set_text("Tabpage2");
            this.Tab01.addChild(obj.name, obj);

            obj = new Tab("Tab02","400","40","380","320",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab02);
            obj.set_text("TabPage1");
            obj.set_url("Comp::Comp_Tab_Sub.xfdl");
            this.Tab02.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab02);
            obj.set_text("TabPage2");
            this.Tab02.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Tab00.Tabpage1.form.Edit00","value","ds_emp","FULL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Tab00.Tabpage1.form.Calendar00","value","ds_emp","HIRE_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Comp::Comp_Tab_Sub.xfdl");
        };
        
        // User Script
        this.registerScript("Comp_Tab.xfdl", function() {


        // Form Comp--> Div Comp
        this.btn_fmBtn_onclick = function(obj,e)
        {
        	var sRtn = this.Tab00.Tabpage1.form.Edit00.value;
        	this.edt_text.set_value(sRtn);
        };

        // Tabpage--> Form Comp
        this.Tab00_Tabpage1_btn_tabBtn_onclick = function(obj,e)
        {
        	var sRtn = this.edt_text.value;
        	this.Tab00.Tabpage1.form.edt_text.set_value(sRtn);
        };



        this.Tab01_Tabpage1_btn_tab_onclick = function(obj,e)
        {
        	this.Tab01.Tabpage1.set_background("yellow");
        };

        this.Tab01_Tabpage1_btn_form_onclick = function(obj,e)
        {
        	this.Tab01.Tabpage1.form.set_background("pink");
        };

        this.Tab01_Tabpage1_btn_size_onclick = function(obj,e)
        {
        	this.Tab01.Tabpage1.form.set_width(280);
        	this.Tab01.Tabpage1.form.set_height(120);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_fmBtn.addEventHandler("onclick",this.btn_fmBtn_onclick,this);
            this.Tab00.addEventHandler("onchanged",this.Tab00_onchanged,this);
            this.Tab00.Tabpage1.form.btn_tabBtn.addEventHandler("onclick",this.Tab00_Tabpage1_btn_tabBtn_onclick,this);
            this.Tab01.Tabpage1.form.btn_tab.addEventHandler("onclick",this.Tab01_Tabpage1_btn_tab_onclick,this);
            this.Tab01.Tabpage1.form.btn_form.addEventHandler("onclick",this.Tab01_Tabpage1_btn_form_onclick,this);
            this.Tab01.Tabpage1.form.btn_size.addEventHandler("onclick",this.Tab01_Tabpage1_btn_size_onclick,this);
            this.Tab02.addEventHandler("onchanged",this.Tab00_onchanged,this);
        };

        this.loadIncludeScript("Comp_Tab.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
