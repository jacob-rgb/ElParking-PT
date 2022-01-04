import { useEffect } from "react"
import { fetchSinToken } from "../helpers/fetch"

export const InitPage = () => {
    useEffect(() => {
        leerPreguntas()
    }, [])

    const leerPreguntas = async () => {
        try {
            const resp:any = await fetchSinToken('/api.php?amount=50');
            const questions = await resp.json();
            console.log(questions.results);
            
        } catch (error: any) {
            console.log(error);
            throw new Error(error);
        }
    }
    
    return (
        <div>
            <h1>Init Page</h1>
        </div>
    )
}
