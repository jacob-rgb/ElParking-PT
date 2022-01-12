import {randomizeArray, replaceSpecialCharacters } from '../../helpers/questions';

describe("Tests on questions.ts", () => {
    
    
    test("replaceSpecialCharacters('string') should replace the special characters", () => {
        const text:string = "&quot;Esto es un texto entre comillas&quot;";
        const replacedText:string = replaceSpecialCharacters(text);
        expect(replacedText).toBe("'Esto es un texto entre comillas'")
    });
    
    test("randomizeArray('array') should return a changed positions array", () => {
        const array = ['orange', "blue", "green", "red"];
        const randomizedArray = randomizeArray(array);
        expect(randomizedArray).not.toBe(array)
    })
})