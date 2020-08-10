(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_ImageViewer");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static07","10","40","250","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("☞ Basic Usage");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","10","10","250","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("ImageViewer");
            obj.set_cssclass("sta_WF_subtitle");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","118","68","103","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_image("URL(\"theme://images/btn_MF_home.png\")");
            obj.set_border("1px solid gray");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","161","162","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("☞ Stretch");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","68","93","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Theme Image");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","263","68","75","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("URL Image");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer01","Static04:5","68","182","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_image("URL(\"Images::nexacro_platform.png\")");
            obj.set_border("1px solid gray");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","94","161","164","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var Radio00_innerdataset = new nexacro.NormalDataset("Radio00_innerdataset", obj);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">none</Col><Col id=\"datacolumn\">none</Col></Row><Row><Col id=\"codecolumn\">fit</Col><Col id=\"datacolumn\">fit</Col></Row><Row><Col id=\"codecolumn\">fixaspectratio</Col><Col id=\"datacolumn\">ratio</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_value("none");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer02","18","186","340","230",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_image("URL(\"Images::img_na_korea.png\")");
            obj.set_border("1px solid gray");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer03","20","470","100","90",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_image("URL(\"Images::loading.gif\")");
            obj.set_stretch("fixaspectratio");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","10","439","162","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("☞ gif Image");
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
        this.registerScript("Comp_ImageViewer.xfdl", function() {

        this.Radio00_onitemchanged = function(obj,e)
        {
        	this.ImageViewer02.set_stretch(e.postvalue);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Radio00.addEventHandler("onitemchanged",this.Radio00_onitemchanged,this);
        };

        this.loadIncludeScript("Comp_ImageViewer.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
