import React from "react";
import Card from "../Components/Card";

const CardList = ({ Robots }) => {
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "row wrap",
      }}
    >
      {Robots.map((user, i) => {
        return (
          <Card
            key={i}
            id={Robots[i].id}
            name={Robots[i].name}
            email={Robots[i].email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
