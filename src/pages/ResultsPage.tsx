import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { ResultsComponent } from "../components/ResultsComponent";
import { useGame } from "../hooks/useGame";
import { ButtonsBox, MainCont, MyButton, Title, Title2 } from "../styled/styledComponents"

export const ResultsPage = () => {

    const { answers, questions , score } = useSelector((state:any) => state.game);
    const  { handleStartGame } = useGame(questions, score);
    const navigate = useNavigate();
    
    return (
        <MainCont mY={50}>
            <Title>YOUR RESULTS</Title>
            <Title2>You got { score.points } out of { score.nQuestions } questions right</Title2>
            <Title2>Your success rate is {score.points * 100 / score.nQuestions }%</Title2>
            <ResultsComponent resultsList={answers} />
            <ButtonsBox>
                <MyButton large onClick={handleStartGame} >Play Again</MyButton>
                <MyButton large onClick={() => navigate('/')} >Go Home</MyButton>
            </ButtonsBox>
        </MainCont>
    )
}
