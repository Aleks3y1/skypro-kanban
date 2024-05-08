import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import PopBrowse from "./components/PopUps/PopBrowse/PopBrowse";
import PopExit from "./components/PopUps/PopExit/PopExit";
import PopNewCard from "./components/PopUps/PopNewCard/PopNewCard";

function App() {
  return (
    <div className="wrapper">
      <PopExit />
      <PopNewCard />
      <PopBrowse />

      <Header />
      <Main />
    </div>
  );
}

export default App;
