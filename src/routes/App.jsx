import Logo from "../components/logo/Logo";
import ImageLinkForm from "../components/imageLinkForm/ImageLinkForm.jsx";
import { useState } from "react";
import ParticlesBg from "particles-bg";
import Rank from "../components/rank/Rank";
import FaceRecognition from "../components/faceRecognition/FaceRecognition";
import "../styles/app.css"
// console.log(tescik2);
function App() {
  const [newData, setData] = useState("");
  const [faceBox, setFaceBox] = useState([]);
  const [url, setUrl] = useState(null);
  const handleUrl = (event) => {
    event.preventDefault();
    // console.log("Current link: ", newData);
    setUrl(newData);
    processImage(newData);
    setData("");
  };
  const handleData = (event) => {
    const temp = event.target.value;
    setData(temp);
  };
  const calculateFaceLocation = (imageUrl, boundaryBox) => {
    // console.log("chyba dziala: ", boundaryBox);
    const image = document.getElementById("face-img");
    
    const width = Number(image.width);
    const height = Number(image.height);
    // console.log(boundaryBox);
    const detectFace = boundaryBox.map((n) => {
      return {
        leftCol: n.left_col * width,
        topRow: n.top_row * height,
        rightCol: width - (n.right_col * width),
        bottomRow: height - (n.bottom_row * height),
      };
    });
    console.log("twarz",detectFace)
    setFaceBox(detectFace);
  };
  const processImage = (url) => {
    const PAT = import.meta.env.VITE_REACT_APP_PAT_KEY;
    // Specify the correct user_id/app_id pairings
    // Since you're making inferences outside your app's scope
    const USER_ID = "sp3c";
    const APP_ID = "test";
    // Change these to whatever model and image URL you want to use
    const MODEL_ID = "face-detection";
    const MODEL_VERSION_ID = "6dc7e46bc9124c5c8824be4822abe105";
    const IMAGE_URL = url;

    const raw = JSON.stringify({
      user_app_id: {
        user_id: USER_ID,
        app_id: APP_ID,
      },
      inputs: [
        {
          data: {
            image: {
              url: IMAGE_URL,
            },
          },
        },
      ],
    });

    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Key " + PAT,
      },
      body: raw,
    };

    return fetch(
      "https://api.clarifai.com/v2/models/" +
        MODEL_ID +
        "/versions/" +
        MODEL_VERSION_ID +
        "/outputs",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => result.outputs[0].data.regions)
      .then((result) => result.map((n) => n.region_info.bounding_box))
      .then((result) => calculateFaceLocation(url, result))
      .catch((error) => console.log("error", error));
  };

  return (
      <>
      <div className="my-wrap">
        <Logo className="logo " />
        <Rank />
      </div>
      <ImageLinkForm
        handleUrl={handleUrl}
        handleData={handleData}
        newData={newData}
      />
      <FaceRecognition faceBox={faceBox} newImage={url} />
      <ParticlesBg color="#FFFEFE" num={50} type="cobweb" bg={true} />
      </>
  
  );
}
export default App;
