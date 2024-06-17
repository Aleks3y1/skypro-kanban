import Calendar from "../../Calendar/Calendar";
import {
    FormInput,
    FormLabel,
    FormNewBlock, FormNewBlockCalc, FormNewButton,
    FormTextarea,
    PopCategoriesBlock,
    PopCategoriesGreen, PopCategoriesGreenText,
    PopCategoriesOrange, PopCategoriesOrangeText, PopCategoriesPurple, PopCategoriesPurpleText,
    PopCategoriesThemes,
    PopCategoriesTitle,
    PopNewCardBlock,
    PopNewCardContainer,
    PopNewCardContent,
    PopNewCardForm,
    PopNewCardH3,
    PopNewCardHUD,
    PopNewCardLink,
    PopNewCardWrap
} from "./PopNewCard.styled.jsx";
import {postTodos} from "../../../api.js";
import {routesApp} from "../../../lib/RoutesApp.js";
import {useContext, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {UserContext} from "../../../contexts/UserContext.jsx";
import {cardList} from "../../../data.js";
import {DayPicker} from "react-day-picker";
import MyDatePicker from "../../DatePicker/MyDatePicker.jsx";

const PopNewCard = () => {
    const newCardTitle = useRef(null);
    const newCardDescription = useRef(null);
    const [selectedDate, setSelectedDate] = useState(null);

    const [newCardTopic, setNewCardTopic] = useState("Web Design");
    const navigate = useNavigate();

    const {userData} = useContext(UserContext);
    const [cards, setCards] = useState(cardList);

    const onAddCard = async (event) => {
        event.preventDefault();
        const newCard = {
            title: newCardTitle.current.value,
            topic: newCardTopic,
            status: "Без статуса",
            description: newCardDescription.current.value,
            date: selectedDate ? selectedDate.toISOString() : new Date().toISOString(),
        };
        try {
            const newTodos = await postTodos(userData.token, newCard);
            setCards(newTodos.tasks);
            navigate(routesApp.MAIN)
        } catch (error) {
            console.error(error);
        }
    }

    const handeCategory = (color) => {
        setNewCardTopic(color);
    }

    return (
        <PopNewCardHUD>
            <PopNewCardContainer>
                <PopNewCardBlock>
                    <PopNewCardContent>
                        <PopNewCardH3>Создание задачи</PopNewCardH3>
                        <PopNewCardLink to={routesApp.MAIN}>&#10006;</PopNewCardLink>
                        <PopNewCardWrap>
                            <PopNewCardForm>
                                <FormNewBlock>
                                    <FormLabel htmlFor="formTitle">Название задачи</FormLabel>
                                    <FormInput type="text" name="name" id="formTitle"
                                               placeholder="Введите название задачи..." autoFocus ref={newCardTitle}/>
                                </FormNewBlock>
                                <FormNewBlock>
                                    <FormLabel htmlFor="textArea">Описание задачи</FormLabel>
                                    <FormTextarea name="text" id="textArea"
                                                  placeholder="Введите описание задачи..."
                                                  ref={newCardDescription}></FormTextarea>
                                </FormNewBlock>
                            </PopNewCardForm>
                            <FormNewBlockCalc>
                                <FormLabel>Даты</FormLabel>
                                <MyDatePicker
                                    mode="single"
                                    selected={selectedDate}
                                    onSelect={setSelectedDate}
                                />
                            </FormNewBlockCalc>
                            {/*<Calendar/>*/}
                        </PopNewCardWrap>
                        <PopCategoriesBlock>
                            <PopCategoriesTitle>Категория</PopCategoriesTitle>
                            <PopCategoriesThemes>
                                <PopCategoriesOrange onClick={() => handeCategory("Web Design")}
                                                     style={{opacity: newCardTopic === "Web Design" ? 1 : 0.4}}>
                                    <PopCategoriesOrangeText>Web Design</PopCategoriesOrangeText>
                                </PopCategoriesOrange>
                                <PopCategoriesGreen onClick={() => handeCategory("Research")}
                                                    style={{opacity: newCardTopic === "Research" ? 1 : 0.4}}>
                                    <PopCategoriesGreenText>Research</PopCategoriesGreenText>
                                </PopCategoriesGreen>
                                <PopCategoriesPurple onClick={() => handeCategory("Copywriting")}
                                                     style={{opacity: newCardTopic === "Copywriting" ? 1 : 0.4}}>
                                    <PopCategoriesPurpleText>Copywriting</PopCategoriesPurpleText>
                                </PopCategoriesPurple>
                            </PopCategoriesThemes>
                        </PopCategoriesBlock>
                        <FormNewButton onClick={onAddCard}>Создать задачу</FormNewButton>
                    </PopNewCardContent>
                </PopNewCardBlock>
            </PopNewCardContainer>
        </PopNewCardHUD>
    );
}

export default PopNewCard;