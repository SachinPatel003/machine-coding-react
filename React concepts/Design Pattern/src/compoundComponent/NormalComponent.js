import React from "react";
import Card from "./Card";

const NormalComponent = () => {
  return (
    <>
      <Card>
        <Card.Title style={{ color: "green" }}>The Title</Card.Title>
        <Card.Discription>The is the Discription</Card.Discription>
        <Card.Footer btn1="Button1" btn2="Button2" />
      </Card>

      <Card>
        <Card.Footer btn1="Button1" btn2="Button2" />
        <Card.Title>
          <div style={{ color: "red" }}>The Title</div>
        </Card.Title>
        <Card.Discription>The is the Discription</Card.Discription>
      </Card>
    </>
  );
};

export default NormalComponent;
