import { replaceSpecialCharacters } from "../helpers/questions";
import { Result, ResultsBox, Subtitle } from "../styled/styledComponents";

interface Props {
    resultsList: any[],
    reverse?:boolean
}

export const ResultsComponent = ({resultsList, reverse = false}: Props) => {
    return (
      <ResultsBox>
          {
              resultsList.sort((a:any,b:any) => {return reverse ?  b.id - a.id : a.id - b.id}).map((answer:any) => (
                  <Result key={answer.question}>
                      <Subtitle>{replaceSpecialCharacters( answer?.question) }</Subtitle>
                      {
                          answer.correct_answer === answer.selectedAnswer 
                          ? (
                              <p className="aligned" style={{color:'green'}}><i style={{color:'green', fontSize:'24px'}} className='bx bxs-check-circle'></i> {replaceSpecialCharacters(answer.selectedAnswer)}</p>
                          )
                          : (
                              <>
                                <p className="aligned"><i style={{color:'red',fontSize:'24px'}} className='bx bxs-x-circle'></i>  <span style={{color:'red'}}> { replaceSpecialCharacters(answer.selectedAnswer)}</span></p>
                                <p className="aligned" style={{color:'gray'}}>Right answer was: { replaceSpecialCharacters(answer.correct_answer) }</p>
                              </>
                          )
                      }
                  </Result>
              ))
          }
      </ResultsBox>
    )
}
