import React from "react";
import "./style.css";
import images from "./../../images.json";
console.log(images.length);

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleIncrement = () => {
    if (this.state.count < images.length - 1) {
      this.setState({ count: this.state.count + 1 });
    }
  };

  handleDecrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  render() {
    return (
      <div className="card">
        <div className="img-container">
          <img src={images[this.state.count].image} />
        </div>
        <div className="content">
          <ul>
            <li>
              <button onClick={this.handleIncrement}>Siguiente</button>
            </li>
            <li>
              <button onClick={this.handleDecrement}>Anterior</button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Slider;