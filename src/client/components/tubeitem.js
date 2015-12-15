import React, {Component} from 'react';
import DataActions from '../flux/DataActions';

export default class TubeItem extends Component {

	render() {
        const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const {itemData} = this.props;
        console.log(itemData);

        var date = new Date( itemData.snippet.publishedAt );

        return ( 
            <div>
                <div className="item-inner">
                    <div className="image">
                        <img src={itemData.snippet.thumbnails.high.url} onClick={this.clickHandler.bind(this)} />
                    </div>
                    <div className="content">
                        <div className="content-inner">
                            <h2 onClick={this.clickHandler.bind(this)}>{itemData.snippet.title}</h2>
                            <h3>Published on {month[date.getMonth()]} {date.getDay()}, {date.getFullYear()}</h3>
                            <p>{this.truncateText(itemData.snippet.description)}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
	}

    clickHandler(e) {
        DataActions.viewItem(this.props.itemIndex);
    }

    truncateText(text) {
        var trunc = this.props.truncate;

        if(trunc === null || !text.length)
            return text;

        return text.substring(0, trunc) + "...";
    }

}
