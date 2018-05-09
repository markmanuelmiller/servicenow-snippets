// workflow scripts
// http://wiki.servicenow.com/index.php?title=Workflow_Script#runFlows.28record.2C_operation.29&gsc.tab=0

// bump a records' workflow
// typically used if making changes to a record and isn't picked up by that records' workflow
var workflow = new Workflow();
workflow.runFlows('record_sys_id', 'update');




// business rules


// add message
gs.addInfoMessage("Hello world");


// check if record is active
var gr = new GlideRecord('sc_task');
gr.get('c3fe907f4f5722009c624a318110c7be');
if(gr.active == false) {
  gs.print(gr.active);
}


// active flag on records... boolean logic
// gr.active is boolean on server side. no need for 'true' or 'false' string values
if(gr.active == true) {
  // do something
}

if(gr.active == false) {
  // do something
}
