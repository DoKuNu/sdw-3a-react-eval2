import React from 'react';

export default class addProject extends React.Component {
  constructor(props) {
    super(props);
    this.titleChange = this.titleChange.bind(this);
	this.descriptionChange = this.descriptionChange.bind(this);
	this.creatorChange = this.creatorChange.bind(this);
	this.submitHandler = this.submitHandler.bind(this);
    this.state = {
  		title: '',
  		description: '',
  		creator: ''
  	}
  }

  titleChange = (e) => {
    this.setState({title: e.target.value});
  }

  descriptionChange = (e) => {
    this.setState({description: e.target.value});
  }

  creatorChange = (e) => {
    this.setState({creator: e.target.value});
  }

  submitHandler = (e) => {
    e.preventDefault();
    fetch('https://kickass-sdw-3a.herokuapp.com/api/project', {
	    method: 'POST',
	    headers: {
	        'Content-Type': 'application/json'
	    },
	    body: JSON.stringify({
	        title: this.state.title,
	        description: this.state.description,
	        _creator: this.state.creator,
	    })
	}).then(() => (response) => {
		console.log(response); 
	});
  }

  render() {
    return (
    	<div className="form">
	      <form onSubmit={this.submitHandler} >
	      	<h2>Add a project</h2>
	      	<div className='form-group'>
	      	  <label htmlFor='title'>Title</label>
	      	  <input
	      	    id='title'
	      	    type='text'
	      	    value={this.state.title}
	      	    onChange={this.titleChange}
	      	    className="form-control"
	      	  />
	      	</div>
	      	<div className='form-group'>
	      	  <label htmlFor='description'>Description</label>
	      	  <input
	      	    id='description'
	      	    type='text'
	      	    value={this.state.descriptioj}
	      	    onChange={this.descriptionChange}
	      	    className="form-control"
	      	  />
	      	</div>
	      	<div className='form-group'> 
	      	  <label htmlFor='creator'>Creator</label>
	      	  <input
	      	    id='creator'
	      	    type='text'
	      	    value={this.state.creator}
	      	    onChange={this.creatorChange}
	      	    className="form-control"
	      	  />
	      	</div>
	      	<button type='submit' value='submit' className="btn btn-primary" >Submit </button>
	      </form>
      	</div>
    );
  }
}