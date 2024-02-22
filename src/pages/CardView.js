import React from 'react'
import { LuUserCircle2 } from "react-icons/lu";
import Card from '../component/Card'
import CardTwo from '../component/CardTwo';
import CardThree from'../component/CardThree'
const CardView = () => {
  return (
    <>
    <div className='card-view-container col-12' >
      
        <div className='card-view-title col-2' style={{ height: '50px' }}>
          <div className='title-one clo-12' style={{ marginTop: '10px', alignItems: 'center', display: 'flex', justifyContent: 'between' }}>
            <h3 className='insights-title col-6' style={{ fontSize: '25px' }}>Insights</h3>
            <h6 className='edit-title col-6' style={{ color: 'blue', marginTop: '5px', marginLeft: '20px' }}>Edit Widgets</h6>
          </div>
        </div>
        <div className='card-view-subtittle col-12'style={{display:'flex',gap:'30px', marginTop:'20px', alignItems:'center'}}>
          <h3>Jobs</h3>
          <div className='select-users col-3' style={{alignItems:'center'}} >
            <LuUserCircle2  />
            <select style={{border:'none',backgroundColor:'var(--body-color)'}}>
              <option selected>All Members</option>
              <option>1</option>
              <option>1</option>
              <option>1</option>
            </select>
          </div>
        </div>
        <div className="reportcard col-12" style={{  display: "flex" ,marginTop:'20px'}}>
          <div className="card1  col-3" >
            <CardTwo task="Overdue" number="1787" />
          </div>
          <div className="card1  col-3" style={{ marginLeft: "10px" }}>
            <Card task="Approaching deadline" number="1" />
          </div>
          <div className="card1  col-3" style={{ marginLeft: "10px" }}>
            <CardThree task="No Activity" number="10" />
          </div>
          <div className="card1  col-3" style={{ marginLeft: "10px" }}>
            <CardTwo task="Total" number="10" />
          </div>
        </div>
      </div>
     
    </>

  )
}

export default CardView