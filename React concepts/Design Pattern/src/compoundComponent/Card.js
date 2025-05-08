import React from "react";

const Card = ({ children }) => {
  return (
    <div
      style={{
        border: "2px solid red",
        borderRadius: "10px",
        margin: "10px",
        padding: "10px",
      }}
    >
      {children}
    </div>
  );
};

// Sub component

const Title = ({ children }) => {
  return <div style={{ fontSize: "30px" }}>{children}</div>;
};

const Discription = ({ children }) => {
  return <div style={{ fontSize: "20px" }}>{children}</div>;
};

const Footer = ({ btn1, btn2 }) => {
  return (
    <div>
      <button>{btn1}</button>
      <button>{btn2}</button>
    </div>
  );
};

Card.Title = Title;
Card.Discription = Discription;
Card.Footer = Footer;

export default Card;
