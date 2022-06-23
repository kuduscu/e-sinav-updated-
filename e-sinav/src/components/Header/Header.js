import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {


/* React-router-dom'un içinde olan Link componentini başlığa basıldığında / domainenine yönlendirmesi için kullandım */
/* hr'yi başlıkla sayfamın daha okunabilir olması için kullandım */  

  return (
    <div
      className="header"
      style={{
        backgroundImage: "url(./white.png)",        /* TRAKYA ÜNİVERSİTESİ LOGOSUNU TEKRARLANMIYACAK ŞEKİLDE BAŞA YAPIŞTIRDIM */ 
        backgroundRepeat: "no-repeat",              //TEKRARLANMAMASI İÇİN
      }}
    >                                                
      <Link to="/" className="title">               
        TÜ Online Sınav Platformu
      </Link>
      <hr className="divider"/>
    </div>
  );
};

export default Header;
