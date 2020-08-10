(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_Edit");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static01","10","188","275","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("☞ Max Length / Auto Skip / Auto Select");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","10","336","275","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("☞ Input Filter - digit");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","10","262","275","24",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("☞ Input Type - english & digit / number");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02","20","213","166","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_value("ABCD");
            obj.set_maxlength("4");
            obj.set_autoskip("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_auto","Edit02:5","213","166","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_value("Auto Select");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit05","20","361","166","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_value("nexacro platform");
            obj.set_inputtype("normal");
            obj.set_inputfilter("digit");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit03","20","287","166","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_value("nexacro platform17");
            obj.set_inputtype("english,digit");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit04","Edit03:5","287","166","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_value("-1,234.55");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","20","65","166","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_value("nexacro platform");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_pass","290","188","131","24",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Password Type");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","10","40","250","24",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("☞ Basic Usage");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","10","10","250","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Edit");
            obj.set_cssclass("sta_WF_subtitle");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit06","20","435","166","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_inputmode("upper");
            obj.set_inputtype("english");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","410","275","24",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("☞ Input Mode - Upper Only");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","10","114","162","24",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("☞ Read Only");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit07","20","139","166","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_value("nexacro platform");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Button01","text","gds_dept","DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Comp_Edit.xfdl", function() {

        this.chk_pass_onclick = function(obj,e)
        {
        	this.edt_auto.set_password(obj.value);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.chk_pass.addEventHandler("onclick",this.chk_pass_onclick,this);
            this.chk_pass.addEventHandler("onchanged",this.chk_pass_onchanged,this);
        };

        this.loadIncludeScript("Comp_Edit.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
