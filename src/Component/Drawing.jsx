import React, { useState } from "react";
import "./Drawing.css";
import MyMother from "./Assests/MyMother.jpeg"
import MyBrother1 from "./Assests/MyBrother1.jpeg"
// import AlluArjun from "./Assests/AlluArjun.jpeg"
import Anemy from "./Assests/Anemy.jpeg"
import HritikRoshan from "./Assests/HritikRoshan.jpeg"
import HumanEye from "./Assests/HumanEye.jpeg"
import MsDhoni from "./Assests/MsDhoni.jpeg"
import RamCharan from "./Assests/RamCharan.jpeg"
import TigerShroff from "./Assests/TigerShorff.jpeg"
import TomJerry from "./Assests/Tom&Jerry.jpeg"
export default function Drawing() {
  const [show, setshow]=useState(0);
  return (
    <div>
      <div className="drawing">
        <div className="drawing-text">
          <div>
            <span>My Mother</span>
            <button  onClick={()=> setshow(1)}>Show Image</button>
          </div>
          <div>
            <span>My Brother1</span>
            <button onClick={()=>setshow(2)}>Show Image</button>
          </div>
          <div>
            <span>My Brother2</span>
            <button onClick={()=>setshow(3)}>Show Image</button>
          </div>
          <div>
            <span>Hanuman</span>
            <button onClick={()=>setshow(4)}>Show Image</button>
          </div>
          <div>
            <span>Shiv Shankar</span>
            <button onClick={()=>setshow(5)}>Show Image</button>
          </div>
          <div>
            <span>Ram Charan</span>
            <button onClick={()=>setshow(6)}>Show Image</button>
          </div>
          <div>
            <span>Tiger Shroff</span>
            <button onClick={()=>setshow(7)}>Show Image</button>
          </div>
          <div>
            <span>Ms Dhoni</span>
            <button onClick={()=>setshow(8)}>Show Image</button>
          </div>
          <div>
            <span>Hritik Roshan</span>
            <button onClick={()=>setshow(9)}>Show Image</button>
          </div>
          <div>
            <span>Anemy</span>
            <button onClick={()=>setshow(10)}>Show Image</button>
          </div>
          <div>
            <span>Human Eye</span>
            <button onClick={()=>setshow(11)}>Show Image</button>
          </div>
          <div>
            <span>Floating Object</span>
            <button onClick={()=>setshow(12)}>Show Image</button>
          </div>
          <div>
            <span>Tom & Jerry</span>
            <button onClick={()=>setshow(13)}>Show Image</button>
          </div>
        </div>
        <div className="drawing-image">
          <div>
            <img src={MyMother} alt="" className={show===1 ? "show" : "hide"} />
            <img src={MyBrother1} alt="" className={show===2 ? "show" : "hide"}/>
            <img src={MyBrother1} alt="" className={show===3 ? "show" : "hide"}/>
            <img src={MyBrother1} alt="" className={show===4 ? "show" : "hide"}/>
            <img src={MyBrother1} alt="" className={show===5 ? "show" : "hide"}/>
            <img src={RamCharan} alt="" className={show===6 ? "show" : "hide"}/>
            <img src={TigerShroff} alt="" className={show===7 ? "show" : "hide"}/>
            <img src={MsDhoni} alt="" className={show===8 ? "show" : "hide"}/>
            <img src={HritikRoshan} alt="" className={show===9 ? "show" : "hide"}/>
            <img src={Anemy} alt="" className={show===10 ? "show" : "hide"}/>
            <img src={HumanEye} alt="" className={show===11 ? "show" : "hide"}/>
            <img src={MyBrother1} alt="" className={show===12 ? "show" : "hide"}/>
            <img src={TomJerry} alt="" className={show===13 ? "show" : "hide"}/>




          </div>
        </div>
      </div>
    </div>
  );
}
