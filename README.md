# ServiceNow Snippets

## Table of Contents
1. [Server-Side](#server-side)
1. [Client-Side](#client-side)
1. [Service Portal](#service-portal)


## Server-Side
Does a variable exist?
```js
if(typeof variableName != 'undefined') { }
```

Verifying a record is found using `GlideRecord.get`
```js
var gr = new GlideRecord(table);
gr.get(field, value);
if... @todo
```

Service Catalog - Excluding Class Names
```js
sc.addQuery('sys_class_name', 'NOT IN', 'sc_cat_item_wizard,sc_cat_item_content');
```

Don't update system fields
```js
gr.autoSysFields(false);
```

Don't run Business Rules
```js
gr.setWorkflow(false);
```

Force update on record
```
gr.forceUpdate(true);
```

Bump a records' workflow - typically used if making changes to a record and isn't picked up by that records' workflow
```js
var workflow = new Workflow();
workflow.runFlows('record_sys_id', 'update');
```


## Client-Side


## Service Portal

### Client Controller
Different Angular Dependencies
```js
function ($rootScope, $scope, snRecordWatcher, spUtil, $location, $uibModal, cabrillo, $timeout, $window, $document) { /* code */ })
```

Opening a Modal & Passing Scope to `$uibModal`
```js
$scope.openLogin = function () {
  $scope.modalInstance = $uibModal.open({
    templateUrl: 'modalLogin',
    scope: $scope
  });
};
```

Implementing an Angular Template
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

Using `$location` to Redirect User
```js
$scope.closeAndEdit = function() {
  $scope.closeAndSave();
  $location.url('?id=user_profile');
};
```


### Server Script
Get a Widget from the **Portal** Record
```js
data.typeahead = $sp.getWidgetFromInstance('typeahead-search');
```

Get Service Portal URL Suffix
```js
var url_suffix = $sp.getPortalRecord().getValue('url_suffix');
```
