import "./styles/App.css";
import NavigationBar from "./components/navigation/NavigationBar";
import Logo from "./components/logo/Logo";
import ImageLinkForm from "./components/imageLinkForm/ImageLinkForm.jsx";
import { useState } from "react";
import ParticlesBg from "particles-bg";
import Rank from "./components/rank/Rank";
function App() {
  const [newData, setData] = useState("");
  const [userData, setUserData] = useState([]);
  const handleUrl = (event) => {
    event.preventDefault();
    console.log("Current link: ", newData);
    setData("");
  };
  const handlerUser = () => {};
  const handleData = (event) => {
    const temp = event.target.value;
    console.log("info: ", temp);
    setData(temp);
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
      {/*
    <FaceRecognition/> */}
      <ParticlesBg color="#ff0000" num={50} type="cobweb" bg={true} />
    </div>
  );
}

export default App;
