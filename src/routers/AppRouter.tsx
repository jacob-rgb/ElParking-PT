import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
  } from "react-router-dom";
import { InitPage } from "../pages/InitPage";
import { QuestionsPage } from "../pages/QuestionsPage";
import { ResultsPage } from "../pages/ResultsPage";

  
  export const AppRouter = () => {
      return (
          <BrowserRouter>
            <Routes>
              <Route path='/' element={< InitPage />} />
              <Route path='question' element={< QuestionsPage />} />
              <Route path='results' element={< ResultsPage />} />
              <Route path="*"  element={<Navigate to='/' />} />
            </Routes>
          </BrowserRouter>
      )
  }
  