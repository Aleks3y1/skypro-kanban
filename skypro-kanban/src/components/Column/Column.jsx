import Card from "../Card/Card";
import {ColumnCards, ColumnContent, ColumnTitle, MainColumn} from "./Column.styled.js";

const Column = ({ title, cardList }) => {
  return (
    <MainColumn>
      <ColumnTitle>
        <ColumnContent>{title}</ColumnContent>
      </ColumnTitle>
      <ColumnCards>
        {cardList.map((card) => (
          <Card key={card._id} topic={card.topic} title={card.title} date={card.date} _id={card._id} />
        ))}
      </ColumnCards>
    </MainColumn>
  );
};

export default Column;
