import { createContext, useEffect, useState } from "react";
import {changeTask, getTodos, postTodos, deleteTask, getTaskById} from "../api.js";
import { useUser } from "../hooks/useUser.js";
import { routesApp } from "../lib/RoutesApp.js";
import { useNavigate } from "react-router-dom";

export const TaskContext = createContext(null);

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const { userData } = useUser();
    const navigate = useNavigate();
    const token = userData && userData.token;

    useEffect(() => {
        const fetchTasks = async () => {
            if (!token) return;
            try {
                const todos = await getTodos(token);
                setTasks(todos.tasks || []);
            } catch (error) {
                console.error("Error fetching tasks:", error);
            }
        };

        fetchTasks();
    }, [token]);

    const onAddTask = async ({ event, newCardTitle, newCardTopic, newCardDescription, selectedDate }) => {
        event.preventDefault();
        if (!selectedDate) {
            alert('Дата не выбрана!');
            return;
        }
        const newCard = {
            title: newCardTitle.current.value,
            topic: newCardTopic,
            status: "Без статуса",
            description: newCardDescription.current.value,
            date: selectedDate.toISOString(),
        };

        try {
            if (newCard.title && newCard.description && newCard.date) {
                const newTodos = await postTodos(token, newCard);
                setTasks(newTodos.tasks);
                navigate(routesApp.MAIN);
            } else {
                alert('Заполните все поля!');
            }
        } catch (error) {
            console.error(error);
        }
    };

    const editTask = async (task) => {
        try {
            const updatedTasks = await changeTask({
                title: task.title,
                topic: task.topic,
                status: task.status,
                description: task.description,
                date: task.date,
                _id: task._id,
                token: token,
            });
            setTasks(updatedTasks.tasks);
        } catch (error) {
            console.error("Error editing task:", error);
        }
    };

    const removeTask = async (id) => {
        try {
            const updatedTasks = await deleteTask(token, id);
            setTasks(updatedTasks.tasks);
        } catch (error) {
            console.error("Error deleting task:", error);
        }
    };

    const foundTask = async (userData, id) => {
        try {
            const result = await getTaskById(userData.token, id);
            return result;
        } catch (error) {
            console.error("Error getTask:", error);
        }
    }

    return (
        <TaskContext.Provider value={{ tasks, setTasks, onAddTask, editTask, removeTask, foundTask }}>
            {children}
        </TaskContext.Provider>
    );
};