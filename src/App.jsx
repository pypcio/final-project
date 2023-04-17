import "./styles/App.css";
import NavigationBar from "./components/navigation/NavigationBar";
import Logo from "./components/logo/Logo";
import ImageLinkForm from "./components/imageLinkForm/ImageLinkForm.jsx";
import { useState } from "react";
import ParticlesBg from "particles-bg";
import Rank from "./components/rank/Rank";
import FaceRecognition from "./components/faceRecognition/FaceRecognition";
import axios from "axios";
// console.log(tescik2);
function App() {
  const [newData, setData] = useState("");
  const [newImage, setNewImage] = useState([]);

  const handleUrl = (event) => {
    event.preventDefault();
    // console.log("Current link: ", newData);
    processImage(newData);
    setData("");
  };

  const handleData = (event) => {
    const temp = event.target.value;
    setData(temp);
  };

  const processImage = (url) => {
    const PAT = import.meta.env.VITE_REACT_APP_PAT_KEY;
    // Specify the correct user_id/app_id pairings
    // Since you're making inferences outside your app's scope
    const USER_ID = "sp3c";
    const APP_ID = "test";
    // Change these to whatever model and image URL you want to use
    const MODEL_ID = "general-image-recognition";
    const MODEL_VERSION_ID = "aa7f35c01e0642fda5cf400f543e7c40";
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

    fetch(
      "https://api.clarifai.com/v2/models/" +
        MODEL_ID +
        "/versions/" +
        MODEL_VERSION_ID +
        "/outputs",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setNewImage(result.outputs))
      .catch((error) => console.log("error", error));
    console.log(newImage);
    // axios
    //   .post(
    //     "https://api.clarifai.com/v2/models/" +
    //       MODEL_ID +
    //       "/versions/" +
    //       MODEL_VERSION_ID +
    //       "/outputs",
    //     requestOptions
    //   )
    //   .then((response) => response.data)
    //   .then((response) => {
    //     console.log("co to jest:", response);
    //   });
  };

  return (
    <div className="app">
      <NavigationBar className="navBar" />
      <div className="my-wrap">
        <Logo className="logo " />
        <Rank />
      </div>
      <ImageLinkForm
        handleUrl={handleUrl}
        handleData={handleData}
        newData={newData}
      />
      <FaceRecognition newImage={newImage} />
      <ParticlesBg color="#FFFEFE" num={50} type="cobweb" bg={true} />
    </div>
  );
}

export default App;
