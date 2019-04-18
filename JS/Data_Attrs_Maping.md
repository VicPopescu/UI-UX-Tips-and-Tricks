```html
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>JS Bin</title>
  </head>

  <body>
    <div 
      id="potatoElement" 
      data-potato-tomato="1" 
      data-tomato-potato="2" 
      data-something-awesome="3" 
      data-awesome-something="4"
    >
      Some component with some data attrs:
      <ul>
      <li>data-potato-tomato="1"</li>
      <li>data-tomato-potato="2"</li>
      <li>data-something-awesome="3"</li>
      <li>data-awesome-something="4"</li>

      </ul>
    </div>
    Processed data attributes JSON:
    <textarea name="" id="jsonContainer" cols="30" rows="10"></textarea>
  </body>
</html>
```

```js
/**
* Get all data attributes from provided element
* All data attributes are transformed into camelCase variables
* eg. "data-some-name-here="value"' is becoming { someNameHere : value }
*/
const mapComponentDataAttributes = (element) => {
  const map = {};
  this.dataAttributes = [].filter.call(element.attributes, attr => {
    if (/^data-/.test(attr.name)) {
      const attrName = attr.name.substr(5).replace(/-(.)/g, (_, $1) => $1.toUpperCase());
      map[attrName] = attr.value;
    }
  });
  return map;
}

const element = document.querySelector('#potatoElement');
const jsonContainer = document.querySelector('#jsonContainer');
const dataAttrs = mapComponentDataAttributes(element);


// display processed attributes
jsonContainer.value = JSON.stringify(dataAttrs, null, 4);

```
