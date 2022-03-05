import React from "react";
import Button from "./components/UI/Button";

const App = () => {
  const handleButtonClick = () => {
    console.log("button Clicked");
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
        flexWrap: "wrap",
      }}
    >
      <Button>Normal</Button>
      <Button outline>Outline</Button>
      <Button className="extra-class" onClick={handleButtonClick}>
        Customizable
      </Button>
    </div>
  );
};

export default App;
