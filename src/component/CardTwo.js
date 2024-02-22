import React from "react";
import "./card.css";

function CardTwo(props) {
  return (
    <>
      <div className="card_db ">
        
        <div className="cardView">
          <h3 style={{ fontSize: '30px' }}>{props.number}</h3>
          <h3 style={{fontSize:'15px'}}>{props.task}</h3>

        </div>
       
      </div>
    </>
  );
}

export default CardTwo;