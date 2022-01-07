import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { ResultsComponent } from "../components/ResultsComponent";
import { replaceSpecialCharacters } from "../helpers/questions"
import { useGame } from "../hooks/useGame";
import { ButtonsBox, MainCont, MyButton, Result, ResultsBox, Subtitle, Title } from "../styled/styledComponents"

export const ResultsPage = () => {

    const { answers } = useSelector((state:any) => state.questions);
    const  { handleStartGame } = useGame();
    const navigate = useNavigate();
    
    return (
        <MainCont mY={50}>
            <Title>YOUR RESULTS</Title>
            <ResultsComponent resultsList={answers} />
            <ButtonsBox>
                <MyButton large onClick={handleStartGame} >Play Again</MyButton>
                <MyButton large onClick={() => navigate('/')} >Go Home</MyButton>
            </ButtonsBox>
        </MainCont>
    )
}
