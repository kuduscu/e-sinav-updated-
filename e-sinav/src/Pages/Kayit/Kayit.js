import React, { useState } from "react";
import ogrenciListesi from "../../Data/ogrenciKayit.json";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Popup from "../../components/Popup/Popup";
import "./Kayit.css";
const Kayit = () => {
  const [yeniMail, setYeniMail] = useState("");
  const [yeniSifre, setYeniSifre] = useState("");

  const [buttonPopUp, setButtonPopUp] = useState(false);

  const ogrenciler = ogrenciListesi.ogrenciler.filter((g) =>
    g.mail.toLowerCase().includes(yeniMail.toLowerCase())
  );

  const [error2, setError2] = useState(false);
  const [error3, setError3] = useState(false);
  const [error4, setError4] = useState(false);

  const handleKayit = (e) => {
    setYeniMail("");
    setYeniSifre("");
    console.log(ogrenciListesi.ogrenciler);
    e.preventDefault();
    if (!yeniMail.includes("@trakya.edu.tr")) {
      setError3(true);
    } else {
      setError3(false);
      if (ogrenciler.length > 0) {
        setError4(true);
      } else {
        setError4(false);

        if (!(!yeniMail || !yeniSifre)) {
          ogrenciListesi.ogrenciler = [
            ...ogrenciListesi.ogrenciler,
            {
              mail: yeniMail,
              sifre: yeniSifre,
            },
          ];
          setButtonPopUp(true);
        } else {
          setError2("true");
          setButtonPopUp(false);
        }
      }
    }
  };

  return (
    <div className="content2">
      <div className="settings2">
      <span style={{ fontSize: 30 }}>Öğrenci Kayıt</span>
      <div className="settings2_select">
        <p>
          Öğrenci şifrenizi değiştirmediyseniz ilk tanımlı şifreniz TC Kimlik
          numaranızdır.
        </p>
        {error2 && (
          <ErrorMessage>Lütfen bütün boşlukları doldurun. </ErrorMessage>
        )}
        {error3 && (
          <ErrorMessage>
            Sisteme kayıt olmak için @trakya.edu.tr uzantılı öğrenci mailinizi
            kullanın.
          </ErrorMessage>
        )}
        {error4 && (
          <ErrorMessage>
            Sistemde bu maildeki kullanıcının kaydı zaten bulunmakta.
          </ErrorMessage>
        )}
        <input
          type="text"
          placeholder=" Öğrenci Mailinizi Giriniz :"
          className="field1"
          value={yeniMail}
          onChange={(e) => setYeniMail(e.target.value)}
        />
        <input
          type="password"
          placeholder="  Şifrenizi Giriniz : "
          className="field1"
          value={yeniSifre}
          onChange={(e) => setYeniSifre(e.target.value)}
        />
        <button type={"submit"} className="button-23" onClick={handleKayit}>
          Kayıt Ol
        </button>
        <Popup trigger={buttonPopUp} setTrigger={setButtonPopUp}>
          <h3>Öğrenci Kaydı Oluşturuldu</h3>
        </Popup>
        </div>
      </div>
      <img src="/login.svg" className="banner1" alt="quiz img" />
    </div>
  );
};

export default Kayit;
