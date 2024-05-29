import { useState } from 'react';

function Cronometro () {
    const TEMPO_TOTAL = 30;
    let [tempoRestante, setTempoRestante] = useState(TEMPO_TOTAL)
    const startTimer = () => {
        setTimeout(() => {
            if (tempoRestante > 0) {
                setTempoRestante(tempoRestante -= 1);
            }
        }, 1000)
    }

    const formataTempo = (time:any) => {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60 as any;
        if (seconds < 10) {
            seconds = `0${seconds}`;
        }

        return `${minutes}:${seconds}`;
    }

    const calculaFracao = () => {
        return tempoRestante / TEMPO_TOTAL;
    }

    startTimer()
    return(
        <div className="w-52 h-52">            
            <span id="base-timer-label" className="absolute w-36 h-36 flex items-center justify-center text-yellow-400 text-2xl">
                {formataTempo(tempoRestante)}
            </span>
        </div>
    )
}

export default Cronometro