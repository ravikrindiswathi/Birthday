import React, { useEffect, useState } from "react";
import BirthdayCard from "./BirthdayCard";
import "./styles.css";
import husbandImage from "./JS.jpg";
import bg1 from "./heart5.jpg";
import bg2 from "./heart4.jpg";

function App() {
  return (
    <div className="App">
      <BirthdayCard
        name="My ❤️"
        message="Cheers🥂 to your first Birthday with me as your wife - hope we have many more beautiful birthdays together💑!Once again HBD husband.💞🎊"
        imageUrl={husbandImage} // Replace with your own image
      />
    </div>
  );
}
export default App;
