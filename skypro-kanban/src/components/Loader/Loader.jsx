import * as S from "../Column/Column.styled.js";
import LoaderCard from "../LoaderCard/LoaderCard.jsx";

const Loader = ({ title, cardList }) => {
    return (
        <S.MainColumn>
            <S.ColumnTitle>
                <S.ColumnContent>{title}</S.ColumnContent>
            </S.ColumnTitle>
            <S.ColumnCards>
                {cardList.map((card, index) => (
                    <LoaderCard key={index}/>
                ))}
            </S.ColumnCards>
        </S.MainColumn>
    );
};

export default Loader;
