import React, { useState } from "react";
import Ogrenciler from "../../components/Ogrenciler/Ogrenciler";
import YeniNotlar from "../YeniNotlar/YeniNotlar";
import "./Notes.css";

const DUMMY_NOTES = [
  {
    id: "e1",
    name2: "kerimyun@trakya.edu.tr",
    category2: "React",
    score2: 100,
    difficulty2: "Vize",
  },
  {
    id: "e2",
    name2: "mertagac@trakya.edu.tr",
    category2: "JavaScript",
    score2: 70,
    difficulty2: "Vize",
  },
  {
    id: "e3",
    name2: "aysebanu@trakya.edu.tr",
    category2: "CSS",
    score2: 20,
    difficulty2: "Final",
  },
  {
    id: "e4",
    name2: "mervesayar@trakya.edu.tr",
    category2: "React",
    score2: 40,
    difficulty2: "Final",
  },
  {
    id: "e5",
    name2: "cerenmelek@trakya.edu.tr",
    category2: "CSS",
    score2: 50,
    difficulty2: "Vize",
  },
  {
    id: "e6",
    name2: "sedefcicek@trakya.edu.tr",
    category2: "HTML",
    score2: 40,
    difficulty2: "Vize",
  },
  {
    id: "e7",
    name2: "hasantegmen@trakya.edu.tr",
    category2: "JavaScript",
    score2: 90,
    difficulty2: "Final",
  },
];

//yeni notu eski notların arrayine ekleme modülü

const Notes = ({ name, score, category, difficulty }) => {
  const [notes, setNotes] = useState(DUMMY_NOTES);

  const addNoteHandler = (note) => {
    setNotes((prevNotes) => {
      return [note, ...prevNotes];
    });
  };

  return (   
       <form className="new-expense1">
          <span className="ogrenciNot">Öğrenci Notları :</span>
          <div>
            <Ogrenciler items={notes} />
            <YeniNotlar
              name={name}
              score={score}
              category={category}
              difficulty={difficulty}
              onAddNote={addNoteHandler}
            />
          </div>
        </form>
  );
};

export default Notes;
