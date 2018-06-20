/***  examples/src/index.js ***/
import React from 'react';
import { render} from 'react-dom';
import CKEDITOR5 from '../../src';
const App = () => (
    <CKEDITOR5 />
);
render(<App />, document.getElementById("root"));
