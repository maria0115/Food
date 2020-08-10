(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_Button");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button00","20","64","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Button");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","10","40","250","24",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("☞ Basic Usage");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","10","10","250","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Button");
            obj.set_cssclass("sta_WF_subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","248","146","24",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("☞ Expression");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new Button("Button06","20","272","248","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Dept Name");
            obj.set_expr("expr:\"Current time : \" + comp.parent.fn_getTime()");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","178","64","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Button disable");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","10","134","146","24",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("☞ Image & Icon");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","10","342","146","24",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("☞ Status");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new Button("btn_sun","20","366","37","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Sun");
            this.addChild(obj.name, obj);

            obj = new Button("btn_mon","62","366","37","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Mon");
            this.addChild(obj.name, obj);

            obj = new Button("btn_tue","104","366","37","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Tue");
            this.addChild(obj.name, obj);

            obj = new Button("btn_wed","146","366","37","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Wed");
            this.addChild(obj.name, obj);

            obj = new Button("btn_thu","188","366","37","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Thu");
            this.addChild(obj.name, obj);

            obj = new Button("btn_fri","230","366","37","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("Fri");
            this.addChild(obj.name, obj);

            obj = new Button("btn_sat","272","366","37","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("Sat");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","15","158","110","35",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Retrieve");
            obj.set_icon("URL(\"Images::img_b_select.png\")");
            obj.set_textPadding("0px 0px 0px 10px");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","133","158","110","35",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("AddRow");
            obj.set_icon("URL(\"Images::img_b_insert.png\")");
            obj.set_textPadding("0px 0px 0px 10px");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","251","158","110","35",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Delete");
            obj.set_icon("URL(\"Images::img_b_delete.png\")");
            obj.set_textPadding("0px 0px 0px 10px");
            this.addChild(obj.name, obj);

            obj = new Button("Button05","369","158","110","35",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Save");
            obj.set_icon("URL(\"Images::img_b_save.png\")");
            obj.set_textPadding("0px 0px 0px 10px");
            this.addChild(obj.name, obj);

            obj = new Button("Button07","495","163","30","25",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_textPadding("0px 0px 0px 10px");
            obj.set_background("url(\"Images::img_b_Print.png\") no-repeat center center");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Button("Button08","525","163","30","25",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_background("url(\"Images::img_b_setting.png\") no-repeat center center");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Comp_Button.xfdl", function() {
        this.fn_getTime = function()
        {
        	var objDate = new Date();
        	var sTime  = objDate.getHours().toString().padLeft(2, "0")   + ":";
        		sTime += objDate.getMinutes().toString().padLeft(2, "0") + ":";
        		sTime += objDate.getSeconds().toString().padLeft(2, "0");

        	return sTime;
        }

        this.fn_status = function(obj,e)
        {
        	var bStatus = obj.getSelectStatus();
        	if(bStatus){
        		obj.setSelectStatus(false);
        	}
        	else{
        		obj.setSelectStatus(true);
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_sun.addEventHandler("onclick",this.fn_status,this);
            this.btn_mon.addEventHandler("onclick",this.fn_status,this);
            this.btn_tue.addEventHandler("onclick",this.fn_status,this);
            this.btn_wed.addEventHandler("onclick",this.fn_status,this);
            this.btn_thu.addEventHandler("onclick",this.fn_status,this);
            this.btn_fri.addEventHandler("onclick",this.fn_status,this);
            this.btn_sat.addEventHandler("onclick",this.fn_status,this);
        };

        this.loadIncludeScript("Comp_Button.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
