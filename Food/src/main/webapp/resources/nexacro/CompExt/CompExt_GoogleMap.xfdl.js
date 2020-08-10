(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CompExt_GoogleMap");
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
            obj.set_text("GoogleMap - 준비중...");
            obj.set_cssclass("sta_WF_subtitle");
            this.addChild(obj.name, obj);

            obj = new GoogleMap("GoogleMap00","10","109",null,null,"10","10",null,null,null,null,this);
            obj.getSetter("taborder").set("2");
            obj.getSetter("showzoom").set("");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_mode","100","74","295","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var rdo_mode_innerdataset = new nexacro.NormalDataset("rdo_mode_innerdataset", obj);
            rdo_mode_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">Default</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">Mode1</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">Mode2</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">Mode3</Col></Row></Rows>");
            obj.set_innerdataset(rdo_mode_innerdataset);
            obj.set_text("Default");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_marker","668","74","120","25",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Marker Vislble");
            this.addChild(obj.name, obj);

            obj = new Button("btn_load","10","74","84","25",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Map Load");
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
        this.registerScript("CompExt_GoogleMap.xfdl", function() {

        this.MarkerFlag = false;

        this.btn_load_onclick = function(obj,e)
        {
        	if(this.MarkerFlag)	this.fn_markerRemove();

        	var iMode = parseInt(this.rdo_mode.value);
        	this.GoogleMap00.load(false, 37.572765, 126.976868, iMode);	//Gwanghwamun Plaza
        };

        this.fn_markerRemove = function()
        {
        	this.GoogleMap00.removeItem("Marker1");
        	this.GoogleMap00.removeItem("Marker2");
        	this.GoogleMap00.removeItem("Marker3");
        	this.GoogleMap00.removeItem("Marker4");
        	this.GoogleMap00.removeItem("Marker5");
        	this.MarkerFlag = false;
        }

        this.btn_marker_onclick = function(obj,e)
        {
        	if(this.MarkerFlag == true){
        		this.fn_markerRemove();
        	}
        	else{
        		var objMarker1 = new nexacro.GoogleMapMarker();
        		objMarker1.set_latitude(37.565847);
        		objMarker1.set_longitude(126.975114);
        		objMarker1.set_text("Deoksugung Palace  ");
        		this.GoogleMap00.addItem("Marker1", objMarker1);

        		var objMarker2 = new nexacro.GoogleMapMarker();
        		objMarker2.set_latitude(37.578018);
        		objMarker2.set_longitude(126.976874);
        		objMarker2.set_text("Gyeongbokgung Palace");
        		this.GoogleMap00.addItem("Marker2", objMarker2);

        		var objMarker3 = new nexacro.GoogleMapMarker();
        		objMarker3.set_latitude(37.579185);
        		objMarker3.set_longitude(126.990844);
        		objMarker3.set_text("Changdeokgung Palace");
        		this.GoogleMap00.addItem("Marker3", objMarker3);

        		var objMarker4 = new nexacro.GoogleMapMarker();
        		objMarker4.set_latitude(37.576002);
        		objMarker4.set_longitude(126.976905);
        		objMarker4.set_text("Gwanghwamun Gate");
        		this.GoogleMap00.addItem("Marker4", objMarker4);

        		var objMarker5 = new nexacro.GoogleMapMarker();
        		objMarker5.set_latitude(37.566654);
        		objMarker5.set_longitude(126.978425);
        		objMarker5.set_text("Seoul Metropolitan Government");
        		this.GoogleMap00.addItem("Marker5", objMarker5);


        		this.MarkerFlag = true;
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.CompExt_GoogleMap_onload,this);
            this.rdo_mode.addEventHandler("onitemchanged",this.btn_load_onclick,this);
            this.btn_marker.addEventHandler("onclick",this.btn_marker_onclick,this);
            this.btn_load.addEventHandler("onclick",this.btn_load_onclick,this);
        };

        this.loadIncludeScript("CompExt_GoogleMap.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
