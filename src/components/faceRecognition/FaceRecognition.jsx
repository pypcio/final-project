import React from "react";
import "../../styles/faceRecognition.css";
function FaceRecognition({ newImage, faceBox }) {
  function isWebAddress(str) {
    const regex = /^(https?:\/\/)?([\w.-]+)\.([a-zA-Z]{2,6})(\/[\w.-]*)*\/?$/;
    return regex.test(str);
  }
  console.log("image", newImage);
  return (
    <div className="center ma">
      <div className="absolute mt2">
        {isWebAddress(newImage) ? (
          <img
            id="face-img"
            className="photo"
            src={newImage}
            alt="face-photo"
          />
        ) : newImage?.length !== 0 ? (
          <p className="white">C'mon! give me some people, not objects!</p>
        ) : (
          ""
        )}

        {faceBox.length !== 0 ? (
          faceBox.map((n, index) => {
            return (
              <div
                key={index}
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
export default FaceRecognition;
