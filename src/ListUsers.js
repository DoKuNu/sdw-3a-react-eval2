import React, { Component } from 'react';

export default class ListUsers extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    handleClick(e) {
        e.preventDefault();
        if(this.state.name !== '' && this.state.age !== '' && this.state.type !== '') {
            var newUser = {
                name: this.state.name,
                age: this.state.age,
                type: this.state.type
            };

            fetch('https://kickass-sdw-3a.herokuapp.com/api/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    age: this.state.age,
                    name: this.state.name,
                    type: this.state.type,
                })
            }).then(() => (response) => {
            console.log(response); 
        });
            this.props.componentDidMount();

            console.log(newUser);
        }
    }

    render() {
        return(
            <table className="table">
                <thead className="thead-inverse">
                <tr>
                    <th>Nom</th>
                    <th>Age</th>
                    <th>Type</th>
                </tr>
                </thead>
                <tbody>
                    {
                        this.props.listUsers.map( item => (
                        <tr  key={item._id}>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.type}</td>
                            <td><button onClick={this.handleClick} type="submit" className="bt®n btn-primary">Delete</button></td>
                        </tr>
                        ))
                    }
                
                </tbody>
            </table>
        );
    };
}