(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_ListBox");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CD\">01</Col><Col id=\"DEPT_NAME\">Accounting Team</Col></Row><Row><Col id=\"DEPT_CD\">02</Col><Col id=\"DEPT_NAME\">Finances Team</Col></Row><Row><Col id=\"DEPT_CD\">03</Col><Col id=\"DEPT_NAME\">Human Resource Team</Col></Row><Row><Col id=\"DEPT_CD\">04</Col><Col id=\"DEPT_NAME\">Marketing Team</Col></Row><Row><Col id=\"DEPT_CD\">05</Col><Col id=\"DEPT_NAME\">Sales 1 Team</Col></Row><Row><Col id=\"DEPT_CD\">06</Col><Col id=\"DEPT_NAME\">Sales 2 Team</Col></Row><Row><Col id=\"DEPT_CD\">07</Col><Col id=\"DEPT_NAME\">Sales 3 Team</Col></Row><Row><Col id=\"DEPT_CD\">08</Col><Col id=\"DEPT_NAME\">Sales Management Team</Col></Row><Row><Col id=\"DEPT_CD\">09</Col><Col id=\"DEPT_NAME\">Consulting 1 Team</Col></Row><Row><Col id=\"DEPT_CD\">10</Col><Col id=\"DEPT_NAME\">Consulting 2 Team</Col></Row><Row><Col id=\"DEPT_CD\">11</Col><Col id=\"DEPT_NAME\">Consulting 3 Team</Col></Row><Row><Col id=\"DEPT_CD\">12</Col><Col id=\"DEPT_NAME\">Design Team</Col></Row><Row><Col id=\"DEPT_CD\">13</Col><Col id=\"DEPT_NAME\">Mobile Team</Col></Row><Row><Col id=\"DEPT_CD\">14</Col><Col id=\"DEPT_NAME\">Education Team</Col></Row><Row><Col id=\"DEPT_CD\">15</Col><Col id=\"DEPT_NAME\">Technical Support 1 Team</Col></Row><Row><Col id=\"DEPT_CD\">16</Col><Col id=\"DEPT_NAME\">Technical Support 2 Team</Col></Row><Row><Col id=\"DEPT_CD\">17</Col><Col id=\"DEPT_NAME\">Technical Support 3 Team</Col></Row><Row><Col id=\"DEPT_CD\">18</Col><Col id=\"DEPT_NAME\">Customer Support 1 Team</Col></Row><Row><Col id=\"DEPT_CD\">19</Col><Col id=\"DEPT_NAME\">Customer Support 2 Team</Col></Row><Row><Col id=\"DEPT_CD\">20</Col><Col id=\"DEPT_NAME\">Customer Support 3 Team</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static04","10","40","250","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("☞ Basic Usage - innerdataset");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","10","10","250","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("ListBox");
            obj.set_cssclass("sta_WF_subtitle");
            this.addChild(obj.name, obj);

            obj = new ListBox("ListBox00","18","65","160","116",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var ListBox00_innerdataset = new nexacro.NormalDataset("ListBox00_innerdataset", obj);
            ListBox00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">SU</Col><Col id=\"datacolumn\">Sunday</Col></Row><Row><Col id=\"codecolumn\">MO</Col><Col id=\"datacolumn\">Monday</Col></Row><Row><Col id=\"codecolumn\">TU</Col><Col id=\"datacolumn\">Tuesday</Col></Row><Row><Col id=\"codecolumn\">WE</Col><Col id=\"datacolumn\">Wednesday</Col></Row><Row><Col id=\"codecolumn\">TH</Col><Col id=\"datacolumn\">Thursday</Col></Row><Row><Col id=\"codecolumn\">FR</Col><Col id=\"datacolumn\">Friday</Col></Row><Row><Col id=\"codecolumn\">SA</Col><Col id=\"datacolumn\">Saturday</Col></Row></Rows>");
            obj.set_innerdataset(ListBox00_innerdataset);
            this.addChild(obj.name, obj);

            obj = new ListBox("ListBox02","20","231","160","116",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_multiselect("true");
            var ListBox02_innerdataset = new nexacro.NormalDataset("ListBox02_innerdataset", obj);
            ListBox02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">SU</Col><Col id=\"datacolumn\">Sunday</Col></Row><Row><Col id=\"codecolumn\">MO</Col><Col id=\"datacolumn\">Monday</Col></Row><Row><Col id=\"codecolumn\">TU</Col><Col id=\"datacolumn\">Tuesday</Col></Row><Row><Col id=\"codecolumn\">WE</Col><Col id=\"datacolumn\">Wednesday</Col></Row><Row><Col id=\"codecolumn\">TH</Col><Col id=\"datacolumn\">Thursday</Col></Row><Row><Col id=\"codecolumn\">FR</Col><Col id=\"datacolumn\">Friday</Col></Row><Row><Col id=\"codecolumn\">SA</Col><Col id=\"datacolumn\">Saturday</Col></Row></Rows>");
            obj.set_innerdataset(ListBox02_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Static("Static03","12","206","146","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("☞ Multi Select");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","185","231","146","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Get Selected List");
            this.addChild(obj.name, obj);

            obj = new ListBox("ListBox03","185","65","190","116",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NAME");
            obj.set_innerdataset("ds_dept");
            this.addChild(obj.name, obj);

            obj = new ListBox("ListBox01","20","397","160","186",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_multiselect("true");
            obj.set_itemheight("25");
            var ListBox01_innerdataset = new nexacro.NormalDataset("ListBox01_innerdataset", obj);
            ListBox01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">SU</Col><Col id=\"datacolumn\">Sunday</Col></Row><Row><Col id=\"codecolumn\">MO</Col><Col id=\"datacolumn\">Monday</Col></Row><Row><Col id=\"codecolumn\">TU</Col><Col id=\"datacolumn\">Tuesday</Col></Row><Row><Col id=\"codecolumn\">WE</Col><Col id=\"datacolumn\">Wednesday</Col></Row><Row><Col id=\"codecolumn\">TH</Col><Col id=\"datacolumn\">Thursday</Col></Row><Row><Col id=\"codecolumn\">FR</Col><Col id=\"datacolumn\">Friday</Col></Row><Row><Col id=\"codecolumn\">SA</Col><Col id=\"datacolumn\">Saturday</Col></Row></Rows>");
            obj.set_innerdataset(ListBox01_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Static("Static00","12","372","146","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("☞ Item Height");
            obj.set_cssclass("sta_WF_label");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_rtn","185","258","230","89",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_positionstep("0");
            obj.set_value(" ");
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
        this.registerScript("Comp_ListBox.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	this.txt_rtn.set_value("");
        	var sRtn = "Selected Count: " + this.ListBox02.getSelectedCount() + "\n";
        	for(var i=0; i<this.ListBox02.getCount(); i++)
        	{
        		if(this.ListBox02.getSelect(i))
        		{
        			sRtn += "row index: " + i + "\n";
        		}
        	}

        	sRtn += "\nArray Return: " + this.ListBox02.getSelectedItems();
        	this.txt_rtn.set_value(sRtn);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };

        this.loadIncludeScript("Comp_ListBox.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
