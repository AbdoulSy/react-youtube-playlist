import React from 'react';
import ReactDOM from 'react-dom';
import Html from './components/html';

var config = {
		url: "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails,status&maxResults=10&playlistId=PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ&key=AIzaSyCuv_16onZRx3qHDStC-FUp__A6si-fStw",
		truncate_limit: 300,
		items_per_page: 3
	}

var style = require("./less/style.less");

ReactDOM.render(
	<Html config={config} />
  , document.getElementById('root'));
