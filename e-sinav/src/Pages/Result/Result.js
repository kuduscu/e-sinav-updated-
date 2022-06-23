//import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./Result.css";

const Result = ({ name, score, category, difficulty ,setScore}) => {
  //skor sayfasında gösterilmesi için propslar
  const navigate = useNavigate();
  const handleSomething = (event) => {
    
    event.preventDefault();
    navigate("/");
  };

  return (
    <div className="result">
      <span className="title">
        Tebrikler {name},{category} dersinin {difficulty} sınavından aldığın
        puan : {score * 10}
      </span>
      <button className="button-28" onClick={handleSomething}>
        Ana Sayfaya Dön
      </button>
    </div>
  );
};

export default Result;
