import React from "react";
import "../../styles/faceRecognition.css";
export default function FaceRecognition({ newImage, faceBox }) {
  //   console.log("kurwaaa", {
  //     top: `${faceBox[0].topRow}`,
  //     right: `${faceBox[0].rightCol}`,
  //     bottom: `${faceBox[0].bottomRow}`,
  //     left: `${faceBox[0].leftCol}`,
  //   });
  return (
    <div className="center ma">
      <div className="absolute mt2">
        {newImage ? (
          <img
            id="face-img"
            className="photo"
            src={newImage}
            alt="face-photo"
          />
        ) : (
          ""
        )}
        {faceBox.length !== 0 ? (
          faceBox.map((n, index) => {
            return (
              <div
                id={index}
                className="bounding-box"
                style={{
                  top: n.topRow,
                  right: n.rightCol,
                  bottom: n.bottomRow,
                  left: n.leftCol,
                }}
              ></div>
            );
          })
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
