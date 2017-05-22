import React from 'react';

export default class projects extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  render() {
    return (
      <div className="data-panel">
	  	  {
	        this.props.listProjects.map( item => (
	        <ul className="list-group">
	            <li className="list-group-item"> Title : {item.title}</li>
	            <li className="list-group-item">Description : {item.description}</li>
	            <li className="list-group-item">Creator : {item._creator}</li>
	        </ul>
	        ))
	      }
      </div>
    );
  }
}