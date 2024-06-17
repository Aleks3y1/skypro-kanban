import Calendar from "../../Calendar/Calendar.jsx";
import {Link, useParams} from "react-router-dom";
import NotFound from "../../../pages/NotFound/NotFound.jsx";
import {getTodos} from "../../../api.js";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../../../contexts/UserContext.jsx";

const PopBrowse = () => {
    const {id} = useParams();
    const [card, setCard] = useState(null);
    const {userData} = useContext(UserContext);

    useEffect(() => {
        if (userData?.token) {
            getTodos(userData.token).then((todos) => {
                const foundCard = todos.tasks.find((task) => task._id === id);
                setCard(foundCard);
            }).catch((error) => {
                console.error(error);
            });
        }
    }, [id, userData?.token]);

    if (!card) {
        return <NotFound/>;
    }

    return (
        <div className="pop-browse" id="popBrowse">
            <div className="pop-browse__container">
                <div className="pop-browse__block">
                    <div className="pop-browse__content">
                        <div className="pop-browse__top-block">
                            <h3 className="pop-browse__ttl">{card.title}</h3>
                            <div className="categories__theme theme-top _orange _active-category">
                                <p className="_orange">{card.topic}</p>
                            </div>
                        </div>
                        <div className="pop-browse__status status">
                            <p className="status__p subttl">Статус</p>
                            <div className="status__themes">
                                <div className="status__theme _hide">
                                    <p>Без статуса</p>
                                </div>
                                <div className="status__theme _gray">
                                    <p className="_gray">{card.status}</p>
                                </div>
                                <div className="status__theme _hide">
                                    <p>В работе</p>
                                </div>
                                <div className="status__theme _hide">
                                    <p>Тестирование</p>
                                </div>
                                <div className="status__theme _hide">
                                    <p>Готово</p>
                                </div>
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
                                    <textarea
                                        className="form-browse__area"
                                        name="text"
                                        id="textArea01"
                                        readOnly
                                        placeholder={card.title}
                                    ></textarea>
                                </div>
                            </form>
                            <Calendar/>
                        </div>
                        <div className="theme-down__categories theme-down">
                            <p className="categories__p subttl">Категория</p>
                            <div className="categories__theme _orange _active-category">
                                <p className="_orange">Web Design</p>
                            </div>
                        </div>
                        <div className="pop-browse__btn-browse ">
                            <div className="btn-group">
                                <button className="btn-browse__edit _btn-bor _hover03">
                                    <a href="#">Редактировать задачу</a>
                                </button>
                                <button className="btn-browse__delete _btn-bor _hover03">
                                    <a href="#">Удалить задачу</a>
                                </button>
                            </div>
                            <button className="btn-browse__close _btn-bg _hover01">
                                <Link to={"/"}>Закрыть</Link>
                            </button>
                        </div>
                        <div className="pop-browse__btn-edit _hide">
                            <div className="btn-group">
                                <button className="btn-edit__edit _btn-bg _hover01">
                                    <a href="#">Сохранить</a>
                                </button>
                                <button className="btn-edit__edit _btn-bor _hover03">
                                    <a href="#">Отменить</a>
                                </button>
                                <button
                                    className="btn-edit__delete _btn-bor _hover03"
                                    id="btnDelete"
                                >
                                    <a href="#">Удалить задачу</a>
                                </button>
                            </div>
                            <button className="btn-edit__close _btn-bg _hover01">
                                <a href="#">Закрыть</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PopBrowse;