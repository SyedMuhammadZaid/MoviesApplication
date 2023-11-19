import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from '../src/Store/store'
import { Provider } from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import Header from './Components/header/Header';
import Footer from './Components/footer/Footer';
import {QueryClient, QueryClientProvider} from 'react-query'


const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient();

root.render(
  <Provider store={store}>
    <BrowserRouter>
    <Header />
    <QueryClientProvider client={queryClient}>
       <App />
     </QueryClientProvider>
    <Footer />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
