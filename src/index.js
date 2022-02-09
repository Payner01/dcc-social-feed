import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from '@lyket/react';

ReactDOM.render(<App />, document.getElementById('root')
);

ReactDOM.render(
    <Provider apiKey="pt_24dd1faa7318ffb3fbbd38955f8a8e">
      <App />
    </Provider>,
    document.getElementById('root')
  );
