import React, { Component } from "react";
import DShading from "../../components/3dshading";

class DShadingView extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center mt-2">3D Shading</h1>
        <DShading />
      </div>
    );
  }
}

export default DShadingView;
