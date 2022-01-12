import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import {MemoryRouter } from 'react-router-dom';
import TestRenderer from 'react-test-renderer';
import { renderHook } from '@testing-library/react-hooks';

import '@testing-library/jest-dom';

import { useGame } from '../../hooks/useGame';
import { types } from '../../types/types';
import * as fetchModule from '../../helpers/fetch';


const questionsArray = [
    {
        "category": "Entertainment: Film",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Who starred as Bruce Wayne and Batman in Tim Burton&#039;s 1989 movie &quot;Batman&quot;?",
        "correct_answer": "Michael Keaton",
        "incorrect_answers": [
            "George Clooney",
            "Val Kilmer",
            "Adam West"
        ]
    }
]

const {act} = TestRenderer;

const middlewares = [ thunk ];
const mockStore = configureStore( middlewares );

const initState = {answers:[], questions:[], score:{points:0,nQuestions:10}};
let store = mockStore( initState );

const mockedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
   useNavigate: () => mockedNavigate,
 }));

Storage.prototype.setItem = jest.fn();
Storage.prototype.removeItem = jest.fn();

describe('Pruebas en useGame', () => {

    const wrapper:any = ({children}:any) => (<MemoryRouter><Provider store={store}>{children}</Provider></MemoryRouter>)
    
    const { result } = renderHook( () =>  useGame(questionsArray, {points:0, nQuestions:10}), { wrapper });

    const { currentQuestionRef ,counter, handleStartGame, isLoading, handleAnswerSubmit, answersList, selectedAnswer, setCounter } = result.current;

    let actions = store.getActions();

    beforeEach(()=> {
        store = mockStore( initState );
        jest.clearAllMocks();
    });
    
    test('startGame correct', async () => {

        await act(async() => {
            await handleStartGame();
        });

   fetchModule.fetchSinToken.prototype = jest.fn((url:string) => ({
            json() {
                return [
                    ...questionsArray
                ]
            }
        }));

        expect(actions[0].payload.length).toBe(10);
        expect(actions[1].type).toBe(types.resetAnswers);
        expect(actions[2].type).toBe(types.resetPoints);

        
        expect( localStorage.removeItem ).toHaveBeenCalledWith('gamePoints');
        expect( localStorage.removeItem ).toHaveBeenCalledWith('answers');  
        expect( localStorage.setItem ).toHaveBeenCalledTimes(2); 
        
        expect(isLoading).toBe(false);
        expect(mockedNavigate).toHaveBeenCalled(); 

    });

    test('handleAnswerSubmit Correct',  () => {

        act(() => {
              handleAnswerSubmit('3');
         })
         
         expect(actions[3].type).toBe(types.addPoint);
         expect(actions[4].type).toBe(types.addAnswer);
         expect(actions[4].payload).toStrictEqual({"selectedAnswer": "Skipped"});
        

         expect(localStorage.setItem).toHaveBeenCalledTimes(2);
         expect(mockedNavigate).toHaveBeenCalled(); 
    });

    test("useGame state is right", () => {
        
        expect(answersList).toBeDefined();
        expect(answersList).toStrictEqual([]);

        expect(selectedAnswer).toBeDefined();
        expect(selectedAnswer).toBe('');

        expect(counter).toBeDefined();
        expect(counter).toBe(30);

        expect(currentQuestionRef).toBeDefined();

    })

});