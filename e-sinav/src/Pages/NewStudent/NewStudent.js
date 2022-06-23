import React, { useState } from "react";
import "./NewStudent.css";
import { useNavigate } from "react-router-dom";
import ogrenciListesi from "../../Data/ogrenciKayit.json";
import sinavaAtanmisOgrenciler from "../../Data/sinavaGirenler.json";
import Popup from "../../components/Popup/Popup";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
const NewStudent = () => {
  const [ogrenciMail, setOgrenciMail] = useState("");
  //const [ögrenciSifre, setOgrenciSifre] = useState("");
  const [ogrencininSinavi, setOgrenciSinavi] = useState("");
  const [hangiSinav, setHangiSinav] = useState("");

  const [error22, setError22] = useState(false);
  const [error33, setError33] = useState(false);

  const [buttonPopUp, setButtonPopUp] = useState(false);

  const navigate = useNavigate();
  const handlePaneleDonus = (event) => {
    event.preventDefault();
    navigate("/AdminPanel");
  };

  //girilen öğrenci maili&sınavı ve dersinde bir data json da var mı diye kontrol

  const ogrenciKontrol = sinavaAtanmisOgrenciler.atamalar.filter(
    (ogrenci) =>
      ogrenci.mail.toLowerCase().includes(ogrenciMail.toLowerCase()) &&
      ogrenci.ders.toLowerCase().includes(ogrencininSinavi.toLowerCase()) &&
      ogrenci.sinav.toLowerCase().includes(hangiSinav.toLowerCase())
  );

  //

  const makeOptions1 = (key) =>
    ogrenciListesi.ogrenciler
      .reduce((options, el) => Array.from(new Set(options.concat(el[key]))), [])
      .reduce(
        (options, option) =>
          options.concat({
            value: option,
            label: option,
          }),
        [{ value: "", label: `Öğrencinin ${key}'i`, disabled: true }]
      )
      .map(({ disabled, label, value }) => (
        <option key={value} value={value} disabled={disabled}>
          {label}
        </option>
      ));

  //

  const sinaviAta = (e) => {
    e.preventDefault();
    setOgrenciMail("");
    setHangiSinav("");
    setOgrenciSinavi("");

    if (!hangiSinav || !ogrenciMail || !ogrencininSinavi) {
      setError22(true);
    } else {
      setError22(false);
      if (ogrenciKontrol.length > 0) {
        setError33(true);
        setButtonPopUp(false);
      } else {
        setError33(false);
        sinavaAtanmisOgrenciler.atamalar = [
          ...sinavaAtanmisOgrenciler.atamalar,
          {
            mail: ogrenciMail,
            ders: ogrencininSinavi,
            sinav: hangiSinav,
          },
        ];
        console.log(sinavaAtanmisOgrenciler.atamalar);
        setButtonPopUp(true);
      }
    }
  };

  return (
    <div className="content3">
      <div className="settings3">
        <span style={{ fontSize: 30 }}>Sınava Öğrenci Atama</span>
        <div className="settings3_select">
          <p>
            Sisteme kayıt yapmış öğrencilerin mailleri altta listelenmektedir.
          </p>
          <p>
            Sınava atanacak öğrenciyi maili ve atanacağı sınav ile birlikte
            seçtikten sonra atamayı gerçekleştirebilirsiniz.
          </p>
          {error22 && (
            <ErrorMessage>Lütfen Bütün Boşlukları Doldurun </ErrorMessage>
          )}
          {error33 && (
            <ErrorMessage>
              Sistemde bu öğrencinin atadığınız derse kaydı zaten bulunmaktadır.
            </ErrorMessage>
          )}
          <select
            className="field4"
            type="text"
            placeholder="Öğrencinin Mailini Giriniz"
            value={ogrenciMail}
            onChange={(e) => setOgrenciMail(e.target.value)}
          >
            {makeOptions1("mail")}
          </select>
          <select
            className="field4"
            type="text"
            placeholder="Öğrenciye Atanacak Sınavın Dersi :"
            value={ogrencininSinavi}
            onChange={(e) => setOgrenciSinavi(e.target.value)}
          >
            <option value="">Öğrencinin atanacağı sınav :</option>
            <option value="React">React</option>
            <option value="CSS">CSS</option>
            <option value="HTML">HTML</option>
            <option value="JavaScript">JavaScript</option>
          </select>
          <select
            className="field4"
            type="text"
            placeholder="Öğrenci Dersin Hangi Sınavına Girecek ?"
            value={hangiSinav}
            onChange={(e) => setHangiSinav(e.target.value)}
          >
            <option value="">Öğrenci dersin hangi sınavına girecek :</option>
            <option value="Vize">Vize</option>
            <option value="Final">Final</option>
          </select>
          <button className="button-3" onClick={sinaviAta}>
            {" "}
            Sınava Öğrenciyi Ata{" "}
          </button>
          <Popup trigger={buttonPopUp} setTrigger={setButtonPopUp}>
            <h3>Öğrenci sınava başarıyla atandı.</h3>
          </Popup>
        </div>
        <button className="button-23" onClick={handlePaneleDonus}>
          Panele Geri Dön
        </button>
      </div>
    </div>
  );
};

export default NewStudent;
