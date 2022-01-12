import {ResultsPage} from '../../pages/ResultsPage';
import {configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { store } from '../../store/store';
import { useGame } from '../../hooks/useGame';

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


configure({ adapter: new Adapter() });

const mockedNavigate = jest.fn();

jest.mock('react-router-dom', () => {
    const originalRouterDom = jest.requireActual('react-router-dom');
    return {
        __esModule: true,
        ...originalRouterDom,
        useNavigate: () => mockedNavigate
    };
});

const mockedDispatch = jest.fn();

jest.mock('react-redux', () => {
    const originalRouterDom = jest.requireActual('react-redux');
    return {
        __esModule: true,
        ...originalRouterDom,
        useDispatch: () => mockedDispatch
    };
});

const mockedRef = jest.fn();

jest.mock('react', () => {
    const originalRouterDom = jest.requireActual('react');
    return {
        __esModule: true,
        ...originalRouterDom,
        useRef: () => mockedRef
    };
});


describe("Tests on <ResultsPage />", () => {

    let wrapper: any;

    test("Should match with the snapshot", () => {
        wrapper = render(<Provider store={store}><MemoryRouter></MemoryRouter></Provider>);
        expect(wrapper).toMatchSnapshot();
    });

    test("Should begin the game when start-button is clicked", () => {
        wrapper = render(<Provider store={store}><ResultsPage /></Provider>);
        const { handleStartGame } = useGame(questionsArray,  {points:0, nQuestions:10});
        const startBtn = wrapper.container.querySelector("button");
    })


})