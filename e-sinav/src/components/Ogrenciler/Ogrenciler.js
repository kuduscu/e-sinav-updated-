import React, { useState } from "react";
import FilterNotes from "../../Pages/FilterNotes/FilterNotes";
import OgrenciData from "../OgrenciData/OgrenciData";

const Ogrenciler = ({ items }) => {
  const [filteredNotes, setFilteredNotes] = useState("React");
//notları filtrelemek için kullandığımız yer ilk olarak react' notları gözükücek
  const filterChangeHandler = (selectedNotes) => {
    setFilteredNotes(selectedNotes);
  };

  //yıla göre giltreleme için

  const listFilteredNotes=items.filter(note=>{
    return note.category2 === filteredNotes;
  });

  //child to parent aktarımı yaparkenn çağrılan componente kendi belirlediğimiz isimde bir fonksiyon verilir

  //map fonksiyonu bir arrayi alıp o arraydan yeni arrayler üretmemizi sağlar . map fonksiyonuna vereceğimiz işlem arraydeki tüm elemanlara uygulanır

  //items taki her veri için OgrenciData fonku çağrılıyor
  return (
    <div>
      <FilterNotes
        selected={filteredNotes}
        onChangeFilter={filterChangeHandler}
      />
      {listFilteredNotes.map((notes) => (
        <OgrenciData
          key={notes.id}
          name1={notes.name2}
          category1={notes.category2}
          difficulty1={notes.difficulty2}
          score1={notes.score2}
        />
      ))}
    </div>
  );
};

export default Ogrenciler;
