import { refrescarPreguntas } from '../../actions/game'

describe("Tests on actions/game.tsx", () => {
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
        },
        {
            "category": "Geography",
            "type": "multiple",
            "difficulty": "easy",
            "question": "All of the following are classified as Finno-Ugric languages EXCEPT:",
            "correct_answer": "Samoyedic",
            "incorrect_answers": [
                "Hungarian",
                "Finnish",
                "Estonian"
            ]
        },
        {
            "category": "Entertainment: Video Games",
            "type": "multiple",
            "difficulty": "medium",
            "question": "In Terraria, which of the following items does the Martian Saucer mini-boss NOT drop?",
            "correct_answer": "Drill Containment Unit",
            "incorrect_answers": [
                "Anti-Gravity Hook",
                "Influx Waver",
                "Cosmic Car Key"
            ]
        }
    ]

    test("Should return and object", () => {
        const resp = refrescarPreguntas(questionsArray);
        expect(resp).toStrictEqual({
            type: '[questions] Refresh questions',
            payload: [...questionsArray]
        })
    })
})