import React, {Component} from 'react';
import DataActions from '../flux/DataActions';
import DataStore from '../flux/DataStore';

import TubeList from './tubelist';

export default class Html extends Component {

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
	}

	render() {
		let {items} = this.state;

		return ( 
			<div>
				<TubeList items={items} />
			</div>
		)
	}

}
