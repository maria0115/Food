(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MdiFrame");
            this.set_titletext("New Form");
            this.set_cssclass("sta_MF_bg");
            this.set_scrollbartype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(862,30);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","0","0",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_MF_bg");
            this.addChild(obj.name, obj);

            obj = new Tab("tab_mdi","29","0",null,"29","114",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_tabindex("0");
            obj.set_showextrabutton("true");
            obj.set_cssclass("tab_MF_tab");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage5",this.tab_mdi);
            obj.set_text("Tabpage5");
            this.tab_mdi.addChild(obj.name, obj);

            obj = new Button("btn_home","0","0","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_MF_home");
            this.addChild(obj.name, obj);

            obj = new Button("btn_closeAll",null,"5","19","19","4",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_MF_allX");
            this.addChild(obj.name, obj);

            obj = new Button("btn_vertical",null,"5","19","19","24",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_MF_H");
            this.addChild(obj.name, obj);

            obj = new Button("btn_horizontal",null,"5","19","19","44",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_MF_V");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cascade",null,"5","19","19","64",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_MF_min");
            this.addChild(obj.name, obj);

            obj = new Button("btn_maximize",null,"5","19","19","84",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_MF_max");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",862,30,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("MdiFrame.xfdl", function() {

        this.MdiFrame_onload = function(obj,e)
        {
        	//기본 tabpage delete
        	this.tab_mdi.removeTabpage(0);
        };

        // 탭 추가
        this.fn_addTab = function(oParam)
        {
        trace(oParam.MENU_NM);
        	this.tab_mdi.insertTabpage(oParam.FORM_ID, -1, "", oParam.MENU_NM);

        	//열린 화면 정보 갱신
        	this.fn_setOpenForm(oParam);
        }

        //화면정보 global ds에 set
        this.fn_setOpenForm = function(oParam)
        {
        	var objDs = nexacro.getApplication().gds_openForm;
        	if(oParam.FORM_TYPE == "ADD")
        	{
        		var nRow = objDs.addRow();
        		objDs.setColumn(nRow, "FORM_ID"  , oParam.FORM_ID);
        		objDs.setColumn(nRow, "MENU_ID"  , oParam.MENU_ID);
        		objDs.setColumn(nRow, "MENU_NAME", oParam.MENU_NM);
        		objDs.setColumn(nRow, "FORM_URL" , oParam.FORM_URL);
        	}
        	else if(oParam.FORM_TYPE == "DEL")
        	{
        		var nRow = objDs.findRow("FORM_ID", oParam.FORM_ID);
        		objDs.deleteRow(nRow);
        	}
        	else if(oParam.FORM_TYPE == "ALL")
        	{
        		objDs.clearData();
        	}
        }

        this.tab_mdi_onchanged = function(obj,e)
        {
        	var sFormID = obj.tabpages[e.postindex].name;

        	nexacro.getApplication().av_WorkFrame[sFormID].form.setFocus();

        };

        this.tab_mdi_onextrabuttonclick = function(obj,e)
        {
        	var sFormID = obj.tabpages[e.index].name;
        	obj.removeTabpage(e.index);

        	nexacro.getApplication().av_WorkFrame[sFormID].form.close();

        	this.fn_setOpenForm({FORM_ID:sFormID, FORM_TYPE:"DEL" });

        };

        this.fn_tabControl = function(sFormID, sType)
        {
        	var nCnt = this.tab_mdi.getTabpageCount();
        	for(var i=0; i<nCnt; i++)
        	{
        		if(this.tab_mdi.tabpages[i].name == sFormID)
        		{
        			if(sType == "SELECT"){
        				this.tab_mdi.set_tabindex(i);
        			}
        			else if(sType == "DELETE"){
        				this.tab_mdi.removeTabpage(i);
        				this.fn_setOpenForm({FORM_ID:sFormID, FORM_TYPE:"DEL" });

        			}
        			return;
        		}
        	}
        }

        this.fn_arrange = function(obj,e)
        {
            var strType = obj.name.replace("btn_", "");
        	var arrObj = nexacro.getApplication().av_WorkFrame.all;

        	switch(strType)
        	{
        		case "maximize" :
        			for(var i=0; i<arrObj.length; i++)
        			{
        				nexacro.getApplication().av_WorkFrame.frames[i].set_openstatus("maximize");
        			}
        		break;
        		case "closeAll" :
         			for(var i=arrObj.length-1; i>=0; i--)
        			{
        				trace(arrObj[i].form.name);
        				if(arrObj[i].form.name == "MainForm")	continue;
        // 				arrObj[i].form.destroy();
         				arrObj[i].form.close();
         				this.tab_mdi.removeTabpage(i);
        			}
        			this.fn_setOpenForm({FORM_TYPE: "ALL"});

        		break;
        	    default :
        			nexacro.getApplication().av_WorkFrame.arrange(strType);
        	    break;
        	}

        };

        this.btn_home_onclick = function(obj,e)
        {
        	nexacro.getApplication().av_WorkFrame["MainForm"].form.setFocus();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.MdiFrame_onload,this);
            this.tab_mdi.addEventHandler("onchanged",this.tab_mdi_onchanged,this);
            this.tab_mdi.addEventHandler("onextrabuttonclick",this.tab_mdi_onextrabuttonclick,this);
            this.btn_home.addEventHandler("onclick",this.btn_home_onclick,this);
            this.btn_closeAll.addEventHandler("onclick",this.fn_arrange,this);
            this.btn_vertical.addEventHandler("onclick",this.fn_arrange,this);
            this.btn_horizontal.addEventHandler("onclick",this.fn_arrange,this);
            this.btn_cascade.addEventHandler("onclick",this.fn_arrange,this);
            this.btn_maximize.addEventHandler("onclick",this.fn_arrange,this);
        };

        this.loadIncludeScript("MdiFrame.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
