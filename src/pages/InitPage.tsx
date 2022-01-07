import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGame } from "../hooks/useGame";
import { MainCont, MyButton, RuletaInit, Subtitle, Title } from "../styled/styledComponents";
import imgRuleta from '../assets/ruleta.png';

export const InitPage = () => {

    const navigate = useNavigate();

    const { handleStartGame, isLoading } = useGame();

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
            <RuletaInit animated={isLoading ? true : false} src={imgRuleta} alt="roto" />
            <Subtitle> Welcome to trividabo number quiz !</Subtitle>
            <MyButton onClick={handleStartGame}>Start</MyButton>
        </MainCont>
    )
}
