(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TopFrame");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1022,50);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","201","0",null,"50","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_TF_bg");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","201","10","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_TF_allmnu");
            this.addChild(obj.name, obj);

            obj = new Menu("Menu00","231","10",null,"30","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("mnu_TF_menu");
            obj.set_innerdataset("gds_menu");
            obj.set_captioncolumn("MENU_NAME");
            obj.set_idcolumn("MENU_ID");
            obj.set_levelcolumn("MENU_LEVEL");
            obj.set_popupitemheight("24");
            obj.set_userdatacolumn("MENU_ID");
            obj.set_iconcolumn("MENU_ICON");
            obj.set_hotkeycolumn("MENU_KEY");
            obj.set_enablecolumn("MENU_ENABLE");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","20","10","160","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_image("URL(\"theme://images/sta_TF_logo.png\")");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1022,50,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("TopFrame.xfdl", function() {

        this.Menu00_onmenuclick = function(obj,e)
        {
        //	var sID       = e.id;		    //메뉴ID Key
        	var sID       = e.userdata;		    //메뉴ID Key
        	var sName  = nexacro.getApplication().gds_menu.lookup("MENU_ID", sID, "MENU_NAME");	//메뉴 명
        	var sURL     = nexacro.getApplication().gds_menu.lookup("MENU_ID", sID, "FORM_URL");	    //화면 URL

        	nexacro.getApplication().mainframe.VFrameSet0.HFrameSet0.LeftFrame.form.fn_openForm(sID, sName, sURL);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Menu00.addEventHandler("onmenuclick",this.Menu00_onmenuclick,this);
        };

        this.loadIncludeScript("TopFrame.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
