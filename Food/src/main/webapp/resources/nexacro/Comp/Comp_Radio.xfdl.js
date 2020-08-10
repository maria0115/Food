(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_Radio");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CD\">01</Col><Col id=\"DEPT_NAME\">Accounting Team</Col></Row><Row><Col id=\"DEPT_CD\">02</Col><Col id=\"DEPT_NAME\">HR Team</Col></Row><Row><Col id=\"DEPT_CD\">03</Col><Col id=\"DEPT_NAME\">Sales Team</Col></Row><Row><Col id=\"DEPT_CD\">04</Col><Col id=\"DEPT_NAME\">Design Team</Col></Row><Row><Col id=\"DEPT_CD\">05</Col><Col id=\"DEPT_NAME\">Education Team</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static04","10","40","250","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("☞ Basic Usage - innerdataset");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","10","10","250","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Radio");
            obj.set_cssclass("sta_WF_subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","3","240","232","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("☞ Column Count & Row Count");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio01","13","264","203","112",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            obj.set_rowcount("4");
            var Radio01_innerdataset = new nexacro.NormalDataset("Radio01_innerdataset", obj);
            Radio01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">SU</Col><Col id=\"datacolumn\">Sunday</Col></Row><Row><Col id=\"codecolumn\">MO</Col><Col id=\"datacolumn\">Monday</Col></Row><Row><Col id=\"codecolumn\">TU</Col><Col id=\"datacolumn\">Tuesday</Col></Row><Row><Col id=\"codecolumn\">WE</Col><Col id=\"datacolumn\">Wednesday</Col></Row><Row><Col id=\"codecolumn\">TH</Col><Col id=\"datacolumn\">Thursday</Col></Row><Row><Col id=\"codecolumn\">FR</Col><Col id=\"datacolumn\">Friday</Col></Row><Row><Col id=\"codecolumn\">SA</Col><Col id=\"datacolumn\">Saturday</Col></Row></Rows>");
            obj.set_innerdataset(Radio01_innerdataset);
            obj.set_value("SA");
            obj.set_index("6");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio02","154","64","134","130",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NAME");
            obj.set_innerdataset("ds_dept");
            obj.set_value("03");
            obj.set_index("2");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio03","20","64","101","56",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Radio03_innerdataset = new nexacro.NormalDataset("Radio03_innerdataset", obj);
            Radio03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">M</Col><Col id=\"datacolumn\">Male</Col></Row><Row><Col id=\"codecolumn\">W</Col><Col id=\"datacolumn\">Female</Col></Row></Rows>");
            obj.set_innerdataset(Radio03_innerdataset);
            obj.set_value("M");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","218","240","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("vertical");
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
        this.registerScript("Comp_Radio.xfdl", function() {

        this.Radio00_onitemchanged = function(obj,e)
        {
        	if (e.postvalue == "readonly"){
        			this.cmb_type.set_readonly(true);
        	}
        	else{
        			this.cmb_type.set_readonly(false);
        			this.cmb_type.set_type(e.postvalue);
        	}

        };


        this.CheckBox00_onclick = function(obj,e)
        {
        	if(obj.value){
        		this.Radio01.set_direction("vertical");
        	}
        	else{
        		this.Radio01.set_direction("horizontal");
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Radio02.addEventHandler("onitemchanged",this.Radio02_onitemchanged,this);
            this.CheckBox00.addEventHandler("onclick",this.CheckBox00_onclick,this);
        };

        this.loadIncludeScript("Comp_Radio.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
