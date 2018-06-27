# Services Examples


## Services in Service Portal
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

## Using `$http` in Client Script
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

---

@TODO
### Using `spNavStateManager` Service
Found in **Date Table** widget
```js


```

---

@TODO
```js
$scope.ignoreLocationChange = true;
```

---

@TODO
Found in **Data Table**
```js
$scope.$on('widget-filter-breadcrumbs.queryModified', function(e, newFilter){
    $scope.data.filter = newFilter;
    $scope.setSearch(true);
});
```