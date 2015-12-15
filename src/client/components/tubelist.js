import React, {Component} from 'react';
import DataActions from '../flux/DataActions';

import TubeItem from './tubeitem';

export default class TubeList extends Component {

	render() {
		let {items} = this.props;

        return ( 
        		<div>
                    <div className="items">
        			{items.map(function(val, i, index) {
			             return <TubeItem itemData={val} itemIndex={i} key={i} truncate={300} />;
                    })}
                    </div>
        		</div> 
        	)
	}

}
