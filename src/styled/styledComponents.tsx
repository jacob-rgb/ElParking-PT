import styled, { css, keyframes } from 'styled-components';


const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg)
    }
`;

const fade = keyframes`
    from {
        opacity:0;
    }
    to {
        opacity: 1
    }
`;


export const AppContainer = styled.div`
    width:100%;
    min-height:100vh;
    background-color: #5a5690;
    display: flex;
    flex-direction:column;
    align-items: center;
`;

export const MainCont:any = styled.div`
    width: min(95%, 700px);
    height: 100%;
    min-height: 100vh;
    display:flex;
    flex-direction:column;
    gap: 20px;
    align-items:center;
    justify-content: ${({alignCenter}:any) => alignCenter ? 'center' : 'flex-start' };
    margin: ${({mY}:any) => mY ? '50px 0' : '0'};
    animation:${fade} .6s linear forwards;
`

export const Title = styled.h1`
   font-size:22px;
   text-align:center;
   color: white;
`;

export const Title2 = styled.span`
   font-size:19px;
   text-align:center;
   color: white;
`
export const Subtitle:any = styled.span`
    font-size:18px;
    text-align:center;
    color: white;
    min-height:60px;
    animation:${fade} .6s linear forwards;
`;

export const MyButton:any = styled.button`
    font-size:18px;
    text-align:center;
    color: white;
    width: ${({large}:any) => large === true ? '200px' : '120px'};
    padding: 10px 6px;
    outline:none;
    border: none;
    cursor:pointer;
    border-radius: 4px;
    background-color: #00bcd4;
    &:hover {
        background-color: lightgray;
    };
    &:disabled {
        background-color: lightgray;
        cursor: unset;
    }

`;

export const AnswersBox = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 180px);
    text-align:center;
    gap: 20px 140px;
    margin-top: 20px;
    min-height: 100px;
    margin-left:20px;
    animation:${fade} .6s linear forwards;
    @media (max-width:700px) {
        grid-template-columns: repeat(2, 120px);
        gap: 20px 80px;
    }
`;

export const Answer:any = styled.p`
    font-size: 18px;
    color: ${({selected}:any) => selected ? 'white' : 'gray'};
    cursor:pointer;
    position: relative;
    animation:${fade} .3s linear forwards;
    &:hover {
        color: white;
    }
    &:before {
        content:'';
        position: absolute;
        top:0px;
        left:0px;
        width:20px;
        height: 20px;
        border-radius: 100%;
        background-color: #00bcd4;
        border: ${({selected}: any) => selected ? '2px solid white' : 'none'};
        transform: translateX(-25px);
    };
`;

export const ButtonsBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin-top:20px;
    animation:${fade} .6s linear forwards;
`;

export const ResultsBox = styled.div`
    color: white;
`;

export const Result = styled.div`
    padding:15px 5px;
    text-align: center;
    border-bottom: 1px solid gray;
    display: flex;
    flex-direction:column;
    align-items: center;
    gap: 10px;
    animation:${fade} .6s linear forwards;
`;

export const RuletaInit:any = styled.img`
max-width: 200px;
animation: ${({animated}:any) => animated ? css`${rotate} .6s linear infinite` : 'none'};
`;

export const ProgressBar = styled.div`
    width: 80%;
    height: 8px;
    margin: 10px auto;
    background-color: lightgrey;
    border-radius: 40px;
`;

export const ProgressBarStatus: any = styled.div`
    width:${({progressPercent}:any) => css`${progressPercent}%`};
    height: 8px;
    background-color: green;
    border-radius: 40px;
    transition: all .4s ease;
`;

export const Timer:any = styled.div`
    position:relative;
    height:60px;
    width:60px;
    color: white;
    background-color: ${({counter}:any) => handleColor(counter)};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 200px;
    overflow:hidden;
    border:4px solid lightgrey;
    transition: all .4s ease;
`;

export const TimerStatus:any = styled.div`
    position:absolute;
    top:0px;
    left:0;
    height:100%;
    width:${({statusPercent = 0}:any) => css`${statusPercent}%`};
    color: white;
    background-color: #5a5690;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index:2;
    transition: all .3s ease;
`;

export const TimerNumber:any = styled.div`
    position:absolute;
    height:60px;
    width:60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 200px;
    z-index:9;
`;

const handleColor = (counterN:number): string => {
    if(counterN > 20) {
        return 'green'
    } else if(counterN < 20 && counterN > 10) {
        return '#FFCF45'
    }
    return 'red'
}


