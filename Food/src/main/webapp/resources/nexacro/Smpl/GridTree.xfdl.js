(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("GridTree");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_explorer", this);
            obj._setContents("<ColumnInfo><Column id=\"TREE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TREE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TREE_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"TREE_STATE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TREE_ID\">10</Col><Col id=\"TREE_NM\">Project 'EduProject''</Col><Col id=\"TREE_LEVEL\">0</Col><Col id=\"TREE_STATE\">1</Col></Row><Row><Col id=\"TREE_ID\">20</Col><Col id=\"TREE_NM\">Environment</Col><Col id=\"TREE_LEVEL\">1</Col><Col id=\"TREE_STATE\">1</Col></Row><Row><Col id=\"TREE_ID\">30</Col><Col id=\"TREE_NM\">ScreenDefinition</Col><Col id=\"TREE_LEVEL\">2</Col><Col id=\"TREE_STATE\">1</Col></Row><Row><Col id=\"TREE_ID\">40</Col><Col id=\"TREE_NM\">Phone_screen &quot;App_Phone&quot;</Col><Col id=\"TREE_LEVEL\">3</Col><Col id=\"TREE_STATE\">2</Col></Row><Row><Col id=\"TREE_ID\">50</Col><Col id=\"TREE_NM\">Desktop_screen &quot;App_Desktop&quot;</Col><Col id=\"TREE_LEVEL\">3</Col><Col id=\"TREE_STATE\">2</Col></Row><Row><Col id=\"TREE_ID\">60</Col><Col id=\"TREE_NM\">Variables</Col><Col id=\"TREE_LEVEL\">2</Col><Col id=\"TREE_STATE\">2</Col></Row><Row><Col id=\"TREE_ID\">70</Col><Col id=\"TREE_NM\">Cookies</Col><Col id=\"TREE_LEVEL\">2</Col><Col id=\"TREE_STATE\">2</Col></Row><Row><Col id=\"TREE_ID\">80</Col><Col id=\"TREE_NM\">HTTP Header</Col><Col id=\"TREE_LEVEL\">2</Col><Col id=\"TREE_STATE\">2</Col></Row><Row><Col id=\"TREE_ID\">90</Col><Col id=\"TREE_NM\">Script</Col><Col id=\"TREE_LEVEL\">2</Col><Col id=\"TREE_STATE\">2</Col></Row><Row><Col id=\"TREE_ID\">100</Col><Col id=\"TREE_NM\">TypeDefinition</Col><Col id=\"TREE_LEVEL\">1</Col><Col id=\"TREE_STATE\">0</Col></Row><Row><Col id=\"TREE_ID\">110</Col><Col id=\"TREE_NM\">Objects</Col><Col id=\"TREE_LEVEL\">2</Col><Col id=\"TREE_STATE\">2</Col></Row><Row><Col id=\"TREE_ID\">120</Col><Col id=\"TREE_NM\">Services</Col><Col id=\"TREE_LEVEL\">2</Col><Col id=\"TREE_STATE\">2</Col></Row><Row><Col id=\"TREE_ID\">130</Col><Col id=\"TREE_NM\">Protocols</Col><Col id=\"TREE_LEVEL\">2</Col><Col id=\"TREE_STATE\">2</Col></Row><Row><Col id=\"TREE_ID\">140</Col><Col id=\"TREE_NM\">App Information</Col><Col id=\"TREE_LEVEL\">1</Col><Col id=\"TREE_STATE\">1</Col></Row><Row><Col id=\"TREE_ID\">150</Col><Col id=\"TREE_NM\">AppVariables</Col><Col id=\"TREE_LEVEL\">2</Col><Col id=\"TREE_STATE\">0</Col></Row><Row><Col id=\"TREE_ID\">160</Col><Col id=\"TREE_NM\">Datasets</Col><Col id=\"TREE_LEVEL\">3</Col><Col id=\"TREE_STATE\">2</Col></Row><Row><Col id=\"TREE_ID\">170</Col><Col id=\"TREE_NM\">Variables</Col><Col id=\"TREE_LEVEL\">3</Col><Col id=\"TREE_STATE\">2</Col></Row><Row><Col id=\"TREE_ID\">180</Col><Col id=\"TREE_NM\">Apps</Col><Col id=\"TREE_LEVEL\">2</Col><Col id=\"TREE_STATE\">1</Col></Row><Row><Col id=\"TREE_ID\">190</Col><Col id=\"TREE_NM\">App_Desktop</Col><Col id=\"TREE_LEVEL\">3</Col><Col id=\"TREE_STATE\">2</Col></Row><Row><Col id=\"TREE_ID\">200</Col><Col id=\"TREE_NM\">mainframe</Col><Col id=\"TREE_LEVEL\">4</Col><Col id=\"TREE_STATE\">0</Col></Row><Row><Col id=\"TREE_ID\">210</Col><Col id=\"TREE_NM\">VFrameSet0</Col><Col id=\"TREE_LEVEL\">5</Col><Col id=\"TREE_STATE\">0</Col></Row><Row><Col id=\"TREE_ID\">220</Col><Col id=\"TREE_NM\">TopFrame</Col><Col id=\"TREE_LEVEL\">6</Col><Col id=\"TREE_STATE\">2</Col></Row><Row><Col id=\"TREE_ID\">230</Col><Col id=\"TREE_NM\">HFrameSet0</Col><Col id=\"TREE_LEVEL\">6</Col><Col id=\"TREE_STATE\">0</Col></Row><Row><Col id=\"TREE_ID\">240</Col><Col id=\"TREE_NM\">LeftFrame</Col><Col id=\"TREE_LEVEL\">7</Col><Col id=\"TREE_STATE\">2</Col></Row><Row><Col id=\"TREE_ID\">250</Col><Col id=\"TREE_NM\">WorkFrame</Col><Col id=\"TREE_LEVEL\">7</Col><Col id=\"TREE_STATE\">2</Col></Row><Row><Col id=\"TREE_ID\">260</Col><Col id=\"TREE_NM\">Script</Col><Col id=\"TREE_LEVEL\">4</Col><Col id=\"TREE_STATE\">2</Col></Row><Row><Col id=\"TREE_ID\">270</Col><Col id=\"TREE_NM\">App_Phone</Col><Col id=\"TREE_LEVEL\">3</Col><Col id=\"TREE_STATE\">0</Col></Row><Row><Col id=\"TREE_ID\">280</Col><Col id=\"TREE_NM\">mainframe</Col><Col id=\"TREE_LEVEL\">4</Col><Col id=\"TREE_STATE\">0</Col></Row><Row><Col id=\"TREE_ID\">290</Col><Col id=\"TREE_NM\">Script</Col><Col id=\"TREE_LEVEL\">4</Col><Col id=\"TREE_STATE\">2</Col></Row><Row><Col id=\"TREE_ID\">300</Col><Col id=\"TREE_NM\">Base</Col><Col id=\"TREE_LEVEL\">2</Col><Col id=\"TREE_STATE\">0</Col></Row><Row><Col id=\"TREE_ID\">310</Col><Col id=\"TREE_NM\">Hello</Col><Col id=\"TREE_LEVEL\">3</Col><Col id=\"TREE_STATE\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid01","10","50","380",null,null,"10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_explorer");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,null");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"206\"/><Column size=\"53\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Project Explorer\"/><Cell col=\"1\" text=\"State\"/></Band><Band id=\"body\"><Cell text=\"bind:TREE_NM\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:TREE_LEVEL\" treestate=\"bind:TREE_STATE\"/><Cell col=\"1\" text=\"bind:TREE_STATE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","10","10","250","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Grid Tree - State");
            obj.set_cssclass("sta_WF_subtitle");
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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Grid01.addEventHandler("onheadclick",this.Grid00_onheadclick,this);
        };

        this.loadIncludeScript("GridTree.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
