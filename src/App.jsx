import React, { Component } from "react";
import FormControl from "react-bootstrap/lib/FormControl";
import FormGroup from "react-bootstrap/lib/FormGroup";
import ControlLabel from "react-bootstrap/lib/ControlLabel";
import "./App.css";

let marked = require("marked");

class App extends Component {
  state = {
    markdown: ""
  };

  handleChange = e => {
    this.setState({
      markdown: e.target.value
    });
    console.log(this.state.markdown);
  };

  render() {
    return (
      <div className="App">
        <FormGroup className="form" controlId="formControlTextArea">
          <ControlLabel>Editor</ControlLabel>
          <FormControl
            className="markdownText"
            componentClass="textarea"
            placeholder="enter markdown"
            onChange={this.handleChange}
          />
        </FormGroup>

        <FormGroup className="preview" controlId="formControlTextArea">
          <h1>Previewer</h1>
          <div
            className="preview-box"
            dangerouslySetInnerHTML={{ __html: marked(this.state.markdown) }}
          />
        </FormGroup>
      </div>
    );
  }
}

export default App;
