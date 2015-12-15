import React, {Component} from 'react';
import DataActions from '../flux/DataActions';
import DataStore from '../flux/DataStore';

export default class TubeList extends Component {

	constructor(props) {
 	  super(props);
 	  this.state = DataStore.getState();
 	  this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		const url = this.props.url;

  		DataStore.listen(this.onChange);
    	DataActions.fetchJson(url);
	}

	onChange() {
  		this.setState(DataStore.getState());
  		console.log(this.state.items);
	}

	render() {
        return ( 
        		<div>
        			<div className="pagination">
        				<ul>
        					<li>1</li>
        					<li>2</li>
        					<li>3</li>
        				</ul>
        			</div>
        		</div> 
        	)
	}

}
