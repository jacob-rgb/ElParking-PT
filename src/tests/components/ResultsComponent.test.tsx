import {ResultsComponent} from '../../components/ResultsComponent';
import { shallow, configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { render } from '@testing-library/react';

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

describe("test on <ResultsComponent />", () => {

    let tree;
    
    
    test('Should correctly display the component ',async () => {
        tree = render(< ResultsComponent resultsList={resultsArray} />);   
        expect(tree).toMatchSnapshot();
    });

    test('Icon on first answer is correct, so should be green', () => {
        tree = render(< ResultsComponent resultsList={resultsArray} />);
        const firstPColorStyle = tree.container.querySelector("p")?.style.color;
        expect(firstPColorStyle).toBe('green')
    });

    test('Icon on second answer is incorrect, so should be red', () => {
        tree = render(< ResultsComponent resultsList={resultsArray} />);
        const secondPColorStyle = tree.container.querySelectorAll("i");
        expect(secondPColorStyle[1].style.color).toBe('red');
    });

    test('With the property reverse, The list should be reversed', () => {
        tree = render(< ResultsComponent resultsList={resultsArray} reverse />);
        const fitsrPText = tree.container.querySelector("p span")?.innerHTML;      
        expect(fitsrPText).toMatch(/Hungarian/);
    })
})