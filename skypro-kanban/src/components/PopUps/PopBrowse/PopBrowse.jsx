import {useNavigate, useParams} from "react-router-dom";
import NotFound from "../../../pages/NotFound/NotFound.jsx";
import {useEffect, useState} from "react";
import {CardStyle} from "../../../lib/CardStyle.js";
import {useUser} from "../../../hooks/useUser.js";
import * as S from "../PopNewCard/PopNewCard.styled.js";
import {useTask} from "../../../hooks/useTask.js";
import {getTodos} from "../../../api.js";
import {routesApp} from "../../../lib/RoutesApp.js";
import {FormTextareaPop} from "./TextAreaStyle.js";
import Calendar from "../../Calendar/Calendar.jsx";
import * as A from "./PopBrowse.styled.js";

const PopBrowse = () => {
    const {id} = useParams();
    const {userData} = useUser();
    const {editTask, removeTask} = useTask();
    const [task, setTask] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [modifyCard, setModifyCard] = useState("none");
    const [hideBlock, setHideBlock] = useState("flex");
    const [modifyCalendar, setModifyCalendar] = useState(true);
    const [currentStatus, setCurrentStatus] = useState("Без статуса");
    const [selectedDate, setSelectedDate] = useState(null);
    const [description, setDescription] = useState("");
    const navigate = useNavigate();
    const [color, setColor] = useState(null);

    const colorsArray = {
        "Web Design": "_orange",
        "Research": "_green",
        "Copywriting": "_purple",
    };


    useEffect(() => {
        const fetchCard = async () => {
            try {
                if (userData?.token) {
                    const todos = await getTodos(userData.token);
                    const foundCard = todos.tasks.find((task) => task._id === id);
                    if (foundCard) {
                        setTask(foundCard);
                        setSelectedDate(new Date(foundCard.date));
                        setCurrentStatus(foundCard.status);
                        setDescription(foundCard.description);
                        setColor(colorsArray[foundCard.topic]);
                    }
                }
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCard();
    }, [id, userData?.token]);

    const handleModifyCard = () => {
        setModifyCard("flex");
        setHideBlock("none");
        setModifyCalendar(false);
    };

    const handleCurrentStatusChange = (status) => {
        setCurrentStatus(status);
    };

    const handleSave = async () => {
        const updatedTask = {
            ...task,
            status: currentStatus,
            date: selectedDate,
            description: description,
        };
        await editTask(updatedTask);
        setModifyCard("none");
        setHideBlock("flex");
        setModifyCalendar(true);
    };

    const handleDelete = async () => {
        await removeTask(task._id);
        navigate(routesApp.MAIN);
    };

    if (isLoading) {
        return null;
    }

    if (!task) {
        return <NotFound/>;
    }

    return (
        <S.PopNewCardHUD>
            <S.PopNewCardContainer>
                <S.PopNewCardBlock>
                    <A.PopBrowseContent>
                        <A.PopBrowseTopBlock>
                            <S.PopNewCardH3>{task.title}</S.PopNewCardH3>
                            <A.CategoriesTheme $color={color}>
                                <A.CategoriesThemeTtl>{task.topic}</A.CategoriesThemeTtl>
                            </A.CategoriesTheme>
                        </A.PopBrowseTopBlock>
                        <A.PopBrowseStatus>
                            <A.SubTitle>Статус</A.SubTitle>
                            <A.StatusThemes>
                                {modifyCard === "flex" ? (
                                    <>
                                        <A.StatusTheme
                                            onClick={() => handleCurrentStatusChange("Без статуса")}
                                            style={CardStyle("flex", currentStatus, "Без статуса")}>
                                            <A.StatusText>Без статуса</A.StatusText>
                                        </A.StatusTheme>
                                        <A.StatusTheme
                                            onClick={() => handleCurrentStatusChange("Нужно сделать")}
                                            style={CardStyle("flex", currentStatus, "Нужно сделать")}>
                                            <A.StatusText>Нужно сделать</A.StatusText>
                                        </A.StatusTheme>
                                        <A.StatusTheme
                                            onClick={() => handleCurrentStatusChange("В работе")}
                                            style={CardStyle("flex", currentStatus, "В работе")}>
                                            <A.StatusText>В работе</A.StatusText>
                                        </A.StatusTheme>
                                        <A.StatusTheme
                                            onClick={() => handleCurrentStatusChange("Тестирование")}
                                            style={CardStyle("flex", currentStatus, "Тестирование")}>
                                            <A.StatusText>Тестирование</A.StatusText>
                                        </A.StatusTheme>
                                        <A.StatusTheme
                                            onClick={() => handleCurrentStatusChange("Готово")}
                                            style={CardStyle("flex", currentStatus, "Готово")}>
                                            <A.StatusText>Готово</A.StatusText>
                                        </A.StatusTheme>
                                    </>
                                ) : (
                                    <A.CurrentStatusTheme>
                                        <A.StatusText>{currentStatus}</A.StatusText>
                                    </A.CurrentStatusTheme>
                                )}
                            </A.StatusThemes>
                        </A.PopBrowseStatus>
                        <A.PopBrowseWrapper>
                            <A.PopBrowseForm
                                action="#"
                            >
                                <A.FormBrowseBlock>
                                    <A.SubTitleLabel htmlFor="textArea01">
                                        Описание задачи
                                    </A.SubTitleLabel>
                                    <FormTextareaPop
                                        className="form-browse__area"
                                        name="text"
                                        id="textArea01"
                                        readOnly={modifyCalendar}
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        style={{color: !modifyCalendar ? "" : "#94A6BE"}}/>
                                </A.FormBrowseBlock>
                            </A.PopBrowseForm>
                            <S.FormNewBlockCalc>
                                <S.FormLabel>Даты</S.FormLabel>
                                <Calendar
                                    mode="single"
                                    selected={selectedDate}
                                    onSelect={setSelectedDate}
                                    nonClickable={modifyCalendar}
                                />
                            </S.FormNewBlockCalc>
                        </A.PopBrowseWrapper>
                        <A.PopThemeMobileBlock>
                            <A.SubTitle>Категория</A.SubTitle>
                            <A.CategoriesThemeMobile $color={color}>
                                <A.CategoriesThemeTtl>{task.topic}</A.CategoriesThemeTtl>
                            </A.CategoriesThemeMobile>
                        </A.PopThemeMobileBlock>
                        <A.PopBrowseBtnBlock style={{display: hideBlock}}>
                            <A.BtnGroup>
                                <A.PopBrowseBtnEdit onClick={handleModifyCard}>
                                    <A.PopBrowseLink to="#">Редактировать задачу</A.PopBrowseLink>
                                </A.PopBrowseBtnEdit>
                                <A.PopBrowseBtnEdit onClick={handleDelete}>
                                    <A.PopBrowseLink to={routesApp.MAIN}>Удалить задачу</A.PopBrowseLink>
                                </A.PopBrowseBtnEdit>
                            </A.BtnGroup>
                            <A.PopBrowseButton>
                                <A.PopBrowseLinkExit to={routesApp.MAIN}>Закрыть</A.PopBrowseLinkExit>
                            </A.PopBrowseButton>
                        </A.PopBrowseBtnBlock>
                        <A.PopBrowseEditHide style={{display: modifyCard}}>
                            <A.ButtonGroup>
                                <A.PopBrowseBtnSolid onClick={handleSave}>
                                    <A.PopBrowseLinkExit to="#">Сохранить</A.PopBrowseLinkExit>
                                </A.PopBrowseBtnSolid>
                                <A.PopButtonDelete>
                                    <A.PopBrowseLink to={"/"}>Отменить</A.PopBrowseLink>
                                </A.PopButtonDelete>
                                <A.PopButtonDelete
                                    onClick={handleDelete}
                                >
                                    <A.PopBrowseLink to={routesApp.MAIN}>Удалить задачу</A.PopBrowseLink>
                                </A.PopButtonDelete>
                            </A.ButtonGroup>
                            <A.PopBrowseBtnSolid>
                                <A.PopBrowseLinkExit to={routesApp.MAIN}>Закрыть</A.PopBrowseLinkExit>
                            </A.PopBrowseBtnSolid>
                        </A.PopBrowseEditHide>
                    </A.PopBrowseContent>
                </S.PopNewCardBlock>
            </S.PopNewCardContainer>
        </S.PopNewCardHUD>
    );
}

export default PopBrowse;