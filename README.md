# ServiceNow Snippets

## Table of Contents
1. [Server-Side](docs/server_side.md)
1. [Client-Side](docs/client_side.md)
1. [Both](docs/both.md)

1. [Service Portal](docs/service_portal.md)

1. [JavaScript Snippets](docs/javascript.md)
1. [HTML Snippets](docs/html_snippets.md)
1. [Misc](docs/misc.md)

## Template

----------------------------------------------------------------------------------------------------------
### Snippet Title
```js
// code
```
> Notes on the snippet

----------------------------------------------------------------------------------------------------------



## Snippets

### Embedding Widgets

a) Via HTML


b) Via Client Script


c) Via Server Script


----------------------------------------------------------------------------------------------------------

### Verifying JavaScript Parameters
```js
function someFunction(parm1, parm2, parm3) {
    if(typeof parm1 === 'undefined') {
        // parm1 does not exist
    }
}
```

----------------------------------------------------------------------------------------------------------

### Verifying a record is found using `GlideRecord.get`
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

### Using `gs.nil()`
```js
// @todo
if(gs.nil(gr.variableName)) { }
```
> `gs.nil()` will return true if a variable is empty

----------------------------------------------------------------------------------------------------------

### Force a record into an update set
```js
var rec = new GlideRecord('table_name_of_record');
rec.get('sys_id_of_record');
//Push the record into the current update set   
var um = new GlideUpdateManager2();
um.saveRecord(rec);
```

----------------------------------------------------------------------------------------------------------

### Use this to grab the display fields of a choice field
```js
$sp.getFieldsObject();
```
> Example of this is grabbing the display values of the stages on an sc_request record

----------------------------------------------------------------------------------------------------------

### Get a Widget from the **Portal** Record
```js
data.typeahead = $sp.getWidgetFromInstance('typeahead-search');
```

----------------------------------------------------------------------------------------------------------

### Get Service Portal URL Suffix
```js
var url_suffix = $sp.getPortalRecord().getValue('url_suffix');
```

----------------------------------------------------------------------------------------------------------

### Opening a Modal & Passing Scope to `$uibModal`
```js
$scope.openLogin = function () {
  $scope.modalInstance = $uibModal.open({
    templateUrl: 'modalLogin',
    scope: $scope
  });
};
```
Keywords: `modal`

----------------------------------------------------------------------------------------------------------

#### Implementing an Angular Template
##### Client Script
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

----------------------------------------------------------------------------------------------------------

### Using `$location` to Redirect User
```js
$scope.closeAndEdit = function() {
  $scope.closeAndSave();
  $location.url('?id=user_profile');
};
```

----------------------------------------------------------------------------------------------------------



----------------------------------------------------------------------------------------------------------
### Calling a Scripted REST API via Service Portal
##### Scripted REST Resource | POST
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

----------------------------------------------------------------------------------------------------------
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

----------------------------------------------------------------------------------------------------------
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



----------------------------------------------------------------------------------------------------------
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

----------------------------------------------------------------------------------------------------------
#### CatItem API
```js
var catalogItemJS = new sn_sc.CatItem(sc.getUniqueValue());
if (!catalogItemJS.canView())
    continue;
var catItemDetails = catalogItemJS.getItemSummary();
```

----------------------------------------------------------------------------------------------------------
#### CatCategory API
```js
categoryJS = new sn_sc.CatCategory(data.category_id);
if (!categoryJS.canView()) {
    data.error = gs.getMessage("You do not have permission to see this category");
    return;
}
```

----------------------------------------------------------------------------------------------------------

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

----------------------------------------------------------------------------------------------------------

Get Display Values of a Choice field
```js
...
reqItem.stage = $sp.getFieldsObject(ritm, 'stage').stage.display_value;
...
```

----------------------------------------------------------------------------------------------------------
