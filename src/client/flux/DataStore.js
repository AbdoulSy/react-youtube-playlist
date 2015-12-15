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
    this.items = data;
  }

  onSetPagination(data) {
    this.current_page = data;
  }

  onViewItem(data) {
    this.view_item = data;
  }

}

module.exports = Alt.createStore(DataStore);