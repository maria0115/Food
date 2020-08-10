(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CompExt_Excel");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static03","10","40","250","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("☞ Basic Usage");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","10","10","250","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Excel Object - 준비중...");
            obj.set_cssclass("sta_WF_subtitle");
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
        this.registerScript("CompExt_Excel.xfdl", function() {
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

        };

        this.loadIncludeScript("CompExt_Excel.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
