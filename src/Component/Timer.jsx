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
            <div className="d-flex justify-content-center align-items-center mt-5 flex-column w-100">
                <h1 className="mb-3">25 + 5 Clock</h1>
                <div className="d-flex justify-content-around w-50 mb-2">
                    <div className="d-flex flex-column align-items-center">
                        <h3 id="break-label">Break Length</h3>
                        <div className="d-flex">
                            <button id="break-decrement" className="btn btn-lg btn-primary btn-left">
                                <i class="fas fa-minus"></i>
                            </button>
                            <div className="break-length-time time-label bg-primary d-flex align-items-center">
                                <span id="break-length" className="px-1">5</span>
                            </div>
                            <button id="break-increment" className="btn btn-lg btn-primary btn-right">
                                <i class="fas fa-plus"></i>
                            </button>
                        </div>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                        <h3 id="session-label">Session Length</h3>
                        <div className="d-flex">
                            <button id="session-decrement" className="btn btn-lg btn-primary btn-left">
                                <i class="fas fa-minus"></i>
                            </button>
                            <div className="session-length-time time-label bg-primary d-flex align-items-center">
                                <span id="session-length" className="px-1">25</span>
                            </div>
                            <button id="session-increment" className="btn btn-lg btn-primary btn-right">
                                <i class="fas fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="card text-white bg-secondary mb-3 w-25 mt-4 text-center">
                    <div class="card-header">
                        <h2 id="timer-label">Session</h2>
                    </div>
                    <div class="card-body">
                        <p class="card-title time" id="time-left">25:00</p>
                    </div>
                </div>
                <div className="d-flex">
                    <button id="start_stop" className="btn btn-lg btn-success btn-left">
                        <i class="fas fa-play"></i>
                    </button>
                    <button id="reset" className="btn btn-lg btn-warning btn-right">
                        <i class="fas fa-undo"></i>
                    </button>
                </div>
            </div>
        );
    }
}

export default Timer;