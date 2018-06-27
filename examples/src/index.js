/***  examples/src/index.js ***/
import React from 'react';
import { render} from 'react-dom';
import CKEDITOR5 from '../../src';
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
