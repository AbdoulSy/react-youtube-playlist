/* Our stores will hold the fetched items from Youtube, current pagination, and viewed item */

import Alt from './alt';
import DataActions from './DataActions';

class DataStore {

  constructor() {
    this.bindActions(DataActions);
    this.items = [];
    this.current_page = 0;
    this.view_item = null;
  }

  onFetchJson() {
    this.items = [];
  }

  onSetItems(data) {
    for (var key in data)
        data[key]['keyIndex'] = key;
   
    this.items = data;
    
  }

  onSetCurrentPage(data) {
    this.current_page = data;
  }

  onViewItem(data) {
    this.view_item = data;
  }

}

module.exports = Alt.createStore(DataStore);