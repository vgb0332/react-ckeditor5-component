## Install

https://www.npmjs.com/package/react-ckeditor5-component

## Feature
Based on the lastest version of CKEditor5, providing ONLY standard edition currently.
As a prop, you can choose classic, balloon, inline, and decoupled-document

[NOTE] Event handles haven't been added yet, will soon.

### usage
For some reason, cannot get github demo working properly, you can pull from the repo and run locally if want.

```html
import React from 'react';
import { render} from 'react-dom';
import CKEDITOR5 from 'react-ckeditor5-component';
const App = () => (
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      content: '',
    }

    this.onChange = this.onChange.bind(this);
  }

  onChange( content ) {
    console.log( content );
    this.setState({
      content: content,
    })
  }

  render(){
    return (
      <div style={{border:'1px solid black'}}>
        <CKEDITOR5
          type="inline"
          height="500px"
          onChange = {this.onChange}
          />

        <p style={{borderTop: '1px solid black'}}>
          <div>this is where data is displayed </div>
          {this.state.content}
        </p>

        <p style={{borderTop: '1px solid black'}}>
          border has been given to show there is a div component right below the editor.<br></br>
        type is inline, and height has been given '500px'
        </p>
      </div>
    );
  }
};
render(<App />, document.getElementById("root"));

```

### Props

also become

<table>
  <tr>
    <th>Name</th><th>Type</th><th>Default</th><th>Mandatory</th><th>Description</th>
  </tr>
  <tr>
    <td>name</td><td>string</td><td>'CKEDITOR5'</td><td>NO</td><td>This will the 'id' of the dom element you would like to add editor on</td>
  </tr>
  <tr>
    <td>type</td><td>string</td><td>'classic'</td><td>NO</td><td>type of the editor: classic, inline, ballon, decoupled</td>
  </tr>
  <tr>
    <td>config</td><td>object</td><td></td><td>NO</td><td>CKEDITOR5 config object(Like from the API document)</td>
  </tr>
  <tr>
    <td>content</td><td>any(either tags or string preferrably)</td><td></td><td>NO</td><td>default content to start with</td>
  </tr>
  <tr>
    <td>width</td><td>string</td><td></td><td>NO</td><td>width of the editor(ex. '500px')</td>
  </tr>
  <tr>
    <td>height</td><td>string</td><td></td><td>NO</td><td>height of the editor(ex. '500px')</td>
  </tr>
  <tr>
    <td>className</td><td>string</td><td></td><td>NO</td><td> custom className to the editor if you want </td>
  </tr>
  <tr>
    <td>onChange</td><td>function</td><td></td><td>NO</td><td> onChange event to retrieve data. The return value would be same as eidtor.getData() value from the regular ckeditor</td>
  </tr>
</table>

## Licence

Source code can be found on [github](https://github.com/vgb0332/react-ckeditor5-component), licenced under [MIT](http://opensource.org/licenses/mit-license.php).
