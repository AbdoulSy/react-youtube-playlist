import React, {Component} from 'react';

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
                        <img src={itemData.snippet.thumbnails.high.url} />
                    </div>
                    <div className="content">
                        <div className="content-inner">
                            <h2>{itemData.snippet.title}</h2>
                            <h3>Published on {month[date.getMonth()]} {date.getDay()}, {date.getFullYear()}</h3>
                            <p>{this.truncateText(itemData.snippet.description)}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
	}

    truncateText(text) {
        return text.substring(0,300) + "...";
    }

}
