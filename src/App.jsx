import React, { useEffect, useState } from "react";
import BirthdayCard from "./BirthdayCard";
import "./styles.css";
import husbandImage from "./JS.jpg";
import bg1 from "./heart5.jpg";
import bg2 from "./heart4.jpg";

const backgroundImages = [bg1, bg2];

function App() {
 const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 20000); // Change every 2 seconds

    return () => clearInterval(intervalId); // Clean up on unmount
  }, []);


  return (
    <div className="App"
      style={{
        backgroundImage: `url(${backgroundImages[bgIndex]})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "100vh",
        transition: "background-image 1s ease-in-out",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
      >
      <BirthdayCard
        name="My ❤️"
        message="Cheers🥂 to your first Birthday with me as your wife - hope we have many more beautiful birthdays together💑!Once again HBD husband.💞🎊"
        imageUrl={husbandImage} // Replace with your own image
      />
    </div>
  );
}
export default App;