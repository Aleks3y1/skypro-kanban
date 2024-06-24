import {DayPicker} from "react-day-picker";
import "../../DayPickerStyle.css"
import {ru} from "date-fns/locale/ru";
import {format} from "date-fns";
import styled from "styled-components";

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
            <p className="dayPickerSub">Выберите срок исполнения.</p>
        ) : (
            <p className="dayPickerSub">Срок исполнения: {format(selected, 'dd.MM.yyyy')}</p>
        )}
      </>
  );
};

export default Calendar;
