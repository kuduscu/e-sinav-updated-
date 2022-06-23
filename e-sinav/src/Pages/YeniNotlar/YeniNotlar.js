import React from 'react'
import YeniNot from '../YeniNot/YeniNot'

const YeniNotlar = ({name, score, category, difficulty ,onAddNote}) => {
    const saveNoteDataHandler=(enteredNoteData)=>{
        const notesData={
            ...enteredNoteData,
            id:Math.random().toString()
        };
        console.log(notesData);
        onAddNote(notesData);
    };

    return (
    <div>
        <YeniNot name={name} score={score} category={category} difficulty={difficulty} onSaveNoteData={saveNoteDataHandler} /> 
    </div>
  )
}

export default YeniNotlar