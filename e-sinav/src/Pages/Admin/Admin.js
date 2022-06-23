import "./Admin.css";
import React, { useState } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { useNavigate } from "react-router-dom";
import teacherList from "../../Data/teachers.json";

const Admin = () => {         //ogrenci login sisteminden yola cıkarak akademisyen login sistemi
  const [teacherName, setTeacherName] = useState("");
  const [teacherPassword, setTeacherPassword] = useState("");
  const [teacherNo, setTeacherNo] = useState("");

  const data = teacherList.akademisyenler.filter(
    (giris1) =>
      giris1.akademisyenAdi.toLowerCase().includes(teacherName.toLowerCase()) &&
      giris1.akademisyenSifre
        .toLowerCase()
        .includes(teacherPassword.toLowerCase()) &&
      giris1.akademisyenNo.toLowerCase().includes(teacherNo.toLowerCase())
  );

  const [error, setError] = useState(false);
  const [error1, setError1] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!teacherName || !teacherPassword || !teacherNo) {
      setError(true);
      return;
    } else {
      setError(false);
      console.log(data);
      if (!(data.length > 0)) {
        //datanın uzunluğu 0'a eşitse error döndürür yani o isimde ve şifrede öğrenci yoksa
        setError1(true);
      } else {
        setError1(false);
        navigate("/AdminPanel");
      }
    }
  };

  return (
    <div className="content2">
      <div className="settings2">
        <span style={{ fontSize: 30 }}>Akademisyen Girişi</span>
        <div className="settings_select2">
          {error && ( 
            <ErrorMessage>Lütfen bütün boşlukları doldurun.</ErrorMessage>
          )}
          {error1 && ( 
            <ErrorMessage>
              Sistemde kayıtlı bu bilgilerde bir akademisyen bulunamadı.
            </ErrorMessage>
          )}
          <input
            className="field2"
            type="text"
            placeholder="  İsminizi Giriniz :"
            value={teacherName}
            onChange={(e) => setTeacherName(e.target.value)}
          />
          <input
            className="field2"
            type="password"
            placeholder="  Şifrenizi Giriniz :"
            value={teacherPassword}
            onChange={(e) => setTeacherPassword(e.target.value)}
          />
          <input
            className="field2"
            type="text"
            placeholder="  Akademisyen Numaranızı Giriniz :"
            value={teacherNo}
            onChange={(e) => setTeacherNo(e.target.value)}
          />
          <button className="button-3" onClick={handleSubmit}>
            Giriş
          </button>
        </div>
      </div>
      <img src="/11.svg" className="banner2" alt="quiz img" />
    </div>
  );
};

export default Admin;
