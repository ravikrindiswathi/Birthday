import React, { useState } from "react";

const BirthdayCard = ({ name, message, imageUrl }) => {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(true);
  };

  return (
    <div className="card">
      <img className="photo" src={imageUrl} alt="Husband" style={{ width: "50%", height: "50%" }}/>
      <h1>Happy Birthday {name}! 🎉🎂🎈</h1>
      
      {!showMessage && (
        <button className="show-button" onClick={handleClick}>
          Show Birthday Message
        </button>
      )}

      {showMessage && <p className="message">{message}</p>}
    </div>
  );
};

export default BirthdayCard;