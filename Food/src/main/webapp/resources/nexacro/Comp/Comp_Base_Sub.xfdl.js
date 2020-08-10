(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_Base_Sub");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(320,200);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static04","10","89","80","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Button");
            obj.set_border("");
            obj.set_background("");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","89","89",null,"50","50",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablebg");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","10","138","80","50",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Edit");
            obj.set_border("");
            obj.set_background("");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","89","138",null,"50","50",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablebg");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","10","40","80","50",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Static");
            obj.set_border("");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","89","40",null,"50","50",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablebg");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","10","250","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Linked Form");
            obj.set_cssclass("sta_WF_subtitle");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","99","98","100","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Save");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","99","151","Static06:90%","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_value("nexacro platform");
            this.addChild(obj.name, obj);

            obj = new Static("Static25","99","53","180","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("nexacro platform");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",320,200,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Comp_Base_Sub.xfdl", function() {


        this.fn_open = function(obj,e)
        {
        /*
        	var sID    = obj.user_MID;
        	var sName  = nexacro.getApplication().gds_menu.lookup("MENU_ID", sID, "MENU_NAME");
        	var sURL   = nexacro.getApplication().gds_menu.lookup("MENU_ID", sID, "FORM_URL");

        	nexacro.getApplication().mainframe.VFrameSet0.HFrameSet0.LeftFrame.form.fn_openForm(sID, sName, sURL);
        */
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("Comp_Base_Sub.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
