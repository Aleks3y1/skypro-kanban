import Card from "../Card/Card";
import {ColumnContent, ColumnTitle} from "./Column.styled.js";

const Column = ({ title, cardList }) => {
  return (
    <div className="main__column column">
      <ColumnTitle>
        <ColumnContent>{title}</ColumnContent>
      </ColumnTitle>
      <div className="cards">
        {cardList.map(({ id, theme, title, date }) => (
          <Card key={id} theme={theme} title={title} date={date} />
        ))}
      </div>
    </div>
  );
};

export default Column;
