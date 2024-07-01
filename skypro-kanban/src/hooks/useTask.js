import {useContext} from "react";
import {TaskContext} from "../contexts/TaskContext.jsx";

export const useTask = () => {
    return useContext(TaskContext);
}