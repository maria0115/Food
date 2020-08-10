(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_CheckBox");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static07","10","40","250","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("☞ Basic Usage");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","20","64","160","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Marital Status");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox03","147","240","122","44",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Position-Right  ");
            obj.set_value("true");
            obj.set_iconPosition("right");
            obj.set_textAlign("");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox04","274","240","122","44",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Position-Top");
            obj.set_value("true");
            obj.set_iconPosition("top");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox05","401","240","122","44",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Position-Bottom");
            obj.set_value("true");
            obj.set_iconPosition("bottom");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox02","20","240","122","44",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Position-Left");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01","20","152","208","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("true \'Y\', false \'N\'");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_value("Y");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","10","10","250","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("CheckBox");
            obj.set_cssclass("sta_WF_subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","10","128","246","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("☞ true value / false value");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","10","216","190","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("☞ Icon Position");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_value","162","152","140","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_readonly("true");
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
        this.registerScript("Comp_CheckBox.xfdl", function() {

        this.CheckBox01_onchanged = function(obj,e)
        {
        	this.edt_value.set_value("value= " + this.CheckBox01.value);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.CheckBox01.addEventHandler("onchanged",this.CheckBox01_onchanged,this);
        };

        this.loadIncludeScript("Comp_CheckBox.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
