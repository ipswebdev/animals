
import { useState } from 'react';
import Animal from './Animal';

function generateRandomAnimal(){
    let animals = ['cat', 'dog', 'horse', 'bird', 'cow', 'gator'];
    return animals[Math.floor(Math.random()*animals.length)];
}

function App(){
    
    const [animals, setAnimals] = useState([]);
    let handleClick = () => {
        let updatedAnimals = [...animals,  generateRandomAnimal()]
        setAnimals(updatedAnimals);
    }
    const renderedAnimals =  animals.map((a,i) => <Animal name={a} key={i} />);
    return (  
        <div>
            <button onClick={handleClick}>Add Animal</button>
            {renderedAnimals}
        </div>
    );
}

export default App;