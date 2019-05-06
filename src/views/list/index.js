import React, { Component } from "react";

class List extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center mt-2 mb-5">List</h1>
        <h5 className="ml-5">
          <a href="/imagehover">Image Hover</a>
        </h5>
        <h5 className="ml-5">
          <a href="/3dshading">3D Shading</a>
        </h5>
      </div>
    );
  }
}

export default List;
