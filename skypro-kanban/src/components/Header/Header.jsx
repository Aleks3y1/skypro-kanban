import {useState} from "react";

const Header = ({ setCards, cards }) => {
    const [state, setState] = useState(false);

    const handleOpenUser = () => {
        setState((prevState) => !prevState);
    }

    const onAddCard = () => {
        const newCard = {
            id: Date.now(),
            theme: "Web Design",
            title: "Задача 1",
            date: "30.10.23",
            status: "Без статуса",
        };
        const newCardsList = [...cards, newCard];
        setCards(newCardsList);
        console.log(cards);
    }

    return (
        <header className="header">
            <div className="container">
                <div className="header__block">
                    <div className="header__logo _show _light">
                        <a href="" target="_self">
                            <img src="../public/logo.png" alt="logo"/>
                        </a>
                    </div>
                    <div className="header__logo _dark">
                        <a href="" target="_self">
                            <img src="../public/logo_dark.png" alt="logo"/>
                        </a>
                    </div>
                    <nav className="header__nav">
                        <button className="header__btn-main-new _hover01" onClick={onAddCard}>
                            Создать новую задачу
                        </button>
                        <div className="header__user _hover02" onClick={handleOpenUser}>
                            Ivan Ivanov
                        </div>
                        {state && (
                            <div className="header__pop-user-set pop-user-set">
                                <p className="pop-user-set__name">Ivan Ivanov</p>
                                <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
                                <div className="pop-user-set__theme">
                                    <p>Темная тема</p>
                                    <input type="checkbox" className="checkbox" name="checkbox"/>
                                </div>
                                <button type="button" className="_hover03">
                                    <a href="#popExit">Выйти</a>
                                </button>
                            </div>
                        )}
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;