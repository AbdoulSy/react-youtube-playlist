import Alt from './alt';

class DataActions {

  fetchJson() { 
    this.fetchJsonSuccess();
  }

  fetchJsonSuccess(data) {
    return data;
  }

  setPagination() {
    return ;
  }
  
}

module.exports = Alt.createActions(DataActions);