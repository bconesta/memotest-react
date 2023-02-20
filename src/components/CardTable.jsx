import React, { useEffect, useState } from 'react';
import CardItem from './CardItem';
import './Card.css';


export default function CardTable(props) {
    const ratio = window.innerWidth/window.innerHeight;
    const styles = {
        display : 'grid',
        width : ratio>=1 ? props.size + 'vh' : props.size + 'vw',
        gridTemplateColumns : 'repeat(' + props.columns + ', 1fr)',
        gridTemplateRows : 'repeat(' + props.rows + ', 1fr)',
        gridGap : ratio>=1 ? props.space + 'vh' : props.space + 'vw'
    } 

    const[disabled, setDisabled] = useState(false);
    const[count, setCount] = useState(0);
    const[found, setFound] = useState();

    function handleCount(index){
        if(count === index){
            //Sumar puntos?
            setFound(found ? (found +","+index) : String(index))
            setCount(0)
            props.handlePoints(2);
        }
        else if(count){
            setDisabled(true);
            setTimeout(()=>{
                setDisabled(false);
                setCount(0)
            },1000)
        }
        else{
            setCount(index)
        }
    }

    useEffect(()=>{
        if(props.end){
            setDisabled(true)
            setCount(0)
        }
    }, [props.end])

    return (
        <div style={styles}>
            {props.imgs.map((img)=>{
                const index = props.imgs.indexOf(img);
                const firstPos = props.order[index]+1;
                const secondPos = props.order[(props.order.length-1) - index]+1;
                return(
                <>
                <CardItem
                    index={index+1}
                    found={found}
                    key={firstPos}
                    disabled={disabled}
                    handleCount={handleCount}
                    row={Math.floor((firstPos-1)/props.rows)+1} 
                    col={firstPos%props.columns ? firstPos%props.columns : props.columns}
                    src={img} 
                    back={props.back}
                />
                <CardItem 
                    index={index+1}
                    found={found}
                    key={secondPos}
                    disabled={disabled}
                    handleCount={handleCount}
                    row={Math.floor((secondPos-1)/props.rows)+1} 
                    col={secondPos%props.columns ? secondPos%props.columns : props.columns}
                    src={img} 
                    back={props.back}
                />
                </>
                )
            })}
        </div>
    )
}
