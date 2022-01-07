import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addAnswer, refrescarPreguntas, resetAnswers } from "../actions/questions";
import { leerPreguntas } from "../helpers/questions";

export const useGame = () => {

    const { questions } = useSelector((state:any) => state.questions);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const currentQuestionRef:any = useRef();

    const [answersList, setAnswersList]:any = useState([]);
    const [selectedAnswer, setSelectedAnswer]:any = useState('');
    const [counter, setCounter] = useState(30);
    const [isLoading, setIsLoading] = useState(false);


    const handleStartGame = async () => {
        setIsLoading(true);
        try {
            const { results } = await leerPreguntas();
            const questions = results.map((question:any, index:number) => ({...question, id: index}));
            if(!results || !questions) return window.alert('Ha habido un error a la hora de iniciar el juego');
            dispatch(refrescarPreguntas(questions));
            dispatch(resetAnswers({}));
            localStorage.removeItem('answers');
            localStorage.setItem('questions', JSON.stringify(questions));
            localStorage.setItem('gameStatus','playing');
            setIsLoading(false);
            navigate(`/question/0`);
            
        } catch (error:any) {
            console.log(error);
            navigate(`/`);
            throw new Error(error);
        }
    }

    const handleAnswerClick = (e:any) => {
        setSelectedAnswer(e.target.innerText);
    }

    const handleAnswerSubmit = (id:string | undefined) => {
        const finalAnswer = {...currentQuestionRef.current, selectedAnswer: selectedAnswer !== '' ? selectedAnswer : 'Skipped'};
        const latestAnswers = JSON.parse(localStorage.getItem('answers')!) || [];
        localStorage.setItem('answers', JSON.stringify([...latestAnswers, finalAnswer]) );
        dispatch(addAnswer(finalAnswer));
        setSelectedAnswer('');
        setCounter(30);
        navigate(`/question/${Number(id) + 1}`);
    }

    const handleCountDown = (id:string | undefined, ref:any) => {
        if(counter < 1) {
            clearInterval(ref);
            handleAnswerSubmit(id);
        } else {
            setCounter((prev) => {
                if(prev < 1) {
                   setTimeout(() => {
                    handleAnswerSubmit(id);
                   }, 0);
                }
                return prev - 1;
            });
        }
    }

    return {
        questions,
        answersList,
        setAnswersList,
        selectedAnswer,
        setSelectedAnswer,
        counter,
        currentQuestionRef,
        isLoading,
        setCounter,
        handleStartGame,
        handleAnswerClick,
        handleAnswerSubmit,
        handleCountDown
   }
}