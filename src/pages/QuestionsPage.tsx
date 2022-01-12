import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { ResultsComponent } from "../components/ResultsComponent";
import { randomizeArray, replaceSpecialCharacters } from "../helpers/questions";
import { useGame } from "../hooks/useGame";
import { Answer, AnswersBox, ButtonsBox, MainCont, MyButton, ProgressBar, ProgressBarStatus, Subtitle, Timer, TimerNumber, TimerStatus, Title, Title2 } from "../styled/styledComponents";

export const QuestionsPage = () => {

    const { answers, questions, score } = useSelector((state:any) => state.game);

    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation(); 
    const intervalRef:any = useRef(); 

    const {answersList,setAnswersList,selectedAnswer, counter, currentQuestionRef, handleAnswerClick, handleAnswerSubmit, handleCountDown} = useGame(questions, score);

    useEffect(() => {
        if(Number(id) > 9 ) {
            window.alert('juego acabado, ver resultados');
            localStorage.removeItem('gameStatus')
            localStorage.removeItem('lastView');
            return navigate('/results');
        }
        localStorage.setItem('lastView', location.pathname);
        const [question] = questions.filter((quest:any) => {return quest.id === Number(id)});
        currentQuestionRef.current = question
        if(question?.incorrect_answers) {
            setAnswersList([...randomizeArray([...question.incorrect_answers, question.correct_answer])]);
        }
        intervalRef.current = setInterval(() => {handleCountDown(id, intervalRef)},1000)
        return () => {
            clearInterval(intervalRef.current)
        }
    }, [id, questions]);

    return (
        <MainCont mY>
            {
             currentQuestionRef.current?.question && 
                   (<>
                        <Title>TRIVIDABO</Title>
                        <Timer counter={counter}>
                            <TimerStatus  statusPercent={(30 - counter) * (100 / 30)}  />
                            <TimerNumber>{ counter }</TimerNumber>
                        </Timer>
                        <Title2>{`QUESTION ${Number(id) < 10 ? Number(id) + 1 : 10} OF 10`}</Title2>
                        < ProgressBar>
                            <ProgressBarStatus progressPercent={(Number(id) + 1) * 10} />
                        </ProgressBar>
                        <Subtitle>{replaceSpecialCharacters(currentQuestionRef.current.question)}</Subtitle>
                        <AnswersBox>
                            {
                                answersList.map((answer:any) => (
                                    <Answer 
                                      selected={ replaceSpecialCharacters(answer) === selectedAnswer ? true : false} 
                                      key={answer} 
                                      onClick={handleAnswerClick}
                                      >
                                          {replaceSpecialCharacters(answer)}
                                    </Answer>
                                ))
                            }
                        </AnswersBox>
                        <ButtonsBox>
                            <MyButton disabled={selectedAnswer === ''} large onClick={() => handleAnswerSubmit(id)} >Confirm</MyButton>
                            <MyButton large onClick={() => handleAnswerSubmit(id)} >Skip</MyButton>
                        </ButtonsBox>
                    </>)
            }
            {
                answers.length > 0 && (
                    <>
                        <Title2>LAST RESULTS: </Title2>
                        < ResultsComponent resultsList={answers} reverse/>
                    </>
                )
            }
        </MainCont>
    )
}
