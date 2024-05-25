import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import PopBrowse from "./components/PopUps/PopBrowse/PopBrowse";
import PopExit from "./components/PopUps/PopExit/PopExit";
import PopNewCard from "./components/PopUps/PopNewCard/PopNewCard";
import React, {useState} from "react";
import {cardList} from "./data.js";


function App() {
    const [cards, setCards] = useState(cardList);

    return (
        <div className="wrapper">
                <PopExit/>
                <PopNewCard/>
                <PopBrowse/>

                <Header setCards={setCards} cards={cards} />
                <Main cardList={cards}/>
        </div>
    );
}

export default App;
