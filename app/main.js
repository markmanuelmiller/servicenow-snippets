var app = angular.module('servicenowSnippets', []);

app.controller('mainCtrl', function($scope) {
    $scope.test = 'hello';


    /*  categories
     *    sp/ss - Service Portal/Server Script
     *    sp/cs - Service Portal/Client Script
     *    sp/ht
     *    sp/cs
     *    sp/ms
     * 
     *    ps/ss
     *    ps/cs
     */
    $scope.entries = [
        {
            title: 'Get a Widget from the Portal Record',
            code: "data.typeahead = $sp.getWidgetFromInstance('typeahead-search');",
            category: 'sp/ss'
        },{
            title: 'Get Service Portal URL Suffix',
            code: "var url_suffix = $sp.getPortalRecord().getValue('url_suffix');",
            category: 'sp/ss'
        },{
            title: 'Get Fields Object',
            code: "$sp.getFieldsObject();",
            category: 'sp/ss'
        },{
            title: 'Get display field of a table',
            code: "var gr = new GlideRecord('incident');\ngr.query();\ngs.print(gr.getDisplayName()); /* number */",
            category: 'ps/ss'
        },{
            title: 'Testing if a GlideRecord\'s GlideElement variable exists',
            code: "if(typeof variableName != 'undefined') { }",
            category: 'ps/ss'
        },{
            title: 'Verifying a record is found using <code>GlideRecord.get</code>',
            code: "var gr = new GlideRecord(table);\nif(gr.get(sys_id)) {\n\t// it is found\n\tgs.print(gr.sys_created_on);\n} else {\n\t// it isn't found\n\tgs.print('record not found');\n}",
            category: 'ps/ss'
        },{
            title: 'Service Catalog - Excluding Class Names',
            code: "sc.addQuery('sys_class_name', 'NOT IN', 'sc_cat_item_wizard,sc_cat_item_content');",
            category: 'sp/ss'
        },{
            title: 'Don\'t update system fields',
            code: "gr.autoSysFields(false);",
            category: 'ps/ss'
        },{
            title: "Don't run Business Rules",
            code: "gr.setWorkflow(false);",
            category: 'ps/ss'
        },{
            title: "Force update on record",
            code: "gr.forceUpdate(true);",
            category: 'ps/ss'
        },{
            title: "Bump a records' workflow - typically used if making changes to a record and isn't picked up by that records' workflow",
            code: "var workflow = new Workflow();\nworkflow.runFlows('record_sys_id', 'update');",
            category: 'ps/ss'
        },{
            title: "Attempting to add GlideAjax to a widget Controller",
            code: "c.glideAjax = function() {\n\tvar ga = new GlideAjax('StoreUtilsAjax');\n\tga.addParam('sysparm_name', 'getItems');\n\tga.getXML(c.callback);\n};\nc.callback = function(response) {\n\tvar answer = response.responseXML.documentElement.getAttribute('answer');\n\tconsole.log('>>>>>>: ' + answer);\n};\nc.glideAjax();",
            category: "sp/ms"
        },{
            title: "Different Angular Dependencies",
            code: "function ($rootScope, $scope, snRecordWatcher, spUtil, $location, $uibModal, cabrillo, $timeout, $window, $document) { /* code */ })",
            category: "sp/cs"
        },{
            title: "Opening a Modal & Passing Scope to `$uibModal`",
            code: "$scope.openLogin = function () {\n\t$scope.modalInstance = $uibModal.open({\n\t\ttemplateUrl: 'modalLogin',\n\t\tscope: $scope\n\t});\n};",
            category: "sp/cs"
        },{
            title: "Implementing an Angular Template",
            code: "function redirectUser(lastLoginDate)\n\tif(lastLoginDate == '' || lastLoginDate == null || lastLoginDate == 'undefined'){\n\t\t$scope.modalInstance = $uibModal.open({\n\t\t\ttemplateUrl: 'welcomeTemplate',\n\t\t\twindowClass: 'welcome-pref-modal',\n\t\t\tscope: $scope\n\t\t});\n\t}\n}",
            category: "sp/cs"
        },{
            title: "Using `$location` to Redirect User",
            code: "$scope.closeAndEdit = function() {\n\t$scope.closeAndSave();\n\t$location.url('?id=user_profile');\n};",
            category: "sp/cs"
        },{
            title: "Force a record into an update set",
            code: "var rec = new GlideRecord('table_name_of_record');\nrec.get('sys_id_of_record');\n//Push the record into the current update set\nvar um = new GlideUpdateManager2();\num.saveRecord(rec);",
            category: "ps/ss"
        },{
            title: "Form field change in Client Script",
            code: "$scope.$on('field.change', function(evt, parms) {\n\t//if (parms.field.name == c.data.user.name) {\n\tif (parms.oldValue == c.data.user.sys_id) {\n\t\t//console.log('changing...');\n\t\tc.data.setLocation = parms.newValue;\n\t}\nc.data.currentUser = parms.newValue;\nc.server.update().then(function(response) {\n\t//spUtil.update($scope);\n});\n});",
            category: "sp/cs"
        },{
            title: "",
            code: "",
            category: ""
        },{
            title: "",
            code: "",
            category: ""
        },{
            title: "",
            code: "",
            category: ""
        },{
            title: "",
            code: "",
            category: ""
        },{
            title: "",
            code: "",
            category: ""
        }
    ];
});