(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("GridSum");
            this.set_titletext("New Form");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_sum", this);
            obj.set_keystring("G:-CORP,-DEPT");
            obj._setContents("<ColumnInfo><Column id=\"CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SALARY\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CORP\">Korea</Col><Col id=\"DEPT\">Sales</Col><Col id=\"NAME\">Kylie</Col><Col id=\"SALARY\">1000</Col></Row><Row><Col id=\"CORP\">Korea</Col><Col id=\"DEPT\">Sales</Col><Col id=\"NAME\">Vivian</Col><Col id=\"SALARY\">2000</Col></Row><Row><Col id=\"CORP\">Korea</Col><Col id=\"DEPT\">Sales</Col><Col id=\"NAME\">Walter</Col><Col id=\"SALARY\">3000</Col></Row><Row><Col id=\"CORP\">Korea</Col><Col id=\"DEPT\">Marketing</Col><Col id=\"NAME\">Bert</Col><Col id=\"SALARY\">2000</Col></Row><Row><Col id=\"CORP\">Korea</Col><Col id=\"DEPT\">Marketing</Col><Col id=\"NAME\">Kerry</Col><Col id=\"SALARY\">4000</Col></Row><Row><Col id=\"CORP\">Korea</Col><Col id=\"DEPT\">Education</Col><Col id=\"NAME\">Russell</Col><Col id=\"SALARY\">6000</Col></Row><Row><Col id=\"CORP\">Korea</Col><Col id=\"DEPT\">Education</Col><Col id=\"NAME\">Ina</Col><Col id=\"SALARY\">100</Col></Row><Row><Col id=\"CORP\">Korea</Col><Col id=\"DEPT\">Education</Col><Col id=\"NAME\">Bert</Col><Col id=\"SALARY\">200</Col></Row><Row><Col id=\"CORP\">Korea</Col><Col id=\"DEPT\">Education</Col><Col id=\"NAME\">Josephine</Col><Col id=\"SALARY\">300</Col></Row><Row><Col id=\"CORP\">Japan</Col><Col id=\"DEPT\">Sales</Col><Col id=\"NAME\">Leo</Col><Col id=\"SALARY\">200</Col></Row><Row><Col id=\"CORP\">Japan</Col><Col id=\"DEPT\">Sales</Col><Col id=\"NAME\">Erica</Col><Col id=\"SALARY\">400</Col></Row><Row><Col id=\"CORP\">Japan</Col><Col id=\"DEPT\">Sales</Col><Col id=\"NAME\">Nicole</Col><Col id=\"SALARY\">600</Col></Row><Row><Col id=\"CORP\">Japan</Col><Col id=\"DEPT\">Marketing</Col><Col id=\"NAME\">Boris</Col><Col id=\"SALARY\">10</Col></Row><Row><Col id=\"CORP\">Japan</Col><Col id=\"DEPT\">Marketing</Col><Col id=\"NAME\">Ali</Col><Col id=\"SALARY\">20</Col></Row><Row><Col id=\"CORP\">Japan</Col><Col id=\"DEPT\">Education</Col><Col id=\"NAME\">Violet</Col><Col id=\"SALARY\">30</Col></Row><Row><Col id=\"CORP\">Japan</Col><Col id=\"DEPT\">Education</Col><Col id=\"NAME\">Indigo</Col><Col id=\"SALARY\">20</Col></Row><Row><Col id=\"CORP\">Japan</Col><Col id=\"DEPT\">Education</Col><Col id=\"NAME\">Oliver</Col><Col id=\"SALARY\">40</Col></Row><Row><Col id=\"CORP\">Japan</Col><Col id=\"DEPT\">Education</Col><Col id=\"NAME\">Kane</Col><Col id=\"SALARY\">60</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","10","60",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_sum");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"133\"/><Column size=\"138\"/><Column size=\"109\"/><Column size=\"159\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Corp.\"/><Cell col=\"1\" text=\"Dept.\"/><Cell col=\"2\" text=\"Name\"/><Cell col=\"3\" text=\"Annual Salary\"/></Band><Band id=\"body\"><Cell text=\"bind:CORP\" suppress=\"1\" suppressalign=\"middle\"/><Cell col=\"1\" text=\"bind:DEPT\" suppress=\"3\"/><Cell col=\"2\" text=\"bind:NAME\"/><Cell col=\"3\" text=\"bind:SALARY\" textAlign=\"right\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","10","10","250","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Suppress & Sum");
            obj.set_cssclass("sta_WF_subtitle");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","517","27","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("SUM");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","572","27","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("AVG");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","627","27","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("MAX");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","682","27","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("MIN");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","737","27","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("COUNT");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,600,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("GridSum.xfdl", function() {

        this.btn_onclick = function(obj,e)
        {
        	var objColumnInfo = this.ds_sum.getColumnInfo("SALARY");
        	objColumnInfo.set_prop(obj.text);

        	this.ds_sum.updateSortGroup();

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.btn_onclick,this);
            this.Button01.addEventHandler("onclick",this.btn_onclick,this);
            this.Button02.addEventHandler("onclick",this.btn_onclick,this);
            this.Button03.addEventHandler("onclick",this.btn_onclick,this);
            this.Button04.addEventHandler("onclick",this.btn_onclick,this);
        };

        this.loadIncludeScript("GridSum.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
