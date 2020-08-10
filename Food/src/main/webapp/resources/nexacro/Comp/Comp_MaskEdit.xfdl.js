(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_MaskEdit");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new MaskEdit("MaskEdit12","76","422","62","24",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_value("abcd");
            obj.set_type("string");
            obj.set_format("aaaa");
            obj.set_limitbymask("decimal");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","96","64","94","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_value("AB123");
            obj.set_type("string");
            obj.set_format("AA-###");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit15","76","494","62","24",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_value("ABCD");
            obj.set_type("string");
            obj.set_format("A{AA}A");
            obj.set_limitbymask("decimal");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01","96","92","94","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_value("1200.56");
            obj.set_format("#,###.00");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit02","553","302","112","24",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_value("1200");
            obj.set_type("number");
            obj.set_format("#,###");
            obj.set_limitbymask("decimal");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit03","553","326","112","24",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_value("1200");
            obj.set_type("number");
            obj.set_format("#,##9");
            obj.set_limitbymask("decimal");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit04","553","350","112","24",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_value("1200");
            obj.set_type("number");
            obj.set_format("#,##0");
            obj.set_limitbymask("decimal");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit14","76","470","62","24",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_value("ab12");
            obj.set_type("string");
            obj.set_format("zzzz");
            obj.set_limitbymask("decimal");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit11","76","398","62","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_value("ABCD");
            obj.set_type("string");
            obj.set_format("AAAA");
            obj.set_limitbymask("decimal");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit10","76","374","62","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_value("Ab12");
            obj.set_type("string");
            obj.set_format("9999");
            obj.set_limitbymask("decimal");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit09","76","350","62","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_value("AbCd");
            obj.set_type("string");
            obj.set_format("****");
            obj.set_limitbymask("decimal");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit05","553","398","112","24",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_value("1200.5");
            obj.set_type("number");
            obj.set_format("#,###.00");
            obj.set_limitbymask("none");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit08","76","326","62","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_value("1234");
            obj.set_type("string");
            obj.set_format("####");
            obj.set_limitbymask("decimal");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit06","553","374","112","24",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_value("1200.5");
            obj.set_type("number");
            obj.set_format("#,###.##");
            obj.set_limitbymask("decimal");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEd1212","20","224","112","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_value("1200.50");
            obj.set_type("number");
            obj.set_format("#,###.00");
            obj.set_limitbymask("decimal");
            obj.set_locale("bg_BG");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEd00","138","224","112","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_value("1200.50");
            obj.set_type("number");
            obj.set_format("#,###.00");
            obj.set_limitbymask("decimal");
            obj.set_locale("ca_ES");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit07","76","302","62","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_value("Ab3$");
            obj.set_type("string");
            obj.set_format("@@@@");
            obj.set_limitbymask("decimal");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit13","76","446","62","24",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_value("AB12");
            obj.set_type("string");
            obj.set_format("ZZZZ");
            obj.set_limitbymask("decimal");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","483","374","67","24",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("#,###.##");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","21","326","51","24",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("####");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","21","350","51","24",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("****");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","483","398","67","24",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("#,###.00");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","21","374","51","24",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("9999");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","483","350","67","24",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("#,##0");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","21","398","51","24",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("AAAA");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","483","326","67","24",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("#,##9");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","21","422","51","24",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("aaaa");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","483","302","67","24",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("#,###");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","21","446","51","24",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("ZZZZ");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","21","302","51","24",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("@@@@");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","21","470","51","24",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("zzzz");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","10","40","250","24",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("☞ Basic Usage");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","10","10","250","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("MaskEdit");
            obj.set_cssclass("sta_WF_subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","64","66","24",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("String");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20","92","66","24",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("Number");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","18","278","146","24",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("☞ Mask - String Type");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static25","21","494","51","24",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("A{AA}A");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","157","326","267","24",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("# : Decimal Number(0~9)");
            this.addChild(obj.name, obj);

            obj = new Static("Static26","157","350","267","24",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("* : lower case & upper case");
            this.addChild(obj.name, obj);

            obj = new Static("Static27","157","374","267","24",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("9 : lower case & upper case & decimal number");
            this.addChild(obj.name, obj);

            obj = new Static("Static28","157","398","267","24",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("A : upper case");
            this.addChild(obj.name, obj);

            obj = new Static("Static29","157","422","267","24",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("a : lower case");
            this.addChild(obj.name, obj);

            obj = new Static("Static30","157","446","267","24",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("Z : upper case & decimal number");
            this.addChild(obj.name, obj);

            obj = new Static("Static31","157","470","267","24",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("z : lower case & decimal number");
            this.addChild(obj.name, obj);

            obj = new Static("Static32","157","494","267","24",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("{} : Password -A{AA}A");
            this.addChild(obj.name, obj);

            obj = new Static("Static34","483","278","182","24",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("☞ Mask - Number Type");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","10","200","182","24",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("☞ Local");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static33","157","302","267","24",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("@ : All ascii Characters");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","10","132","250","24",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("☞ Password");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit16","20","156","132","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_value("8203011021121");
            obj.set_type("string");
            obj.set_format("######-{#######}");
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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("Comp_MaskEdit.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
