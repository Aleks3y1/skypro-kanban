import Column from "../Column/Column";
import {cardList} from "../../data.js";
import {useEffect, useState} from "react";

export const statusList = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
]

const Main = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {setTimeout(() => {
        setIsLoading(false);
    }, 2000);},[]);

    return (
        <main className="main">
            <div className="container">
                <div className="main__block">
                    <div className="main__content">
                        {isLoading && ('Данные загружаются...')}
                        {!isLoading && statusList.map((status) => (
                            <Column
                                key={status}
                                title={status}
                                cardList={cardList.filter((card) => card.status === status)}/>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;
