(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_Cont_Div_Sub");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(424,300);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_emp", this);
            obj.set_keystring("");
            obj._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"POS_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"10\"/><Column id=\"MEMO\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"FULL_NAME\">Olivia</Col><Col id=\"POS_CD\">02</Col><Col id=\"HIRE_DATE\">20101003</Col><Col id=\"SALARY\">83000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">ivory</Col><Col id=\"DEPT_CD\">01</Col><Col id=\"EMPL_ID\">AA001</Col></Row><Row><Col id=\"FULL_NAME\">John</Col><Col id=\"POS_CD\">02</Col><Col id=\"HIRE_DATE\">20051011</Col><Col id=\"SALARY\">76000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">false</Col><Col id=\"MEMO\">greenyellow</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"EMPL_ID\">AA002</Col></Row><Row><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20070206</Col><Col id=\"SALARY\">95000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">aliceblue</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"EMPL_ID\">BB001</Col></Row><Row><Col id=\"FULL_NAME\">Adam</Col><Col id=\"POS_CD\">04</Col><Col id=\"HIRE_DATE\">20010109</Col><Col id=\"SALARY\">88000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">greenyellow</Col><Col id=\"DEPT_CD\">04</Col><Col id=\"EMPL_ID\">CC001</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","8","237","214","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("this.parent.parent.edt_text.value;");
            this.addChild(obj.name, obj);

            obj = new Button("btn_divBtn","8","261","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Get");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_text","btn_divBtn:5","261","136","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","8","38",null,"97","55",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_emp");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Name\"/><Cell col=\"1\" text=\"Hire Date\"/><Cell col=\"2\" text=\"Salary\"/></Band><Band id=\"body\"><Cell text=\"bind:FULL_NAME\"/><Cell col=\"1\" text=\"bind:HIRE_DATE\"/><Cell col=\"2\" text=\"bind:SALARY\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","8","140","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Name");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name","112","140","142","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","8","169","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Hire Date");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","112","169","142","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","8","213","250","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("☞ Div To Form Component");
            obj.set_cssclass("sta_WF_label");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","10","10","162","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("☞ Linked Form");
            obj.set_cssclass("sta_WF_label");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",424,300,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","edt_name","value","ds_emp","FULL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","Calendar00","value","ds_emp","HIRE_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Comp_Div_Sub.xfdl", function() {
        this.btn_divBtn_onclick = function(obj,e)
        {
        	var sRtn = this.parent.parent.edt_text.value;
        	this.edt_text.set_value(sRtn);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_divBtn.addEventHandler("onclick",this.btn_divBtn_onclick,this);
        };

        this.loadIncludeScript("Comp_Div_Sub.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
