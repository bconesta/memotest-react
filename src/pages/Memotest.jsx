import React from 'react'
import CardTable from '../components/CardTable';
import { useEffect, useState } from 'react';

import F1 from '../img/fichas/1.jpg'
import F2 from '../img/fichas/2.jpg'
import F3 from '../img/fichas/3.jpg'
import F4 from '../img/fichas/4.jpg'
import F5 from '../img/fichas/5.jpg'
import F6 from '../img/fichas/6.jpg'
import F7 from '../img/fichas/7.jpg'
import F8 from '../img/fichas/8.jpg'
import Back from '../img/fichas/back.png'

export default function Memotest(props) {
    const imgs = [F1, F2, F3, F4, F5, F6, F7, F8]
    const[timer, setTimer] = useState(props.time);
    const[points, setPoints] = useState(0);
    const[end, setEnd] = useState();
    
    const ratio = window.innerWidth/window.innerHeight
    const styles = {
        width : ratio >= 1 ? ((window.innerWidth - window.innerHeight*0.7)/2) : "100%",
        display : ratio >= 1 ? "" : "block",
        textAlign : "center"
    }

    function handlePoints(p){
        setPoints(points + p);
    }

    function handleTimer(){
        setTimer(prevTimer => prevTimer-1)
    }

    useEffect(()=>{
        setInterval(handleTimer, 1000);
    }, [])

    useEffect(()=>{
        if(points === 16 || timer <= 0){
            clearInterval(1);
            clearInterval(2);
            setEnd(true);
            setTimeout(()=>{
                props.handlePoints(points);
                props.handlePage(2);
            }, 2000)
        }
    }, [timer])

    return (
        <div className='page memotest'>
            <div className="timer" style={styles}>
                <h1 className="time">Time</h1>
                <h1>{timer>=0 ? timer : 0}</h1>
            </div>
            <div className="table-container">
                <CardTable 
                    size={window.innerWidth < 600 ? 85 : 70} 
                    space={2} 
                    columns={4} rows={4}
                    order={props.order}
                    imgs={imgs}
                    back={Back}
                    handlePoints={handlePoints}
                    end={end}
                />
            </div>
            
            <div className="timer" style={styles}>
                <h1 className="points">Points</h1>
                <h1>{points}</h1>
            </div>
        </div>
    )
}
