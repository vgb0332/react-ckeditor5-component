import React, { Component } from 'react';
import PropTypes from "prop-types";
//Default cdn source - standard Edition
// classic - the Classic editor
// inline - the Inline editor
// balloon - the Balloon editor
// decoupled-document - the Document editor
const cdn = (type) => "https://cdn.ckeditor.com/ckeditor5/10.0.1/"+type+"/ckeditor.js";

function loadScript(src) {
  return new Promise(function(resolve, reject){
    let script = document.createElement('script');
    script.src = src;
    script.addEventListener('load', function () {
      resolve();
    });
    script.addEventListener('error', function (e) {
      reject(e);
    });
    document.body.appendChild(script);
  })
};

class CKEDITOR5 extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: this.props.name,
      loaded: false,
      type: 'classic',
      config: this.props.config,
    }
  }

  componentDidMount() {
    const { loaded, type } = this.state;

    if(!loaded){
      loadScript( cdn(type) )
      .then( (res) => {
        console.log('ckeditor cdn loaded');
        this.setState({
          loaded: true,
        })
      })
      .catch(err => {
        console.log('cannot load CKEDITOR');
      })
    }
  }

  componentDidUpdate() {
    const { name, instance, config } = this.state;
    const { height, width } = this.props;
    if(instance) return false;
    //Create Classic Editor
    window.ClassicEditor
    .create( document.querySelector( "#" + name ), config )
    .then( editor => {
      console.log( editor );

      const target = document.getElementsByClassName("ck-content")[0];

      if(height) target.style.height = height;
      if(width) target.style.width = height;
      this.setState({ instance: editor })
    })
    .catch( error => {
      console.error( error );
    } );
  }

  render() {
    console.log(this.state);
    const { name, content, className } = this.props;
    return (
      <div id={name} className={className} >
        { content }
      </div>

    );
  }
}

CKEDITOR5.defaultProps = {
  name: 'CKEDITOR5',
  loaded: false,
  type: 'classic',
  config: {
    ckfinder: {
      // eslint-disable-next-line max-len
      uploadUrl: 'https://cksource.com/weuy2g4ryt278ywiue/core/connector/php/connector.php?command=QuickUpload&type=Files&responseType=json'
    },
  },
  content: '',
  width: '',
  height: '',
  className: '',
};

CKEDITOR5.propTypes = {
  name: PropTypes.string,
  loaded: PropTypes.bool,
  type: PropTypes.string,
  config: PropTypes.object,
  content: PropTypes.any,
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
  // config: PropTypes.object,
  // isScriptLoaded: PropTypes.bool,
  // scriptUrl: PropTypes.string,
  // activeClass: PropTypes.string,
  // events: PropTypes.object
};


export default CKEDITOR5;
