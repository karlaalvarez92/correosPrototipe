import React, { Component } from "react";
import "./Container.css";

class Container extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const data = this.props.data;
    console.log(data);
    return (
      <div className="container principal">
        {data &&
          data.map(element => (
            <div className="container card">
              <div className="container image">
                <img id="img" alt="" src={element.img} />
              </div>
              <div className="container information">{element.price}</div>
              <div className="container add ">carrito</div>
            </div>
          ))}
      </div>
    );
  }
}

export default Container;
