import React from "react";

const GreetingCard = ({ title, message }) => {
    return (
      <div className="greeting-card">
        <h1 className="card-title">{title}</h1>
        <p className="card-message">{message}</p>
      </div>
    );
  };

  export default GreetingCard;