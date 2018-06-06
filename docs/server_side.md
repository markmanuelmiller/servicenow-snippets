# Server-Side Snippets

## Table of Contents
1. [GlideRecord Methods](#gliderecord-methods)
1. [Other](#other)

## GlideRecord Methods
#### Get display field of a table
```js
var gr = new GlideRecord('incident');
gr.query();
gs.print(gr.getDisplayName()); /* number */
```

----------------------------------------------------------------------------------------------------------

#### Verifying a record is found using `GlideRecord.get`
```js
var gr = new GlideRecord(table);
if(gr.get(sys_id)) {
  // it is found
  gs.print(gr.sys_created_on);
} else {
  // it isn't found
  gs.print('record not found');
}
```
Keywords: `GlideRecord`, `get`

----------------------------------------------------------------------------------------------------------

#### Don't update system fields
```js
gr.autoSysFields(false);
```
> Use this when you'd like to prevent ...

----------------------------------------------------------------------------------------------------------

#### Don't run Business Rules
```js
gr.setWorkflow(false);
```

----------------------------------------------------------------------------------------------------------

#### Force update on record
```
gr.forceUpdate(true);
```

----------------------------------------------------------------------------------------------------------

#### Bump a records' workflow - typically used if making changes to a record and isn't picked up by that records' workflow
```js
var workflow = new Workflow();
workflow.runFlows('record_sys_id', 'update');
```

----------------------------------------------------------------------------------------------------------

### Other
#### Does a JavaScript variable exist?
```js
function someFunction(var1, var2) {
    if(typeof var2 != 'undefined') { }
}
```

----------------------------------------------------------------------------------------------------------

#### Using gs.nil()
```js
// @todo
if(gs.nil(gr.variableName)) { }
```

---

#### Excluding Class Names for Service Catalog
```js
sc.addQuery('sys_class_name', 'NOT IN', 'sc_cat_item_wizard,sc_cat_item_content');
```
Keywords: `Service Catalog`

---

#### Force a record into an update set
```js
var rec = new GlideRecord('table_name_of_record');
rec.get('sys_id_of_record');
//Push the record into the current update set   
var um = new GlideUpdateManager2();
um.saveRecord(rec);
```

---

#### Use this to grab the display fields of a choice field
> Example of this is grabbing the display values of the stages on an sc_request record
```js
$sp.getFieldsObject();
```

---

#### Get a Widget from the **Portal** Record
```js
data.typeahead = $sp.getWidgetFromInstance('typeahead-search');
```

---

#### Get Service Portal URL Suffix
```js
var url_suffix = $sp.getPortalRecord().getValue('url_suffix');
```


