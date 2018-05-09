// http://wiki.servicenow.com/index.php?title=GlideRecord#autoSysFields&gsc.tab=0
// undocumented GlideRecord methods

// do not update system fields
gr.autoSysFields(false);


// do not run business rules
gr.setWorkflow(false);


// force update on record
gr.forceUpdate(true); // ???
