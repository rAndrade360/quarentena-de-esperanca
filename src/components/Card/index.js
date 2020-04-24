import React, {useEffect, useState} from 'react';
import './styles.css';

export default function Card({data}) {
  const [color, setColor] = useState("#000");
  useEffect(()=>{
    function changeColor(){
      switch(data.type){
        case "instagram":
          setColor("rgb(255, 0, 106)");
          break;
        case "curso":
          setColor("#3dc64b")
          break;
        case "youtube":
          setColor("#d83c3f")
          break;
        default:
          setColor("#3c49d8")
      }
    }
    changeColor();
  }, )

    
  return (
    <div className="card">
        <p className="type" style={{backgroundColor: `${color}`}}>{data.type}</p>
        <img src={data.avatar_url} alt={data.title}/>
        <div className="content">
            <p><span className="title">{data.title}</span></p>
            <p className="discripton">{data.discription}</p>
            <div className="button">
                <a href={data.link} target="blank">Conferir agora!</a>
            </div>
        </div>
    </div>
  );
}
