import React from 'react'

function Somme() {
    //hook defined
    const [input, setInput] = React.useState({
        num1: "",
        num2: "",
    });
    //handle input change 

    const handleInput = function(e){
        setInput({
            ...input, 
            [e.target.name]: e.target.value
        });
    };
    //suma function

    const suma = function(){
     
    }
    return (
        <div>
          <div>
            <input onChange={handleInput} name="num1" value={input.num1} type="text"></input>
            <input onChange={handleInput} name="num2" value={input.num2} type="text"></input>
            <button>+</button>
            <span>result</span>
        </div>  
        </div>
    )
}

export default Somme
