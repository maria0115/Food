(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("WorkFrame");
            this.set_titletext("FrameForm_Work");
            if (Form == this.constructor)
            {
                this._setFormPosition(860,680);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_work","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",860,680,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("FrameForm_Work");

                p.div_work.set_taborder("0");
                p.div_work.set_text("Div00");
                p.div_work.set_border("0px none");
                p.div_work.move("0","0",null,null,"0","0");
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Phone_screen",480,768,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("WorkFrame.xfdl", function() {
        this.fv_formID   = "";
        this.fv_menuID  = "";
        this.fv_menuNM = "";
        this.fv_formURL = "";
        this.WorkFrame_onload = function(obj,e)
        {
        	var objOwnerFrame = this.getOwnerFrame();

        	this.fv_formID   = objOwnerFrame.param.FORM_ID;
        	this.fv_menuID  = objOwnerFrame.param.MENU_ID;
        	this.fv_menuNM = objOwnerFrame.param.MENU_NM;
        	this.fv_formURL = objOwnerFrame.param.FORM_URL;

        	this.set_titletext(this.fv_menuNM + " [" + this.fv_menuID + "]");

        	trace(this.fv_formURL);
        	this.div_work.set_url(this.fv_formURL);
        	this.div_work.form.resetScroll();
        };

        // 화면 활성화 시킬 경우 해당 화면의 Tabpage 선택)
        this.WorkFrame_onactivate = function(obj,e)
        {
        	nexacro.getApplication().mainframe.VFrameSet0.HFrameSet0.VFrameSet1.MDIFrame.form.fn_tabControl(this.fv_formID, "SELECT");
            this.div_work.form.resetScroll();
        	return;
        };

        // 화면에서 직접 Close 시
        this.WorkFrame_onclose = function(obj,e)
        {
        	nexacro.getApplication().mainframe.VFrameSet0.HFrameSet0.VFrameSet1.MDIFrame.form.fn_tabControl(this.fv_formID, "DELETE");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.WorkFrame_onload,this);
            this.addEventHandler("onactivate",this.WorkFrame_onactivate,this);
            this.addEventHandler("onclose",this.WorkFrame_onclose,this);
        };

        this.loadIncludeScript("WorkFrame.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
