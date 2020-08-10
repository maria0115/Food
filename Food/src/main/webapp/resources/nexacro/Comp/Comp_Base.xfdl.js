(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_Base");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_data", this);
            obj.set_keystring("");
            obj._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"POS_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"10\"/><Column id=\"MEMO\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"FULL_NAME\">Olivia</Col><Col id=\"POS_CD\">02</Col><Col id=\"HIRE_DATE\">20101003</Col><Col id=\"SALARY\">83490000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"MEMO\">ivory</Col><Col id=\"DEPT_CD\">01</Col><Col id=\"EMPL_ID\">KR180</Col></Row><Row><Col id=\"FULL_NAME\">John</Col><Col id=\"POS_CD\">02</Col><Col id=\"HIRE_DATE\">20051011</Col><Col id=\"SALARY\">76010000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"MEMO\">greenyellow</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"EMPL_ID\">KR190</Col></Row><Row><Col id=\"FULL_NAME\">Dillon</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20150401</Col><Col id=\"SALARY\">62540000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"MEMO\">lightpink</Col><Col id=\"DEPT_CD\">03</Col><Col id=\"EMPL_ID\">JP110</Col></Row><Row><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20070206</Col><Col id=\"SALARY\">99050000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"MEMO\">aliceblue</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"EMPL_ID\">JP390</Col></Row><Row><Col id=\"FULL_NAME\">Joseph</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20070304</Col><Col id=\"SALARY\">61220000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"MEMO\">lightgray</Col><Col id=\"DEPT_CD\">05</Col><Col id=\"EMPL_ID\">CN300</Col></Row><Row><Col id=\"FULL_NAME\">Maia</Col><Col id=\"POS_CD\">01</Col><Col id=\"HIRE_DATE\">20090512</Col><Col id=\"SALARY\">63030000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col><Col id=\"MEMO\">ivory</Col><Col id=\"DEPT_CD\">04</Col><Col id=\"EMPL_ID\">KR310</Col></Row><Row><Col id=\"FULL_NAME\">Adam</Col><Col id=\"POS_CD\">04</Col><Col id=\"HIRE_DATE\">20010109</Col><Col id=\"SALARY\">88450000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"MEMO\">greenyellow</Col><Col id=\"DEPT_CD\">04</Col><Col id=\"EMPL_ID\">KR350</Col></Row><Row><Col id=\"FULL_NAME\">Ray</Col><Col id=\"POS_CD\">01</Col><Col id=\"HIRE_DATE\">20160202</Col><Col id=\"SALARY\">67420000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"MEMO\">lightpink</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"EMPL_ID\">CN160</Col></Row><Row><Col id=\"FULL_NAME\">Cameron</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20010303</Col><Col id=\"SALARY\">86250000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"MEMO\">aliceblue</Col><Col id=\"DEPT_CD\">03</Col><Col id=\"EMPL_ID\">KR260</Col></Row><Row><Col id=\"FULL_NAME\">Aladdin</Col><Col id=\"POS_CD\">04</Col><Col id=\"HIRE_DATE\">20161003</Col><Col id=\"SALARY\">67390000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">1</Col><Col id=\"MEMO\">lightgray</Col><Col id=\"DEPT_CD\">05</Col><Col id=\"EMPL_ID\">JP140</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CD\">01</Col><Col id=\"DEPT_NAME\">Accounting Team</Col></Row><Row><Col id=\"DEPT_CD\">02</Col><Col id=\"DEPT_NAME\">HR Team</Col></Row><Row><Col id=\"DEPT_CD\">03</Col><Col id=\"DEPT_NAME\">Sales Team</Col></Row><Row><Col id=\"DEPT_CD\">04</Col><Col id=\"DEPT_NAME\">Design Team</Col></Row><Row><Col id=\"DEPT_CD\">05</Col><Col id=\"DEPT_NAME\">Education Team</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static33","159","465",null,"100","10",null,null,null,null,null,this);
            obj.set_taborder("75");
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
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static34","159","408",null,"170","10",null,null,null,null,null,this);
            obj.set_taborder("76");
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
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new PopupMenu("PopupMenu00","266","472","116","86",null,null,null,null,null,null,this);
            obj.set_innerdataset("gds_menu");
            obj.set_captioncolumn("MENU_NAME");
            obj.set_idcolumn("MENU_ID");
            obj.set_levelcolumn("MENU_LEVEL");
            obj.set_iconcolumn("MENU_ICON");
            obj.set_hotkeycolumn("MENU_KEY");
            obj.set_enablecolumn("MENU_ENABLE");
            obj.getSetter("positionstep").set("1");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv00","220","419","270","142",null,null,null,null,null,null,this);
            obj.set_text("PopupDiv00");
            obj.set_visible("false");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.getSetter("positionstep").set("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","5","48","80","44",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("0");
            obj.set_text("Button");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablelabel");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Static("Static03","84","48","165","44",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablebg");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Static("Static05","5","91","80","44",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("0");
            obj.set_text("Edit");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablelabel");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Static("Static06","84","91","165","44",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablebg");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Static("Static11","5","5","80","44",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("0");
            obj.set_text("Static");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablelabel");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Static("Static12","84","5","165","44",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablebg");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Button("Button00","92","57","60","25",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("3");
            obj.set_text("Search");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Edit("Edit00","92","103","132","24",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("5");
            obj.set_value("nexacro platform");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Static("Static25","92","17","116","20",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("8");
            obj.set_text("nexacro platform");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Static("Static19","10","433","150","50",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("Spin");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("0px 0px 0px 30px");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","10","89","150","50",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("Button");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("0px 0px 0px 30px");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","159","89",null,"50","10",null,null,null,null,null,this);
            obj.set_taborder("46");
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

            obj = new Static("Static05","10","138","150","50",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("Edit");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("0px 0px 0px 30px");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","159","138",null,"50","10",null,null,null,null,null,this);
            obj.set_taborder("48");
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

            obj = new Static("Static07","10","187","150","50",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("MaskEdit");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("0px 0px 0px 30px");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","159","187",null,"50","10",null,null,null,null,null,this);
            obj.set_taborder("50");
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

            obj = new Static("Static09","10","236","150","100",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("TextArea");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("0px 0px 0px 30px");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","159","236",null,"100","10",null,null,null,null,null,this);
            obj.set_taborder("52");
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

            obj = new Static("Static11","10","40","150","50",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("Static");
            obj.set_border("");
            obj.set_padding("0px 0px 0px 30px");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","159","40",null,"50","10",null,null,null,null,null,this);
            obj.set_taborder("54");
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

            obj = new Static("Static15","10","384","150","50",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("CheckBox");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("0px 0px 0px 30px");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","159","384",null,"50","10",null,null,null,null,null,this);
            obj.set_taborder("56");
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

            obj = new Static("Static01","10","482","150","50",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("ImageViwer");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("0px 0px 0px 30px");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","159","433",null,"50","10",null,null,null,null,null,this);
            obj.set_taborder("58");
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

            obj = new Static("Static21","10","335","150","50",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("Calendar");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("0px 0px 0px 30px");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","159","335",null,"50","10",null,null,null,null,null,this);
            obj.set_taborder("60");
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

            obj = new Static("Static02","159","482",null,"50","10",null,null,null,null,null,this);
            obj.set_taborder("61");
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

            obj = new Static("Static13","10","531","150","50",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("ProgressBar");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("0px 0px 0px 30px");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","159","531",null,"50","10",null,null,null,null,null,this);
            obj.set_taborder("63");
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
            obj.set_text("Components - Base");
            obj.set_cssclass("sta_WF_subtitle");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","170","98","100","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Save");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","170","151","180","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_value("nexacro platform");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","170","200","134","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_value("8307011234567");
            obj.set_type("string");
            obj.set_textAlign("center");
            obj.set_format("######-#######");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01","315","200","116","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_value("12345.88");
            obj.set_format("#,###.00");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","170","246","220","80",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_value("nexacro platform\nHello World\nTextArea Component");
            this.addChild(obj.name, obj);

            obj = new Static("Static25","170","53","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("nexacro platform");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","170","397","180","24",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("Check");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin00","170","446","68","24",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_value("17");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","360","348","190","24",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_value("20170101102030000");
            obj.set_dateformat("yyyy-MM-dd HH:mm:ss");
            obj.set_editformat("yyyy-MM-dd HH:mm:ss");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","170","348","180","24",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_value("20170101");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","170","487","172","40",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("");
            obj.set_image("URL(\"Images::nexacro_platform.png\")");
            this.addChild(obj.name, obj);

            obj = new ProgressBar("ProgressBar00","169","544","381","24",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("");
            obj.set_min("0");
            obj.set_max("100");
            obj.set_pos("70");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","15","56","19","19",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("url(\"Images::img_comp_static.png\") no-repeat center center");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","15","105","19","19",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("URL(\"Images::img_comp_button.png\") no-repeat center center");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","15","154","19","19",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_background("URL(\"Images::img_comp_edit.png\") no-repeat center center");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","15","203","19","19",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_background("URL(\"Images::img_comp_mask.png\") no-repeat center center");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Button("Button05","15","277","19","19",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_background("URL(\"Images::img_comp_txt.png\") no-repeat center center");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Button("Button06","15","351","19","19",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_background("URL(\"Images::img_comp_cal.png\") no-repeat center center");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Button("Button07","15","400","19","19",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_background("URL(\"Images::img_comp_check.png\") no-repeat center center");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Button("Button08","15","449","19","19",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_background("URL(\"Images::img_comp_spin.png\") no-repeat center center");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Button("Button09","15","498","19","19",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_background("URL(\"Images::img_comp_image.png\") no-repeat center center");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Button("Button10","15","547","19","19",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_background("URL(\"Images::img_comp_progress.png\") no-repeat center center");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","10","89","150","100",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("ListBox");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("0px 0px 0px 30px");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","10","188","150","50",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_text("Radio");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("0px 0px 0px 30px");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","10","237","150","180",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("Grid");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("0px 0px 0px 30px");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","10","416","150","50",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_text("Menu");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("0px 0px 0px 30px");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static26","10","465","150","100",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("PopupMenu");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("0px 0px 0px 30px");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static27","10","40","150","50",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("Combo");
            obj.set_border("");
            obj.set_padding("0px 0px 0px 30px");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button11","15","56","19","19",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_background("URL(\"Images::img_comp_combo.png\") no-repeat center center");
            obj.set_border("0px none");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button12","15","130","19","19",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_background("URL(\"Images::img_comp_list.png\") no-repeat center center");
            obj.set_border("0px none");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button13","15","204","19","19",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_background("URL(\"Images::img_comp_radio.png\") no-repeat center center");
            obj.set_border("0px none");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button14","15","318","19","19",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_background("URL(\"Images::img_comp_grid.png\") no-repeat center center");
            obj.set_border("0px none");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button15","15","432","19","19",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_background("URL(\"Images::img_comp_menu.png\") no-repeat center center");
            obj.set_border("0px none");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button16","15","506","19","19",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_background("URL(\"Images::imp_comp_pmenu.png\") no-repeat center center");
            obj.set_border("0px none");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static28","159","40",null,"50","10",null,null,null,null,null,this);
            obj.set_taborder("70");
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
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static29","159","89",null,"100","10",null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_text("");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static30","159","188",null,"50","10",null,null,null,null,null,this);
            obj.set_taborder("72");
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
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static31","159","237",null,"180","10",null,null,null,null,null,this);
            obj.set_taborder("73");
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
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static32","159","416",null,"50","10",null,null,null,null,null,this);
            obj.set_taborder("74");
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
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","170","53","180","24",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_positionstep("1");
            var Combo00_innerdataset = new nexacro.NormalDataset("Combo00_innerdataset", obj);
            Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">Sunday</Col><Col id=\"codecolumn\">SU</Col></Row><Row><Col id=\"datacolumn\">Monday</Col><Col id=\"codecolumn\">MO</Col></Row><Row><Col id=\"datacolumn\">Tuesday</Col><Col id=\"codecolumn\">TU</Col></Row><Row><Col id=\"datacolumn\">Wednesday</Col><Col id=\"codecolumn\">WE</Col></Row><Row><Col id=\"datacolumn\">Thursday</Col><Col id=\"codecolumn\">TH</Col></Row><Row><Col id=\"datacolumn\">Friday</Col><Col id=\"codecolumn\">FR</Col></Row><Row><Col id=\"datacolumn\">Saturday</Col><Col id=\"codecolumn\">SA</Col></Row></Rows>");
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_text("nexacro platform");
            obj.set_value("10");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new ListBox("ListBox00","170","99","180","81",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_positionstep("1");
            var ListBox00_innerdataset = new nexacro.NormalDataset("ListBox00_innerdataset", obj);
            ListBox00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">Sunday</Col><Col id=\"codecolumn\">SU</Col></Row><Row><Col id=\"datacolumn\">Monday</Col><Col id=\"codecolumn\">MO</Col></Row><Row><Col id=\"datacolumn\">Tuesday</Col><Col id=\"codecolumn\">TU</Col></Row><Row><Col id=\"datacolumn\">Wednesday</Col><Col id=\"codecolumn\">WE</Col></Row><Row><Col id=\"datacolumn\">Thursday</Col><Col id=\"codecolumn\">TH</Col></Row><Row><Col id=\"datacolumn\">Friday</Col><Col id=\"codecolumn\">FR</Col></Row><Row><Col id=\"datacolumn\">Saturday</Col><Col id=\"codecolumn\">SA</Col></Row></Rows>");
            obj.set_innerdataset(ListBox00_innerdataset);
            obj.set_value("TU");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","170","191","472","44",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("4");
            obj.set_positionstep("1");
            var Radio00_innerdataset = new nexacro.NormalDataset("Radio00_innerdataset", obj);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">Sunday</Col><Col id=\"codecolumn\">SU</Col></Row><Row><Col id=\"datacolumn\">Monday</Col><Col id=\"codecolumn\">MO</Col></Row><Row><Col id=\"datacolumn\">Tuesday</Col><Col id=\"codecolumn\">TU</Col></Row><Row><Col id=\"datacolumn\">Wednesday</Col><Col id=\"codecolumn\">WE</Col></Row><Row><Col id=\"datacolumn\">Thursday</Col><Col id=\"codecolumn\">TH</Col></Row><Row><Col id=\"datacolumn\">Friday</Col><Col id=\"codecolumn\">FR</Col></Row><Row><Col id=\"datacolumn\">Saturday</Col><Col id=\"codecolumn\">SA</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_value("FR");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","170","243","491","169",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_binddataset("ds_data");
            obj.set_autosizingtype("");
            obj.set_autofittype("col");
            obj.set_fillareatype("linerow");
            obj.set_positionstep("1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"128\"/><Column size=\"73\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Name\"/><Cell col=\"1\" text=\"Hire Date\"/><Cell col=\"2\" text=\"Annual Salary\"/><Cell col=\"3\" text=\"Married\"/></Band><Band id=\"body\"><Cell text=\"bind:FULL_NAME\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:HIRE_DATE\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:SALARY\" textAlign=\"right\"/><Cell col=\"3\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:MARRIED\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Menu("Menu00","170","430","603","23",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_innerdataset("gds_menu");
            obj.set_captioncolumn("MENU_NAME");
            obj.set_idcolumn("MENU_ID");
            obj.set_levelcolumn("MENU_LEVEL");
            obj.set_popupitemheight("30");
            obj.set_enablecolumn("MENU_ENABLE");
            obj.set_hotkeycolumn("MENU_KEY");
            obj.set_iconcolumn("MENU_ICON");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_popMenu","170","474","90","30",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("Click");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01","358","53","180","24",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NAME");
            obj.set_innerdataset("ds_dept");
            obj.set_positionstep("1");
            obj.set_text("nexacro platform");
            obj.set_value("01");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new ListBox("ListBox01","358","99","180","81",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NAME");
            obj.set_innerdataset("ds_dept");
            obj.set_positionstep("1");
            obj.set_text("HR Team");
            obj.set_value("02");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static35","159","209",null,"200","10",null,null,null,null,null,this);
            obj.set_taborder("77");
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
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static36","159","40",null,"170","10",null,null,null,null,null,this);
            obj.set_taborder("78");
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
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static37","10","40","150","170",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_text("Div");
            obj.set_border("");
            obj.set_padding("0px 0px 0px 30px");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Button("Button18","15","116","19","19",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_background("URL(\"Images::imp_comp_div.png\") no-repeat center center");
            obj.set_border("0px none");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static38","10","209","150","200",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_text("Tab");
            obj.set_border("");
            obj.set_padding("0px 0px 0px 30px");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Button("Button19","15","300","19","19",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_background("URL(\"Images::img_comp_tab.png\") no-repeat center center");
            obj.set_border("0px none");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static39","10","408","150","170",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_text("PopupDiv");
            obj.set_border("");
            obj.set_padding("0px 0px 0px 30px");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Button("Button20","15","484","19","19",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_background("URL(\"Images::img_comp_pdiv.png\") no-repeat center center");
            obj.set_border("0px none");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","168","50","302","150",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("Div00");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","5","48","80","44",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("Button");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablelabel");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","84","48","168","44",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablebg");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05","5","91","80","44",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("Edit");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablelabel");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06","84","91","168","44",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablebg");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static11","5","5","80","44",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("Static");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablelabel");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static12","84","5","168","44",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablebg");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","92","57","60","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("Search");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","92","103","132","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_value("nexacro platform");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static25","92","17","116","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("nexacro platform");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","475","50",null,"150","23",null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("Div00");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_url("Comp::Comp_Base_Sub.xfdl");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","168","222","302","176",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_tabindex("0");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("Tabpage1");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static04","5","48","80","44",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("Button");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablelabel");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static03","84","48","168","44",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablebg");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static05","5","91","80","44",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("Edit");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablelabel");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static06","84","91","168","44",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablebg");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static11","5","5","80","44",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("Static");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablelabel");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12","84","5","168","44",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablebg");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button00","92","57","60","25",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("Search");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit00","92","103","132","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_value("nexacro platform");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static25","92","17","116","20",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("nexacro platform");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("Tabpage2");
            this.Tab00.addChild(obj.name, obj);

            obj = new Button("btn_popDiv","168","418","48","30",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("Click");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab01","475","222",null,"176","23",null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_tabindex("0");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab01);
            obj.set_text("Tabpage1");
            obj.set_url("Comp::Comp_Base_Sub.xfdl");
            this.Tab01.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab01);
            obj.set_text("Tabpage2");
            this.Tab01.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,600,this,function(p){});
            obj.set_stepcount("3");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Comp::Comp_Base_Sub.xfdl");
        };
        
        // User Script
        this.registerScript("Comp_Base.xfdl", function() {


        this.fn_open = function(obj,e)
        {
        /*
        	var sID    = obj.user_MID;
        	var sName  = nexacro.getApplication().gds_menu.lookup("MENU_ID", sID, "MENU_NAME");
        	var sURL   = nexacro.getApplication().gds_menu.lookup("MENU_ID", sID, "FORM_URL");

        	nexacro.getApplication().mainframe.VFrameSet0.HFrameSet0.LeftFrame.form.fn_openForm(sID, sName, sURL);
        */
        };

        this.btn_popMenu_onclick = function(obj,e)
        {
        	var nX = parseInt(obj.width);
        	var nY = 0;
        	this.PopupMenu00.trackPopupByComponent(obj, nX, nY);
        };

        this.btn_popDiv_onclick = function(obj,e)
        {
        	var nX = parseInt(obj.width);
        	var nY = 0;
        	this.PopupDiv00.trackPopupByComponent(obj, nX, nY, 270, 150);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button01.addEventHandler("onclick",this.fn_open,this);
            this.Button02.addEventHandler("onclick",this.fn_open,this);
            this.Button03.addEventHandler("onclick",this.fn_open,this);
            this.Button04.addEventHandler("onclick",this.fn_open,this);
            this.Button05.addEventHandler("onclick",this.fn_open,this);
            this.Button06.addEventHandler("onclick",this.fn_open,this);
            this.Button07.addEventHandler("onclick",this.fn_open,this);
            this.Button08.addEventHandler("onclick",this.fn_open,this);
            this.Button09.addEventHandler("onclick",this.fn_open,this);
            this.Button10.addEventHandler("onclick",this.fn_open,this);
            this.Button11.addEventHandler("onclick",this.fn_open,this);
            this.Button12.addEventHandler("onclick",this.fn_open,this);
            this.Button13.addEventHandler("onclick",this.fn_open,this);
            this.Button14.addEventHandler("onclick",this.fn_open,this);
            this.Button15.addEventHandler("onclick",this.fn_open,this);
            this.Button16.addEventHandler("onclick",this.fn_open,this);
            this.Menu00.addEventHandler("onmenuclick",this.Menu00_onmenuclick,this);
            this.btn_popMenu.addEventHandler("onclick",this.btn_popMenu_onclick,this);
            this.Button18.addEventHandler("onclick",this.fn_open,this);
            this.Button19.addEventHandler("onclick",this.fn_open,this);
            this.Button20.addEventHandler("onclick",this.fn_open,this);
            this.btn_popDiv.addEventHandler("onclick",this.btn_popDiv_onclick,this);
        };

        this.loadIncludeScript("Comp_Base.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
