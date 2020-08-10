(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_Spin");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Spin("Spin02","20","152","160","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_increment("10");
            obj.set_min("100");
            obj.set_max("200");
            obj.set_value("100");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin03","118","240","96","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_increment("10");
            obj.set_min("100");
            obj.set_max("200");
            obj.set_value("100");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin00","20","64","160","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_value("1");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin04","118","269","96","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_increment("10");
            obj.set_type("noneditable");
            obj.set_min("100");
            obj.set_max("200");
            obj.set_value("100");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin06","18","386","88","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_increment("1000");
            obj.set_buttonposition("left");
            obj.set_min("10000");
            obj.set_max("20000");
            obj.set_value("100");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin05","118","298","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_increment("10");
            obj.set_type("spinonly");
            obj.set_min("100");
            obj.set_max("200");
            obj.set_value("100");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","18","269","95","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("non editable");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","18","240","95","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("normal");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","18","298","95","24",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("spin only");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","10","40","250","24",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("☞ Basic Usage");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","10","10","250","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Spin");
            obj.set_cssclass("sta_WF_subtitle");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01","Spin06:5","386","144","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Display Comma");
            obj.set_value("false");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","Spin02:5","152","118","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("circulation");
            obj.set_value("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","128","282","24",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("☞ Increment: 10 / Max: 200 / Min: 100");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","8","216","282","24",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("☞ Type");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","8","362","282","24",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("☞ Spin Button Position");
            obj.set_cssclass("sta_WF_label");
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
        this.registerScript("Comp_Spin.xfdl", function() {

        this.chk_pass_onclick = function(obj,e)
        {
        	this.edt_auto.set_password(obj.value);
        };

        this.Spin02_onspin = function(obj,e)
        {
        	obj.set_circulation(this.CheckBox00.value);
        };

        this.CheckBox01_onclick = function(obj,e)
        {
        	this.Spin06.set_displaycomma(obj.value);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Spin02.addEventHandler("onspin",this.Spin02_onspin,this);
            this.Spin06.addEventHandler("onspin",this.Spin02_onspin,this);
            this.CheckBox01.addEventHandler("onclick",this.CheckBox01_onclick,this);
        };

        this.loadIncludeScript("Comp_Spin.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
