(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_Static");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static02","10","152","250","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("☞ Expr");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","12","232","122","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("☞ Decorate");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","40","250","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("☞ Basic Usage");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","10","10","250","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Static");
            obj.set_cssclass("sta_WF_subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","12","289","356","28",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Font Color <fc v=\'red\'> nexacro platform </fc>");
            obj.set_expr("");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_padding("0px 0px 0px 5px");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","12","317","356","28",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Font Face <ff v=\'verdana\'> nexacro platform </ff>");
            obj.set_expr("");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_padding("0px 0px 0px 5px");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","12","345","356","28",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Bold <b v=\'true\'> nexacro platform </b>");
            obj.set_expr("");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_padding("0px 0px 0px 5px");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","10","176","250","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("nexacro platform");
            obj.set_expr("expr:\"Current time : \" + comp.parent.fn_getTime()");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_padding("0px 0px 0px 5px");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","12","261","356","28",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Font Size <fs v=\'14\'> nexacro platform </fs>");
            obj.set_expr("");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_padding("0px 0px 0px 5px");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","12","373","356","28",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("italic <i v=\'true\'> nexacro platform </i>");
            obj.set_expr("");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_padding("0px 0px 0px 5px");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","12","401","356","28",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("under line <u v=\'true\'> nexacro platform </u>");
            obj.set_expr("");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_padding("0px 0px 0px 5px");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","8","64","142","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("nexacro platform");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_padding("0px 0px 0px 5px");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","12","429","356","28",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("strike <s v=\'true\'> nexacro platform </s>");
            obj.set_expr("");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_padding("0px 0px 0px 5px");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","12","457","356","28",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Link <l v=\'http://www.tobesoft.com\'> HomePage </l>");
            obj.set_expr("");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_padding("0px 0px 0px 5px");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","155","64","170","68",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("nexacro platform\r\nStatic Component\r\nHello World\r\n");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_padding("0px 0px 0px 5px");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","12","485","356","28",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("Phone Call <l v=\'tel:010-1234-5678\'> Phone Call </l>");
            obj.set_expr("");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_padding("0px 0px 0px 5px");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","12","513","356","28",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("Send Mail <l v=\'mailto:help@tobesoft.com\'> Mail </l>");
            obj.set_expr("");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_padding("0px 0px 0px 5px");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","Static05:5","261","164","28",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("<fs v=\'12\'> nexacro platform </fs>");
            obj.set_expr("");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","Static08:5","289","164","28",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("<fc v=\'red\'> nexacro platform </fc>");
            obj.set_expr("");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","Static09:5","317","164","28",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("<ff v=\'verdana\'> nexacro platform </ff>");
            obj.set_expr("");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","Static10:5","345","164","28",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("<b v=\'true\'> nexacro platform </b>");
            obj.set_expr("");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static25","Static12:5","373","164","28",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("<i v=\'true\'> nexacro platform </i>");
            obj.set_expr("");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static26","Static16:5","401","164","28",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("<u v=\'true\'> nexacro platform </u>");
            obj.set_expr("");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static27","Static17:5","429","164","28",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("<s v=\'true\'> nexacro platform </s>");
            obj.set_expr("");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static28","Static18:5","457","164","28",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("<l v=\'http://www.tobesoft.com\'> HomePage </l>");
            obj.set_expr("");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static29","Static19:5","485","164","28",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("<l v=\'tel:010-1234-5678\'> Phone Call </l>");
            obj.set_expr("");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static30","Static20:5","513","164","28",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("<l v=\'mailto:help@tobesoft.com\'> Send Mail </l>");
            obj.set_expr("");
            obj.set_usedecorate("true");
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
        this.registerScript("Comp_Static.xfdl", function() {

        this.fn_getTime = function()
        {
        	var objDate = new Date();
        	var sTime  = objDate.getHours().toString().padLeft(2, "0")   + ":";
        		sTime += objDate.getMinutes().toString().padLeft(2, "0") + ":";
        		sTime += objDate.getSeconds().toString().padLeft(2, "0");

        	return sTime;
        }




        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("Comp_Static.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
