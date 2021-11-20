import React from 'react';
import AccurateInterval from 'accurate-interval';

class Timer extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render(){
        return (
            <div className="d-flex justify-content-center">
                <h1>25 + 5 Clock</h1>
                <br/>
            </div>
        );
    }
}

export default Timer;