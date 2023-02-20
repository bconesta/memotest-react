import React, { useEffect, useState } from 'react'

export default function CardItem(props) {
    const time = 250;
    const[view, setView] = useState(false);
    const[disabled, setDisabled] = useState(false);
    const[found, setFound] = useState(false);
    const[element, setElement] = useState();

    const style = {
        gridColumn: props.col,
        gridRow: props.row
    }

    function showCard(e){
        setDisabled(true)
        setElement(e)
        props.handleCount(props.index)
        function ended(){
            e.target.style.rotate = "y 180deg"
        }
        setTimeout(()=>{
            setView(true)
        }, time/2)
        e.target.animate([
            { rotate: 'y '+0+'deg' },
            { rotate: 'y '+180+'deg' }
            ], {
            duration: time,
            easing: 'linear',
            iterations: 1,
            complete: ended()
            }
        );    
    }
    function hideCard(){
        function ended(){
            element.target.style.rotate = "rotate: y 180deg"
        }
        setTimeout(()=>{
            setView(false)
        }, time/2)
        setTimeout(()=>{setDisabled(false)},time)
        element.target.animate([
            { rotate: 'y '+180+'deg' },
            { rotate: 'y '+360+'deg' }
            ], {
            duration: time,
            easing: 'linear',
            iterations: 1,
            complete: ended()
            }
        );
    }

    useEffect(()=>{
        const doesExist = props.found ? props.found.split(",").includes(String(props.index)) : false
        if(doesExist && !found){
            setFound(true)
        }
        else if(!props.disabled && !found && view){
            hideCard()
        }
    }, [props.disabled, props.found])

    return (
        <button disabled={disabled || props.disabled} style={style} className="item" onClick={showCard} >
            <img src={props.src} alt="" style={view ? {display: "block", rotate : "y 180deg"} : {display: "none"}}/>
        </button>
    )
}
