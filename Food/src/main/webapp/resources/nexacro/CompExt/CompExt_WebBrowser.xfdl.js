(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CompExt_WebBrowser");
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
            obj = new Static("Static07","554","242","230","72",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablebg");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","554","143","230","34",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablebg");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","554","176","230","34",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablebg");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","554","209","230","34",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablebg");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","10","40","250","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("☞ Basic Usage");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","10","10","250","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("WebBrowser");
            obj.set_cssclass("sta_WF_subtitle");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser00","10","104","415","476",null,null,null,null,null,null,this);
            obj.getSetter("taborder").set("2");
            obj.getSetter("border").set("1px solid #bdc2c9");
            obj.getSetter("onusernotify").set("WebBrowser00_onusernotify");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","435","143","120","34",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Name");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name","559","148","162","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_value("nexacro");
            obj.set_text("nexacro");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","435","176","120","34",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Department");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_dept","559","181","162","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NAME");
            obj.set_text("");
            obj.set_value("01");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","435","209","120","34",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Hire Date");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_date","559","214","162","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_value("20180101");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","435","242","120","72",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Memo");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_memo","559","247","219","62",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_value("nexacro platform 17");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","435","109","250","24",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("nexacro form");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new Button("btn_get","435","325","90","25",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("get");
            this.addChild(obj.name, obj);

            obj = new Button("btn_set","535","325","90","25",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("set");
            this.addChild(obj.name, obj);

            obj = new Button("btn_call","635","325","90","25",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("call");
            this.addChild(obj.name, obj);

            obj = new Button("btn_body","470","292","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("Body");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtBody","10","66","450","218",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_value("<header>inner HTML</header>\n<table width=\"400\" style=\"border-collapse:collapse\">\n    <tr>\n        <th>Name</th>\n        <td><input type=\"text\" id=\"full_name\" value=\"html\"></td>\n    </tr>\n    <tr>\n        <th>Department</th>\n        <td>\n            <select id=\"dept_cd\">\n                <option value=\"01\">Accounting Team</option>\n                <option value=\"02\" selected>HR Team</option>\n                <option value=\"03\">Sales Team</option>\n                <option value=\"04\">Design Team</option>\n                <option value=\"05\">Education Team</option>\n            </select>\n        </td>\t\n    </tr>\n    <tr>\n        <th>Hire Date</th>\n        <td><input type=\"date\" id=\"hire_date\" value=\"2018-02-01\"></td>\n    </tr>\n    <tr>\n        <th>Memo</th>\n        <td><textarea cols=\"30\" rows=\"4\" id=\"memo\">html page</textarea></td>\n    </tr>\n</table>");
            obj.set_positionstep("1");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_load","365","75","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("Load");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtHead","470","67","320","218",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_value("<style>\nheader, footer {\n\tfont:normal 700 12px/20px \"Verdana\";\n    color: #222222;\n\tpadding: 5px;\n}\ntable,td {\n\tborder: 1px solid #bdc2c9;\n\tfont-family: verdana;\n\tfont-size: 9pt;\n\tpadding-left: 5px;\n\tpadding-top: 5px;\n\tpadding-bottom: 5px;\n\t\n}\n\nth {\n\tbackground-color: #e7eaee;\n\tborder: 1px solid #bdc2c9;\n\tcolor: #222222;\n\tfont: normal 12px/normal \"Verdana\";\n\twidth: 120px;\n\theight: 32px;\n\ttext-align: left;\n\tpadding-left: 10px;\n}\n\n</style>\n<script type=\"text/javascript\">\n\tfunction htmlFunction(arg)\n\t{\n\t\talert(arg);\n\t}\n</script>");
            obj.set_positionstep("1");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser01","10","291","450","250",null,null,null,null,null,null,this);
            obj.getSetter("taborder").set("23");
            obj.getSetter("border").set("1px solid #bdc2c9");
            obj.getSetter("onusernotify").set("WebBrowser00_onusernotify");
            obj.getSetter("onloadcompleted").set("WebBrowser00_onloadcompleted");
            obj.getSetter("positionstep").set("1");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_url","10","74","352","24",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var cbo_url_innerdataset = new nexacro.NormalDataset("cbo_url_innerdataset", obj);
            cbo_url_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">http://www.tobesoft.com</Col><Col id=\"datacolumn\">http://www.tobesoft.com</Col></Row><Row><Col id=\"codecolumn\">http://localhost:8080/EduProject/File/Html_Form.html</Col><Col id=\"datacolumn\">http://localhost:8080/EduProject/File/Html_Form.html</Col></Row><Row><Col id=\"codecolumn\">http://demo.nexacro.com/EduProject/File/Html_Form.html</Col><Col id=\"datacolumn\">http://demo.nexacro.com/EduProject/File/Html_Form.html</Col></Row></Rows>");
            obj.set_innerdataset(cbo_url_innerdataset);
            obj.set_text("http://www.tobesoft.com");
            obj.set_value("http://www.tobesoft.com");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_head","470","328","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("Head");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","10","40","250","24",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("☞ inner HTML");
            obj.set_cssclass("sta_WF_label");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("2");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_name","value","ds_emp","FULL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","cbo_dept","value","ds_emp","DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","cal_date","value","ds_emp","HIRE_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","cbo_url","value","ds_emp","DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CompExt_WebBrowser.xfdl", function() {
        this.btn_load_onclick = function(obj,e)
        {
        	var sURL = this.cbo_url.value;
        	this.WebBrowser00.set_url(sURL);
        };

        this.btn_get_onclick = function(obj,e)
        {
        	var objDoc = this.WebBrowser00.getProperty("document");
        	var objDom = objDoc.getProperty("all");

        	var strName = objDom.getProperty("full_name").getProperty("value");
        	var strDept = objDom.getProperty("dept_cd").getProperty("value");
        	var strDate = objDoc.callMethod("getElementById", "hire_date").getProperty("value");
        	var strText = objDoc.callMethod("getElementById", "memo").getProperty("value");

        	this.edt_name.set_value(strName);
        	this.cbo_dept.set_value(strDept);
        	this.cal_date.set_value(strDate.replace(/-/g,""));
        	this.txt_memo.set_value(strText);

        	if(objDoc && objDom){
        		objDoc.destroy();
        		objDoc = null;
        		objDom.destroy();
        		objDom = null;
        	}
        };

        this.btn_set_onclick = function(obj,e)
        {
        	var strName = this.edt_name.value;
        	var strDept = this.cbo_dept.value;
        	var strDate = this.cal_date.text;
        	var strText = this.txt_memo.value;

        	var objDoc = this.WebBrowser00.getProperty("document");
        	var objDom = objDoc.getProperty("all");
        	objDom.getProperty("full_name").setProperty("value", strName);
        	objDom.getProperty("dept_cd").setProperty("value", strDept);
        	objDoc.callMethod("getElementById", "hire_date").setProperty("value", strDate);
        	objDoc.callMethod("getElementById", "memo").setProperty("value", strText);

        	if(objDoc && objDom){
        		objDoc.destroy();
        		objDoc = null;
        		objDom.destroy();
        		objDom = null;
        	}

        };

        this.btn_call_onclick = function(obj,e)
        {
        	var objWin = this.WebBrowser00.getProperty("window");
        	objWin.callMethod("htmlFunction", "Function Parameter Value");

        };

        this.WebBrowser00_onusernotify = function(obj,e)
        {
        	this.alert("Send Data: " + e.userdata);
        };


        this.btn_body_onclick = function(obj,e)
        {
        	var strHtml = this.txtBody.value;
        	var objWeb = this.WebBrowser01.getProperty("document").getProperty("body");
        	objWeb.setProperty("innerHTML", strHtml);

        };

        this.btn_head_onclick = function(obj,e)
        {
        	var strHtml = this.txtHead.value;
        	var objWeb = this.WebBrowser01.getProperty("document").getProperty("head");
        	objWeb.setProperty("innerHTML", strHtml);
        };



        /**********************************************************
        http://localhost:8080/EduProject/File/Html_Form.html

        <!doctype html>
        <html>
        <head>
        <meta charset="utf-8">
        <title>nexacro platform</title>
        <style>
        header, footer {
        	font:normal 700 12px/20px "Verdana";
            color: #222222;
        	padding: 5px;

        }
        table,td {

        	border: 1px solid #bdc2c9;
        	font-family: verdana;
        	font-size: 9pt;
        	padding-left: 5px;
        	padding-top: 5px;
        	padding-bottom: 5px;

        }

        th {
        	background-color: #e7eaee;
        	border: 1px solid #bdc2c9;
        	color: #222222;
        	font: normal 12px/normal "Verdana";
        	width: 120px;
        	height: 32px;
        	text-align: left;
        	padding-left: 10px;
        }

        </style>
        <script type="text/javascript">
            if(!window.NEXACROHTML){
                window.NEXACROHTML = {};
            }
            window.NEXACROHTML.FireUserNotify = function(userdata){

                if(window.NEXACROWEBBROWSER){// WebBRowser

                    window.NEXACROWEBBROWSER.on_fire_onusernotify(window.NEXACROWEBBROWSER, userdata);

                }
        		else if(window.nexacro){ // Android
                    window.nexacro.fireUserNotify(userdata);

                }
        		else{ // Runtime

                    window.document.title = userdata;
                }
            }
        	function htmlFunction(arg)
        	{
        		alert(arg);
        	}
            function sendContent()
            {
                var str = document.getElementById("full_name").value;
                window.NEXACROHTML.FireUserNotify(str);
            }
        </script>
        </head>
        <body>
        	<header>
        		html
        	</header>
        	<table width="400" style="border-collapse:collapse">
        		<tr>
        			<th>Name</th>
        			<td><input type="text" id="full_name" value="html"></td>
        		</tr>
        		<tr>
        			<th>Department</th>
        			<td>
        				<select id="dept_cd">
        					<option value="01">Accounting Team</option>
        					<option value="02" selected>HR Team</option>
        					<option value="03">Sales Team</option>
        					<option value="04">Design Team</option>
        					<option value="05">Education Team</option>
        				</select>
        			</td>
        		</tr>
        		<tr>
        			<th>Hire Date</th>
        			<td><input type="date" id="hire_date" value="2018-02-01"></td>
        		</tr>
        		<tr>
        			<th>Memo</th>
        			<td><textarea cols="30" rows="4" id="memo">html page</textarea></td>
        		</tr>
        	</table>
        	<p>
        		<input type="button" value="Send" onclick="sendContent()">
        	</p>
        </body>
        </html>
        ****************************************************************/

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.CompExt_WebBrowser_onload,this);
            this.Static07.addEventHandler("onclick",this.Div00_Static07_onclick,this);
            this.Static10.addEventHandler("onclick",this.div_detail_Static10_onclick,this);
            this.edt_name.addEventHandler("canchange",this.div_detail_edt_name_canchange,this);
            this.Static05.addEventHandler("onclick",this.Div00_Static05_onclick,this);
            this.btn_get.addEventHandler("onclick",this.btn_get_onclick,this);
            this.btn_set.addEventHandler("onclick",this.btn_set_onclick,this);
            this.btn_call.addEventHandler("onclick",this.btn_call_onclick,this);
            this.btn_body.addEventHandler("onclick",this.btn_body_onclick,this);
            this.btn_load.addEventHandler("onclick",this.btn_load_onclick,this);
            this.txtHead.addEventHandler("onchanged",this.TextArea01_onchanged,this);
            this.btn_head.addEventHandler("onclick",this.btn_head_onclick,this);
        };

        this.loadIncludeScript("CompExt_WebBrowser.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
