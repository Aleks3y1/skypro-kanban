import * as A from "../Loader/Loader.styled.js";
import * as S from "../Card/Card.styled.js";

const LoaderCard = () => {

    return (
        <S.CardItemStyles>
            <S.CardsCardStyles>
                <S.CardGroupStyles>
                    <A.LoaderStatus/>
                    <A.LoaderCrumbs/>
                </S.CardGroupStyles>
                <S.CardContentStyles>
                    <A.LoaderContent/>
                    <A.LoaderDate/>
                </S.CardContentStyles>
            </S.CardsCardStyles>
        </S.CardItemStyles>
    );
};

export default LoaderCard;
