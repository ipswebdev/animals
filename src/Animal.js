import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import dog from './svg/dog.svg';
import horse from './svg/horse.svg';
import cow from './svg/cow.svg';
import gator from './svg/gator.svg';
import heart from './svg/heart.svg';
import { useState } from 'react';

let svgMap = {
    bird,
    cow,
    cat,
    dog,
    horse,
    gator,
    heart
}

function Animal(props){
    const [heartSize, updateSize] = useState(0);
    const increaseHeart = () => {
        if(heartSize < 25){
            updateSize(heartSize + 5);
        }else{
            updateSize(25);
        }
        
    }
    return (
        <div onClick={increaseHeart}>
            <img alt="animal" src={svgMap[props.name]} height={30} width={30}/>
            <img alt="heart" src={svgMap['heart']} height={heartSize} width={heartSize}/>
        </div>
    );
}

export default Animal;