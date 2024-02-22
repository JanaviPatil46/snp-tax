import React from "react";
import "./card.css";

function CardThree(props) {
  return (
    <>
      <div className="card_db ">
        
        <div className="cardView">
          <h3 style={{ fontSize: '30px' }}>{props.number}</h3>
          <h3 style={{fontSize:'15px'}}>{props.task}</h3>

        </div>
        <div class="form-group ">
         <select style={{border:'none', width:'120px'}}>
          <option selected>Over 3 days</option>
          <option>Over 1 week</option>
          <option>Over 1 month</option>
         </select>
        </div>
      </div>
    </>
  );
}

export default CardThree;