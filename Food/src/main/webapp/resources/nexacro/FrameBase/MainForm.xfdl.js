(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MainForm");
            this.set_background("#a5a5a5");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("st_base","0","14","50.00%","60",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","st_base:-276","132","542","32",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Unified Framework for Real OSMU");
            obj.set_font("normal 700 28px/normal \"Verdana\"");
            obj.set_textAlign("center");
            obj.set_color("#f2f753");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","st_base:-256","170","512","78",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_font("normal bold 18px/normal \"Verdana\"");
            obj.set_text("Simple, Convenient and Fast Development\r\nfor Complex Enterprise Environments");
            obj.set_textAlign("center");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","st_base:-161","263","322","90",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_image("URL(\"Images::img_nexacro17.png\")");
            obj.set_stretch("fixaspectratio");
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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.MainForm_onload,this);
        };

        this.loadIncludeScript("MainForm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
