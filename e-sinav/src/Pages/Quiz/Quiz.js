import React, { useEffect, useState } from "react";
import "./Quiz.css";
import Question from "../../components/Question/Question";

const Quiz = ({ name, questions, score, setScore, setQuestions }) => {
  const [options, setOptions] = useState();
  const [currentQues, setCurrentQues] = useState(0);

  //useEffect in içine gelecek cevapların karılması için setOptions kurucaz
  //currentque her değiştiğinde çağrılması için useeffect kullandım
  useEffect(() => {
    console.log(questions);
    setOptions(       //şıklar için setOptions
      questions &&      //questions'tan veri geliyorsa
        handleShuffle([   //handleshuffle fonksiyonu çağrılıp doğru ve yanlış cevaplara ulaşır
          questions[currentQues]?.correct_answer,     //şu an gösterilen sorunun doğru cevabını
          ...questions[currentQues]?.incorrect_answers,     //ve gösterilen sorunun bütün yanlış cevaplarını alıp handleshuffle fonksiyonuna
        ])
    );
    /*setOptions(questions)   questions'ın içinde birşey olup olmadığını kontrol edicek &&(eğer içinde bişey varsa)
                                      handleShuffle() fonksiyonunu çağıracak
                                      handleShuffle([questions[currentQuestions]?])    questions arrayine gidip şu anki questionı alıcak ve içinde birşey var mı diye bakıcak
                                      birşey varsa da cevabı alıcak correct veya incorrect */
  }, [currentQues, questions]);

  const handleShuffle = (options) => {        //options ı alıp karıyor
    /*bu bölümdeki options'lar diğer options'larla aynı değil*/
    return options.sort(() => Math.random() - 0.5);
  };

  return (
    <div className="quiz">
      <span className="subtitle">Hoşgeldin , {name}</span>

      {questions ? (                //questions'tan veri geliyorsa aşağısı çalışır
        <>
          <div className="quizInfo">
            <span>{questions[currentQues].category}</span>        
            <span>Skor : {score}</span>
          </div>
          <Question         //question componentinde kullanacağımız değişkenleri orada kullanabilmek için buraya girdim
            currentQues={currentQues}
            setCurrentQues={setCurrentQues}
            questions={questions}             
            options={options}
            correct={questions[currentQues]?.correct_answer}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
          />
        </>
      ) : (               //questions değer döndürmezse burası çalışır 
        console.log(options)
      )}
    </div>
  );
};

export default Quiz;
