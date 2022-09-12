import React from 'react';
import reportWebVitals from './reportWebVitals';
import store  from "./redux/redux-state";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {Provider} from "react-redux";



const root = ReactDOM.createRoot(document.getElementById('root'));
export let renderTree = ()=>{

    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                <App />
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
    );

}

renderTree(store.getState());
store.subscribe(()=>{
    let state = store.getState()
        renderTree(state)
})


reportWebVitals();
