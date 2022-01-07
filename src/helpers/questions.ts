import { fetchSinToken } from "./fetch";


export const leerPreguntas = async ():Promise<any> => {
    try {
        const resp:any = await fetchSinToken('/api.php?amount=10');
        const questions = await resp.json();
        return questions
    } catch (error: any) {
        console.log(error);
        throw new Error(error);
    }
}

export const randomizeArray = (array:any[]): any[] => {
    return array.sort(function() {return Math.random() - 0.5});
}

export const replaceSpecialCharacters = (text:string):string => {
    let finalText = text;
    const regexps = [
        {re: /&quot;/gi, replaceFor:"'"},
        {re: /&#039;/gi, replaceFor:"'"},
        {re: /&amp;/gi, replaceFor:"&"},
        {re: /&deg;/gi, replaceFor:"º"},
        {re: /&ldquo;/gi, replaceFor:'"'},
        {re: /&rdquo/gi, replaceFor:'"'},
        {re: /&hellip;/gi, replaceFor:"..."},

    ]

   regexps.forEach((regex) => {
       finalText = finalText.replace(regex.re, regex.replaceFor);
   })

    return finalText;
}