import React, {Component} from 'react';
import DataActions from '../flux/DataActions';
import DataStore from '../flux/DataStore';

export default class TubeList extends Component {

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
