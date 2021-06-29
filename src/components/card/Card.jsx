import React from "react";
import "./Card.css";
export const Card = (props) => {
  return (
    <div className="card-container ">
      <img
        alt="Monster"
        src={`https://robohash.org/${
          props.monster.id + 50
        }?set=set2&size=180x180`}
      />
      <h2>{props.monster.name} </h2>
      <h4>{props.monster.email}</h4>
    </div>
  );
};
