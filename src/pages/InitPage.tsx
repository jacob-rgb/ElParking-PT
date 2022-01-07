import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGame } from "../hooks/useGame";
import { MainCont, MyButton, Subtitle, Title } from "../styled/styledComponents";
import imgRuleta from '../assets/ruleta.png'

export const InitPage = () => {

    const navigate = useNavigate();

    const { handleStartGame } = useGame();

    useEffect(() => {
        if(localStorage.getItem('gameStatus') && localStorage.getItem('lastView')) {
            navigate(`${localStorage.getItem('lastView')}`);
        } else {
            localStorage.removeItem('answers');
            localStorage.removeItem('questions');
        }
    }, [])
    
    return (
        <MainCont alignCenter>
            <Title> TRIVIDABO </Title>
            <img className="imgRuleta" src={imgRuleta} alt="Ruleta" />
            <Subtitle> Welcome to trividabo number quiz !</Subtitle>
            <MyButton onClick={handleStartGame}>Start</MyButton>
        </MainCont>
    )
}
