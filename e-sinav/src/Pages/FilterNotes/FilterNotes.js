import React from 'react';

import './FilterNotes.css';
    //notlar bölümünde derslere göre öğrenci notlarını filtreleme modülü
const FilterNotes = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);                                  
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value='React'>React</option>
          <option value='CSS'>CSS</option>
          <option value='HTML'>HTML</option>
          <option value='JavaScript'>JavaScript</option>
        </select>
      </div>
    </div>
  );
};

export default FilterNotes;