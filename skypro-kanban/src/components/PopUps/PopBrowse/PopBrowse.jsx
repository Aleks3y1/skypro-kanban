import {Link, useNavigate, useParams} from "react-router-dom";
import NotFound from "../../../pages/NotFound/NotFound.jsx";
import {useEffect, useState} from "react";
import {CardStyle} from "../../../lib/CardStyle.js";
import {useUser} from "../../../hooks/useUser.js";
import MyDatePicker from "../../DatePicker/MyDatePicker.jsx";
import * as S from "../PopNewCard/PopNewCard.styled.js";
import {useTask} from "../../../hooks/useTask.js";
import {getTodos} from "../../../api.js";
import {routesApp} from "../../../lib/RoutesApp.js";
import {FormTextareaPop} from "./TextAreaStyle.js";

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
        <div className="pop-browse" id="popBrowse">
            <div className="pop-browse__container">
                <div className="pop-browse__block">
                    <div className="pop-browse__content">
                        <div className="pop-browse__top-block">
                            <h3 className="pop-browse__ttl">{task.title}</h3>
                            <div className="categories__theme theme-top _orange _active-category">
                                <p className="_orange">{task.topic}</p>
                            </div>
                        </div>
                        <div className="pop-browse__status status">
                            <p className="status__p subttl">Статус</p>
                            <div className="status__themes">
                                {modifyCard === "flex" ? (
                                    <>
                                        <div className="status__theme"
                                             onClick={() => handleCurrentStatusChange("Без статуса")}
                                             style={CardStyle("flex", currentStatus, "Без статуса")}>
                                            <p>Без статуса</p>
                                        </div>
                                        <div className="status__theme"
                                             onClick={() => handleCurrentStatusChange("Нужно сделать")}
                                             style={CardStyle("flex", currentStatus, "Нужно сделать")}>
                                            <p>Нужно сделать</p>
                                        </div>
                                        <div className="status__theme"
                                             onClick={() => handleCurrentStatusChange("В работе")}
                                             style={CardStyle("flex", currentStatus, "В работе")}>
                                            <p>В работе</p>
                                        </div>
                                        <div className="status__theme"
                                             onClick={() => handleCurrentStatusChange("Тестирование")}
                                             style={CardStyle("flex", currentStatus, "Тестирование")}>
                                            <p>Тестирование</p>
                                        </div>
                                        <div className="status__theme"
                                             onClick={() => handleCurrentStatusChange("Готово")}
                                             style={CardStyle("flex", currentStatus, "Готово")}>
                                            <p>Готово</p>
                                        </div>
                                    </>
                                ) : (
                                    <div className="status__theme _gray">
                                        <p>{currentStatus}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="pop-browse__wrap">
                            <form
                                className="pop-browse__form form-browse"
                                id="formBrowseCard"
                                action="#"
                            >
                                <div className="form-browse__block">
                                    <label htmlFor="textArea01" className="subttl">
                                        Описание задачи
                                    </label>
                                    <FormTextareaPop
                                        className="form-browse__area"
                                        name="text"
                                        id="textArea01"
                                        readOnly={modifyCalendar}
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        style={{color: !modifyCalendar ? "" : "#94A6BE"}}/>
                                </div>
                            </form>
                            <S.FormNewBlockCalc>
                                <S.FormLabel>Даты</S.FormLabel>
                                <MyDatePicker
                                    mode="single"
                                    selected={selectedDate}
                                    onSelect={setSelectedDate}
                                    nonClickable={modifyCalendar}
                                />
                            </S.FormNewBlockCalc>
                        </div>
                        <div className="theme-down__categories theme-down">
                            <p className="categories__p subttl">Категория</p>
                            <div className="categories__theme _orange _active-category">
                                <p className="_orange">Web Design</p>
                            </div>
                        </div>
                        <div className="pop-browse__btn-browse" style={{display: hideBlock}}>
                            <div className="btn-group">
                                <button className="btn-browse__edit _btn-bor _hover03" onClick={handleModifyCard}>
                                    <a href="#">Редактировать задачу</a>
                                </button>
                                <button className="btn-browse__delete _btn-bor _hover03" onClick={handleDelete}>
                                    <a href="#">Удалить задачу</a>
                                </button>
                            </div>
                            <button className="btn-browse__close _btn-bg _hover01">
                                <Link to={"/"}>Закрыть</Link>
                            </button>
                        </div>
                        <div className="pop-browse__btn-edit _hide" style={{display: modifyCard}}>
                            <div className="btn-group">
                                <button className="btn-edit__edit _btn-bg _hover01" onClick={handleSave}>
                                    <a href="#">Сохранить</a>
                                </button>
                                <button className="btn-edit__edit _btn-bor _hover03">
                                    <Link to={"/"}>Отменить</Link>
                                </button>
                                <button
                                    className="btn-edit__delete _btn-bor _hover03"
                                    id="btnDelete"
                                    onClick={handleDelete}
                                >
                                    <a href="#">Удалить задачу</a>
                                </button>
                            </div>
                            <button className="btn-edit__close _btn-bg _hover01">
                                <Link to={"/"}>Закрыть</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PopBrowse;