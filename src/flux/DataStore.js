import Alt from './alt';
import DataActions from './DataActions';

class DataStore {

  constructor() {
    this.bindActions(DataActions);
    this.items = [];
    this.current_page = 0;
  }

  onFetchJson() {
    this.items = [];
  }

  onFetchJsonSuccess(data) {
    this.domains = data;
  }

  onSetPagination(data) {
    this.current_page = data;
  }

}

module.exports = Alt.createStore(DataStore);