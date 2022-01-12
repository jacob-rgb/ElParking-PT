import {QuestionsPage} from '../../pages/QuestionsPage';
import {configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { store } from '../../store/store';
import { useGame } from '../../hooks/useGame';

configure({ adapter: new Adapter() });

const resultsArray = [
    {
        id:0,
        category: "Entertainment: Film",
        selectedAnswer:"Michael Keaton",
        type: "multiple",
        difficulty: "easy",
        question: "Who starred as Bruce Wayne and Batman in Tim Burton&#039;s 1989 movie &quot;Batman&quot;?",
        correct_answer: "Michael Keaton",
        incorrect_answers: [
            "George Clooney",
            "Val Kilmer",
            "Adam West"
        ]
    },
    {
        id:1,
        category: "Geography",
        selectedAnswer:"Hungarian",
        type: "multiple",
        difficulty: "easy",
        question: "All of the following are classified as Finno-Ugric languages EXCEPT:",
        correct_answer: "Samoyedic",
        incorrect_answers: [
            "Hungarian",
            "Finnish",
            "Estonian"
        ]
    },
]

describe("Tests on <QuestionsPage />" , () => {
    let wrapper: any;

    test("Should match with the snapshot", () => {
        wrapper = render(<Provider store={store}><MemoryRouter><QuestionsPage /></MemoryRouter></Provider>);
        expect(wrapper).toMatchSnapshot();
    })
})