(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_Dataset");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CD\">01</Col><Col id=\"DEPT_NAME\">Accounting Team</Col></Row><Row><Col id=\"DEPT_CD\">02</Col><Col id=\"DEPT_NAME\">HR Team</Col></Row><Row><Col id=\"DEPT_CD\">03</Col><Col id=\"DEPT_NAME\">Sales Team</Col></Row><Row><Col id=\"DEPT_CD\">04</Col><Col id=\"DEPT_NAME\">Design Team</Col></Row><Row><Col id=\"DEPT_CD\">05</Col><Col id=\"DEPT_NAME\">Education Team</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data", this);
            obj.set_keystring("");
            obj._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"POS_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"10\"/><Column id=\"MEMO\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"FULL_NAME\">Olivia</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20101003</Col><Col id=\"SALARY\">83000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">ivory</Col><Col id=\"DEPT_CD\">01</Col><Col id=\"EMPL_ID\">AA001</Col></Row><Row><Col id=\"FULL_NAME\">John</Col><Col id=\"POS_CD\">04</Col><Col id=\"HIRE_DATE\">20051011</Col><Col id=\"SALARY\">76000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">false</Col><Col id=\"MEMO\">greenyellow</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"EMPL_ID\">AA002</Col></Row><Row><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20070206</Col><Col id=\"SALARY\">95000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">aliceblue</Col><Col id=\"DEPT_CD\">03</Col><Col id=\"EMPL_ID\">BB001</Col></Row><Row><Col id=\"FULL_NAME\">Maia</Col><Col id=\"POS_CD\">02</Col><Col id=\"HIRE_DATE\">20090512</Col><Col id=\"SALARY\">60000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">false</Col><Col id=\"MEMO\">ivory</Col><Col id=\"DEPT_CD\">04</Col><Col id=\"EMPL_ID\">BB002</Col></Row><Row><Col id=\"FULL_NAME\">Adam</Col><Col id=\"POS_CD\">04</Col><Col id=\"HIRE_DATE\">20010109</Col><Col id=\"SALARY\">88000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">greenyellow</Col><Col id=\"DEPT_CD\">01</Col><Col id=\"EMPL_ID\">CC001</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","10","64",null,"178","306",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_data");
            obj.set_enable("true");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_selecttype("multirow");
            obj.set_positionstep("-1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"EMPL_ID\"/><Cell col=\"1\" text=\"NAME\"/><Cell col=\"2\" text=\"DEPT_CD\"/><Cell col=\"3\" text=\"SALARY\"/><Cell col=\"4\" text=\"GENDER\"/></Band><Band id=\"body\"><Cell text=\"bind:EMPL_ID\"/><Cell col=\"1\" text=\"bind:FULL_NAME\"/><Cell col=\"2\" text=\"bind:DEPT_CD\"/><Cell col=\"3\" text=\"bind:SALARY\"/><Cell col=\"4\" text=\"bind:GENDER\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","10","10","250","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Dataset");
            obj.set_cssclass("sta_WF_subtitle");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","10","40","250","24",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("☞ ds_data");
            obj.set_cssclass("sta_WF_label");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","250","250","24",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("☞ Base Method");
            obj.set_cssclass("sta_WF_label");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_get","10","276","120","35",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Data Get");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_rtn","135","281","110","24",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_set","10","315","120","35",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Data Set");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addColumn","20","276","120","35",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Add Column");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addRow","20","315","120","35",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Add Row");
            this.addChild(obj.name, obj);

            obj = new Button("btn_insertRow","20","354","120","35",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Insert Row");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","147","285","302","16",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("this.ds_data.addColumn(\"ADD_COL\", \"STRING\")");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","147","324","149","16",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("this.ds_data.addRow();");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","147","363","318","16",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("this.ds_data.insertRow(this.ds_data.rowposition);");
            this.addChild(obj.name, obj);

            obj = new Button("btn_deleteRow","20","393","120","35",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Delete Row");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","147","402","322","16",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("this.ds_data.deleteRow(this.ds_data.rowposition);");
            this.addChild(obj.name, obj);

            obj = new Button("btn_deleteAll","20","432","120","35",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Delete All");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","147","441","322","16",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("this.ds_data.deleteRow(this.ds_data.rowposition);");
            this.addChild(obj.name, obj);

            obj = new Button("btn_deleteMulti","20","471","120","35",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Delete Multi");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","147","472","325","32",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("var arrIdx = this.Grid00.getSelectedDatasetRows();\r\nthis.ds_data.deleteMultiRows(arrIdx);");
            this.addChild(obj.name, obj);

            obj = new Button("btn_reset","20","510","120","35",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Data Reset");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","147","519","131","16",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("this.ds_data.reset();");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_set","135","320","110","24",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_value("nexacro");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01",null,"64","287","178","13",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_dept");
            obj.set_positionstep("-1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"134\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"DEPT_CD\"/><Cell col=\"1\" text=\"DEPT_NAME\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPT_CD\"/><Cell col=\"1\" text=\"bind:DEPT_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_copyRow","10","510","120","35",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("Copy Row");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_copyData","10","471","120","35",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("Copy Data");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_getOrg","10","354","120","35",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Data Get - Org");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_rtn2","135","359","110","24",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","250","355","386","32",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("var nRow = this.ds_data.rowposition;\r\nvar sRtn = this.ds_data.getOrgColumn(nRow, \"FULL_NAME\");");
            obj.set_positionstep("1");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new Button("btn_getDel","10","393","120","35",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("Data Get - Del");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_rtn3","135","398","110","24",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","250","402","385","16",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("var sRtn = this.ds_data.getDeletedColumn(0, \"FULL_NAME\");");
            obj.set_positionstep("1");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","250","277","359","32",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("var nRow = this.ds_data.rowposition;\r\nvar sRtn = this.ds_data.getColumn(nRow,\"FULL_NAME\");");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","250","316","420","32",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("var nRow = this.ds_data.rowposition;\r\nthis.ds_data.setColumn(nRow, \"FULL_NAME\", this.edt_set.value;);");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_findRow","10","432","120","35",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("FindRow");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_rtn4","133","437","110","24",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","248","441","385","16",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("var nRow = this.ds_data.findRow(\"EMPL_ID\", \"BB001\");");
            obj.set_positionstep("1");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","135","510","476","48",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("var nRow = this.ds_data.addRow();\r\nvar sCol = \"FULL_NAME=DEPT_NAME, DEPT_CD=DEPT_CD\";\r\nthis.ds_data.copyRow(nRow, this.ds_dept, this.ds_dept.rowposition, sCol);");
            obj.set_positionstep("1");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","136","472","536","32",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("this.ds_data.copyData(this.ds_dept);\t\r\nthis.Grid00.createFormat();");
            obj.set_positionstep("1");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,600,this,function(p){});
            obj.set_stepcount("2");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Comp_Dataset.xfdl", function() {

        this.btn_get_onclick = function(obj,e)
        {
        	var nRow = this.ds_data.rowposition;
        	var sRtn = this.ds_data.getColumn(nRow, "FULL_NAME");

        	this.edt_rtn.set_value(sRtn);
        };

        this.btn_set_onclick = function(obj,e)
        {
        	var nRow = this.ds_data.rowposition;
        	var sVal = this.edt_set.value;
        	this.ds_data.setColumn(nRow, "FULL_NAME", sVal);
        };

        this.btn_addColumn_onclick = function(obj,e)
        {
        	this.ds_data.addColumn("ADD_COL", "STRING");
        	this.Grid00.createFormat();
        };

        this.btn_addRow_onclick = function(obj,e)
        {
        	this.ds_data.addRow();
        };

        this.btn_insertRow_onclick = function(obj,e)
        {
        	this.ds_data.insertRow(this.ds_data.rowposition);
        };

        this.btn_deleteRow_onclick = function(obj,e)
        {
        	this.ds_data.deleteRow(this.ds_data.rowposition);
        };

        this.btn_deleteColumn_onclick = function(obj,e)
        {
        	this.ds_data.deleteColumn("GENDER");
        	this.Grid00.createFormat();
        };

        this.btn_deleteAll_onclick = function(obj,e)
        {
        	this.ds_data.deleteAll();
        };

        this.btn_deleteMulti_onclick = function(obj,e)
        {
        	var arrIdx = this.Grid00.getSelectedDatasetRows();
        	this.ds_data.deleteMultiRows(arrIdx);
        };

        this.btn_reset_onclick = function(obj,e)
        {
        	this.ds_data.reset();
        };

        this.btn_getOrg_onclick = function(obj,e)
        {
        	var nRow = this.ds_data.rowposition;
        	var sRtn = this.ds_data.getOrgColumn(nRow, "FULL_NAME");
        	this.edt_rtn2.set_value(sRtn);
        };
        this.btn_getDel_onclick = function(obj,e)
        {
        	var sRtn = this.ds_data.getDeletedColumn(0, "FULL_NAME");
        	this.edt_rtn3.set_value(sRtn);
        };

        this.btn_copyRow_onclick = function(obj,e)
        {
        	var nRow = this.ds_data.addRow();
        	var sCol = "FULL_NAME=DEPT_NAME, DEPT_CD=DEPT_CD";
        	this.ds_data.copyRow(nRow, this.ds_dept, this.ds_dept.rowposition, sCol);

        };

        this.btn_copyData_onclick = function(obj,e)
        {
        		this.ds_data.copyData(this.ds_dept);
        		this.Grid00.createFormat();
        };


        this.btn_findRow_onclick = function(obj,e)
        {
        	var nRow = this.ds_data.findRow("EMPL_ID", "BB001");
        	this.edt_rtn4.set_value("Row Index: " + nRow);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_get.addEventHandler("onclick",this.btn_get_onclick,this);
            this.btn_set.addEventHandler("onclick",this.btn_set_onclick,this);
            this.btn_addColumn.addEventHandler("onclick",this.btn_addColumn_onclick,this);
            this.btn_addRow.addEventHandler("onclick",this.btn_addRow_onclick,this);
            this.btn_insertRow.addEventHandler("onclick",this.btn_insertRow_onclick,this);
            this.btn_deleteRow.addEventHandler("onclick",this.btn_deleteRow_onclick,this);
            this.btn_deleteAll.addEventHandler("onclick",this.btn_deleteAll_onclick,this);
            this.btn_deleteMulti.addEventHandler("onclick",this.btn_deleteMulti_onclick,this);
            this.btn_reset.addEventHandler("onclick",this.btn_reset_onclick,this);
            this.btn_copyRow.addEventHandler("onclick",this.btn_copyRow_onclick,this);
            this.btn_copyData.addEventHandler("onclick",this.btn_copyData_onclick,this);
            this.btn_getOrg.addEventHandler("onclick",this.btn_getOrg_onclick,this);
            this.btn_getDel.addEventHandler("onclick",this.btn_getDel_onclick,this);
            this.btn_findRow.addEventHandler("onclick",this.btn_findRow_onclick,this);
            this.ds_data.addEventHandler("cancolumnchange",this.ds_emp_cancolumnchange,this);
            this.ds_data.addEventHandler("onrowsetchanged",this.ds_emp_onrowsetchanged,this);
            this.ds_data.addEventHandler("onrowposchanged",this.ds_emp_onrowposchanged,this);
        };

        this.loadIncludeScript("Comp_Dataset.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
