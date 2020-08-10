(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CompCom_Bind");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_pos", this);
            obj._setContents("<ColumnInfo><Column id=\"POS_CD\" type=\"string\" size=\"32\"/><Column id=\"POS_NAME\" type=\"string\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"POS_CD\">04</Col><Col id=\"POS_NAME\">Officer</Col></Row><Row><Col id=\"POS_CD\">03</Col><Col id=\"POS_NAME\">Assistant Manager</Col></Row><Row><Col id=\"POS_CD\">02</Col><Col id=\"POS_NAME\">Division Manager</Col></Row><Row><Col id=\"POS_CD\">01</Col><Col id=\"POS_NAME\">Chairman</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CD\">01</Col><Col id=\"DEPT_NAME\">Accounting Team</Col></Row><Row><Col id=\"DEPT_CD\">02</Col><Col id=\"DEPT_NAME\">HR Team</Col></Row><Row><Col id=\"DEPT_CD\">03</Col><Col id=\"DEPT_NAME\">Sales Team</Col></Row><Row><Col id=\"DEPT_CD\">04</Col><Col id=\"DEPT_NAME\">Design Team</Col></Row><Row><Col id=\"DEPT_CD\">05</Col><Col id=\"DEPT_NAME\">Education Team</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data", this);
            obj.set_keystring("");
            obj._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"POS_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"10\"/><Column id=\"MEMO\" type=\"STRING\" size=\"10\"/><Column id=\"IMAGE\" type=\"STRING\" size=\"256\"/><Column id=\"PERCENT\" type=\"INT\" size=\"256\"/><Column id=\"COLOR\" type=\"STRING\" size=\"256\"/><Column id=\"FONT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"FULL_NAME\">Olivia</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20101003</Col><Col id=\"SALARY\">83000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">ivory</Col><Col id=\"DEPT_CD\">01</Col><Col id=\"EMPL_ID\">AA001</Col><Col id=\"IMAGE\">Images::img_na_korea.png</Col><Col id=\"PERCENT\">20</Col><Col id=\"COLOR\">ivory</Col><Col id=\"FONT\">normal 20px/normal &quot;Verdana&quot;,&quot;Arial&quot;,&quot;sans-serif&quot;</Col></Row><Row><Col id=\"FULL_NAME\">John</Col><Col id=\"POS_CD\">04</Col><Col id=\"HIRE_DATE\">20051011</Col><Col id=\"SALARY\">76000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">false</Col><Col id=\"MEMO\">greenyellow</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"EMPL_ID\">AA002</Col><Col id=\"IMAGE\">Images::img_na_canada.png</Col><Col id=\"PERCENT\">40</Col><Col id=\"COLOR\">greenyellow</Col><Col id=\"FONT\">normal 18px/normal &quot;Verdana&quot;,&quot;Arial&quot;,&quot;sans-serif&quot;</Col></Row><Row><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20070206</Col><Col id=\"SALARY\">95000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">aliceblue</Col><Col id=\"DEPT_CD\">03</Col><Col id=\"EMPL_ID\">BB001</Col><Col id=\"IMAGE\">Images::img_na_china.png</Col><Col id=\"PERCENT\">60</Col><Col id=\"COLOR\">lightpink</Col><Col id=\"FONT\">normal 14px/normal &quot;Verdana&quot;,&quot;Arial&quot;,&quot;sans-serif&quot;</Col></Row><Row><Col id=\"FULL_NAME\">Maia</Col><Col id=\"POS_CD\">02</Col><Col id=\"HIRE_DATE\">20090512</Col><Col id=\"SALARY\">60000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">false</Col><Col id=\"MEMO\">ivory</Col><Col id=\"DEPT_CD\">04</Col><Col id=\"EMPL_ID\">BB002</Col><Col id=\"IMAGE\">Images::img_na_usa.png</Col><Col id=\"PERCENT\">70</Col><Col id=\"COLOR\">aliceblue</Col><Col id=\"FONT\">normal 24px/normal &quot;Verdana&quot;,&quot;Arial&quot;,&quot;sans-serif&quot;</Col></Row><Row><Col id=\"FULL_NAME\">Adam</Col><Col id=\"POS_CD\">04</Col><Col id=\"HIRE_DATE\">20010109</Col><Col id=\"SALARY\">88000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">greenyellow</Col><Col id=\"DEPT_CD\">01</Col><Col id=\"EMPL_ID\">CC001</Col><Col id=\"IMAGE\">Images::img_na_korea.png</Col><Col id=\"PERCENT\">100</Col><Col id=\"COLOR\">ivory</Col><Col id=\"FONT\">normal 12px/normal &quot;Verdana&quot;,&quot;Arial&quot;,&quot;sans-serif&quot;</Col></Row><Row><Col id=\"FULL_NAME\">Ray</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20160202</Col><Col id=\"SALARY\">60000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">lightpink</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"EMPL_ID\">DD001</Col><Col id=\"IMAGE\">Images::img_na_canada.png</Col><Col id=\"PERCENT\">90</Col><Col id=\"COLOR\">greenyellow</Col><Col id=\"FONT\">normal 20px/normal &quot;Verdana&quot;,&quot;Arial&quot;,&quot;sans-serif&quot;</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","10","64",null,"193","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_data");
            obj.set_enable("true");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_positionstep("-1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"NAME\"/><Cell col=\"1\" text=\"DEPT_CD\"/><Cell col=\"2\" text=\"ID\"/><Cell col=\"3\" text=\"HIRE_DATE\"/><Cell col=\"4\" text=\"SALARY\"/><Cell col=\"5\" text=\"GENDER\"/><Cell col=\"6\" text=\"MARRIED\"/><Cell col=\"7\" text=\"MEMO\"/><Cell col=\"8\" text=\"IMAGE\"/><Cell col=\"9\" text=\"PERCENT\"/><Cell col=\"10\" text=\"COLOR\"/><Cell col=\"11\" text=\"FONT\"/></Band><Band id=\"body\"><Cell text=\"bind:FULL_NAME\"/><Cell col=\"1\" text=\"bind:DEPT_CD\"/><Cell col=\"2\" text=\"bind:EMPL_ID\"/><Cell col=\"3\" text=\"bind:HIRE_DATE\"/><Cell col=\"4\" text=\"bind:SALARY\"/><Cell col=\"5\" text=\"bind:GENDER\"/><Cell col=\"6\" text=\"bind:MARRIED\"/><Cell col=\"7\" text=\"bind:MEMO\"/><Cell col=\"8\" text=\"bind:IMAGE\"/><Cell col=\"9\" text=\"bind:PERCENT\"/><Cell col=\"10\" text=\"bind:COLOR\"/><Cell col=\"11\" text=\"bind:FONT\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","10","40","250","24",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("☞ Grid");
            obj.set_cssclass("sta_WF_label");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","153","326","190","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","525","298","160","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NAME");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","153","354","190","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_format("AA-###");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01","153","382","190","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_format("#,###");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","153","494","190","94",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","153","298","190","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Static00");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","525","326","160","24",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            var Radio00_innerdataset = new nexacro.NormalDataset("Radio00_innerdataset", obj);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">M</Col><Col id=\"datacolumn\">Male</Col></Row><Row><Col id=\"codecolumn\">W</Col><Col id=\"datacolumn\">Female</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","153","410","190","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("CheckBox00");
            this.addChild(obj.name, obj);

            obj = new ListBox("ListBox00","525","354","160","80",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_innerdataset("ds_pos");
            obj.set_codecolumn("POS_CD");
            obj.set_datacolumn("POS_NAME");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin00","153","438","190","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","153","466","190","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","525","514","160","74",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_stretch("fixaspectratio");
            obj.set_border("1px solid #9c9c9c");
            this.addChild(obj.name, obj);

            obj = new ProgressBar("ProgressBar00","525","486","160","24",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_min("0");
            obj.set_max("100");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","10","10","250","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Bind");
            obj.set_cssclass("sta_WF_subtitle");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","8","268","250","24",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("☞ Components");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","8","326","140","24",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("Edit");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","8","354","140","24",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("MaskEdit(String)");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","8","382","140","24",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("MaskEdit(Number)");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","380","298","140","24",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("Combo");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","380","354","140","80",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("List");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","380","326","140","24",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("Radio");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","8","494","140","94",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("TextArea");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","8","410","140","24",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("CheckBox");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","8","438","140","24",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("Spin");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","8","466","140","24",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("Calendar");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","8","298","140","24",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("Static");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","380","514","140","74",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("ImageViewer");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","380","438","140","44",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("Button");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","380","486","140","24",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("ProgressBar");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","525","438","160","44",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","154","299","190","24",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01","154","355","190","24",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NAME");
            obj.set_positionstep("1");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit02","154","327","190","24",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_format("AA-###");
            obj.set_type("string");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","9","299","140","24",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("Edit");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","9","327","140","24",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("MaskEdit(String)");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","9","355","140","24",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("Combo");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_bind","12","264","140","28",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("Script Bind");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,600,this,function(p){});
            obj.set_stepcount("2");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Edit00","value","ds_data","FULL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Button00","text","ds_data","FULL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Combo00","value","ds_data","DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","MaskEdit00","value","ds_data","EMPL_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","MaskEdit01","value","ds_data","SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","TextArea00","value","ds_data","MEMO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Static00","text","ds_data","FULL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Radio00","value","ds_data","GENDER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","CheckBox00","value","ds_data","MARRIED");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","ListBox00","value","ds_data","POS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","Spin00","value","ds_data","PERCENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","Calendar00","value","ds_data","HIRE_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","ImageViewer00","image","ds_data","IMAGE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","ProgressBar00","pos","ds_data","PERCENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","Button00","background","ds_data","COLOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","Button00","font","ds_data","FONT");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CompCom_Bind.xfdl", function() {


        this.btn_bind_onclick = function(obj,e)
        {
        	var objBindItem = new BindItem();
        	objBindItem.init("item00", "Edit01", "value", "ds_data", "FULL_NAME");
        	this.addChild("item00", objBindItem);
        	objBindItem.bind();

        	objBindItem = new BindItem();
        	objBindItem.init("item01", "Combo01", "value", "ds_data", "DEPT_CD");
        	this.addChild("item01", objBindItem);
        	objBindItem.bind();

        	objBindItem = new BindItem();
        	objBindItem.init("item02", "MaskEdit02", "value", "ds_data", "EMPL_ID");
        	this.addChild("item02", objBindItem);
        	objBindItem.bind();

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Radio00.addEventHandler("onitemchanged",this.Radio00_onitemchanged,this);
            this.btn_bind.addEventHandler("onclick",this.btn_bind_onclick,this);
            this.ds_data.addEventHandler("cancolumnchange",this.ds_emp_cancolumnchange,this);
            this.ds_data.addEventHandler("onrowsetchanged",this.ds_emp_onrowsetchanged,this);
            this.ds_data.addEventHandler("onrowposchanged",this.ds_emp_onrowposchanged,this);
        };

        this.loadIncludeScript("CompCom_Bind.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
