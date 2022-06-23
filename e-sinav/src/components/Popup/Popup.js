import React from 'react'
import './Popup.css';

//componenti başka yerlerde child component olarak çağırıcaz
//popup çağrıldığında triggerlandığında soru işaretinin yanı çağrılacak
//eğer çağrılmazsa boş string dönücek
//eğer triggerimiz doğru dönerse popup çıkacak dönmezse boş string

//kapatma butonu için onclick fonksiyonuna props.setTrigger(false) veriyoruz
function Popup(props) {
  return (props.trigger)?(
    <div className='popup'>
        <div className='popup-inner'>
            <button className='close-btn' onClick={()=>props.setTrigger(false)}> Çıkış </button>
            {props.children}                        
        </div>
    </div>
  ):"";
}

export default Popup