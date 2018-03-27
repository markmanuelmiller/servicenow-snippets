# ServiceNow Snippets

## Table of Contents
1. [Server-Side](#server-side)
1. [Client-Side](#client-side)
1. [Other](#other)


## Server-Side

#### Get display field of a table
```js
gr.getDisplayName()
```

---
#### Example:
```js
var gr = new GlideRecord('incident');
gr.query();
gs.print(gr.getDisplayName()); /* number */
```

---
#### Does a variable exist?
```js
if(typeof variableName != 'undefined') { }
```

---
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

---
#### Service Catalog - Excluding Class Names
```js
sc.addQuery('sys_class_name', 'NOT IN', 'sc_cat_item_wizard,sc_cat_item_content');
```

---
#### Don't update system fields
```js
gr.autoSysFields(false);
```

---
#### Don't run Business Rules
```js
gr.setWorkflow(false);
```
---
#### Force update on record
```
gr.forceUpdate(true);
```
---
#### Bump a records' workflow - typically used if making changes to a record and isn't picked up by that records' workflow
```js
var workflow = new Workflow();
workflow.runFlows('record_sys_id', 'update');
```


## Client-Side
#### Iterating over objects while applying a filter
```html
<div class="col-md-4 clearfix item-container"
     ng-repeat="item in c.data.items | filter:c.data.term"
     ng-include="data.templateID">
```

---
#### Attempting to add GlideAjax to a widget Controller
```js
c.glideAjax = function() {

		var ga = new GlideAjax('StoreUtilsAjax');
		ga.addParam('sysparm_name', 'getItems');
		ga.getXML(c.callback);
	};

	c.callback = function(response) {
		var answer = response.responseXML.documentElement.getAttribute("answer");
		console.log(">>>>>>: " + answer);
	};

	c.glideAjax();
```

#### Different Angular Dependencies
```js
function ($rootScope, $scope, snRecordWatcher, spUtil, $location, $uibModal, cabrillo, $timeout, $window, $document) { /* code */ })
```

#### Opening a Modal & Passing Scope to `$uibModal`
```js
$scope.openLogin = function () {
  $scope.modalInstance = $uibModal.open({
    templateUrl: 'modalLogin',
    scope: $scope
  });
};
```

#### Implementing an Angular Template
###### Client Script
```js
function redirectUser(lastLoginDate){
  if(lastLoginDate == '' || lastLoginDate == null || lastLoginDate == 'undefined'){
    $scope.modalInstance = $uibModal.open({
      templateUrl: 'welcomeTemplate',
      windowClass: 'welcome-pref-modal',
      scope: $scope
    });
  }
}
```
###### HTML
```html
<script type="text/ng-template" id="welcomeTemplate">
    <div class="panel panel-default">
        <div class="panel-heading">
            <h4 class="panel-title">Welcome {{::user.first_name}}!</h4>
        </div>
        <div class="panel-body">
            ...
        </div>
        <div class="panel-footer clearfix">
            <button ng-click="closeAndEdit()" class="btn btn-primary pull-right">No, Edit My Profile</button>
            <button ng-click="closeAndSave()" class="btn btn-default pull-right">Yes, It's Correct</button>
        </div>
    </div>
</script>
```

---
#### Using `$location` to Redirect User
```js
$scope.closeAndEdit = function() {
  $scope.closeAndSave();
  $location.url('?id=user_profile');
};
```

---
#### Stuff
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

---
#### Adding pagination to a widget
```html
<!-- footer -->
<div ng-if="c.numberOfPages() > 1"
     class="wrapper">
  <div class="btn-toolbar m-r pull-left">
    <div class="btn-group">
      <a ng-disabled="c.curPage == 0" href="javascript:void(0)" ng-click="c.curPage=c.curPage-1" class="btn btn-default"><i class="fa fa-chevron-left"></i></a>
    </div>
    <div ng-if="c.numberOfPages() > 1 && c.numberOfPages() < 20" class="btn-group">
      <a ng-repeat="i in getNumber(c.numberOfPages()) track by $index" ng-click="c.curPage = $index" href="javascript:void(0)" ng-class="{active: ($index) == c.curPage}" type="button" class="btn btn-default">{{$index + 1}}</a>
    </div>
    <div class="btn-group">
      <a ng-disabled="c.curPage >= c.datalists.length/c.pageSize - 1" href="javascript:void(0)" ng-click="c.curPage = c.curPage+1" class="btn btn-default"><i class="fa fa-chevron-right"></i></a>
    </div>
  </div>
  <div class="m-t-xs panel-title">Page {{c.curPage + 1}} of {{ c.numberOfPages() }}</div>
  <span class="clearfix"></span>
</div>
```

---
#### Force a record into an update set
```js
var rec = new GlideRecord('table_name_of_record');
rec.get('sys_id_of_record');
//Push the record into the current update set   
var um = new GlideUpdateManager2();
um.saveRecord(rec);
```


## Other
#### iFrames in Service Portal and CSS manipulation
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

---
#### Calling a Scripted REST API via Service Portal
###### Scripted REST Resource | POST
```js
(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {
	var req = JSON.parse(request.body.dataString);
	var activity = req.tour;
	if(activity) {
		new x_nero_gamificatio.GamificationAPI().trackRecordActivity(gs.getUserID(), activity);
		return {
			tour: req.tour
		};
	} else {
		return {
			tour: 'Error'
		};
	}
})(request, response);
```

###### UI Script
```js
function testingSomething() {
	var data = {
		tour: 'ACT1008'
	};

	$.ajax({
		type: 'POST',
		url: '/api/x_nero_gamificatio/guided_tour_api',
		contentType: 'application/json',
		data: JSON.stringify(data)

	}).done(function(response) {
		console.log('done');
		console.log(response);
	})
	.fail(function() {
		console.log('fail');
	});
}
```

---
#### Recursive function
```js
var results = [];
var nestedCategories = ['898fc5a0db00d74074c99447db9619d8'];
getChildren(nestedCategories[0]);
searchItems();
$sp.logSearch('sc_cat_item', data.q, results.length);
return results;

function getChildren(sysID) {
    var gr = new GlideRecord('sc_category');
    gr.addQuery('parent', sysID);
    gr.addActiveQuery();
    gr.query();
    while(gr.next()) {
        var current = gr.sys_id.toString();
        nestedCategories.push(current);
        if(hasChildren(current)) {
            getChildren(current);
        }
    }
}

function hasChildren(sysID) {
    var gr = new GlideRecord('sc_category');
    gr.addQuery('parent', sysID);
    gr.addActiveQuery();
    gr.query();
    if(gr.next()) {
        return true;
    } else {
        return false;
    }
}
```

---
#### Form field change in Client Script
```js
$scope.$on('field.change', function(evt, parms) {
	//if (parms.field.name == c.data.user.name) {
	if (parms.oldValue == c.data.user.sys_id) {
		c.data.setLocation = parms.newValue;
	}
    c.data.currentUser = parms.newValue;
    c.server.update().then(function(response) {
        //spUtil.update($scope);
    });
});
```

---
#### Service Portal Angular Events
```js
$rootScope.$on('sp.form.record.updated', function() {
    $scope.data.userForm.data.f._ui_actions[1].is_button = true;
});

$rootScope.$on('data_table.click', function(event,obj) {
    var link = {};
    link.id = $scope.data.page;
    link.table = obj.table;
    link.sys_id = obj.sys_id;
    $location.search(link);
});

$scope.$on("field.change", function(evt, parms) { }
```

---
#### Display Choice Label instead of Choice Value
```js
var ritm = new GlideRecord("sc_req_item");
ritm.query();
while(ritm.next()){
    ...
    reqItem.stage = $sp.getFieldsObject(ritm, 'stage').stage.display_value;
    ...
}
```

---
#### CatItem API
```js
var catalogItemJS = new sn_sc.CatItem(sc.getUniqueValue());
if (!catalogItemJS.canView())
    continue;
var catItemDetails = catalogItemJS.getItemSummary();
```

---
#### CatCategory API
```js
categoryJS = new sn_sc.CatCategory(data.category_id);
if (!categoryJS.canView()) {
    data.error = gs.getMessage("You do not have permission to see this category");
    return;
}
```

---
#### CatalogSearch API
```js
var items = data.items = [];
var catalog = $sp.getValue('sc_catalog');
var sc = new sn_sc.CatalogSearch().search(catalog, data.category_id, '', false, options.depth_search);
sc.addQuery('sys_class_name', 'NOT IN', 'sc_cat_item_wizard');
if (data.keywords)
    sc.addQuery('123TEXTQUERY321', data.keywords);
sc.orderBy('order');
sc.orderBy('name');
sc.query();
```
