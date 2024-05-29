import Column from "../Column/Column";
import {useEffect, useState} from "react";
import * as S from "./Main.styled.js";
import {MainBlock, MainContainer, MainContent} from "./Main.styled.js";

export const statusList = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
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
                                key={status}
                                title={status}
                                cardList={cardList.filter((card) => card.status === status)}/>
                        ))}
                    </MainContent>
                </MainBlock>
            </MainContainer>
        </S.Main>
    );
};

export default Main;
