(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CompExt_FileUpDown");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_result", this);
            obj._setContents("<ColumnInfo><Column id=\"FILENAME\" type=\"string\" size=\"32\"/><Column id=\"FILETYPE\" type=\"string\" size=\"32\"/><Column id=\"FILESIZE\" type=\"bigdecimal\" size=\"8\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_up", this);
            obj._setContents("<ColumnInfo><Column id=\"FILENAME\" type=\"STRING\" size=\"32\"/><Column id=\"FILETYPE\" type=\"STRING\" size=\"32\"/><Column id=\"FILESIZE\" type=\"BIGDECIMAL\" size=\"8\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static03","10","40","250","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("☞ Basic Usage");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","10","10","250","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("File Upload / Download");
            obj.set_cssclass("sta_WF_subtitle");
            this.addChild(obj.name, obj);

            obj = new FileUpload("fup_up","10","74","413","110",null,null,null,null,null,null,this);
            obj.getSetter("taborder").set("2");
            obj.getSetter("itemheight").set("24");
            obj.getSetter("onlbuttondown").set("fup_up_onlbuttondown");
            obj.getSetter("onsuccess").set("fup_up_onsuccess");
            obj.getSetter("onerror").set("fup_up_onerror");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add","428","74","102","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("append Item");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del","428","102","102","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("delete Item");
            this.addChild(obj.name, obj);

            obj = new Button("btn_upload","426","165","102","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("File Upload");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","10","194","520","100",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_result");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"190\"/><Column size=\"190\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"FILENAME\"/><Cell col=\"2\" text=\"FILETYPE\"/><Cell col=\"3\" text=\"FILESIZE\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:FILENAME\"/><Cell col=\"2\" text=\"bind:FILETYPE\"/><Cell col=\"3\" text=\"bind:FILESIZE\" textAlign=\"right\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new FileUpload("fup_upM","8","406","413","26",null,null,null,null,null,null,this);
            obj.getSetter("taborder").set("7");
            obj.getSetter("itemheight").set("24");
            obj.getSetter("multiselect").set("true");
            obj.getSetter("onitemchanged").set("fup_upM_onitemchanged");
            obj.getSetter("onsuccess").set("fup_upM_onsuccess");
            this.addChild(obj.name, obj);

            obj = new Button("btn_uploadM","426","406","102","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("File Upload");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","8","436","520","100",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_binddataset("ds_up");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"190\"/><Column size=\"190\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"FILENAME\"/><Cell col=\"2\" text=\"FILETYPE\"/><Cell col=\"3\" text=\"FILESIZE\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:FILENAME\"/><Cell col=\"2\" text=\"bind:FILETYPE\"/><Cell col=\"3\" text=\"bind:FILESIZE\" textAlign=\"right\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new FileDownload("fdn_down","390","299","140","24",null,null,null,null,null,null,this);
            obj.getSetter("taborder").set("10");
            obj.getSetter("text").set("File Download");
            obj.getSetter("onclick").set("fdn_down_onclick");
            obj.getSetter("onsuccess").set("fdn_down_onsuccess");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","378","250","24",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("☞ Multi Select");
            obj.set_cssclass("sta_WF_label");
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
        this.registerScript("CompExt_FileUpDown.xfdl", function() {

        this.serverURL = "http://localhost:8080/edu/nexacro17/";
        this.uploadPath = "upload";	//upload folder name

        this.CompExt_FileUpDown_onload = function(obj,e)
        {
        	if(nexacro.getEnvironmentVariable("ev_runMode") == "S"){
        		this.serverURL = "http://demo.nexacro.com/edu/nexacro17/";
        	}
        };



        this.objSubControl = "";
        this.fup_up_onlbuttondown = function(obj,e)
        {
        	this.objSubControl = e.fromreferenceobject;
        };

        this.btn_add_onclick = function(obj,e)
        {
        	this.fup_up.appendItem();
        };

        this.btn_del_onclick = function(obj,e)
        {
        	var idx = this.fup_up.getItemIndex(this.objSubControl);
        	if(idx < 0){
        		idx = this.fup_up.getItemCount()-1;
        	}

        	this.fup_up.deleteItem(idx);

        	if(this.fup_up.getItemCount() == 0){
        		this.fup_up.appendItem();
        	}
        };

        this.btn_upload_onclick = function(obj,e)
        {
        	var sURL = this.serverURL + "fileUpload.jsp?PATH="+this.uploadPath;
        	this.fup_up.upload(sURL);
        };

        this.fup_up_onsuccess = function(obj,e)
        {
        	var sXml = e.datasets[0].saveXML();
        	this.ds_result.loadXML(sXml);
        };


        this.fup_upM_onitemchanged = function(obj,e)
        {
        	//14 e.newvalue : string
        	//17 e.newvalue : array object
        	if(obj.multiselect){
        		this.ds_up.clearData();
        		for(var i=0; i<e.newvalue.length; i++)
        		{
        			sFileName = e.newvalue[i];
        			var idx = this.ds_up.addRow();
        			this.ds_up.setColumn(idx, "FILENAME", sFileName);
        		}
        	}
        };

        this.fup_upM_onsuccess = function(obj,e)
        {
        	var sXml = e.datasets[0].saveXML();
        	this.ds_up.loadXML(sXml);
        };

        this.btn_uploadM_onclick = function(obj,e)
        {
        	var sURL = this.serverURL + "fileUpload.jsp?PATH="+this.uploadPath;
        	this.fup_upM.upload(sURL);
        };

        this.fdn_down_onclick = function(obj,e)
        {
        	var sFileName = this.ds_result.getColumn(this.ds_result.rowposition, "FILENAME");
        	obj.downloadurl = this.serverURL + "fileDownload.jsp?PATH="+this.uploadPath+"&file=" + sFileName;
        	obj.download();
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.CompExt_FileUpDown_onload,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.btn_upload.addEventHandler("onclick",this.btn_upload_onclick,this);
            this.btn_uploadM.addEventHandler("onclick",this.btn_uploadM_onclick,this);
        };

        this.loadIncludeScript("CompExt_FileUpDown.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
