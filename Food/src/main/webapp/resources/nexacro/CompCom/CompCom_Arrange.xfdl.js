(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CompCom_Arrange");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_emp", this);
            obj.set_keystring("");
            obj._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"POS_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"10\"/><Column id=\"MEMO\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"FULL_NAME\">Olivia</Col><Col id=\"POS_CD\">02</Col><Col id=\"HIRE_DATE\">20101003</Col><Col id=\"SALARY\">83000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">ivory</Col><Col id=\"DEPT_CD\">01</Col><Col id=\"EMPL_ID\">AA001</Col></Row><Row><Col id=\"FULL_NAME\">John</Col><Col id=\"POS_CD\">02</Col><Col id=\"HIRE_DATE\">20051011</Col><Col id=\"SALARY\">76000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">false</Col><Col id=\"MEMO\">greenyellow</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"EMPL_ID\">AA002</Col></Row><Row><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20070206</Col><Col id=\"SALARY\">95000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">aliceblue</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"EMPL_ID\">BB001</Col></Row><Row><Col id=\"FULL_NAME\">Adam</Col><Col id=\"POS_CD\">04</Col><Col id=\"HIRE_DATE\">20010109</Col><Col id=\"SALARY\">88000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">greenyellow</Col><Col id=\"DEPT_CD\">04</Col><Col id=\"EMPL_ID\">CC001</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_retrieve","20","379","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("Retrieve");
            obj.set_padding("0px 5px");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add","btn_retrieve:8","379","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("Add");
            obj.getSetter("leftbase").set("Button02.right");
            obj.set_padding("0px 5px");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del","btn_add:8","379","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("Delete");
            obj.getSetter("leftbase").set("Button03.right");
            obj.set_padding("0px 5px");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","btn_del:8","379","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("Save");
            obj.getSetter("leftbase").set("Button04.right");
            obj.set_padding("0px 5px");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_grip2","582","252","12","11",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_image("URL(\"theme://images/Statusbar_img_grip.png\")");
            obj.set_cursor("nw-resize");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Div("div_base00","278","75",null,null,"img_grip2:-8","img_grip2:-8",null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Div00");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","2","2",null,"20.2%","2",null,null,null,null,null,this.div_base00.form);
            obj.set_taborder("3");
            obj.set_text("Comp1");
            this.div_base00.addChild(obj.name, obj);

            obj = new Button("Button00","2","Button03:2","22.2%",null,null,"2",null,null,null,null,this.div_base00.form);
            obj.set_taborder("0");
            obj.set_text("Comp2");
            this.div_base00.addChild(obj.name, obj);

            obj = new Button("Button01","Button00:2","Button03:2","45.81%",null,null,"2",null,null,null,null,this.div_base00.form);
            obj.set_taborder("1");
            obj.set_text("Comp3");
            this.div_base00.addChild(obj.name, obj);

            obj = new Button("Button02","Button01:2","Button03:2",null,null,"2","2",null,null,null,null,this.div_base00.form);
            obj.set_taborder("2");
            obj.set_text("Comp4");
            this.div_base00.addChild(obj.name, obj);

            obj = new Div("div_hor","319","290","412","147",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Button("btn_baseR","150","35","60","30",null,null,null,null,null,null,this.div_hor.form);
            obj.set_taborder("0");
            obj.set_background("khaki");
            obj.set_font("normal normal 10pt \"Verdana\"");
            obj.set_positionstep("0");
            obj.set_text("BASE");
            obj.set_border("1px solid #9c9c9c , 1px solid #9c9c9c , 1px solid #9c9c9c , 2px solid red");
            this.div_hor.addChild(obj.name, obj);

            obj = new Button("Button00",null,"35","60","30","btn_baseR:10",null,null,null,null,null,this.div_hor.form);
            obj.set_taborder("1");
            obj.set_border("1px solid #9c9c9c , 2px solid blue , 1px solid #9c9c9c , 1px solid #9c9c9c");
            obj.set_positionstep("0");
            obj.set_text("Move");
            this.div_hor.addChild(obj.name, obj);

            obj = new Button("Button01","10","35",null,"30","btn_baseR:80",null,null,null,null,null,this.div_hor.form);
            obj.set_taborder("2");
            obj.set_border("1px solid #9c9c9c , 2px solid blue , 1px solid #9c9c9c , 1px solid #9c9c9c");
            obj.set_positionstep("0");
            obj.set_text("Resize");
            this.div_hor.addChild(obj.name, obj);

            obj = new Static("Static02","10","5","396","24",null,null,null,null,null,null,this.div_hor.form);
            obj.set_taborder("3");
            obj.set_text("Right position based on BASE Left");
            this.div_hor.addChild(obj.name, obj);

            obj = new Button("btn_baseL","200","76","60","30",null,null,null,null,null,null,this.div_hor.form);
            obj.set_taborder("4");
            obj.set_background("khaki");
            obj.set_font("normal normal 10pt \"Verdana\"");
            obj.set_positionstep("0");
            obj.set_text("BASE");
            obj.set_border("1px solid #9c9c9c , 2px solid red , 1px solid #9c9c9c , 1px solid #9c9c9c");
            this.div_hor.addChild(obj.name, obj);

            obj = new Button("Button21","btn_baseL:80","76",null,"30","10",null,null,null,null,null,this.div_hor.form);
            obj.set_taborder("5");
            obj.set_border("1px solid #9c9c9c , 1px solid #9c9c9c , 1px solid #9c9c9c , 2px solid blue");
            obj.set_positionstep("0");
            obj.set_text("Resize");
            this.div_hor.addChild(obj.name, obj);

            obj = new Button("Button22","btn_baseL:10","76","60","30",null,null,null,null,null,null,this.div_hor.form);
            obj.set_taborder("6");
            obj.set_border("1px solid #9c9c9c , 1px solid #9c9c9c , 1px solid #9c9c9c , 2px solid blue");
            obj.set_positionstep("0");
            obj.set_text("Move");
            this.div_hor.addChild(obj.name, obj);

            obj = new Static("Static00","8","113","396","24",null,null,null,null,null,null,this.div_hor.form);
            obj.set_taborder("7");
            obj.set_text("Left position based on BASE Right");
            obj.set_textAlign("right");
            this.div_hor.addChild(obj.name, obj);

            obj = new Div("div_ver","21","290","282","297",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Button("btn_baseB","10","115","90","30",null,null,null,null,null,null,this.div_ver.form);
            obj.set_taborder("0");
            obj.set_background("khaki");
            obj.set_font("normal normal 10pt \"Verdana\"");
            obj.set_positionstep("0");
            obj.set_text("BASE");
            obj.set_border("2px solid red , 1px solid #9c9c9c , 1px solid #9c9c9c");
            this.div_ver.addChild(obj.name, obj);

            obj = new Button("Button17","10",null,"90","30",null,"btn_baseB:10",null,null,null,null,this.div_ver.form);
            obj.set_taborder("1");
            obj.set_border("1px solid #9c9c9c , 1px solid #9c9c9c , 2px solid blue");
            obj.set_positionstep("0");
            obj.set_text("Move");
            this.div_ver.addChild(obj.name, obj);

            obj = new Button("Button18","10","35","90",null,null,"btn_baseB:50",null,null,null,null,this.div_ver.form);
            obj.set_taborder("2");
            obj.set_border("1px solid #9c9c9c , 1px solid #9c9c9c , 2px solid blue");
            obj.set_positionstep("0");
            obj.set_text("Resize");
            this.div_ver.addChild(obj.name, obj);

            obj = new Button("btn_baseT","169","145","90","30",null,null,null,null,null,null,this.div_ver.form);
            obj.set_taborder("3");
            obj.set_background("khaki");
            obj.set_font("normal normal 10pt \"Verdana\"");
            obj.set_positionstep("0");
            obj.set_text("BASE");
            obj.set_border("1px solid #9c9c9c , 1px solid #9c9c9c , 2px solid red");
            this.div_ver.addChild(obj.name, obj);

            obj = new Button("Button19","169","btn_baseT:50","90",null,null,"40",null,null,null,null,this.div_ver.form);
            obj.set_taborder("4");
            obj.set_border("2px solid blue , 1px solid #9c9c9c , 1px solid #9c9c9c");
            obj.set_positionstep("0");
            obj.set_text("Resize");
            this.div_ver.addChild(obj.name, obj);

            obj = new Button("Button20","169","btn_baseT:10","90","30",null,null,null,null,null,null,this.div_ver.form);
            obj.set_taborder("5");
            obj.set_border("2px solid blue , 1px solid #9c9c9c , 1px solid #9c9c9c");
            obj.set_positionstep("0");
            obj.set_text("Move");
            this.div_ver.addChild(obj.name, obj);

            obj = new Static("Static02","10","5","256","24",null,null,null,null,null,null,this.div_ver.form);
            obj.set_taborder("6");
            obj.set_text("Bottom position based on BASE Top");
            obj.set_wordWrap("english");
            this.div_ver.addChild(obj.name, obj);

            obj = new Static("Static00","8","258","256","24",null,null,null,null,null,null,this.div_ver.form);
            obj.set_taborder("7");
            obj.set_text("Top position based on BASE Bottom");
            obj.set_wordWrap("english");
            obj.set_textAlign("right");
            this.div_ver.addChild(obj.name, obj);

            obj = new ImageViewer("img_grip1","132","167","12","11",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_image("URL(\"theme://images/Statusbar_img_grip.png\")");
            obj.set_cursor("nw-resize");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","10","40","250","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("☞ Component Position - Anchor");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","10","256","170","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("☞ Arrangement Position");
            obj.set_cssclass("sta_WF_label");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_baseSize","20","75",null,null,"img_grip1:-8","img_grip1:-8",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("khaki");
            obj.set_font("normal normal 10pt \"Verdana\"");
            obj.set_text("BASE");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button08","btn_baseSize:10","76","btn_baseSize:50%","btn_baseSize:50%",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("w: 50%\r\nh: 50%");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","15","46","250","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("☞ Arrangement Size");
            obj.set_cssclass("sta_WF_label");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_grip","424","237","12","11",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_image("URL(\"theme://images/Statusbar_img_grip.png\")");
            obj.set_cursor("nw-resize");
            this.addChild(obj.name, obj);

            obj = new Button("btn_start","180","259","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("▶");
            obj.set_font("normal 10px/normal \"Verdana\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_stop","203","259","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("■");
            obj.set_font("normal 10px/normal \"Verdana\"");
            this.addChild(obj.name, obj);

            obj = new Div("div_base","20","70",null,null,"img_grip:-8","img_grip:-8",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_border("1px solid red");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","10","10","100","30",null,null,null,null,null,null,this.div_base.form);
            obj.set_taborder("0");
            obj.set_text("Left Top");
            obj.set_border("1px solid blue , 1px solid #9c9c9c , 1px solid #9c9c9c , 1px solid blue");
            this.div_base.addChild(obj.name, obj);

            obj = new Button("Button01",null,"10","100","30","10",null,null,null,null,null,this.div_base.form);
            obj.set_taborder("1");
            obj.set_text("Right Top");
            obj.set_border("1px solid blue , 1px solid blue , 1px solid #9c9c9c , 1px solid #9c9c9c");
            this.div_base.addChild(obj.name, obj);

            obj = new Button("Button02","10",null,"100","30",null,"10",null,null,null,null,this.div_base.form);
            obj.set_taborder("2");
            obj.set_text("Left Bottom");
            obj.set_border("1px solid #9c9c9c , 1px solid #9c9c9c , 1px solid blue , 1px solid blue");
            this.div_base.addChild(obj.name, obj);

            obj = new Button("Button03",null,null,"100","30","10","10",null,null,null,null,this.div_base.form);
            obj.set_taborder("3");
            obj.set_text("Right Bottom");
            obj.set_border("1px solid #9c9c9c , 1px solid blue , 1px solid blue , 1px solid #9c9c9c");
            this.div_base.addChild(obj.name, obj);

            obj = new Button("Button04","10","50",null,null,"10","50",null,null,null,null,this.div_base.form);
            obj.set_taborder("4");
            obj.set_text("Left Top Right Bottom");
            obj.set_border("1px solid blue");
            this.div_base.addChild(obj.name, obj);

            obj = new Static("Static06","10","10","250","20",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Position & Arrangement");
            obj.set_cssclass("sta_WF_subtitle");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","10","346","146","24",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("☞ Fit To Contents");
            obj.set_cssclass("sta_WF_label");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_fit","140","346","40","24",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("Fit");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_fit_re","185","346","68","24",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("release");
            obj.set_positionstep("1");
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
        this.registerScript("CompCom_Arrange.xfdl", function() {
        this.obj_ondrag = function(obj,e)
        {
        	return true;
        };

        this.obj_onlbuttondown = function(obj,e)
        {
        	obj.nX = e.clientx;
        	obj.nY = e.clienty;
        };

        this.Form_ondragmove = function(obj,e)
        {
        	e.sourceobject.move(e.clientx-e.sourceobject.nX, e.clienty-e.sourceobject.nY);
        	this.resetScroll();
        };

        this.btn_start_onclick = function(obj,e)
        {
        	this.setTimer(1, 50);
        };

        this.btn_stop_onclick = function(obj,e)
        {
        	this.killTimer(1);
        };

        this.Form_ontimer = function(obj,e)
        {
        	if(e.timerid == 1){
        		var arrObj = new Array();
        		arrObj[0] = this.div_hor.form.btn_baseR;
        		arrObj[1] = this.div_hor.form.btn_baseL;
        		arrObj[2] = this.div_ver.form.btn_baseB;
        		arrObj[3] = this.div_ver.form.btn_baseT;
        		this.fn_move(arrObj);
        	}
        };

        this.nCnt = 0;
        this.sFlag = "A";
        this.fn_move = function(arrObj)
        {
        	if(this.nCnt == 100){
        		this.sFlag = "B";
        	}
        	else if(this.nCnt == 0){
        		this.sFlag = "A";
        	}

        	if(this.sFlag == "A"){
        		arrObj[0].move(parseInt(arrObj[0].left)+1, parseInt(arrObj[0].top)  );
        		arrObj[1].move(parseInt(arrObj[1].left)-1, parseInt(arrObj[1].top)  );
        		arrObj[2].move(parseInt(arrObj[2].left)  , parseInt(arrObj[2].top)+1);
        		arrObj[3].move(parseInt(arrObj[3].left)  , parseInt(arrObj[3].top)-1);
        		this.nCnt ++;
        	}
        	else{
        		arrObj[0].move(parseInt(arrObj[0].left)-1, parseInt(arrObj[0].top)  );
        		arrObj[1].move(parseInt(arrObj[1].left)+1, parseInt(arrObj[1].top)  );
        		arrObj[2].move(parseInt(arrObj[2].left)  , parseInt(arrObj[2].top)-1);
        		arrObj[3].move(parseInt(arrObj[3].left)  , parseInt(arrObj[3].top)+1);
        		this.nCnt--;
        	}
        	this.div_hor.form.resetScroll();
        	this.div_ver.form.resetScroll();

        }

        this.btn_fit_onclick = function(obj,e)
        {
        	this.btn_retrieve.set_fittocontents("width");
        	this.btn_add.set_fittocontents("width");
        	this.btn_del.set_fittocontents("width");
        	this.btn_save.set_fittocontents("width");
        };

        this.btn_fit_re_onclick = function(obj,e)
        {
        	this.btn_retrieve.set_fittocontents("none");
        	this.btn_add.set_fittocontents("none");
        	this.btn_del.set_fittocontents("none");
        	this.btn_save.set_fittocontents("none");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("ondragmove",this.Form_ondragmove,this);
            this.addEventHandler("ontimer",this.Form_ontimer,this);
            this.btn_retrieve.addEventHandler("onclick",this.Button02_onclick,this);
            this.img_grip2.addEventHandler("ondrag",this.obj_ondrag,this);
            this.img_grip2.addEventHandler("onlbuttondown",this.obj_onlbuttondown,this);
            this.div_hor.addEventHandler("ondragmove",this.div_arrange_ondragmove,this);
            this.div_hor.form.btn_baseR.addEventHandler("ondrag",this.obj_ondrag,this);
            this.div_hor.form.btn_baseR.addEventHandler("onlbuttondown",this.obj_onlbuttondown,this);
            this.div_hor.form.btn_baseL.addEventHandler("ondrag",this.obj_ondrag,this);
            this.div_hor.form.btn_baseL.addEventHandler("onlbuttondown",this.obj_onlbuttondown,this);
            this.div_ver.addEventHandler("ondragmove",this.div_arrange_ondragmove,this);
            this.div_ver.form.btn_baseB.addEventHandler("ondrag",this.obj_ondrag,this);
            this.div_ver.form.btn_baseB.addEventHandler("onlbuttondown",this.obj_onlbuttondown,this);
            this.div_ver.form.btn_baseT.addEventHandler("ondrag",this.obj_ondrag,this);
            this.div_ver.form.btn_baseT.addEventHandler("onlbuttondown",this.obj_onlbuttondown,this);
            this.img_grip1.addEventHandler("ondrag",this.obj_ondrag,this);
            this.img_grip1.addEventHandler("onlbuttondown",this.obj_onlbuttondown,this);
            this.img_grip.addEventHandler("ondrag",this.obj_ondrag,this);
            this.img_grip.addEventHandler("onlbuttondown",this.obj_onlbuttondown,this);
            this.btn_start.addEventHandler("onclick",this.btn_start_onclick,this);
            this.btn_stop.addEventHandler("onclick",this.btn_stop_onclick,this);
            this.btn_fit.addEventHandler("onclick",this.btn_fit_onclick,this);
            this.btn_fit_re.addEventHandler("onclick",this.btn_fit_re_onclick,this);
        };

        this.loadIncludeScript("CompCom_Arrange.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
