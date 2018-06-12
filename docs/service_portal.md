# Service Portal Snippets


## Snippets

### Using `$http` in Client Script
```js
function($http) {
    var c = this;
    var countExpressions = c.options.count_expressions.split(";");
    c.counters = [];
    for(var i=0;i<=countExpressions.length-1;i++) {
        var parts = countExpressions[i].split(",");
        var counter = makeCounter(parts[0], parts[1]);
        runCounter(counter);
        c.counters.push(counter);
    }

    function runCounter(counter) {
        var url = "/api/now/stats/"+ c.options.table +"?sysparm_query="+ counter.filter +"&sysparm_count=true";
        $http.get(url).then(function(response) {
            counter.count = response.data.result.stats.count;
        });
    }

    function makeCounter(label, filter) {
        return {label: label, filter: filter, count: 0};
    }
}
```
> This snippet leverages the `$http` Service to call the backend of ServiceNow

----------------------------------------------------------------------------------------------------------


### Services in Service Portal
This specific widget is found in the CreatorCon class **Advanced Widget Development**

###### Service (Angular Provider)
```js
function(amb) {
	var watcher;
	var dataUpdatedHandlers = [];
	function init(table, filter) {
		if (watcher) {
			watcher.unsubscribe();
		}

		if (table && filter) {
			var watcherChannel = amb.getChannelRW(table, filter);
			amb.connect();
			watcher = watcherChannel.subscribe(function(message) {
				if (!message.data) {
					return;
				}
				dataUpdatedHandlers.forEach(function(fn) { fn.call(fn); });
			});
		}
	}
	return {
		onDataUpdated: function(callbackFn) {
			dataUpdatedHandlers.push(callbackFn);
		},
		initRecordWatcher: function(table, filter) {
			init(table, filter);
		}
	};
}
```

###### Client Script of Widget
```js
function($scope, angularServiceName) {
    workspaceData.initRecordWatcher(c.options.table, c.options.filter);
    workspaceData.onDataUpdated(function() {
        c.data.rows = [];
        c.server.update().then(function(data){
            c.data.rows = data.rows;
        });
    });
}
```

> This snippet demonstrates using an Angular Service in the Client Script of a Widget

----------------------------------------------------------------------------------------------------------


### Embedding Widgets

a) Via HTML


b) Via Client Script


c) Via Server Script

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

### Different Angular Dependencies
```js
function ($rootScope, $scope, snRecordWatcher, spUtil, $location, $uibModal, cabrillo, $timeout, $window, $document) { /* code */ })
```

SN Specific:
- snRecordWatcher
- spUtil
- $uibModal
- cabrillo

Angular:
- $location

----------------------------------------------------------------------------------------------------------

### Service Portal Angular Events
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

----------------------------------------------------------------------------------------------------------

### Implementing an Angular Template
#### Client Script
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

### Calling a Scripted REST API via Service Portal
#### Scripted REST Resource | POST
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

#### UI Script
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

### Form field change in Client Script
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

### Display Choice Label instead of Choice Value
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

### Get Display Values of a Choice field
```js
...
reqItem.stage = $sp.getFieldsObject(ritm, 'stage').stage.display_value;
...
```

----------------------------------------------------------------------------------------------------------

### Iterating over objects while applying a filter
```html
<div class="col-md-4 clearfix item-container"
     ng-repeat="item in c.data.items | filter:c.data.term"
     ng-include="data.templateID">
```

----------------------------------------------------------------------------------------------------------



----------------------------------------------------------------------------------------------------------



----------------------------------------------------------------------------------------------------------



----------------------------------------------------------------------------------------------------------



----------------------------------------------------------------------------------------------------------



----------------------------------------------------------------------------------------------------------

## Other
### iFrames in Service Portal and CSS manipulation
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

----------------------------------------------------------------------------------------------------------

### Remove underscores and capitalize each word in a string
Typically used to display the value of a stage on sc_request items

```js
function beautifyString(str) {
  return str.replace(/_/g, ' ').replace(/\b\w/g, function(l) {
    return l.toUpperCase()
  });
}
```

----------------------------------------------------------------------------------------------------------

### Displaying select boxes
```html
<div class="list-group">
      <label for="">${Select country}</label>
      <span class="list-group-item"
            ng-repeat="country in data.countries">
        <div class="input-group checkbox-container">
          <div class="checkbox-grp">
            <label class="font-light">
              <input class="m-r-sm"
                     type="checkbox"
                     value="{{::country.value}}"
                     ng-model="country.selected"
                     ng-change="c.countryChanged(country)" />
              {{::country.label}}
            </label>
          </div>          
        </div>
      </span>
    </div>
```