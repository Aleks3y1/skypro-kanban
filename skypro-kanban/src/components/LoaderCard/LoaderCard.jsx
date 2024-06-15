import {LoaderContent, LoaderCrumbs, LoaderDate, LoaderStatus} from "../Loader/Loader.styled.jsx";
import {
    CardContentStyles,
    CardGroupStyles,
    CardItemStyles,
    CardsCardStyles,
} from "../Card/Card.styled.js";

const LoaderCard = () => {

    return (
        <CardItemStyles>
            <CardsCardStyles>
                <CardGroupStyles>
                    <LoaderStatus/>
                    <LoaderCrumbs/>
                </CardGroupStyles>
                <CardContentStyles>
                    <LoaderContent/>
                    <LoaderDate/>
                </CardContentStyles>
            </CardsCardStyles>
        </CardItemStyles>
    );
};

export default LoaderCard;
