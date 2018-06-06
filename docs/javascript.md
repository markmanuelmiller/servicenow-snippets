# General JavaScript Snippets


----------------------------------------------------------------------------------------------------------

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

----------------------------------------------------------------------------------------------------------
