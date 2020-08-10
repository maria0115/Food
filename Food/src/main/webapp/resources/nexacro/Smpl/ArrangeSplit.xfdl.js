(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ArrangeSpli");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new ImageViewer("img_split","313","151","10","10",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("red");
            obj.set_cursor("move");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","10","10","400","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Sample Split Using Arrangement - Red Icon Drag&Drop");
            obj.set_cssclass("sta_WF_subtitle");
            this.addChild(obj.name, obj);

            obj = new Div("div_top","10","50",null,null,"10","img_split:1",null,null,"50",null,this);
            obj.set_taborder("1");
            obj.set_text("Top");
            obj.set_border("1px solid pink");
            this.addChild(obj.name, obj);

            obj = new Div("div_left","10","img_split:1",null,null,"img_split:1","10","100",null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Left");
            obj.set_border("1px solid skyblue");
            this.addChild(obj.name, obj);

            obj = new Div("div_right","img_split:1","img_split:1",null,null,"10","10","200",null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Right");
            obj.set_border("1px solid gold");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("ArrangeSplit.xfdl", function() {
        this.img_split_ondrag = function(obj,e)
        {
        	return true;
        };

        this.img_split_onlbuttondown = function(obj,e)
        {
        	obj.nX = e.clientx;
        	obj.nY = e.clienty;
        };

        this.CompBase_ArrangeSpli_ondragmove = function(obj,e)
        {
        	this.img_split.move(e.clientx - this.img_split.nX, e.clienty - this.img_split.nY);
        	this.resetScroll();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("ondragmove",this.CompBase_ArrangeSpli_ondragmove,this);
            this.img_split.addEventHandler("ondrag",this.img_split_ondrag,this);
            this.img_split.addEventHandler("onlbuttondown",this.img_split_onlbuttondown,this);
        };

        this.loadIncludeScript("ArrangeSplit.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
