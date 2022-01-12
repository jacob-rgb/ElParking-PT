import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGame } from "../hooks/useGame";
import { MainCont, MyButton, RuletaInit, Subtitle, Title } from "../styled/styledComponents";
import imgRuleta from '../assets/ruleta.png';
import { useSelector } from "react-redux";

export const InitPage = () => {

    const navigate = useNavigate();

    const { questions, score } = useSelector((state:any) => state.game);

    const { handleStartGame, isLoading } = useGame(questions, score);

    useEffect(() => {
        if(localStorage.getItem('gameStatus') && localStorage.getItem('lastView')) {
            navigate(`${localStorage.getItem('lastView')}`);
        } else {
            localStorage.removeItem('answers');
            localStorage.removeItem('questions');
            localStorage.removeItem('gamePoints');
        }
    }, [])
    
    return (
        <MainCont alignCenter>
            <Title> TRIVIDABO </Title>
            <RuletaInit animated={isLoading ? true : false} src={imgRuleta} alt="roto" />
            <Subtitle> Welcome to trividabo number quiz !</Subtitle>
            <MyButton id="start-btn" onClick={handleStartGame}>Start</MyButton>
        </MainCont>
    )
}
