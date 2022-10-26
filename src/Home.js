import { useState } from "react";

const Home = () => {
    const [name, setName] = useState('Mario')
    const [age, setAge] = useState(25);

    const handleClick =(e)=>{
        console.log('hello, ninjas',e);
        setName('Luigi');
        setAge('30');
    }
    const handleClickAgain=(name,e)=>{
        console.log('Hello  hello'+name, e.target);
    }
    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <p>{ name } is {age} years old.</p> <br></br>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e)=>handleClickAgain('Dinesh', e)}>Click me Again</button>
        </div>
     );
}
 
export default Home;