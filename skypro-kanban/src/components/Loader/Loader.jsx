import {ColumnCards, ColumnContent, ColumnTitle, MainColumn} from "../Column/Column.styled.js";
import LoaderCard from "../LoaderCard/LoaderCard.jsx";

const Loader = ({ title, cardList }) => {
    return (
        <MainColumn>
            <ColumnTitle>
                <ColumnContent>{title}</ColumnContent>
            </ColumnTitle>
            <ColumnCards>
                {cardList.map((card, index) => (
                    <LoaderCard key={index}/>
                ))}
            </ColumnCards>
        </MainColumn>
    );
};

export default Loader;
