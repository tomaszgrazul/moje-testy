import { useState } from 'react';
import './Button.css';

const Button = (props) => {

    const [value, setValue] = useState(0);
    
    const changeColor = () => {
        value += 1;
        return ( 
            setValue(value)
        );
    }

    return (
        <div className="btn" onClick={changeColor}>Test

        </div>
    )
}

export default Button;