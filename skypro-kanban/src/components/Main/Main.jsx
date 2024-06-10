import Column from "../Column/Column";
import {useEffect, useState} from "react";
import * as S from "./Main.styled.js";
import {MainBlock, MainContainer, MainContent} from "./Main.styled.js";


export const statusList = [
    { id: 1, title: "Без статуса" },
    { id: 2, title: "Нужно сделать" },
    { id: 3, title: "В работе" },
    { id: 4, title: "Тестирование" },
    { id: 5, title: "Готово" },
]

const Main = ({cardList}) => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    return (
        <S.Main>
            <MainContainer>
                <MainBlock>
                    <MainContent>
                        {isLoading && ('Данные загружаются...')}
                        {!isLoading && statusList.map((status) => (
                            <Column
                                key={status.id}
                                title={status.title}
                                cardList={cardList.tasks.filter((card) => card.status === status.title)}/>
                        ))}
                    </MainContent>
                </MainBlock>
            </MainContainer>
        </S.Main>
    );
};

export default Main;
