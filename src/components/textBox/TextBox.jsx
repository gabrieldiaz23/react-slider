import React, { Component } from "react";
import images from "./../../images.json";

class TextBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
  }

  updateInputValue = evt => {
    this.setState({
      inputValue: evt.target.value
    });
  };

  addUrl = event => {
    event.preventDefault();
    images.push({
      image: this.state.inputValue
    });
    this.setState({
      inputValue: ""
    });
  };

  render() {
    return (
      <div>
        <form>
          <label
            value={this.state.inputValue}
            onChange={evt => this.updateInputValue(evt)}
            type="text"
            name="url"
          >
            URL:
            <input />
          </label>

          <input
            onClick={this.addUrl}
            type="submit"
            value="Submit"
            className="submit"
          />
        </form>
      </div>
    );
  }
}

export default TextBox;