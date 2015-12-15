import Alt from './alt';
import request from 'superagent';

class DataActions {

  fetchJson(url) { 
    request
    .get(url)
    .end((err, res) => {
    	this.setItems(res.body.items);
    });
  }

  setItems(data) {
    return data;
  }

  setCurrentPage(index) {
    return index;
  }

  viewItem(index) {
   return index;
  }
  
}

module.exports = Alt.createActions(DataActions);