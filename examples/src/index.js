/***  examples/src/index.js ***/
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
