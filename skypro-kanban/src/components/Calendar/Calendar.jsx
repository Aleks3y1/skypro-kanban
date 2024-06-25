import {DayPicker} from "react-day-picker";
import "../../DayPickerStyle.css"
import {ru} from "date-fns/locale/ru";
import {format} from "date-fns";
import styled from "styled-components";
import {CalendarSub} from "./Calendar.styled.js";

const NonClickableDayPicker = styled.div`
    pointer-events: none;
`;

const Calendar = ({selected, onSelect, nonClickable}) => {
    const PickerComponent = nonClickable ? NonClickableDayPicker : 'div';

    return (
        <>
            <PickerComponent>
                <DayPicker locale={ru} mode="single" selected={selected} onSelect={onSelect}/>
            </PickerComponent>
            {selected === null ? (
                <CalendarSub>Выберите срок исполнения.</CalendarSub>
            ) : (
                <CalendarSub>Срок исполнения: {format(selected, 'dd.MM.yyyy')}</CalendarSub>
            )}
        </>
    );
};

export default Calendar;
