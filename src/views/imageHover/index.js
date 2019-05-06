import React, { Component } from "react";
import ImageHover from "../../components/imagehover";

class ImageHoverView extends Component {
  render() {
    const ImageHoverSettings = [
      {
        title: "Lorem",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolorem ex earum, minima nobis officiis error delectus repudiandae commodi voluptates fugit pariatur ratione! Possimus magni ut veniam necessitatibus neque minus?",
        image: "https://picsum.photos/500/500",
        status: true
      },
      {
        title: "Ipsum",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit debitis, obcaecati fugiat eveniet itaque dolores ex, magnam nam aut pariatur id voluptas rem vitae cupiditate ea quasi quia minus eaque.",
        image: "https://picsum.photos/400/400",
        status: true
      },
      {
        title: "Dolor",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores reprehenderit nihil placeat facere qui quisquam assumenda hic earum molestias veniam, illo iure esse natus nisi sed excepturi iste odio? Officiis!",
        image: "https://picsum.photos/600/600",
        status: true
      }
    ];
    return (
      <div>
          <h1 className="text-center mt-2 mb-5">Image Hover</h1>
        <ImageHover info={ImageHoverSettings} />
      </div>
    );
  }
}

export default ImageHoverView;
