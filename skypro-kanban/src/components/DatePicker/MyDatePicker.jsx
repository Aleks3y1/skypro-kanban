import {useState} from "react";

import {DayPicker} from "react-day-picker";
import "react-day-picker/dist/style.css";
import {ru} from "date-fns/locale/ru";

const MyDatePicker = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    return (
        <>
            <DayPicker locale={ru} mode="single" selected={selectedDate} onSelect={setSelectedDate}/>
            {selectedDate === null ? <p className="dayPickerSub">Выберите срок исполнения.</p> :
                <p className="dayPickerSub">Срок исполнения: {selectedDate.toLocaleDateString()}</p>}
        </>
    );
}

export default MyDatePicker;