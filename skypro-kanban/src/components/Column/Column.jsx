import Card from "../Card/Card";
import * as S from "./Column.styled.js";

const Column = ({title, cardList}) => {
    return (
        <S.MainColumn>
            <S.ColumnTitle>
                <S.ColumnContent>{title}</S.ColumnContent>
            </S.ColumnTitle>
            <S.ColumnCards>
                {cardList.map((card) => (
                    <Card key={card._id} {...card} />
                ))}
            </S.ColumnCards>
        </S.MainColumn>
    );
};

export default Column;