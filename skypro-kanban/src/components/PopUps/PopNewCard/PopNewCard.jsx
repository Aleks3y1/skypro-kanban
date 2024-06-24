import * as S from "./PopNewCard.styled.js";
import { useRef, useState } from "react";
import { routesApp } from "../../../lib/RoutesApp.js";
import { useTask } from "../../../hooks/useTask.js";
import Calendar from "../../Calendar/Calendar.jsx";

const PopNewCard = () => {
    const newCardTitle = useRef(null);
    const newCardDescription = useRef(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [newCardTopic, setNewCardTopic] = useState("Web Design");
    //const { userData } = useUser();
    const { onAddTask } = useTask();

    const handleAddCard = async (event) => {
        await onAddTask({
            event,
            newCardTitle,
            newCardTopic,
            newCardDescription,
            selectedDate,
        });
    }

    const handleCategory = (color) => {
        setNewCardTopic(color);
    }

    return (
        <S.PopNewCardHUD>
            <S.PopNewCardContainer>
                <S.PopNewCardBlock>
                    <S.PopNewCardContent>
                        <S.PopNewCardH3>Создание задачи</S.PopNewCardH3>
                        <S.PopNewCardLink to={routesApp.MAIN}>&#10006;</S.PopNewCardLink>
                        <S.PopNewCardWrap>
                            <S.PopNewCardForm>
                                <S.FormNewBlock>
                                    <S.FormLabel htmlFor="formTitle">Название задачи</S.FormLabel>
                                    <S.FormInput type="text" name="name" id="formTitle"
                                                 placeholder="Введите название задачи..." autoFocus ref={newCardTitle} />
                                </S.FormNewBlock>
                                <S.FormNewBlock>
                                    <S.FormLabel htmlFor="textArea">Описание задачи</S.FormLabel>
                                    <S.FormTextarea name="text" id="textArea"
                                                    placeholder="Введите описание задачи..."
                                                    ref={newCardDescription}></S.FormTextarea>
                                </S.FormNewBlock>
                            </S.PopNewCardForm>
                            <S.FormNewBlockCalc>
                                <S.FormLabel>Даты</S.FormLabel>
                                <Calendar
                                    mode="single"
                                    selected={selectedDate}
                                    onSelect={setSelectedDate}
                                />
                            </S.FormNewBlockCalc>
                        </S.PopNewCardWrap>
                        <S.PopCategoriesBlock>
                            <S.PopCategoriesTitle>Категория</S.PopCategoriesTitle>
                            <S.PopCategoriesThemes>
                                <S.PopCategoriesOrange onClick={() => handleCategory("Web Design")}
                                                       style={{ opacity: newCardTopic === "Web Design" ? 1 : 0.4 }}>
                                    <S.PopCategoriesOrangeText>Web Design</S.PopCategoriesOrangeText>
                                </S.PopCategoriesOrange>
                                <S.PopCategoriesGreen onClick={() => handleCategory("Research")}
                                                      style={{ opacity: newCardTopic === "Research" ? 1 : 0.4 }}>
                                    <S.PopCategoriesGreenText>Research</S.PopCategoriesGreenText>
                                </S.PopCategoriesGreen>
                                <S.PopCategoriesPurple onClick={() => handleCategory("Copywriting")}
                                                       style={{ opacity: newCardTopic === "Copywriting" ? 1 : 0.4 }}>
                                    <S.PopCategoriesPurpleText>Copywriting</S.PopCategoriesPurpleText>
                                </S.PopCategoriesPurple>
                            </S.PopCategoriesThemes>
                        </S.PopCategoriesBlock>
                        <S.FormNewButton onClick={handleAddCard}>Создать задачу</S.FormNewButton>
                    </S.PopNewCardContent>
                </S.PopNewCardBlock>
            </S.PopNewCardContainer>
        </S.PopNewCardHUD>
    );
}

export default PopNewCard;