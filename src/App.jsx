import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';

class App extends Component{
    constructor(props){
        super(props);
        const date = new Date();
        this.state = {
            deadline: 'December 25, ' + date.getFullYear(),
            newDeadline: ''
        }
    }

    changeDeadline(){
        this.setState({ deadline: this.state.newDeadline });
    }

    render(){
        return(
            <div className="App">
                <div className="App-title" >Countdown to {this.state.deadline}</div>
                <Clock 
                    deadline={this.state.deadline}
                />
                <div>
                    <input type="text" placeholder="new date" onChange={event => this.setState({newDeadline: event.target.value})} />
                    <button onClick={() => this.changeDeadline()} >Submit</button> {/* Funcion anonima "() =>" para que se ejecute solo 1 vez y evitar loops */}
                </div>
            </div>
        )
    }
}

export default App;