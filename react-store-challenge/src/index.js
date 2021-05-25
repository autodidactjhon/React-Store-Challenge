import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose} from 'redux';
import App from './routes/App';
import reducer from './reducers';

const initialState = {
  cart: [],
  products: [
    {
      "id": "1",
      "image": "https://m.media-amazon.com/images/I/61Sb8iz-kXL._AC_SX569._SX._UX._SY._UY_.jpg",
      "title": "Camiseta",
      "price": 25,
      "description": "bla bla bla bla bla"
    },
    {
      "id": "3",
      "image": "https://m.media-amazon.com/images/I/61EBjty+ewL._AC_UL320_.jpg",
      "title": "Mug",
      "price": 10,
      "description": "bla bla bla bla bla"
    },
    {
      "id": "4",
      "image": "https://m.media-amazon.com/images/I/81+jNVOUsJL._AC_UL320_.jpg",
      "title": "Headphones",
      "price": 4,
      "description": "bla bla bla bla bla"
    },
    {
      "id": "5",
      "image": "https://images-na.ssl-images-amazon.com/images/I/A1EftZPnfCL._AC_UX679_.jpg",
      "title": "Bag",
      "price": 2,
      "description": "bla bla bla bla bla"
    },
    {
      "id": "6",
      "image": "https://images-na.ssl-images-amazon.com/images/I/71Ha06XS-VL._AC_SY500_.jpg",
      "title": "Ipad",
      "price": 2,
      "description": "bla bla bla bla bla"
    },
    {
      "id": "7",
      "image": "https://images-na.ssl-images-amazon.com/images/I/61ow8CKswNL._AC_UX385_.jpg",
      "title": "Hoodie",
      "price": 35,
      "description": "bla bla bla bla bla"
    },

  ]
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 
const store = createStore(reducer, initialState, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);