import React from "react";
import { useNavigate } from "react-router-dom";
//slider kısmı için
import { SliderData } from "../../components/Image/SliderData";
import ImageSlider from "../../components/Image/ImageSlider";
//
import "./Home.css";

const Home = () => {
  /*react-router-dom un içindeki useNavigate fonksiyonunu sayfa değiştirmek için kullandım*/ 
  const navigate = useNavigate();
  const handleAdmin = () => {
    navigate("/Admin");                       //butona basıldığında Admin'e 
  };
  const handleStudent = () => {
    navigate("/Student");                     //butona basıldığında Student sayfasına gider
  };
  const handleKayit=()=>{
    navigate("/Kayit");
  }
  return (
    <div>
      <ImageSlider slides={SliderData}   /* ImageSlider componentini çağırdık slides değişkenine de SliderData yı verdik. slides'ı da props olarak ImageSlider'a veriyoruz orada kullanabilmek için*/ />                 
      <div className="wrapper">     
        <button className="button-1" onClick={handleKayit}>
          Öğrenci Kayıt
        </button>
        <button className="button-1" onClick={handleStudent}>
          Öğrenci Girişi
        </button>
        <button className="button-1" onClick={handleAdmin}>
          Akademisyen Girişi
        </button>
      </div>
    </div>
  );
};

export default Home;
