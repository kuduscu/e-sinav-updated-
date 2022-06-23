import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Question.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const Question = ({
  currentQues,                  //quizden değişkenleri aldık
  setCurrentQues,
  questions,
  options,
  correct,
  setScore,
  score,
  setQuestions,
}) => {
  const [selected, setSelected] = useState();                   //tıkladığımız şıkkı tutan değişken
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSelect = (i) => {
    if (selected === i && selected === correct) return "select";            //seçilen şık doğru cevapsa seçilen şık=doğru select classnameini döndürüyor
    else if (selected === i && selected !== correct) return "wrong";        //seçilen şık doğru cevap değilse selected yanlış wrong döndürüyor
    else if (i === correct) return "select";                                //ve doğru cevabı döndürüyor
  };

  const handleCheck = (i) => {
    setSelected(i);
    if (i === correct) setScore(score + 1);                       //seçtiğimiz şık doğruysa skoru 1 artırıyoruz
    setError(false);
  };

  const handleNext = () => {
    if (currentQues > 8) {            //soru sayımıza göre que ayarını buradan yapıyoruz 10 soruluk 1 testte >8
      navigate("/result");                  //son soruya gelinmişse sonuç sayfasına aktarım
    } else if (selected) {                          //bir şık seçilmişse o yüzden selectedı kullandık
      setCurrentQues(currentQues + 1);                      //que'yu sırayı artırıyoruz
      setSelected();                                            //seçtiğimiz şıkkı geri bırakıyoruz ki formu bidaha açtığımızda seçili olmasın
    } else setError("Lütfen ilk önce bir şık seçiniz.");            //birşey seçmezsek uyarı
  };

  const handleQuit = () => {
    setCurrentQues(0);        //que'yu 0 lama
    setQuestions();           //soruları boşaltma ki farklı sorular seçtiğimizde bir öncekiler gelmesin
    setScore(0);              //scoru 0 lama
    navigate("/");            //ana sayfaya dönüş
  };
//questions.json da soru title'ları "question" olarak tanımlı olduğundan soru title'larını questions[currentQues].question olarak çağırdık  
//<h2> kısmı json dosyasına ulaşıp soruyu döndürüyor
//error true ise error gözüküyor
//optionsla veri gelmişse options mapleniyor yani cevaplar alınıyor , cevapların hepsi için buton oluşturuluyor classname ona göre değişip şık yeşil veya kırmızı yanıyor
  return (
    <div className="question">
      <h1>Soru {currentQues + 1} :</h1>
 
      <div className="singleQuestion">
        <h2>{questions[currentQues].question}</h2>                                   
           <div className="options">
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {options &&
            options.map((i) => (
              <button
                className={`singleOption  ${selected && handleSelect(i)}`}
                key={i}                             //map foksiyonu kulladoğımızdan dolayı bir key atıyoruz
                onClick={() => handleCheck(i)}
                disabled={selected}
              >
                {i}
              </button>
            ))}
        </div>
        <div className="controls">
          <button className="quitButton"
            style={{ width: 185 }}
            onClick={() => handleQuit()}
          >
            Çıkış
          </button>
          <button className="nextButton"
            style={{ width: 185 }}
            onClick={handleNext}   
          >
            {currentQues > 8 ? "Sınavı Bitir" : "Diğer Soru"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Question;