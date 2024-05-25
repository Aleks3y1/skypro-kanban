import Column from "../Column/Column";
import {useEffect, useState} from "react";
import * as S from "./Main.styled.js";

export const statusList = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
]

const Main = ({cardList}) => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {setTimeout(() => {
        setIsLoading(false);
    }, 2000);},[]);

    return (
        <S.Main>
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
        </S.Main>
    );
};

export default Main;
