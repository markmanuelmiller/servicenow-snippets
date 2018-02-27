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
            code: "$scope.$on(\'field.change\', function(evt, parms) {\r\n\t\/\/if (parms.field.name == c.data.user.name) {\r\n\tif (parms.oldValue == c.data.user.sys_id) {\r\n\t\tc.data.setLocation = parms.newValue;\r\n\t}\r\n    c.data.currentUser = parms.newValue;\r\n    c.server.update().then(function(response) {\r\n        \/\/spUtil.update($scope);\r\n    });\r\n});",
            category: "sp/cs"
        },{
            title: "Service Portal Angular Events",
            code: "$rootScope.$on(\'sp.form.record.updated\', function() {\r\n    $scope.data.userForm.data.f._ui_actions[1].is_button = true;\r\n});\r\n\r\n$rootScope.$on(\'data_table.click\', function(event,obj) {\r\n    var link = {};\r\n    link.id = $scope.data.page;\r\n    link.table = obj.table;\r\n    link.sys_id = obj.sys_id;\r\n    $location.search(link);\r\n});\r\n\r\n$scope.$on(\"field.change\", function(evt, parms) { }",
            category: "client"
        },{
            title: "Display Choice Label instead of Choice Value",
            code: "var ritm = new GlideRecord(\"sc_req_item\");\r\nritm.query();\r\nwhile(ritm.next()){\r\n    ...\r\n    reqItem.stage = $sp.getFieldsObject(ritm, \'stage\').stage.display_value;\r\n    ...\r\n}",
            category: "server"
        },{
            title: "CatItem API",
            code: "var catalogItemJS = new sn_sc.CatItem(sc.getUniqueValue());\r\nif (!catalogItemJS.canView())\r\n    continue;\r\nvar catItemDetails = catalogItemJS.getItemSummary();",
            category: "server"
        },{
            title: "CatCategory API",
            code: "categoryJS = new sn_sc.CatCategory(data.category_id);\r\nif (!categoryJS.canView()) {\r\n    data.error = gs.getMessage(\"You do not have permission to see this category\");\r\n    return;\r\n}",
            category: "server"
        },{
            title: "CatalogSearch API",
            code: "var items = data.items = [];\r\nvar catalog = $sp.getValue(\'sc_catalog\');\r\nvar sc = new sn_sc.CatalogSearch().search(catalog, data.category_id, \'\', false, options.depth_search);\r\nsc.addQuery(\'sys_class_name\', \'NOT IN\', \'sc_cat_item_wizard\');\r\nif (data.keywords)\r\n    sc.addQuery(\'123TEXTQUERY321\', data.keywords);\r\nsc.orderBy(\'order\');\r\nsc.orderBy(\'name\');\r\nsc.query();",
            category: "server"
        },{
            title: "Recursive Function",
            code: "var results = [];\r\nvar nestedCategories = [\'898fc5a0db00d74074c99447db9619d8\'];\r\ngetChildren(nestedCategories[0]);\r\nsearchItems();\r\n$sp.logSearch(\'sc_cat_item\', data.q, results.length);\r\nreturn results;\r\n\r\nfunction getChildren(sysID) {\r\n    var gr = new GlideRecord(\'sc_category\');\r\n    gr.addQuery(\'parent\', sysID);\r\n    gr.addActiveQuery();\r\n    gr.query();\r\n    while(gr.next()) {\r\n        var current = gr.sys_id.toString();\r\n        nestedCategories.push(current);\r\n        if(hasChildren(current)) {\r\n            getChildren(current);\r\n        }\r\n    }\r\n}\r\n\r\nfunction hasChildren(sysID) {\r\n    var gr = new GlideRecord(\'sc_category\');\r\n    gr.addQuery(\'parent\', sysID);\r\n    gr.addActiveQuery();\r\n    gr.query();\r\n    if(gr.next()) {\r\n        return true;\r\n    } else {\r\n        return false;\r\n    }\r\n}",
            category: "server"
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