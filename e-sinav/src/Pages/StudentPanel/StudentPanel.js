import React ,{useState}from "react";
import sinavaAtanmisOgrenciler from "../../Data/sinavaGirenler.json";
import { useNavigate } from "react-router-dom";
import "./StudentPanel.css";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
const StudentPanel = ({
  name,
  setName,
  fetchQuestions,
  setCategory,
  category,
  difficulty,
  setDifficulty,
}) => {
  const data2 = sinavaAtanmisOgrenciler.atamalar.filter(
    (x) =>
      x.mail.toLowerCase().includes(name.toLowerCase()) &&
      x.ders.toLowerCase().includes(category.toLowerCase()) &&
      x.sinav.toLowerCase().includes(difficulty.toLowerCase())
  );

  const navigate = useNavigate();

  const [error5, setError5] = useState(false);
  const [error6, setError6] = useState(false);

  const makeOptions2 = (key) =>
    sinavaAtanmisOgrenciler.atamalar
      .reduce((options, el) => Array.from(new Set(options.concat(el[key]))), [])
      .reduce(
        (options, option) =>
          options.concat({
            value: option,
            label: option,
          }),
        [{ value: "", label: `Gireceğiniz ${key}`, disabled: true }]
      )
      .map(({ disabled, label, value }) => (
        <option key={value} value={value} disabled={disabled}>
          {label}
        </option>
      ));

  const sinavaGiris = (e) => {
    e.preventDefault();

    if (!name || !category || !difficulty) {
      setError5(true);
      return;
    } else {
      setError5(false);
      if (!(data2.length > 0)) {
        //datanın uzunluğu 0'a eşitse error döndürür yani o isimde ve şifrede öğrenci yoksa
        setError6(true);
      } else {
        if (category || difficulty) {
          //seçilen soru ve zorluk'ta soru varsa
          setError6(false);
          fetchQuestions(category, difficulty); //fetchquestions fonksiyonu çağrılıyor girilen category ve difficulty fonksiyona aktarılıp

          navigate("/quiz"); //giriş yapılmış oluyor ve quiz sayfasına aktarılıyor
        }
      }
    }
  };

  return (
    <div className="content4">
      <div className="settings4">
        <h2>Hoşgeldiniz {name}</h2>
        <h3>Sınavlar 10 sorudan oluşmaktadır ve çoktan seçmelidir. Başarılar !</h3>
        <p>Tanımlı olduğunuz dersin sınavını seçerek başlayabilirsiniz.</p>
        <div className="settings4_select">
        {error5 && (
          <ErrorMessage> Dersi/Sınavı seçmeden giriş yapamazsınız. </ErrorMessage>
        )}
        {error6 && (
          <ErrorMessage>
            Mailinize tanımlı seçtiğiniz derste bir sınav bulunmamaktadır.
          </ErrorMessage>
        )}
        <label>
          Sınavını çözeceğiniz ders :
          <select
            className="field5"
            value={category} /*value bi aşağıda olabilir */
            onChange={(e) => setCategory(e.target.value)}
          >
            {makeOptions2("ders")}
          </select>
        </label>
        <label>
          Sınav Türünü Seçiniz :
          <select
            className="field5"
            onChange={(e) => setDifficulty(e.target.value)}
            value={difficulty}
          >
            {makeOptions2("sinav")}
          </select>
        </label>
        <button className="button-2" onClick={sinavaGiris}>
          Sınava Başla
        </button>
        </div>
      </div>
    </div>
  );
};

export default StudentPanel;
