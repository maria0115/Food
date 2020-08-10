(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_Calendar");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_day", this);
            obj._setContents("<ColumnInfo><Column id=\"date\" type=\"STRING\" size=\"256\"/><Column id=\"text_color\" type=\"STRING\" size=\"256\"/><Column id=\"back_color\" type=\"STRING\" size=\"256\"/><Column id=\"border_color\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"date\">20170103</Col><Col id=\"text_color\">orange</Col><Col id=\"back_color\"/><Col id=\"border_color\">1px solid red</Col></Row><Row><Col id=\"date\">20170105</Col><Col id=\"text_color\">red</Col><Col id=\"back_color\">yellow</Col><Col id=\"border_color\">1px solid red</Col></Row><Row><Col id=\"date\">20170111</Col><Col id=\"text_color\">yellow</Col><Col id=\"back_color\">olive</Col><Col id=\"border_color\">2px solid skyblue</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Calendar("Calendar00","18","65","160","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_locale("");
            obj.set_value("20170101");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_trailing","18","238","149","172",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_locale("");
            obj.set_value("20170101");
            obj.set_usetrailingday("true");
            obj.set_type("monthonly");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_today","96","64","160","24",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_locale("");
            obj.set_value("20170101");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_lastday","96","92","160","24",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_locale("");
            obj.set_value("20170101");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","18","139","226","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var Radio00_innerdataset = new nexacro.NormalDataset("Radio00_innerdataset", obj);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">normal</Col><Col id=\"datacolumn\">normal</Col></Row><Row><Col id=\"codecolumn\">spin</Col><Col id=\"datacolumn\">spin</Col></Row><Row><Col id=\"codecolumn\">monthonly</Col><Col id=\"datacolumn\">month</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_value("normal");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio01","418","65","328","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var Radio01_innerdataset = new nexacro.NormalDataset("Radio01_innerdataset", obj);
            Radio01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">normal</Col><Col id=\"datacolumn\">normal</Col></Row><Row><Col id=\"codecolumn\">center</Col><Col id=\"datacolumn\">center</Col></Row><Row><Col id=\"codecolumn\">none</Col><Col id=\"datacolumn\">none</Col></Row><Row><Col id=\"codecolumn\">system</Col><Col id=\"datacolumn\">system(Mobile)</Col></Row></Rows>");
            obj.set_innerdataset(Radio01_innerdataset);
            obj.set_value("normal");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_popup","418","90","160","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_locale("");
            obj.set_value("20170101");
            obj.set_type("normal");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar04","418","164","149","172",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_locale("");
            obj.set_value("20170101");
            obj.set_type("monthonly");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_innerdataset("ds_day");
            obj.set_backgroundcolumn("back_color");
            obj.set_bordercolumn("border_color");
            obj.set_datecolumn("date");
            obj.set_textcolorcolumn("text_color");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","418","338","369","108",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_binddataset("ds_day");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"60\"/><Column size=\"62\"/><Column size=\"60\"/></Columns><Rows><Row size=\"20\" band=\"head\"/><Row size=\"20\" band=\"head\"/><Row size=\"22\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"date\"/><Cell col=\"1\" colspan=\"3\" text=\"color\"/><Cell row=\"1\" col=\"1\" text=\"text\"/><Cell row=\"1\" col=\"2\" text=\"background\"/><Cell row=\"1\" col=\"3\" text=\"border\"/></Band><Band id=\"body\"><Cell text=\"bind:date\" displaytype=\"date\" textAlign=\"center\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"1\" text=\"bind:text_color\" edittype=\"text\"/><Cell col=\"2\" text=\"bind:back_color\" edittype=\"text\"/><Cell col=\"3\" text=\"bind:border_color\" edittype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","10","40","250","24",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("☞ Basic Usage");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","10","10","250","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Calendar");
            obj.set_cssclass("sta_WF_subtitle");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","213","226","24",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("☞ Trailing Day - usetrailingday");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","10","40","202","24",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("☞ Date Calculation");
            obj.set_cssclass("sta_WF_label");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","10","114","226","24",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("☞ Calendar Type - type");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","410","40","314","24",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("☞ Calendar PopupType - popuptype");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","410","139","202","24",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("☞ Anniversary - innerdataset");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_tra","210","238","56","48",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("0");
            obj.set_rowcount("2");
            var rdo_tra_innerdataset = new nexacro.NormalDataset("rdo_tra_innerdataset", obj);
            rdo_tra_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">true</Col><Col id=\"datacolumn\">true</Col></Row><Row><Col id=\"codecolumn\">false</Col><Col id=\"datacolumn\">false</Col></Row></Rows>");
            obj.set_innerdataset(rdo_tra_innerdataset);
            obj.set_value("true");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_longformat","102","495","184","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_value("20170103");
            obj.set_locale("ko_KR");
            obj.set_dateformat("LONGDATE");
            obj.set_editformat("SHORTDATE");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_local","19","470","323","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var rdo_local_innerdataset = new nexacro.NormalDataset("rdo_local_innerdataset", obj);
            rdo_local_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">ko_KR</Col><Col id=\"datacolumn\">Korean</Col></Row><Row><Col id=\"codecolumn\">ja_JP</Col><Col id=\"datacolumn\">Japanese</Col></Row><Row><Col id=\"codecolumn\">en_US</Col><Col id=\"datacolumn\">English </Col></Row><Row><Col id=\"datacolumn\">German </Col><Col id=\"codecolumn\">de_DE</Col></Row></Rows>");
            obj.set_innerdataset(rdo_local_innerdataset);
            obj.set_value("ko_KR");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","11","445","328","24",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("☞ Localization - dateformat, editformat, local");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","19","495","74","24",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("long date");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","19","520","74","24",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("short date");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_shortformat","102","520","184","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_value("20170103");
            obj.set_locale("ko_KR");
            obj.set_dateformat("SHORTDATE");
            obj.set_editformat("SHORTDATE");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","20","64","74","24",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("Today");
            obj.set_cssclass("sta_WF_label");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","20","92","74","24",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("Last day");
            obj.set_cssclass("sta_WF_label");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","10","162","250","24",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("☞ Basic Method");
            obj.set_cssclass("sta_WF_label");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_date","20","186","160","24",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_locale("");
            obj.set_value("20170101");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_hotkey("");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("st_year","130","215","160","24",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_year","20","215","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("getYear()");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_month","20","244","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("getMonth()");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_day","20","272","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("getDay()");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_select","130","300","160","24",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_locale("");
            obj.set_value("20170115");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_hotkey("");
            obj.set_positionstep("1");
            obj.set_type("spin");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Button("btn_select","20","300","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("setCaretPos()");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("st_month","130","244","160","24",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("st_day","130","272","160","24",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_type","18","164","160","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_locale("");
            obj.set_value("20170101");
            obj.set_type("normal");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("2");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Comp_Calendar.xfdl", function() {
        this.Form_onload = function(obj,e)
        {
        	var sToday = this.fn_Today();
        	var sLastDay = this.fn_LastDay(sToday);
        	this.cal_today.set_value(sToday);
        	this.cal_lastday.set_value(sLastDay);
        };

        this.fn_Today = function()
        {
        	var objDate = new Date();
        	var sToday  = objDate.getFullYear().toString();
        	    sToday += (objDate.getMonth()+1).toString().padLeft(2, "0")
        	    sToday += objDate.getDate().toString().padLeft(2, "0");
        	return sToday;
        }

        this.fn_LastDay = function(sDate)
        {
        	var dDate = new Date(parseInt(sDate.substr(0,4)), parseInt(sDate.substr(4,2)), "01");
        	dDate = dDate.addDate(-1);

        	var objDate  = new Date(dDate);
        	var sRtn = objDate.getFullYear()
                     + (objDate.getMonth()+1).toString().padLeft(2, "0")
                     +  objDate.getDate().toString().padLeft(2, "0");
        	return sRtn;
        }

        this.Radio00_onitemchanged = function(obj,e)
        {
        	this.cal_type.set_type(e.postvalue);
        	if(e.postvalue == "monthonly"){
        	}
        	else{
        		this.cal_type.set_width(160);
        		this.cal_type.set_height(25);
        	}

        };

        this.Radio01_onitemchanged = function(obj,e)
        {
        	this.cal_popup.set_popuptype(e.postvalue);
        };

        this.rdo_tra_onitemchanged = function(obj,e)
        {
        	this.cal_trailing.set_usetrailingday(this.rdo_tra.value);
        };

        this.rdo_local_onitemchanged = function(obj,e)
        {
        	this.cal_longformat.set_locale(this.rdo_local.value);
        	this.cal_shortformat.set_locale(this.rdo_local.value);
        };

        this.btn_year_onclick = function(obj,e)
        {
        	this.st_year.set_text(this.cal_date.getYear());
        };

        this.btn_month_onclick = function(obj,e)
        {
        	this.st_month.set_text(this.cal_date.getMonth());
        };

        this.btn_day_onclick = function(obj,e)
        {
        	this.st_day.set_text(this.cal_date.getDay());
        };

        this.btn_select_onclick = function(obj,e)
        {
        	this.cal_select.setFocus();
        	this.cal_select.setCaretPos(10);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.Radio00.addEventHandler("onitemchanged",this.Radio00_onitemchanged,this);
            this.Radio01.addEventHandler("onitemchanged",this.Radio01_onitemchanged,this);
            this.rdo_tra.addEventHandler("onitemchanged",this.rdo_tra_onitemchanged,this);
            this.rdo_local.addEventHandler("onitemchanged",this.rdo_local_onitemchanged,this);
            this.btn_year.addEventHandler("onclick",this.btn_year_onclick,this);
            this.btn_month.addEventHandler("onclick",this.btn_month_onclick,this);
            this.btn_day.addEventHandler("onclick",this.btn_day_onclick,this);
            this.btn_select.addEventHandler("onclick",this.btn_select_onclick,this);
        };

        this.loadIncludeScript("Comp_Calendar.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
