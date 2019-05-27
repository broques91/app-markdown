import React, { Component } from 'react';
import * as marked from 'marked';

class Markdown extends Component {

    state = {
      editTextArea: ""
    }
  
    editText = event => {
      console.log("Edit text");
      const text = event.target.value;
      this.setState({editTextArea: text})
    }
  
    renderText = text => {
      const renderText = marked(text);
      return { __html: renderText};
    }
  
    render() {
      return (
        <div className="container">
          <h1 className="title">Markdwon App</h1>
          <div className="row">
            {/* Markdown */}
            <div className="col-md-6 markdown">
              <form action="">
                <div className="form-group">
                  <h4 className="subtitle">Markdown</h4>
                  <textarea
                    rows="10"
                    className="form-control" 
                    onChange={ event => this.editText(event) }>
                  </textarea>
                </div>
              </form>
            </div>
            {/* Preview Content */}
            <div className="col-md-6 preview">
              <h4 className="subtitle">Preview</h4>
              <div dangerouslySetInnerHTML={this.renderText(this.state.editTextArea)}></div>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default Markdown;