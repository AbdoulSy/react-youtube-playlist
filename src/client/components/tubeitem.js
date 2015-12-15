/* The component that shows the youtube item either in a list view or on the detail page. */

import React, {Component} from 'react';
import DataActions from '../flux/DataActions';

export default class TubeItem extends Component {

	render() {
        const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const {itemData} = this.props;
        
        var placeholder;
        var date = new Date( itemData.snippet.publishedAt );

        if(this.props.video) {
            placeholder = 
                <div className="video">
                    <iframe width="560" height="349" src={"http://www.youtube.com/embed/" + itemData.snippet.resourceId.videoId + "?rel=0&controls=1&hd=1"} frameborder="0" allowfullscreen></iframe>
                </div>
        } else
            placeholder = <img src={itemData.snippet.thumbnails.high.url} onClick={this.clickHandler.bind(this)} />;

        return ( 
            <div>
                <div className="item">
                    <div className="item-inner">
                        <div className="placeholder">
                            {placeholder}
                        </div>
                        <div className="content">
                            <div className="content-inner">
                                <h2 onClick={this.clickHandler.bind(this)}>{itemData.snippet.title}</h2>
                                <h3>Published on {month[date.getMonth()]} {date.getDay()}, {date.getFullYear()}</h3>
                                <p>{this.truncateText(itemData.snippet.description)}</p>
                            </div>
                        </div>
                        <div className="clearFix"></div>
                    </div>
                </div>
            </div>
        )
	}

    clickHandler(e) {
        DataActions.viewItem(this.props.itemData.keyIndex);
    }

    truncateText(text) {
        var trunc = this.props.truncate;

        if(trunc === null || !text.length)
            return text;

        return text.substring(0, trunc) + "...";
    }

}
