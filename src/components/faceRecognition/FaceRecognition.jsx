import React from "react";
import "../../styles/faceRecognition.css";
export default function FaceRecognition({ newImage }) {
  return (
    <div className="face-photo">
      {newImage ? (
        <img className="photo" src={newImage} alt="face-photo" />
      ) : (
        ""
      )}
    </div>
  );
}
