import React, {Component} from 'react';
import DataActions from '../flux/DataActions';
import DataStore from '../flux/DataStore';

import TubeList from './tubelist';
import TubeItem from './tubeitem';

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

	render() {
		let {items, view_item} = this.state;

		if(view_item !== null)
			return ( 
				<div>
					<div className="detail-heading">
						<button onClick={this.handleBackClick}>&lgt; Back to list of videos</button>
					</div>
					<div className="detail-body">
						<TubeItem itemData={items[view_item]} itemIndex={view_item} truncate={null} />
					</div>
				</div>
			)

		return ( 
			<div>
				<TubeList items={items} />
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

	onChange() {
  		this.setState(DataStore.getState());
	}

	handleBackClick() {
		DataActions.viewItem(null);
	}

}
