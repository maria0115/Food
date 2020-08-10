(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_Div");
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
            obj.set_text("Div");
            obj.set_cssclass("sta_WF_subtitle");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_fmBtn","18","432","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Get");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","18","384","272","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("this.div_contents.form.edt_text.value;");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_text","btn_fmBtn:5","432","167","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_value("Form Component");
            obj.set_positionstep("0");
            obj.set_text("Form Component");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","18","408","272","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_positionstep("0");
            obj.set_text("this.div_linked.form.edt_text.value;");
            this.addChild(obj.name, obj);

            obj = new Div("div_comp","400","383","380","200",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div00");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_div","5","7","219","24",null,null,null,null,null,null,this.div_comp.form);
            obj.set_taborder("0");
            obj.set_text(" 1. Div Color Change > Yellow");
            obj.set_textAlign("left");
            this.div_comp.addChild(obj.name, obj);

            obj = new Button("btn_form","5","39","219","24",null,null,null,null,null,null,this.div_comp.form);
            obj.set_taborder("1");
            obj.set_text(" 2. Div.Form Color Change > Pink");
            obj.set_textAlign("left");
            this.div_comp.addChild(obj.name, obj);

            obj = new Button("btn_size","5","71","219","24",null,null,null,null,null,null,this.div_comp.form);
            obj.set_taborder("2");
            obj.set_text(" 3. Div.Form Size Change");
            obj.set_textAlign("left");
            this.div_comp.addChild(obj.name, obj);

            obj = new Static("Static02","400","360","250","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("☞ Div Structure");
            obj.set_cssclass("sta_WF_label");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Div("div_contents","10","40","380","300",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","8","38",null,"97","9",null,null,null,null,null,this.div_contents.form);
            obj.set_taborder("");
            obj.set_binddataset("ds_emp");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Name\"/><Cell col=\"1\" text=\"Hire Date\"/><Cell col=\"2\" text=\"Salary\"/></Band><Band id=\"body\"><Cell text=\"bind:FULL_NAME\"/><Cell col=\"1\" text=\"bind:HIRE_DATE\"/><Cell col=\"2\" text=\"bind:SALARY\"/></Band></Format></Formats>");
            this.div_contents.addChild(obj.name, obj);

            obj = new Edit("Edit00",null,"140","142","24","124",null,null,null,null,null,this.div_contents.form);
            obj.set_taborder("1");
            this.div_contents.addChild(obj.name, obj);

            obj = new Calendar("Calendar00",null,"169","142","24","124",null,null,null,null,null,this.div_contents.form);
            obj.set_taborder("2");
            this.div_contents.addChild(obj.name, obj);

            obj = new Button("btn_divBtn","8","261","70","24",null,null,null,null,null,null,this.div_contents.form);
            obj.set_taborder("3");
            obj.set_text("Get");
            this.div_contents.addChild(obj.name, obj);

            obj = new Static("Static00","8","237","175","24",null,null,null,null,null,null,this.div_contents.form);
            obj.set_taborder("5");
            obj.set_text("this.edt_form.value;");
            this.div_contents.addChild(obj.name, obj);

            obj = new Edit("edt_text","btn_divBtn:5","261","156","24",null,null,null,null,null,null,this.div_contents.form);
            obj.set_taborder("4");
            this.div_contents.addChild(obj.name, obj);

            obj = new Static("Static08","8","140","100","24",null,null,null,null,null,null,this.div_contents.form);
            obj.set_taborder("6");
            obj.set_text("Name");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablelabel");
            this.div_contents.addChild(obj.name, obj);

            obj = new Static("Static01","8","169","100","24",null,null,null,null,null,null,this.div_contents.form);
            obj.set_taborder("7");
            obj.set_text("Hire Date");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablelabel");
            this.div_contents.addChild(obj.name, obj);

            obj = new Static("Static03","8","213","250","24",null,null,null,null,null,null,this.div_contents.form);
            obj.set_taborder("8");
            obj.set_text("☞ Div To Form Component");
            obj.set_cssclass("sta_WF_label");
            obj.set_positionstep("0");
            this.div_contents.addChild(obj.name, obj);

            obj = new Static("Static02","10","10","250","24",null,null,null,null,null,null,this.div_contents.form);
            obj.set_taborder("9");
            obj.set_text("☞ Contents Form");
            obj.set_cssclass("sta_WF_label");
            obj.set_positionstep("0");
            this.div_contents.addChild(obj.name, obj);

            obj = new Div("div_linked","400","40",null,"300","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_url("Comp::Comp_Div_Sub.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","10","360","250","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("☞ Form To Div Component");
            obj.set_cssclass("sta_WF_label");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","div_contents.form.Edit00","value","ds_emp","FULL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_contents.form.Calendar00","value","ds_emp","HIRE_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Comp::Comp_Div_Sub.xfdl");
        };
        
        // User Script
        this.registerScript("Comp_Div.xfdl", function() {

        this.div_comp_btn_div_onclick = function(obj,e)
        {
        	this.div_comp.set_background("yellow");
        };

        this.div_comp_btn_form_onclick = function(obj,e)
        {
        	this.div_comp.form.set_background("pink");
        };

        this.div_comp_btn_size_onclick = function(obj,e)
        {
        	this.div_comp.form.set_width(350);
        	this.div_comp.form.set_height(150);
        };


        // Form Comp--> Div Comp
        this.btn_fmBtn_onclick = function(obj,e)
        {
        	var sRtn = this.div_linked.form.edt_name.value;
        	this.edt_text.set_value(sRtn);
        };

        // Contents Div Comp--> Form Comp
        this.div_contents_btn_divBtn_onclick = function(obj,e)
        {
        	var sRtn = this.edt_text.value;
        	this.div_contents.form.edt_text.set_value(sRtn);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_fmBtn.addEventHandler("onclick",this.btn_fmBtn_onclick,this);
            this.div_comp.form.btn_div.addEventHandler("onclick",this.div_comp_btn_div_onclick,this);
            this.div_comp.form.btn_form.addEventHandler("onclick",this.div_comp_btn_form_onclick,this);
            this.div_comp.form.btn_size.addEventHandler("onclick",this.div_comp_btn_size_onclick,this);
            this.div_contents.form.btn_divBtn.addEventHandler("onclick",this.div_contents_btn_divBtn_onclick,this);
        };

        this.loadIncludeScript("Comp_Div.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
