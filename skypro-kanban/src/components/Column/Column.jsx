import Card from "../Card/Card";
import {ColumnCards, ColumnContent, ColumnTitle, MainColumn} from "./Column.styled.js";

const Column = ({ title, cardList }) => {
  return (
    <MainColumn>
      <ColumnTitle>
        <ColumnContent>{title}</ColumnContent>
      </ColumnTitle>
      <ColumnCards>
        {cardList.map(({ id, theme, title, date }) => (
          <Card key={id} theme={theme} title={title} date={date} id={id} />
        ))}
      </ColumnCards>
    </MainColumn>
  );
};

export default Column;
