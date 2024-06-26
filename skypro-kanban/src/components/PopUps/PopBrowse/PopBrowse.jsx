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
import {
    BtnGroup,
    CategoriesTheme,
    CategoriesThemeTtl,
    CurrentStatusTheme,
    FormBrowseBlock,
    PopBrowseBtnEdit,
    PopBrowseButton,
    PopBrowseForm,
    PopBrowseLink, PopBrowseLinkExit,
    PopBrowseStatus,
    PopBrowseTopBlock,
    PopBrowseWrapper,
    StatusText,
    StatusTheme,
    StatusThemes,
    SubTitle,
    SubTitleLabel
} from "./PopBrowse.styled.js";

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
    console.log(task);

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
                    <div className="pop-browse__content">
                        <PopBrowseTopBlock>
                            <S.PopNewCardH3>{task.title}</S.PopNewCardH3>
                            <CategoriesTheme $color={color}>
                                <CategoriesThemeTtl>{task.topic}</CategoriesThemeTtl>
                            </CategoriesTheme>
                        </PopBrowseTopBlock>
                        <PopBrowseStatus>
                            <SubTitle>Статус</SubTitle>
                            <StatusThemes>
                                {modifyCard === "flex" ? (
                                    <>
                                        <StatusTheme
                                             onClick={() => handleCurrentStatusChange("Без статуса")}
                                             style={CardStyle("flex", currentStatus, "Без статуса")}>
                                            <StatusText>Без статуса</StatusText>
                                        </StatusTheme>
                                        <StatusTheme
                                             onClick={() => handleCurrentStatusChange("Нужно сделать")}
                                             style={CardStyle("flex", currentStatus, "Нужно сделать")}>
                                            <StatusText>Нужно сделать</StatusText>
                                        </StatusTheme>
                                        <StatusTheme
                                             onClick={() => handleCurrentStatusChange("В работе")}
                                             style={CardStyle("flex", currentStatus, "В работе")}>
                                            <StatusText>В работе</StatusText>
                                        </StatusTheme>
                                        <StatusTheme
                                             onClick={() => handleCurrentStatusChange("Тестирование")}
                                             style={CardStyle("flex", currentStatus, "Тестирование")}>
                                            <StatusText>Тестирование</StatusText>
                                        </StatusTheme>
                                        <StatusTheme
                                             onClick={() => handleCurrentStatusChange("Готово")}
                                             style={CardStyle("flex", currentStatus, "Готово")}>
                                            <StatusText>Готово</StatusText>
                                        </StatusTheme>
                                    </>
                                ) : (
                                    <CurrentStatusTheme>
                                        <StatusText>{currentStatus}</StatusText>
                                    </CurrentStatusTheme>
                                )}
                            </StatusThemes>
                        </PopBrowseStatus>
                        <PopBrowseWrapper>
                            <PopBrowseForm
                                action="#"
                            >
                                <FormBrowseBlock>
                                    <SubTitleLabel htmlFor="textArea01">
                                        Описание задачи
                                    </SubTitleLabel>
                                    <FormTextareaPop
                                        className="form-browse__area"
                                        name="text"
                                        id="textArea01"
                                        readOnly={modifyCalendar}
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        style={{color: !modifyCalendar ? "" : "#94A6BE"}}/>
                                </FormBrowseBlock>
                            </PopBrowseForm>
                            <S.FormNewBlockCalc>
                                <S.FormLabel>Даты</S.FormLabel>
                                <Calendar
                                    mode="single"
                                    selected={selectedDate}
                                    onSelect={setSelectedDate}
                                    nonClickable={modifyCalendar}
                                />
                            </S.FormNewBlockCalc>
                        </PopBrowseWrapper>
                        {/*<div className="theme-down__categories theme-down">*/}
                        {/*    <p className="categories__p subttl">Категория</p>*/}
                        {/*    <div className="categories__theme _orange _active-category">*/}
                        {/*        <p className="_orange">Web Design</p>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <div className="pop-browse__btn-browse" style={{display: hideBlock}}>
                            <BtnGroup>
                                <PopBrowseBtnEdit onClick={handleModifyCard}>
                                    <PopBrowseLink to="#">Редактировать задачу</PopBrowseLink>
                                </PopBrowseBtnEdit>
                                <PopBrowseBtnEdit onClick={handleDelete}>
                                    <PopBrowseLink to={routesApp.MAIN}>Удалить задачу</PopBrowseLink>
                                </PopBrowseBtnEdit>
                            </BtnGroup>
                            <PopBrowseButton>
                                <PopBrowseLinkExit to={"/"}>Закрыть</PopBrowseLinkExit>
                            </PopBrowseButton>
                        </div>
                        <div className="pop-browse__btn-edit _hide" style={{display: modifyCard}}>
                            <div className="btn-group">
                                <button className="btn-edit__edit _btn-bg _hover01" onClick={handleSave}>
                                    <PopBrowseLink to="#">Сохранить</PopBrowseLink>
                                </button>
                                <button className="btn-edit__edit _btn-bor _hover03">
                                    <PopBrowseLink to={"/"}>Отменить</PopBrowseLink>
                                </button>
                                <button
                                    className="btn-edit__delete _btn-bor _hover03"
                                    id="btnDelete"
                                    onClick={handleDelete}
                                >
                                    <PopBrowseLink to={routesApp.MAIN}>Удалить задачу</PopBrowseLink>
                                </button>
                            </div>
                            <button className="btn-edit__close _btn-bg _hover01">
                                <PopBrowseLink to={"/"}>Закрыть</PopBrowseLink>
                            </button>
                        </div>
                    </div>
                </S.PopNewCardBlock>
            </S.PopNewCardContainer>
        </S.PopNewCardHUD>
    );
}

export default PopBrowse;