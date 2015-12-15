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
		const {config} = this.props;

  		DataStore.listen(this.onChange);
    	DataActions.fetchJson(config.url);
	}

	render() {
		const {config} = this.props;
		let {items, view_item} = this.state;

		if(view_item !== null)
			return ( 
				<div className="inner">
					<div className="dtl-heading">
						<button className="backButton" onClick={this.handleBackClick}>{"<"} Back to list of videos</button>
					</div>
					<div className="dtl-body">
						<TubeItem itemData={items[view_item]} itemIndex={view_item} truncate={null} video={true} />
					</div>
				</div>
			)

		return ( 
			<div className="inner">
				<TubeList items={this.showItems()} config={config} />
            <div className="pagi">
     				{this.showPagination()}
     			</div>
     			<div className="clearFix"></div>
			</div>
		)
	}

	onChange() {
  		this.setState(DataStore.getState());
	}

	handleBackClick() {
		DataActions.viewItem(null);
	}

	showItems() {
		var {config} = this.props;
		var {items, current_page} = this.state;
		
		return items.slice(current_page * config.items_per_page, current_page * config.items_per_page + config.items_per_page)
	}

	showPagination() {
		var {config} = this.props;
		var {items, current_page} = this.state;
		var pages = Math.ceil(items.length / config.items_per_page);

		var listItems = [];

		for (var i=0; i < pages; i++){

			let className = (i == current_page) ? "selected" : "";
			let jsx = <li className={className} onClick={this.setCurrentPage.bind(this, i)}>{i+1}</li>;
 
	      listItems.push(jsx);
		}
      
		return (<ul>
					{listItems}
              </ul>
              )
	}

	setCurrentPage(index) {
		DataActions.setCurrentPage(index);
	}

}
