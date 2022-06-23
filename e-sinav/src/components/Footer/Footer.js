import React from "react";
import "./Footer.css";
// <img> kullanılırken 'alt' kullanımı zorunludur
// <a>  başka sayfalara yönlendirmede kullanılır

const Footer = () => {
  return (
    <div className="footer">
      Sercan Kuduscu
      <a href="https://github.com/kuduscu">                           
        <img src="/github.png" className="githubImg" alt="github img"></img>
      </a>
    </div>
  );
};

export default Footer;
