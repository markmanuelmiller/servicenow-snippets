# General JavaScript Snippets



### Check Existence of Function Parameters
```js
function someFunction(parm1, parm2, parm3) {
    if (typeof parm1 !== 'undefined') {
        // parm1 exists
    }
}
```
> This is recommended over `if(parm1 !== undefined){}`

----

```js
data.isLoggedIn = GlideSession.get().isLoggedIn();
```

Remove underscores and capitalize each word in a string
Typically used to display the value of a stage on sc_request items

```js
function beautifyString(str) {
  return str.replace(/_/g, ' ').replace(/\b\w/g, function(l) {
    return l.toUpperCase()
  });
}
```

----

### "Unflatten" Array of Objects

In this example we take an array of items and process them so we end up with a collection of nested subcategories and items

```js
var items = [
  {
    cat: 'a',
    subcat: 'z',
    name: 'test'
  },{
    cat: 'a',
    subcat: 'y',
    name: 'test2'
  },{
    cat: 'a',
    subcat: 'z',
    name: 'test3'
  },{
    cat: 'b',
    subcat: 'w',
    name: 'test4'
  },{
    cat: 'c',
    subcat: 't',
    name: 'test5'
  },{
    cat: 'c',
    subcat: 't',
    name: 'test6'
  },{
    cat: 'c',
    subcat: 'zu',
    name: 'test7'
  }
];

var collection = [];

items.forEach(function(item) {
  var existingCategory = findCategory(item);
  // does category exist?
  if (existingCategory) {
    var existingSubcategory = findSubcategory(item, existingCategory);
    if (existingSubcategory) {
      addItem(item, existingSubcategory);
    } else {
      // add subcategory
      addSubcategory(item, existingCategory);
    }
  } else {
    // add new category
    addCategory(item);
  }
});

function findCategory(item) {
  for (var i = 0; i < collection.length; i++) {
      if (collection[i].name === item.cat) {
          return collection[i];
      }
  }
  return false;
}

function findSubcategory(item, cat) {
  for (var i = 0; i < cat.subcategories.length; i++) {
      if (cat.subcategories[i].name === item.subcat) {
          return cat.subcategories[i];
      }
  }
  return false;
}

function addCategory(item) {
  var c = {
    name: item.cat,
    subcategories: []
  };
  var s = {
    name: item.subcat,
    items: []
  };
  s.items.push(item);
  c.subcategories.push(s);
  collection.push(c);
}

function addSubcategory(item, category) {
  var s = {
    name: item.subcat,
    items: []
  };
  s.items.push(item);
  category.subcategories.push(s);
} 
  
function addItem(item, subcat) {
  subcat.items.push(item);
}
```

