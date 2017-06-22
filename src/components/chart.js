import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'
/* We are using a component here since we do not need state instead we are being fed data as props, so instead
of using a class based component, we just use a component. We are also not using redux for the application state
so we will just have this as a component and not a container. This component will take an argument props when
its instantiated in weather_list, it'll be passed the temps and color*/

function average(data) {
    var length = data.length;
    var sum = 0;
    var average;
    for(var i=0;i<length;i++) {
        sum += data[i];
    } 
    return Math.round(average = sum / data.length);
 
}

export default (props) => {
    return (
        <div>
            <Sparklines height={120} width={180} data={props.data}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>{average(props.data)} {props.units}</div>
        </div>
    )
}