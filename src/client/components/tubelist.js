/* The view for the list */

import React, {Component} from 'react';
import DataActions from '../flux/DataActions';

import TubeItem from './tubeitem';

export default class TubeList extends Component {

	render() {
		let {items} = this.props;
        let {config} = this.props;

        return ( 
        		<div className="youtubeList">
                    <h1>My YouTube playlist</h1>
                    <div className="items">
        			{items.map(function(val, i, index) {
			             return <TubeItem itemData={val} key={i} truncate={config.truncate_limit} />;
                    })}
                    </div>
        		</div> 
        	)
	}

}
