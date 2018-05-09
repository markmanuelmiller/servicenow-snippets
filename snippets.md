# Snippets



## HTML



## Client Controller

Different Angular Dependencies
```js
function ($rootScope, $scope, snRecordWatcher, spUtil, $location, $uibModal, cabrillo, $timeout, $window, $document) { /* code */ })
```

Cabrillo
```js
if (cabrillo.isNative()) {
  $scope.isViewNative = true;
}
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

Setting `c.data.action` to `undefined` and Closing Modal
```js
$scope.closeAndSave = function() {
  $scope.modalInstance.close();
  c.data.action = 'saveForm';
  c.server.update().then(function(response) {
    c.data.action = undefined;
  });
};
```

Using `$location` to Redirect User
```js
$scope.closeAndEdit = function() {
  $scope.closeAndSave();
  $location.url('?id=user_profile');
};
```

Implementing a Welcome Screen
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

redirectUser(c.data.lastLogin);
```

Initialize **Loading Indicator** for a Widget
```js
$scope.loadingIndicator = $rootScope.loadingIndicator;
  $scope.$on('sp_loading_indicator', function(e, value) {
  $scope.loadingIndicator = value;
});
```




## Server Script

Get a Widget from the **Portal** Record
```js
data.typeahead = $sp.getWidgetFromInstance('typeahead-search');
```

Get Service Portal URL Suffix
```js
var url_suffix = $sp.getPortalRecord().getValue('url_suffix');
```


Stuff and Things @todo
```js
var util = new GlideSPUtil();
var fullUri = util.getPageUri();
// strip leading / since it causes problems with the redirect
data.pageURI = encodeURI(fullUri.slice(1));
```

Is Service Portal Config?
```js
data.is_spconfig = (url_suffix == 'sp_config');
```

Strip HTML with `$sp`
```js
$sp.stripHTML(article.text);
```

Service Catalog - Excluding Class Names
```js
sc.addQuery('sys_class_name', 'NOT IN', 'sc_cat_item_wizard,sc_cat_item_content');
```

What Is this?
```js
var validatedItem = new GlideappCatalogItem.get(sc.getUniqueValue());
if (!validatedItem.canView())
  continue;
```

Accessing Properties ...
```js
$sp.getRecordDisplayValues(asset, gr_a, 'retirement_date, display_name, company, ci.model_id.picture, ci.model_id.product_catalog_item.picture, ci.model_id.product_catalog_item.sys_id, ci.sys_id');
var gr_b = new GlideRecord('sc_cat_item')
gr_b.addQuery('sys_id', asset['ci.sys_id']);
```




## CSS

Sticky Footer
```css
section.page {
  display: flex;
  flex-direction: column;
  display: -ms-flexbox;
  -ms-flex-direction: column;
}

section.page > main.body,
section.page > section.body {
  flex-grow: 1;
  flex-shrink: 0;
  -ms-flex-positive: 1;
}
```
