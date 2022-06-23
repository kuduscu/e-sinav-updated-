import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./ImageSlider.css";

const ImageSlider = ({slides}) => {
  const [current, setCurrent] = useState(0);                //şu an tutulan fotoğraf için bu useState'i kullandım
  const length = slides.length;                             //uzunluk slaytın uzunluğuna eşit

  //foto değiştirme kısmı
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);         //şu anki fotonun indeksi 0 sa uzunluk değişkenini 1 azaltıyor, değilse şu anki indeksi 1 azaltıyor
  };                                                              //yani bir önceki fotoya dönmüş olur
                                                              
/*
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
*/
  
  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="oncekiSlayt" onClick={prevSlide} />
      <FaArrowAltCircleRight className="sonrakiSlayt" onClick={nextSlide} />
      {SliderData.map((slide, index) => {                                       //.map ile SliderData arrayindeki elemanları alıyoruz , elemanları slide ismiyle tanımladım sıralarını da index ile
        //2 tane değere ihtiyacımız olucak
        return (
          <div
            className={index === current ? "slide.active" : "slide"}
            key={index}
          >
            {index === current && (                                             //&& yi if yerine kullandım  index şu anda tutulan indekse eşitse o indeksli image'ı döndürüyor
              <img src={slide.image} alt="travel image" className="image" />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
