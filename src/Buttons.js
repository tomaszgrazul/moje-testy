import { useState } from 'react';
import './Button.css';

const Buttons = (props) => {

    // const [value, setValue] = useState({
    //     color_red: 'red',
    //     color_green: 'green',
    //     color_blue: 'blue'
    // });

    // const [value, setValue] = useState(['red', 'green', 'blue']);

    return ( <div>
                <div 
                className="btn red" 
                onClick={() => {
                // console.log('value', value.color_red);
                // props.setButton(value.color_red);
                props.setButton('red');
                }}
            >Red</div>

                <div 
                className="btn green"
                onClick={() => {
                // console.log('value', value.color_green);
                // props.setButton(value.color_green);
                props.setButton('green');
                }}
                >Green</div>

                <div className="btn blue"
                onClick={() => {
                // console.log('value', value.color_blue);
                // props.setButton(value.color_blue);
                props.setButton('blue');
                }}
                >Blue</div>

            </div>
        );
}

export default Buttons;