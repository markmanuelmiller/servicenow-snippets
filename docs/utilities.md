# Utilities

### Creating Approval Demo Data

```js
var gr = new GlideRecord('sysapproval_approver');
gr.addEncodedQuery('state=requested');
gr.setLimit(5);
gr.orderBy('sys_created_on');
gr.query();
while(gr.next()) {
    gr.setValue('approver', gs.getUserID());
    gr.update();
}
```