import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
  } from "react-router-dom";
import { refrescarPreguntas, setAllAnswers } from "../actions/questions";
import { InitPage } from "../pages/InitPage";
import { QuestionsPage } from "../pages/QuestionsPage";
import { ResultsPage } from "../pages/ResultsPage";

  
  export const AppRouter = () => {

    const dispatch = useDispatch();

    useEffect(() => {
      if(localStorage.getItem('answers')) {
        dispatch(setAllAnswers(JSON.parse(localStorage.getItem('answers')!)));
    }
        if(localStorage.getItem('gameStatus') && localStorage.getItem('lastView')) {
          if(localStorage.getItem('questions')) {
              dispatch(refrescarPreguntas(JSON.parse(localStorage.getItem('questions')!)));
          }
        }
    }, [])
    
    
      return (
          <BrowserRouter>
            <Routes>
              <Route path='/' element={< InitPage />} />
              <Route path='question/:id' element={< QuestionsPage />} />
              <Route path='results' element={< ResultsPage />} />
              <Route path="*"  element={<Navigate to='/' />} />
            </Routes>
          </BrowserRouter>
      )
  }
  