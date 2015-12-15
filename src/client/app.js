import React from 'react';
import ReactDOM from 'react-dom';
import TubeList from './componentes/tubelist';

ReactDOM.render(
  <TubeList url="https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails,status&maxResults=10&playlistId=PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ&key=AIzaSyCuv_16onZRx3qHDStC-FUp__A6si-fStw" />
  , document.getElementById('root'));
