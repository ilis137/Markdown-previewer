import React, { Component } from "react";
import FormControl from "react-bootstrap/lib/FormControl";
import FormGroup from "react-bootstrap/lib/FormGroup";
import ControlLabel from "react-bootstrap/lib/ControlLabel";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <FormGroup className="form" controlId="formControlTextArea">
          <ControlLabel>Enter Markdown here...</ControlLabel>
          <FormControl
            className="markdownText"
            componentClass="textarea"
            placeholder="enter markdown"
          />
        </FormGroup>

        <FormGroup className="preview" controlId="formControlTextArea">
          <ControlLabel>Preview</ControlLabel>
          <FormControl className="previewText" componentClass="textarea" />
        </FormGroup>
      </div>
    );
  }
}

export default App;
