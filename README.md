## Install

https://www.npmjs.com/package/react-ckeditor5-component

## Feature
Based on the lastest version of CKEditor5, providing ONLY standard edition currently.
As a prop, you can choose classic, balloon, inline, and decoupled-document

[NOTE] Event handles haven't been added yet, will soon.

### usage

```html
import React from 'react';
import { render} from 'react-dom';
import CKEDITOR5 from '../../src';
const App = () => (
  <div style={{border:'1px solid black'}}>
    <CKEDITOR5
      type="inline"
      height="500px"
      />

    <p style={{borderTop: '1px solid black'}}>
      border has been given to show there is a div component right below the editor.<br></br>
    type is inline, and height has been given '500px'
    </p>
  </div>

);
render(<App />, document.getElementById("root"));
```

### Props

also become

<table>
  <tr>
    <th>Name</th><th>Type</th><th>Default</th><th>Mandatory</th><th>Description</th>
  </tr>
<!--   <tr>
    <td>1</td><td>Tom Preston-Werner</td><td>Awesome</td>
  </tr>
  <tr>
    <td>2</td><td>Albert Einstein</td><td>Nearly as awesome</td>
  </tr> -->
</table>

## Licence

Source code can be found on [github](https://github.com/vgb0332/react-ckeditor5-component), licenced under [MIT](http://opensource.org/licenses/mit-license.php).
