### Misc


```js
var clGenerator = new GlideChoiceList();
var choiceListQuantity = clGenerator.getChoiceList("sc_cart_item", "quantity");
```


----------------------------------------------------------------------------------------------------------
### Get display field of a table
```js
var gr = new GlideRecord('incident');
gr.query();
gs.print(gr.getDisplayName()); /* number */
```

### Don't update system fields
```js
gr.autoSysFields(false);
```
> Use this when you'd like to prevent ...

----------------------------------------------------------------------------------------------------------

### Don't run Business Rules
```js
gr.setWorkflow(false);
```

----------------------------------------------------------------------------------------------------------

### Force update on record
```
gr.forceUpdate(true);
```

----------------------------------------------------------------------------------------------------------

### Bump a records' workflow - typically used if making changes to a record and isn't picked up by that records' workflow
```js
var workflow = new Workflow();
workflow.runFlows('record_sys_id', 'update');
```

----------------------------------------------------------------------------------------------------------

### Excluding Class Names for Service Catalog
```js
sc.addQuery('sys_class_name', 'NOT IN', 'sc_cat_item_wizard,sc_cat_item_content');
```
Keywords: `Service Catalog`

----------------------------------------------------------------------------------------------------------


### Iterating over objects while applying a filter
```html
<div class="col-md-4 clearfix item-container"
     ng-repeat="item in c.data.items | filter:c.data.term"
     ng-include="data.templateID">
```
Keywords: `ng-template`, `templates`

----------------------------------------------------------------------------------------------------------

### iFrames in Service Portal and CSS manipulation
```html
<div class="col-lg-12 col-md-12 page-section">
  <div class="section-head">
      UPDATE SECURITY QUESTIONS
    </div>
  <div class="frosted">
  	<iframe id="enrollChange" src="$pwd_enrollment_form_container.do" class="i-frame2" scrolling="no"></iframe>
  </div>
</div>
<script>
   $('#enrollChange').on('load', function() {
          $(this).contents().find('.navbar').css({
              'border': 'none',
              'background': 'transparent',
              'box-shadow': 'none',
              'margin-left': '20px',
              'margin-right': '20px'
          });
		
          $(this).contents().find('.navbar-btn').css({
              'display': 'none',
          });  
    		  $(this).contents().find('.nav-tabs > li.active').css({
              'border-top-color': 'rgb(86, 117, 141)',
          });         
    });   
</script>
```