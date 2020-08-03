import React, { Component } from 'react';

class Underscores extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numbers: undefined,
            results: undefined
        }

    }
    onChange = e => {
        e.preventDefault()
        this.setState({
            numbers: e.target.value
        })
    }

    returnUnderscores = () => {
     var {numbers} = this.state;
        var odds;
        var evens;
        var newArr = []
    
        for (var i = 0; i < numbers.length; i++) {
            if ((numbers[i] % 2) != 1) {
                evens = numbers[i] + "_";
                newArr.push(evens)
            }
            else {
                var odds = numbers[i] ;
                newArr.push(odds)
            }
        }
        this.setState({
            results: newArr
        })
        return newArr;
    }
    render() {
        const {results} = this.state;
        return (
            <div>
                <h2>Add Underscores to even numbers</h2>
                <input type="number" onChange={this.onChange}/>
                <button onClick={this.returnUnderscores}>Execute</button>
                <br/>
                <label >Results: </label>
                {results}
            </div>
        );
    }
}

Underscores.propTypes = {

};

export default Underscores;