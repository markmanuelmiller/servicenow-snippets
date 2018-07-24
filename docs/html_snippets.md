# HTML Snippets


----------------------------------------------------------------------------------------------------------

### Record Picker
@todo clean up

###### HTML
```html
<form class="form-horizontal"
      id="translatedText">
    <div class="form-group row">
        <label for="catalog" 
                class="col-md-4 control-label">Select the Service Catalog</label>
        <div class="col-md-8">
            <sn-record-picker id="catalog" 
                              field="c.data.someVariable" 
                              table="'table_name'" 
                              display-field="'field_name'" 
                              value-field="'sys_id'"
                              multiple="true">
            </sn-record-picker>
        </div>
    </div>
</form>
```

###### Server Script
```js
if(input && input.action == 'generateTranslations') {
    var o = {
        catalog: input.someVariable.value,
    }
    data.logs = api2.generateTranslationRecords(o);
}
```

---

### HTML
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
> @todo

----------------------------------------------------------------------------------------------------------

### Adding pagination to a widget
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
> @todo

----------------------------------------------------------------------------------------------------------