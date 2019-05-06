import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.css";

class ImageHover extends Component {
  render() {
    const { info } = this.props;
    return (
      <div className="image-hover-wrapper">
        {info.map(function(data, index) {
          if (!data.status) {
            return null;
          }
          return (
            <div
              key={index}
              className="image-hover-container"
              id={"image-hover-c" + index}
            >
              <div className="image-hover-image" id={"image-hover-i" + index}>
                <div className="image-hover-city">
                  <img width="300px" src={data.image} alt="algo" />
                </div>
              </div>
              <div className="image-hover-story" id={"image-hover-s" + index}>
                <div className="image-hover-info">
                  <h3 id="image-hover">{data.title}</h3>
                  <p id="image-hover">{data.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

ImageHover.propTypes = {
  info: PropTypes.array.isRequired
};

export default ImageHover;
