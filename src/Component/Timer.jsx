import React from 'react';
import AccurateInterval from 'accurate-interval';

class Timer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            sessionLength : 25,
            breakLength : 5,
            timerOn : false,
            type : 'SESSION',
            timeInSecond : 1500,
        };
        this.incrementLength = this.incrementLength.bind(this);
        this.decrementLength = this.decrementLength.bind(this);
        this.clockify = this.clockify.bind(this);
    }

    incrementLength = (type) => {
        if(this.state.timerOn){
            return;
        }

        if(type === 'SESSION') {
            if(this.state.sessionLength === 60){
                return;
            }

            this.setState({
                sessionLength: this.state.sessionLength + 1,
                timeInSecond: this.state.timeInSecond + 60
            })
        } else {
            if(this.state.breakLength === 60){
                return;
            }

            this.setState({
                breakLength: this.state.breakLength + 1
            })
        }
    }

    decrementLength = (type) => {
        if(this.state.timerOn){
            return;
        }

        if(type === 'SESSION') {
            if(this.state.sessionLength === 1){
                return;
            }

            this.setState({
                sessionLength: this.state.sessionLength - 1,
                timeInSecond: this.state.timeInSecond - 60
            })
        } else {
            if(this.state.breakLength === 1){
                return;
            }

            this.setState({
                breakLength: this.state.breakLength - 1
            })
        }
    }

    resetState = () => {
        this.setState({
            sessionLength : 25,
            breakLength : 5,
            timerOn : false,
            type : 'SESSION',
            timeInSecond : 1500,
        });
    }

    clockify = () => {
        let minutes = Math.floor(this.state.timeInSecond / 60);
        let seconds = this.state.timeInSecond - minutes * 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        return minutes + ':' + seconds;
    }

    render(){
        return (
            <div className="d-flex justify-content-center align-items-center mt-5 flex-column w-100">
                <h1 className="mb-3">25 + 5 Clock</h1>
                <div className="d-flex justify-content-around w-50 mb-2">
                    <div className="d-flex flex-column align-items-center">
                        <h3 id="break-label">Break Length</h3>
                        <div className="d-flex">
                            <button onClick={() => this.decrementLength('BREAK')} id="break-decrement" className="btn btn-lg btn-primary btn-left">
                                <i className="fas fa-minus"></i>
                            </button>
                            <div className="break-length-time time-label bg-primary d-flex align-items-center">
                                <span id="break-length" className="px-1">{this.state.breakLength}</span>
                            </div>
                            <button onClick={() => this.incrementLength('BREAK')} id="break-increment" className="btn btn-lg btn-primary btn-right">
                                <i className="fas fa-plus"></i>
                            </button>
                        </div>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                        <h3 id="session-label">Session Length</h3>
                        <div className="d-flex">
                            <button onClick={() => this.decrementLength('SESSION')} id="session-decrement" className="btn btn-lg btn-primary btn-left">
                                <i className="fas fa-minus"></i>
                            </button>
                            <div className="session-length-time time-label bg-primary d-flex align-items-center">
                                <span id="session-length" className="px-1">{this.state.sessionLength}</span>
                            </div>
                            <button onClick={() => this.incrementLength('SESSION')} id="session-increment" className="btn btn-lg btn-primary btn-right">
                                <i className="fas fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card text-white bg-secondary mb-3 w-25 mt-4 text-center">
                    <div className="card-header">
                        <h2 id="timer-label">Session</h2>
                    </div>
                    <div className="card-body">
                        <p className="card-title time" id="time-left">{this.clockify()}</p>
                    </div>
                </div>
                <div className="d-flex">
                    <button id="start_stop" className="btn btn-lg btn-success btn-left">
                        <i className="fas fa-play"></i>
                    </button>
                    <button onClick={this.resetState} id="reset" className="btn btn-lg btn-warning btn-right">
                        <i className="fas fa-undo"></i>
                    </button>
                </div>
            </div>
        );
    }
}

export default Timer;