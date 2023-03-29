import { useState } from 'react';
import './Button.css';

const Button = (props) => {

    // const [value, setValue] = useState(props.initValue);
    const [value, setValue] = useState(0);
    // const changeValue = () => {
        
    //     console.log(value);
    //     return  (
    //         setValue(value + 1)
    //     )
        
    // }

    return (
        // <div className="btn" onClick={changeValue}>Test

        <div className="btn" onClick={() => {
            setValue(value + 1)
            console.log('value', value);
            props.setButton(value);
            }}>Test
 
        </div>
        
    )
}

export default Button;