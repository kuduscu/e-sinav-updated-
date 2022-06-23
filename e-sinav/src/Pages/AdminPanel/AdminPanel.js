import React from "react";
//import NewQuestion from "../../components/NewQuestion/NewQuestion";
//import Ogrenciler from "../../components/Ogrenciler/Ogrenciler";
import { useNavigate } from "react-router-dom";
import "./AdminPanel.css";

const AdminPanel = () => {
  const navigate = useNavigate();

  const handlePaneleDonus = (event) => {
    event.preventDefault();
    navigate("/");
  };
  const handleNotlar = () => {
    navigate("/Notes"); //butona basıldığında notlara gider
  };
  const handleAssignStudent = () => {
    navigate("/NewStudent");
  };
  return (
    <div className="content6">
      <div className="settings6">
        <div className="settings6_select">
          <p>
            Sistemde kaydı bulunan öğrencileri aldıkları dersin sınavına atamak için :
          </p>
          <button className="button-6" onClick={handleAssignStudent}>
            Sisteme/Sınava Öğrenci Kaydet
          </button>
          <p>
            Öğrencilerin hangi dersin hangi sınavından ne kadar başarılı olduklarını görmek için :
          </p>
          <button className="button-6" onClick={handleNotlar}>
            Öğrenci Notlarını Görüntüle
          </button>
        </div>
        <button className="button-23" onClick={handlePaneleDonus}>
          Ana Sayfaya Dön
        </button>
      </div>
      
    </div>
  );
};

export default AdminPanel;
