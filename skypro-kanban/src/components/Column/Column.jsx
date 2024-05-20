import Card from "../Card/Card";

const Column = ({ title, cardList }) => {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        {cardList.map(({ id, theme, title, date }) => (
          <Card key={id} theme={theme} title={title} date={date} />
        ))}
      </div>
    </div>
  );
};

export default Column;
