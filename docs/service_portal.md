[Services Examples](docs/examples/services.md)

# Service Portal Snippets

## All

### Exploring Client/Server Relationship

----------------------------------------------------------------------------------------------------------

### Calling Server From Client
There are a number of ways to call server-side code from the client in Service Portal

#### 1) `c.server.update()`


#### 2) `$http` Service

##### a) Processor
###### Service
```js
function RPService($http) {
    return {
        //...
        getResourceChartData: function(chartType, chartSubType, heatmapGroupType, timeScale, selectedPlans, reportingUnit) {
            return $http({
                url: '/resource_management_processor.do',
                method: 'get',
                params: {
                    sysparm_name: 'getChartData',
                    sysparm_processor: 'ResourcePortalService',
                    sysparm_chart_type: chartType,
                    sysparm_chart_sub_type: chartSubType,
                    sysparm_heat_map_group_type: heatmapGroupType,
                    sysparm_time_scale: timeScale,
					sysparm_reporting_unit: reportingUnit,
                    sysparm_include_plans: selectedPlans.join(',')
                }
            });
        },
```

###### Processor
*Path*: `resource_management_processor`

```js
var response = "";
var processorParm = g_request.getParameter('sysparm_processor');
if( processorParm == "ResourceWorkbenchService" ||
	processorParm == "ResourcePortalService" ||
	processorParm == "RMChartExportService" ||
    processorParm == "RMPPSWorkbenchService" ||
	processorParm == "ResourceReportService") {
		var processor=new this[g_request.getParameter('sysparm_processor')](g_request);
		response=processor[g_request.getParameter('sysparm_name')]();
}
else {
	response = {error: gs.getMessage('Access denied for this method')};
}

g_processor.writeOutput("application/json", response);
```

##### b) URL
Example 1:
```js
function($http) {
    // ...
    function runCounter(counter) {
        var url = "/api/now/stats/"+ c.options.table +"?sysparm_query="+ counter.filter +"&sysparm_count=true";
        $http.get(url).then(function(response) {
            // ...
        });
    }
}
```

Example 2:
```js
function NRRPService($http) {
    return {
        getPlans: function(encodedQuery, maxPlans) {
            if (!maxPlans)
                maxPlans = 50;
            var fields = 'sysparm_fields=number%2Csys_id%2Cgroup_resource%2Cresource_type%2Cuser_resource%2Cplan_type%2Coperational_work_type%2Ctask%2Cman_days%2Cfte%2Cplanned_hours%2Cstate%2Cshort_description%2Ctask.priority%2Ctask.short_description%2Ctask.sys_class_name';
            var url = '/api/now/table/resource_plan?' + fields + '&sysparm_limit=' + maxPlans + '&sysparm_display_value=all&sysparm_exclude_reference_link=true&sysparm_query=' + encodedQuery + '^ORDERBYtask.priority';
            return $http.get(url);
        },
    // ...
```


#### 3) UI Script & Scripted REST
###### Scripted REST Resource
*Type*: POST
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
		// ...
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
		// done
	})
	.fail(function() {
        // fail
	});
}
```

----------------------------------------------------------------------------------------------------------


### Embedding Widgets

#### 1) Via HTML


#### 2) Via Client Script


#### 3) Via Server Script


----------------------------------------------------------------------------------------------------------

@todo
### Events
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
@todo
### Implementing an Angular Template
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

----------------------------------------------------------------------------------------------------------
@todo
### Using `$location` to Redirect User
```js
$scope.closeAndEdit = function() {
  $scope.closeAndSave();
  $location.url('?id=user_profile');
};
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

### Capturing Data Table Click Event
```js
$rootScope.$on('data_table.click', function(a, b) {
    if(b.table === 'dmn_demand') {
        // go to
        window.location.href = '?id=psp_demand_record&sys_id=' + b.sys_id;
    }
});
```
> Use this snippet to capture the click event on a data table and redirect the user to a custom page


----------------------------------------------------------------------------------------------------------

## Misc

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
- amb?

Angular:
- $location

----------------------------------------------------------------------------------------------------------

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

----------------------------------------------------------------------------------------------------------

### Iterating over objects while applying a filter
```html
<div class="col-md-4 clearfix item-container"
     ng-repeat="item in c.data.items | filter:c.data.term"
     ng-include="data.templateID">
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