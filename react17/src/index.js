import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import BasicMap from './router';

const render = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BasicMap />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
if(!window.__MICRO_WEB__) {
    render()
}
export const bootstrap = () => {
    console.log('bootstrap')
}

export const mount = () => {
    render()
}

export const unmount = () => {
    console.log('unmount')
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
