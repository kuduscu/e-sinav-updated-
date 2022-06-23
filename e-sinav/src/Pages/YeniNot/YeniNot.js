import React from 'react'
import { useNavigate } from "react-router-dom";
const YeniNot = ({ name, score, category, difficulty ,onSaveNoteData }) => {
  const navigate = useNavigate();
  const handlePaneleDonus =(event)=>{
    event.preventDefault();
    navigate("/AdminPanel");
  }

  const handleYeniNotlariGoster = (event) => {
    //
    event.preventDefault();
    const notesData={
      name2:name,
      category2:category,
      score2:score*10,
      difficulty2:difficulty
    };
    console.log(notesData);
    onSaveNoteData(notesData);
    

    //
    }
  return (
    <div>
      <button className='button-23' onClick={handleYeniNotlariGoster}>Notları Güncelle</button>
      <button className='button-23' onClick={handlePaneleDonus}>Panele Geri Dön</button>
    </div>
  )
}

export default YeniNot