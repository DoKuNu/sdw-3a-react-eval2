import React, { Component } from 'react';

export default class AddUsers extends Component {
    constructor(props) {
        super(props);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeAge = this.handleChangeAge.bind(this);
        this.handleChangeType = this.handleChangeType.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            name: '',
            age: '',
            type: ''
        }
    }

    handleChangeName(e) {
        this.setState({name: e.target.value});
    }
    handleChangeAge(e) {
        this.setState({age: e.target.value});
    }
    handleChangeType(e) {
        this.setState({type: e.target.value});
    }
    handleSubmit(e) {
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
            <form className="form-inline" onSubmit={this.handleSubmit}>
                <label className="sr-only" htmlFor="name">Nom</label>
                <input onChange={this.handleChangeName} type="text" value={this.state.name} className="form-control mb-2 mr-sm-2 mb-sm-0" id="name" placeholder="Name"/>

                <label className="sr-only" htmlFor="age">Age</label>
                <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                    <input onChange={this.handleChangeAge} value={this.state.age} type="text" className="form-control" id="age" placeholder="Age"/>
                </div>
                
                <label className="sr-only" htmlFor="type">Type</label>
                <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                    <input onChange={this.handleChangeType} value={this.state.type} type="text" className="form-control" id="type" placeholder="Race"/>
                </div>

                <button type="submit" className="bt®n btn-primary">Submit</button>
            </form>
        );
    };
}