import "./styles/App.css";
import NavigationBar from "./components/navigation/NavigationBar";
import Logo from "./components/logo/Logo";
import ImageLinkForm from "./components/imageLinkForm/ImageLinkForm.jsx";
import { useState } from "react";
function App() {
  const [newData, setData] = useState("");
  const handleUrl = (event) => {
    event.preventDefault();
    console.log("Current link: ", newData);
    setData("");
  };
  const handleData = (event) => {
    const temp = event.target.value;
    setData(temp);
  };
  return (
    <div className="app">
      <NavigationBar className="navBar" />
      <Logo className="logo" />
      <ImageLinkForm
        handleUrl={handleUrl}
        handleData={handleData}
        newData={newData}
      />
      {/*
    <FaceRecognition/> */}
    </div>
  );
}

export default App;
