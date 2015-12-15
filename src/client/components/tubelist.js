import React, {Component} from 'react';

import TubeItem from './tubeitem';

export default class TubeList extends Component {

	render() {
		let {items} = this.props;

        return ( 
        		<div>
                    <div className="items">
        			{items.map(function(val, i, index) {
			             return <TubeItem itemData={val} itemIndex={i} key={i} />;
                    })}
                    </div>
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
