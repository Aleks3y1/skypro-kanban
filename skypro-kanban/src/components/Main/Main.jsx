import Column from "../Column/Column";
import {useEffect, useState} from "react";
import * as S from "./Main.styled.js";
import Loader from "../Loader/Loader.jsx";
import {useTask} from "../../hooks/useTask.js";
import {cardList} from "../../data.js";

export const statusList = [
    {id: 1, title: "Без статуса"},
    {id: 2, title: "Нужно сделать"},
    {id: 3, title: "В работе"},
    {id: 4, title: "Тестирование"},
    {id: 5, title: "Готово"}
]

const Main = () => {
    const {tasks} = useTask();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 5000);
    }, []);

    return (
        <S.Main>
            <S.MainContainer>
                <S.MainBlock>
                    <S.MainContent>
                        {isLoading && statusList.map((status) => (
                            <Loader
                                key={status.id}
                                title={status.title}
                                cardList={cardList?.tasks ? cardList.tasks.filter((card) =>
                                        card.status === status.title) :
                                    cardList.filter((card) => card.status === status.title)}/>
                        ))}
                        {!isLoading && statusList.map((status) => (
                            <Column
                                key={status.id}
                                title={status.title}
                                cardList={tasks?.tasks ? tasks.tasks.filter((card) =>
                                        card.status === status.title) :
                                    tasks.filter((card) => card.status === status.title)}/>
                        ))}
                    </S.MainContent>
                </S.MainBlock>
            </S.MainContainer>
        </S.Main>
    );
};

export default Main;