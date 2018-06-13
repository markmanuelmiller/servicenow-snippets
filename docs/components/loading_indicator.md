# Loading Indicator

Found in International Space Station


###### HTML
```html
<div class="spinner-container">
	<div class="spinner">
        <div class="double-bounce1"></div>
        <div class="double-bounce2"></div>
  </div>  
</div>
```

###### CSS
```css
/***** SPINNER *****/
.spinner-container {
  display: none;
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: 9999;
  opacity: .7;
  background-color: gray;
}

.spinner {
  width: 40px;
  height: 40px;
	display: none;
  position: relative;
  margin: 25% auto;
}

.double-bounce1, .double-bounce2 {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #e2e2e2;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  
  -webkit-animation: sk-bounce 2.0s infinite ease-in-out;
  animation: sk-bounce 2.0s infinite ease-in-out;
}

.double-bounce2 {
  -webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;
}

@-webkit-keyframes sk-bounce {
  0%, 100% { -webkit-transform: scale(0.0) }
  50% { -webkit-transform: scale(1.0) }
}

@keyframes sk-bounce {
  0%, 100% { 
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  } 50% { 
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
  }
}
```

###### Client Controller
```js
c.toggleLoading = function(flag) {
    if(flag) {
        $('.spinner-container').show();
        $('.spinner').show();
    } else {
        $('.spinner-container').hide();
        $('.spinner').hide();
    }
};
```