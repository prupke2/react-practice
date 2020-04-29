import React, {Component} from 'react';
import './Person.css';

const style = {
    color: "beige",
    '@media (minWidth: 500px)': {
        width: '450px'
    }
};

class Person extends Component {

    render() {
        return (
            <div>
                    <div className="{css.Person}" style={style}>
                        <p>I'm {this.props.name} and I am {this.props.age} years old!</p>
                        <input type="text" onChange={this.props.changed} 
                        value={this.props.name}/>
                        <button className="Button" onClick={this.props.clicked}>Delete</button>
                    </div>
            </div>
        )
    };
}

export default Person;