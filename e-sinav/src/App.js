import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Result from "./Pages/Result/Result";
import Student from "./Pages/Student/Student";
import { useState } from "react";
import Admin from "./Pages/Admin/Admin";
import Quiz from "./Pages/Quiz/Quiz";
import questionList from "./Data/questions.json";
import Home from "./Pages/Home/Home";
import AdminPanel from "./Pages/AdminPanel/AdminPanel";
import Notes from "./Pages/Notes/Notes";
import NewStudent from "./Pages/NewStudent/NewStudent";
import Kayit from "./Pages/Kayit/Kayit";
import StudentPanel from "./Pages/StudentPanel/StudentPanel";

function App() {
  /* öğrenci sayfasına girişteki kategori, zorluk ve isim girişleri için kullanacağımız değişkenler */
  const [category, setCategory] = useState(""); //
  const [difficulty, setDifficulty] = useState(""); //
  //
  const [score, setScore] = useState(0); //sınavdaki skorumuzu sayması için kullandığım useState başlangıç olarak 0 verdik
  const [name, setName] = useState("");

  const [questions, setQuestions] = useState([]); //questions'a ilk olarak boş bir array atadık

  const fetchQuestions = (category = "", difficulty = "") => {
    //questionList json'unun result'unu filtreliyoruz , filtrelediğimiz değişkenleri question olarak tanımladık
    const data = questionList.results.filter(
      (question) =>
        question.category.toLowerCase().includes(category.toLowerCase()) && //okunan kategorilerde girdiğimiz kategori varsa ve
        question.difficulty.toLowerCase().includes(difficulty.toLowerCase()) //okunan zorlukta girdiğimiz zorluk varsa cetogry ve zorluk değişkenlerini girilen değere atadık
    );
    setQuestions(data); //setquestions arrayine questionList'in filtrelenmiş halini data değişkeniyle atadım
  };
  //

  return (
    /* Farklı route'ları tutacak bir browser router tanımladım route ları da routes'un içine tanımladım */
    /* Sayfaların hepsinde background olmasını istediğim için routes un üstüne bir div tanımlayıp backgroundimage olarak istediğim image'ı verdim  */
    /* Route'un içine bir component girebilmek için element özelliğini kullandım path te domain ismi olarak tanımlandı */

    <BrowserRouter>
      <div className="app" style={{ backgroundImage: "url(./ques1.png)" }}>
        <Header /*başlık*/ />
        <Routes>
          <Route //main sayfa
            path="/"
            element={<Home />}
          ></Route>
          <Route path="/Kayit" element={<Kayit />}></Route>
          <Route
            path="/Student" //öğrencilerin giriş sayfası bu sayfadan
            element={
              <Student /*App.js de tanımlanmış veya sadece ilk değerleri girilmiş değişkenlerin asıl kullanılacakları componentlere props olarak aktarmak için componentin içinde tanım yaptım*/
                name={name}
                setName={setName}
                fetchQuestions={fetchQuestions}
                category={category}
                setCategory={setCategory}
                difficulty={difficulty}
                setDifficulty={setDifficulty}
              />
            }
          ></Route>
          <Route
            path="/StudentPanel"
            element={
              <StudentPanel
                name={name}
                setName={setName}
                fetchQuestions={fetchQuestions}
                category={category}
                setCategory={setCategory}
                difficulty={difficulty}
                setDifficulty={setDifficulty}
              />
            }
          ></Route>
          <Route
            path="/Admin"
            /*Akademisyen giriş sayfası adminpanele bağlanıyor*/ element={
              <Admin />
            }
          ></Route>
          <Route
            path="/Quiz"
            element={
              <Quiz //quiz sayfası buraya home'dan bağlanıcaz bu sayfadan da soruların olduğu questions'a
                name={name}
                questions={questions}
                score={score}
                setScore={setScore}
                setQuestions={setQuestions}
              />
            }
          ></Route>
          <Route
            path="/Result"
            element={
              <Result
                name={name}
                score={score}
                category={category}
                difficulty={difficulty}
                setScore={setScore}
              />
            }
          ></Route>
          <Route path="/AdminPanel" element={<AdminPanel />}></Route>
          <Route
            path="/Notes"
            element={
              <Notes
                name={name}
                score={score}
                category={category}
                difficulty={difficulty}
              />
            }
          ></Route>
          <Route path="/NewStudent" element={<NewStudent />}></Route>
        </Routes>
      </div>
      <Footer /*altlık*/ />
    </BrowserRouter>
  );
}

export default App;
